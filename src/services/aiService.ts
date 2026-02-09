import { Example, ElementTrait, LayoutSpec, ViewportInfo, VisualDecompositionResult, DetectedDesignElement } from "../types/catalog";

/**
 * AI Service for intelligent design recommendations and semantic search
 * 
 * This service uses LLM APIs to:
 * - Understand user intent semantically (beyond keyword matching)
 * - Generate contextual summaries of search results
 * - Provide intelligent design recommendations
 * - Enhance search relevance through semantic understanding
 */

interface AIConfig {
  apiKey?: string;
  model?: string;
  enabled: boolean;
}

class AIService {
  private config: AIConfig = {
    enabled: false,
    model: "gpt-4o-mini", // Cost-effective model
  };

  /**
   * Initialize the AI service with API key
   */
  initialize(apiKey?: string): void {
    if (apiKey) {
      this.config.apiKey = apiKey;
      this.config.enabled = true;
    } else {
      // Try to get from environment or localStorage
      const storedKey = typeof window !== "undefined" 
        ? localStorage.getItem("openai_api_key") 
        : null;
      if (storedKey) {
        this.config.apiKey = storedKey;
        this.config.enabled = true;
      }
    }
  }

  /**
   * Check if AI is available and configured
   */
  isAvailable(): boolean {
    return this.config.enabled && !!this.config.apiKey;
  }

  /**
   * Enhance search results using AI semantic understanding
   * Falls back to original results if AI is unavailable
   */
  async enhanceSearchResults(
    query: string,
    results: Example[],
    allExamples: Example[]
  ): Promise<Example[]> {
    if (!this.isAvailable() || !query.trim()) {
      return results;
    }

    try {
      // Use AI to understand query intent and re-rank results
      const enhancedResults = await this.semanticRerank(query, results, allExamples);
      return enhancedResults;
    } catch (error) {
      console.warn("[AI Service] Semantic reranking failed, using original results:", error);
      return results;
    }
  }

  /**
   * Generate intelligent, contextual summary of search results
   */
  async generateSummary(query: string, results: Example[]): Promise<string> {
    if (!this.isAvailable()) {
      return this.fallbackSummary(query, results);
    }

    try {
      const summary = await this.callLLM(
        this.buildSummaryPrompt(query, results)
      );
      return summary || this.fallbackSummary(query, results);
    } catch (error) {
      console.warn("[AI Service] Summary generation failed, using fallback:", error);
      return this.fallbackSummary(query, results);
    }
  }

  /**
   * Generate design recommendations based on user query
   */
  async generateRecommendations(query: string, selectedExample?: Example): Promise<string> {
    if (!this.isAvailable()) {
      return "";
    }

    try {
      const recommendations = await this.callLLM(
        this.buildRecommendationPrompt(query, selectedExample)
      );
      return recommendations || "";
    } catch (error) {
      console.warn("[AI Service] Recommendation generation failed:", error);
      return "";
    }
  }

