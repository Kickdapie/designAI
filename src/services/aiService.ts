import { Example } from "../types/catalog";

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
      const error = await response.json().catch(() => ({ error: "Unknown error" }));
      throw new Error(`API error: ${error.error?.message || "Failed to get response"}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content?.trim() || "";
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