  /**
   * Reasoning & remix: GPT receives structured elements from UI detector (YOLO/Detectron2)
   * and narrates/suggests without doing extraction. Use when you have decomposition JSON.
   */
  async analyzeFromStructuredElements(decomposition: VisualDecompositionResult): Promise<{ analysis: string; error?: string }> {
    if (!this.isAvailable()) {
      return { analysis: "", error: "AI is not available" };
    }

    try {
      const analysis = await this.callLLM(
        this.buildStructuredAnalysisPrompt(decomposition)
      );
      if (analysis && analysis.trim()) {
        return { analysis: analysis.trim() };
      }
      return { analysis: "", error: "AI returned empty response" };
    } catch (error) {
      console.error("[AI Service] Structured analysis failed:", error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      return { analysis: "", error: errorMessage };
    }
  }

  /**
   * From YOLO output + source image, have GPT-4o Vision identify meaningful page sections
   * with actual text content that the user can choose to add to their canvas.
   * Falls back to text-only analysis if no source image is provided.
   */
  async extractActionableElements(
    decomposition: VisualDecompositionResult,
    sourceImageBase64?: string,
  ): Promise<{ elements: DetectedDesignElement[]; summary: string; error?: string }> {
    if (!this.isAvailable()) {
      return { elements: [], summary: "", error: "AI is not available" };
    }

    try {
      let response: string;

      if (sourceImageBase64) {
        // Use GPT-4o Vision — send the actual image for much better analysis
        response = await this.callLLMWithVision(
          this.buildVisionElementsPrompt(decomposition),
          sourceImageBase64,
        );
      } else {
        // Fallback: text-only with YOLO metadata
        response = await this.callLLM(
          this.buildActionableElementsPrompt(decomposition),
        );
      }

      if (!response || !response.trim()) {
        return { elements: [], summary: "", error: "AI returned empty response" };
      }
      return this.parseActionableElementsResponse(response, decomposition);
    } catch (error) {
      console.error("[AI Service] Actionable elements extraction failed:", error);
      return { elements: [], summary: "", error: error instanceof Error ? error.message : String(error) };
    }
  }

  /**
   * Analyze canvas content and provide design recommendations
   * Analyzes colors, typography, layout, and provides contextual suggestions
   */
  async analyzeCanvas(canvasData: {
    colors: string[];
    fonts: string[];
    shapeCount: number;
    textCount: number;
    textSamples?: string[];
    layoutInfo?: string;
  }): Promise<{ analysis: string; error?: string }> {
    if (!this.isAvailable()) {
      return { analysis: "", error: "AI is not available" };
    }

    try {
      const analysis = await this.callLLM(
        this.buildCanvasAnalysisPrompt(canvasData)
      );
      if (analysis && analysis.trim()) {
        return { analysis: analysis.trim() };
      } else {
        return { analysis: "", error: "AI returned empty response" };
      }
    } catch (error) {
      console.error("[AI Service] Canvas analysis failed:", error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      return { analysis: "", error: errorMessage };
    }
  }

  /**
   * Generate intelligent layout specs based on element descriptions
   * Uses AI to understand what the element represents and creates appropriate layouts
   */
  async generateIntelligentLayout(
    elementTraits: ElementTrait[],
    viewport: ViewportInfo,
    colors: string[],
    fonts: string[]
  ): Promise<LayoutSpec[] | null> {
    if (!this.isAvailable() || elementTraits.length === 0) {
      return null;
    }

    try {
      // Combine all element information
      const elementInfo = elementTraits.map(trait => ({
        label: trait.label,
        description: trait.description,
        layoutHints: trait.layoutHints || [],
        colors: trait.colors || [],
        fonts: trait.fonts || [],
      }));

      const prompt = this.buildLayoutGenerationPrompt(elementInfo, viewport, colors, fonts);
      const response = await this.callLLM(prompt);
      const layoutSpecs = this.parseLayoutSpecsResponse(response, viewport);
      
      return layoutSpecs.length > 0 ? layoutSpecs : null;
    } catch (error) {
      console.warn("[AI Service] Intelligent layout generation failed:", error);
      return null;
    }
  }

  /**
   * Use AI to semantically re-rank search results
   */
  private async semanticRerank(
    query: string,
    initialResults: Example[],
    allExamples: Example[]
  ): Promise<Example[]> {
    // For now, we'll use AI to score examples semantically
    // In a production system, you might use embeddings for better performance
    
    const prompt = this.buildRerankPrompt(query, initialResults.slice(0, 20));
    
    try {
      const response = await this.callLLM(prompt);
      // Parse AI response to get re-ranked order
      // For simplicity, we'll use the AI's understanding to adjust scores
      return this.parseRerankResponse(response, initialResults);
    } catch (error) {
      return initialResults;
    }
  }

  /**
   * Call the LLM API
   */
  private async callLLM(prompt: string): Promise<string> {
    if (!this.config.apiKey) {
      throw new Error("API key not configured");
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.config.apiKey}`,
      },
      body: JSON.stringify({
        model: this.config.model,
        messages: [
          {
            role: "system",
            content: "You are a helpful design assistant that provides clear, concise, and actionable design advice. Always respond in a friendly, professional tone.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      let errorMessage = "Unknown error";
      try {
        const errorData = await response.json();
        errorMessage = errorData.error?.message || errorData.error || `HTTP ${response.status}: ${response.statusText}`;
        console.error("[AI Service] API error details:", errorData);
      } catch (e) {
        errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      }
      throw new Error(`OpenAI API error: ${errorMessage}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content?.trim();
    
    if (!content) {
      console.warn("[AI Service] Empty response from API:", data);
      throw new Error("AI returned empty response");
    }
    
    return content;
  }

  /**
   * Call GPT-4o with vision (image + text prompt). Used for analyzing actual screenshots.
   */
  private async callLLMWithVision(prompt: string, imageBase64: string): Promise<string> {
    if (!this.config.apiKey) {
      throw new Error("API key not configured");
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.config.apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o", // Vision requires gpt-4o (not mini)
        messages: [
          {
            role: "system",
            content: "You are a design assistant that analyzes website screenshots. You identify meaningful page sections, read all visible text, describe layout and styling. Always respond with structured data as requested.",
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: prompt,
              },
              {
                type: "image_url",
                image_url: {
                  url: `data:image/png;base64,${imageBase64}`,
                  detail: "high",
                },
              },
            ],
          },
        ],
        temperature: 0.3,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      let errorMessage = "Unknown error";
      try {
        const errorData = await response.json();
        errorMessage = errorData.error?.message || errorData.error || `HTTP ${response.status}: ${response.statusText}`;
      } catch (e) {
        errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      }
      throw new Error(`OpenAI Vision API error: ${errorMessage}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content?.trim();
    if (!content) throw new Error("Vision API returned empty response");
    return content;
  }

  /**
   * Build prompt for generating search result summaries
   */
  private buildSummaryPrompt(query: string, results: Example[]): string {
    const examplesInfo = results.slice(0, 5).map((ex, idx) => 
      `${idx + 1}. ${ex.name}: ${ex.tagline || ex.description || ""} (Tags: ${ex.layoutTags.join(", ")})`
    ).join("\n");

    return `A user searched for design inspiration with the query: "${query}"

I found ${results.length} relevant design examples:
${examplesInfo}

Generate a brief, friendly summary (2-3 sentences) that:
1. Acknowledges their search query
2. Highlights what makes these examples relevant
3. Encourages them to explore the results

Keep it conversational and helpful, like a design mentor would speak.`;
  }

  /**
   * Build prompt for design recommendations
   */
  private buildRecommendationPrompt(query: string, selectedExample?: Example): string {
    let context = `User is looking for: "${query}"`;
    
    if (selectedExample) {
      context += `\n\nThey're currently viewing: ${selectedExample.name} - ${selectedExample.tagline || selectedExample.description}`;
      context += `\nLayout: ${selectedExample.layoutTags.join(", ")}`;
      context += `\nColors: ${selectedExample.palette.join(", ")}`;
    }

    return `${context}

Provide 2-3 specific, actionable design recommendations based on their query. Focus on:
- Layout and composition suggestions
- Color and typography choices
- Best practices for their use case

Keep it concise (3-4 sentences max) and practical.`;
  }

  /**
   * Build prompt for semantic re-ranking
   */
  private buildRerankPrompt(query: string, results: Example[]): string {
    const examplesList = results.map((ex, idx) => 
      `${idx + 1}. ${ex.name} - ${ex.tagline || ""} | Tags: ${ex.layoutTags.join(", ")}`
    ).join("\n");

    return `User query: "${query}"

Rank these design examples by relevance (most relevant first). Return only the numbers in order, separated by commas:

${examplesList}

Respond with just the numbers in order of relevance (e.g., "3, 1, 5, 2, 4").`;
  }

  /**
   * Parse AI re-ranking response
   */
  private parseRerankResponse(response: string, originalResults: Example[]): Example[] {
    // Extract numbers from response
    const numbers = response.match(/\d+/g)?.map(Number) || [];
    if (numbers.length === 0) {
      return originalResults;
    }

    // Re-order results based on AI ranking
    const reordered: Example[] = [];
    const used = new Set<number>();

    numbers.forEach((num) => {
      const idx = num - 1; // Convert to 0-based index
      if (idx >= 0 && idx < originalResults.length && !used.has(idx)) {
        reordered.push(originalResults[idx]);
        used.add(idx);
      }
    });

    // Add any remaining results that weren't in the AI's response
    originalResults.forEach((result, idx) => {
      if (!used.has(idx)) {
        reordered.push(result);
      }
    });

    return reordered;
  }

  /**
   * Build prompt for intelligent layout generation
   */
  private buildLayoutGenerationPrompt(
    elementInfo: Array<{ label: string; description: string; layoutHints: string[]; colors: string[]; fonts: string[] }>,
    viewport: ViewportInfo,
    availableColors: string[],
    availableFonts: string[]
  ): string {
    const elementDescriptions = elementInfo.map((el, idx) => 
      `Element ${idx + 1}: "${el.label}"
Description: ${el.description}
Layout hints: ${el.layoutHints.join(", ") || "none"}
Colors: ${el.colors.join(", ") || "none"}
Fonts: ${el.fonts.join(", ") || "none"}`
    ).join("\n\n");

    const centerX = Math.round(viewport.centerX);
    const centerY = Math.round(viewport.centerY);
    const width = Math.round(viewport.width * 0.8);
    const height = Math.round(viewport.height * 0.6);
    const startX = Math.round(centerX - width / 2);
    const startY = Math.round(centerY - height / 2);

    return `You are a design layout generator. Based on the element descriptions below, generate a JSON array of layout specifications.

Viewport: ${viewport.width}x${viewport.height}, center at (${centerX}, ${centerY})
Available area: ${width}x${height} starting at (${startX}, ${startY})
Available colors: ${availableColors.join(", ")}
Available fonts: ${availableFonts.join(", ")}

Elements to create:
${elementDescriptions}

Generate a JSON array of layout specs. Each spec should be:
{
  "type": "rectangle" | "text",
  "x": number (absolute position),
  "y": number (absolute position),
  "width": number,
  "height": number,
  "color": "#hex" (optional, for rectangles or text fill),
  "font": "font name" (optional, for text),
  "text": "content" (required for text)
}

Rules:
- Create layouts that match the element descriptions semantically
- Use meaningful text content (not generic "Headline" or "Content")
- Position elements appropriately based on layout hints
- Use available colors and fonts intelligently
- Return ONLY valid JSON array, no other text
- Keep shapes within the available area (${startX} to ${startX + width}, ${startY} to ${startY + height})

Example format:
[{"type":"text","x":100,"y":200,"width":400,"height":80,"text":"Welcome to Our Platform","color":"#1A1A1A","font":"Sans-serif"},{"type":"rectangle","x":100,"y":300,"width":400,"height":300,"color":"#E2E8F0"}]`;
  }

  /**
   * Parse AI response into LayoutSpec array
   */
  private parseLayoutSpecsResponse(response: string, viewport: ViewportInfo): LayoutSpec[] {
    try {
      // Try to extract JSON from response (might have markdown code blocks)
      let jsonStr = response.trim();
      
      // Remove markdown code blocks if present
      jsonStr = jsonStr.replace(/^```json\n?/i, "").replace(/^```\n?/i, "").replace(/\n?```$/i, "");
      
      // Find JSON array in response
      const jsonMatch = jsonStr.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        jsonStr = jsonMatch[0];
      }
      
      const parsed = JSON.parse(jsonStr);
      
      if (!Array.isArray(parsed)) {
        return [];
      }
      
      // Validate and normalize layout specs
      return parsed
        .filter((spec: any) => {
          return (
            spec &&
            typeof spec === "object" &&
            (spec.type === "rectangle" || spec.type === "text") &&
            typeof spec.x === "number" &&
            typeof spec.y === "number" &&
            typeof spec.width === "number" &&
            typeof spec.height === "number"
          );
        })
        .map((spec: any) => ({
          type: spec.type,
          x: Math.round(spec.x),
          y: Math.round(spec.y),
          width: Math.round(spec.width),
          height: Math.round(spec.height),
          color: spec.color,
          font: spec.font,
          text: spec.text,
        }))
        .filter((spec: LayoutSpec) => {
          // Ensure shapes are within reasonable bounds
          return spec.x >= 0 && spec.y >= 0 && spec.width > 0 && spec.height > 0;
        });
    } catch (error) {
      console.warn("[AI Service] Failed to parse layout specs:", error, response);
      return [];
    }
  }

  /**
   * Build prompt for GPT reasoning from structured UI elements (YOLO/Detectron2 output).
   * GPT narrates and suggests; it does not extract.
   */
  private buildStructuredAnalysisPrompt(decomposition: VisualDecompositionResult): string {
    const elements = decomposition.elements || [];
    const palette = decomposition.palette || [];

    const elementsText = elements
      .slice(0, 50)
      .map(
        (el) =>
          `- ${el.type}: bbox [${el.bbox.join(", ")}]` +
          (el.bg_color ? ` bg=${el.bg_color}` : "") +
          (el.text_color ? ` text_color=${el.text_color}` : "") +
          (el.font_size ? ` font_size=${el.font_size}` : "") +
          (el.text ? ` text="${(el.text || "").slice(0, 80)}"` : "")
      )
      .join("\n");

    return `You are a design mentor. A UI detector (YOLO/Detectron2) has already decomposed a design screenshot into structured elements. Your job is to reason and narrate—not to extract.

Structured elements from the detector:
${elementsText || "(none)"}
${palette.length > 0 ? `\nDetected palette: ${palette.join(", ")}` : ""}

Provide a brief analysis (3–4 sentences) that:
1. Observes what UI elements and layout are present (buttons, text blocks, colors, typography)
2. Identifies strengths and potential improvements
3. Suggests specific enhancements (e.g., contrast, hierarchy, spacing)
4. Offers actionable next steps for the designer

Be specific, constructive, and design-focused. Do not repeat raw data; interpret and advise.`;
  }

  /**
   * Build prompt that asks GPT to list individual design elements from YOLO output
   * as actionable items the user can choose to add to their canvas.
   */
  private buildActionableElementsPrompt(decomposition: VisualDecompositionResult): string {
    const elements = decomposition.elements || [];
    const palette = decomposition.palette || [];

    const elementsText = elements
      .slice(0, 50)
      .map(
        (el, i) =>
          `${i + 1}. type="${el.type}" bbox=[${el.bbox.join(",")}]` +
          (el.bg_color ? ` bg=${el.bg_color}` : "") +
          (el.text_color ? ` text_color=${el.text_color}` : "") +
          (el.font_size ? ` font_size=${el.font_size}` : "") +
          (el.text ? ` text="${(el.text || "").slice(0, 80)}"` : "")
      )
      .join("\n");

    return `You are a design assistant. A UI detector (YOLO) analyzed a website screenshot and found these elements:

${elementsText || "(none detected)"}
${palette.length > 0 ? `\nColor palette: ${palette.join(", ")}` : ""}

Your task:
1. Write a short 1-2 sentence summary of the overall design.
2. Then list each meaningful design element as a JSON array. Group tiny/duplicate detections into logical components.

Respond in EXACTLY this format (no extra text outside):
SUMMARY: <your 1-2 sentence summary>
ELEMENTS_JSON:
[
  {
    "label": "Primary CTA Button",
    "type": "button",
    "description": "Blue call-to-action button with white text",
    "width": 280,
    "height": 60,
    "bg_color": "#2563EB",
    "text_color": "#FFFFFF",
    "text": "Get Started",
    "font_size": "16px"
  }
]

Rules:
- Each element should be a meaningful, self-contained design component a user might want to add to their canvas.
- Merge overlapping detections into one logical element (e.g. icon+text = one nav item).
- "width" and "height" are the element dimensions in pixels from the bbox.
- Include bg_color, text_color, text, font_size only when detected or reasonably inferable.
- Maximum 15 elements. Skip tiny decorative items.`;
  }

  /**
   * Parse GPT response into DetectedDesignElement[] + summary.
   */
  private parseActionableElementsResponse(
    response: string,
    decomposition: VisualDecompositionResult,
  ): { elements: DetectedDesignElement[]; summary: string; error?: string } {
    let summary = "";
    let elements: DetectedDesignElement[] = [];

    // Build a lookup of crop data from the original YOLO decomposition
    const yoloElements = decomposition.elements || [];

    const attachCrop = (el: DetectedDesignElement, index: number): DetectedDesignElement => {
      // Match by index first (GPT elements correspond roughly to YOLO order)
      if (index < yoloElements.length && yoloElements[index].crop_base64) {
        el.crop_base64 = yoloElements[index].crop_base64;
      } else {
        // Try matching by type + similar bbox size
        const match = yoloElements.find(
          (y) => y.crop_base64 && y.type === el.type && Math.abs(y.bbox[2] - el.width) < 50
        );
        if (match) {
          el.crop_base64 = match.crop_base64;
        }
      }
      return el;
    };

    // Extract summary
    const summaryMatch = response.match(/SUMMARY:\s*(.+?)(?=\nELEMENTS_JSON:|\n\[)/s);
    if (summaryMatch) {
      summary = summaryMatch[1].trim();
    }

    // Extract JSON
    const jsonMatch = response.match(/ELEMENTS_JSON:\s*(\[[\s\S]*\])/);
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[1]);
        if (Array.isArray(parsed)) {
          elements = parsed.map((el: any, i: number) => attachCrop({
            id: `detected-${i}-${Date.now()}`,
            label: el.label || `Element ${i + 1}`,
            type: el.type || "unknown",
            description: el.description || "",
            width: el.width || 100,
            height: el.height || 50,
            bg_color: el.bg_color,
            text_color: el.text_color,
            text: el.text,
            font_size: el.font_size,
          }, i));
        }
      } catch (e) {
        console.warn("[AI Service] Failed to parse actionable elements JSON:", e);
      }
    }

    // If JSON parse failed, try to extract any JSON array from the response
    if (elements.length === 0) {
      const fallbackJson = response.match(/\[[\s\S]*\]/);
      if (fallbackJson) {
        try {
          const parsed = JSON.parse(fallbackJson[0]);
          if (Array.isArray(parsed)) {
            elements = parsed.map((el: any, i: number) => attachCrop({
              id: `detected-${i}-${Date.now()}`,
              label: el.label || `Element ${i + 1}`,
              type: el.type || "unknown",
              description: el.description || "",
              width: el.width || 100,
              height: el.height || 50,
              bg_color: el.bg_color,
              text_color: el.text_color,
              text: el.text,
              font_size: el.font_size,
            }, i));
          }
        } catch (e) {
          // give up parsing
        }
      }
    }

    if (!summary && elements.length === 0) {
      // Entire response is probably plain text
      summary = response.trim();
    }

    return { elements, summary };
  }

  /**
   * Build prompt for GPT-4o Vision — it can see the actual image, read text, understand layout.
   * Much better than text-only YOLO metadata.
   */
  private buildVisionElementsPrompt(decomposition: VisualDecompositionResult): string {
    const yoloCount = (decomposition.elements || []).length;
    const palette = decomposition.palette || [];

    return `You are analyzing a website screenshot. A YOLO model detected ${yoloCount} UI elements in this image.
${palette.length > 0 ? `Detected color palette: ${palette.join(", ")}` : ""}

Your task: Identify the **meaningful page sections** visible in this screenshot. For each section, extract the ACTUAL text content you can read from the image.

Think in terms of page sections a designer would want to reuse:
- Navigation bar (with actual menu items)
- Hero section (with actual heading, subheading, CTA button text)
- Features/services grid
- Testimonials
- Footer
- Cards, sidebars, forms, etc.

Respond in EXACTLY this format:
SUMMARY: <1-2 sentence description of the overall page design>
ELEMENTS_JSON:
[
  {
    "label": "Hero Section",
    "type": "hero",
    "description": "Dark background hero with portrait photo, heading, subtext, and CTA buttons",
    "width": 1200,
    "height": 600,
    "bg_color": "#1A1A2E",
    "text_color": "#FFFFFF",
    "text": "I am Jonathan Doe\\nI'm Jonathan, professional web developer with long time experience in this field.\\nHire me | My Services",
    "font_size": "48px"
  },
  {
    "label": "Navigation Bar",
    "type": "navigation",
    "description": "Horizontal nav with logo and menu links",
    "width": 1200,
    "height": 60,
    "bg_color": "#16213E",
    "text_color": "#FFFFFF",
    "text": "amike | Home | About | Services | Work | Portfolio | Blog | Contact",
    "font_size": "14px"
  }
]

IMPORTANT RULES:
- READ the actual text visible in the image — headings, paragraphs, button labels, nav items. Include it in the "text" field.
- Use "\\n" to separate lines within one section (heading vs subtext vs button).
- "width" and "height" should approximate the section's size as seen in the screenshot.
- "bg_color" should be the dominant background color of that section.
- "text_color" should be the primary text color.
- Focus on 3-8 major sections, not individual buttons or icons.
- The "description" should explain the visual design (layout, imagery, style).
- Maximum 10 sections.`;
  }

  /**
   * Build prompt for canvas analysis
   */
  private buildCanvasAnalysisPrompt(canvasData: {
    colors: string[];
    fonts: string[];
    shapeCount: number;
    textCount: number;
    textSamples?: string[];
    layoutInfo?: string;
  }): string {
    // Handle empty canvas case
    if (canvasData.shapeCount === 0) {
      return `A user has an empty canvas and wants design advice. Provide encouraging, actionable suggestions for getting started with their design project. Keep it brief (2-3 sentences) and friendly.`;
    }

    const colorList = canvasData.colors.length > 0 
      ? canvasData.colors.join(", ")
      : "No colors detected";
    
    const fontList = canvasData.fonts.length > 0
      ? canvasData.fonts.join(", ")
      : "No fonts detected";
    
    const textInfo = canvasData.textSamples && canvasData.textSamples.length > 0
      ? `\nText samples: ${canvasData.textSamples.slice(0, 5).join("; ")}`
      : "";
    
    const layoutInfo = canvasData.layoutInfo
      ? `\nLayout context: ${canvasData.layoutInfo}`
      : "";

    // Build context about what's on the canvas
    let contextNotes = "";
    if (canvasData.colors.length === 0 && canvasData.shapeCount > 0) {
      contextNotes += "\nNote: Shapes are present but no colors were detected. They may be using default colors or fills.";
    }
    if (canvasData.textCount > 0 && canvasData.fonts.length === 0) {
      contextNotes += "\nNote: Text elements are present but font information wasn't extracted.";
    }

    return `Analyze this design canvas and provide specific, actionable recommendations:

Canvas Content:
- Colors used: ${colorList}
- Fonts used: ${fontList}
- Shapes: ${canvasData.shapeCount}
- Text elements: ${canvasData.textCount}${textInfo}${layoutInfo}${contextNotes}

Provide a brief analysis (3-4 sentences) that:
1. Observes the current design (color palette, typography, composition)
2. Identifies strengths and potential improvements
3. Suggests specific enhancements (e.g., "Your palette is monochromatic - consider adding an accent color like #FF6B6B for CTAs" or "You're using 4 different fonts - consider consolidating to 2 for better consistency")
4. Offers actionable next steps

Be specific, constructive, and design-focused. Keep it concise and friendly. If the canvas is minimal, provide encouraging suggestions for building it out.`;
  }

  /**
   * Fallback summary when AI is unavailable
   */
  private fallbackSummary(query: string, results: Example[]): string {
    if (!results.length) {
      return `I couldn't find a strong match for "${query}". Try adding the page type or mood you're going for.`;
    }

    const highlight = results
      .slice(0, 3)
      .map((entry) => entry.name)
      .join(", ");

    if (!query.trim()) {
      return `Here are ${results.length} inspiration examples to get you started. Spotlight: ${highlight}.`;
    }

    return `Here are ${results.length} directions inspired by "${query}". Spotlight: ${highlight}. Pick one to collect traits or refine your prompt.`;
  }
}

export const aiService = new AIService();
