import type {
  Ellipse,
  Path,
  Penpot,
  Rectangle,
  Shape,
  Text,
} from "@penpot/plugin-types";
import {
  DEFAULT_RESULTS,
  EXAMPLE_DATASET,
} from "./src/catalog/examples";
import { scoreExamples } from "./src/catalog/search";
import { aiService } from "./src/services/aiService";
import type {
  ApplyTraitsMessage,
  CanvasAnalysisResponse,
  CanvasDataForAnalysis,
  ElementTrait,
  Example,
  LayoutTrait,
  PaletteTrait,
  PluginMessage,
  ResizeWindowMessage,
  TypographyTrait,
  ViewportInfo,
  LayoutSpec,
} from "./src/types/catalog";
import { parseLayoutHints } from "./src/utils/layoutParser";
import { generateLayoutSpecs } from "./src/utils/layoutGenerator";

declare const penpot: Penpot;

const UI_DIMENSIONS = { width: 1300, height: 900 };
const MINIMIZED_DIMENSIONS = { width: 400, height: 300 };

penpot.ui.open("Design Discovery Assistant", "https://kickdapie.github.io/designAI/index.html", UI_DIMENSIONS);

// Initialize AI service (will check for API key in localStorage)
aiService.initialize();

penpot.ui.onMessage((message: PluginMessage | { type: string; payload?: any }) => {
  console.log("[Plugin] Received message:", message.type, message);
  switch (message.type) {
    case "ui-ready":
      sendInitialExamples();
      break;
    case "configure-ai":
      handleAIConfiguration(message.payload?.apiKey);
      break;
    case "search-examples":
      handleSearch(message.payload?.query ?? "");
      break;
    case "apply-collected-traits":
      handleApply(message as ApplyTraitsMessage);
      break;
    case "resize-window":
      handleResize(message as ResizeWindowMessage);
      break;
    case "analyze-canvas":
      handleAnalyzeCanvas(message.payload?.analyzeSelection ?? false);
      break;
    default:
      console.log("[Plugin] Unknown message type:", message.type);
      break;
  }
});

function sendInitialExamples() {
  penpot.ui.sendMessage({
    type: "examples:initial",
    payload: {
      query: "",
      results: DEFAULT_RESULTS,
      summary:
        "Here are a few starting points—swap your prompt anytime to see more tailored inspiration.",
    },
  });
}

async function handleSearch(query: string) {
  // Get initial results using keyword matching
  const initialResults = scoreExamples(query, EXAMPLE_DATASET);
  
  // Enhance with AI if available
  const results = await aiService.enhanceSearchResults(
    query,
    initialResults,
    EXAMPLE_DATASET
  );
  
  // Generate AI-powered summary (falls back to template if AI unavailable)
  const summary = await aiService.generateSummary(query, results);

  penpot.ui.sendMessage({
    type: "search-results",
    payload: {
      query,
      results,
      summary,
      aiEnabled: aiService.isAvailable(),
    },
  });
}

function handleAIConfiguration(apiKey?: string) {
  if (apiKey) {
    aiService.initialize(apiKey);
    if (typeof window !== "undefined") {
      localStorage.setItem("openai_api_key", apiKey);
    }
    penpot.ui.sendMessage({
      type: "ai-configured",
      payload: {
        success: true,
        enabled: aiService.isAvailable(),
      },
    });
  } else {
    // Clear API key
    if (typeof window !== "undefined") {
      localStorage.removeItem("openai_api_key");
    }
    aiService.initialize();
    penpot.ui.sendMessage({
      type: "ai-configured",
      payload: {
        success: true,
        enabled: false,
      },
    });
  }
}

async function handleAnalyzeCanvas(analyzeSelection: boolean) {
  console.log("[Plugin] Analyzing canvas, selection only:", analyzeSelection);

  try {
    // Get shapes to analyze
    let shapesToAnalyze: Shape[] = [];
    
    if (analyzeSelection) {
      // Analyze only selected shapes
      shapesToAnalyze = penpot.selection ?? [];
      if (shapesToAnalyze.length === 0) {
        penpot.ui.sendMessage({
          type: "canvas-data-for-analysis",
          payload: {
            colors: [],
            fonts: [],
            shapeCount: 0,
            textCount: 0,
            error: "No shapes selected. Please select shapes on the canvas to analyze.",
          },
        } as CanvasDataForAnalysis);
        return;
      }
    } else {
      // Analyze all shapes on the current page
      try {
        const page = penpot.currentPage;
        if (page) {
          // Get all shapes from the page
          // Note: Penpot API may not have a direct "getAllShapes" method
          // We'll use selection as a fallback or try to access page shapes
          shapesToAnalyze = penpot.selection ?? [];
          
          // Try to get shapes from the page if available
          // This is a workaround - the actual API might differ
          if (shapesToAnalyze.length === 0) {
            penpot.ui.sendMessage({
              type: "canvas-data-for-analysis",
              payload: {
                colors: [],
                fonts: [],
                shapeCount: 0,
                textCount: 0,
                error: "No shapes found. Please select shapes on the canvas to analyze, or ensure your canvas has content.",
              },
            } as CanvasDataForAnalysis);
            return;
          }
        }
      } catch (error) {
        console.warn("[Plugin] Could not access page, using selection:", error);
        shapesToAnalyze = penpot.selection ?? [];
      }
    }

    if (shapesToAnalyze.length === 0) {
      penpot.ui.sendMessage({
        type: "canvas-data-for-analysis",
        payload: {
          colors: [],
          fonts: [],
          shapeCount: 0,
          textCount: 0,
          error: "No shapes to analyze. Please add shapes to your canvas or select existing ones.",
        },
      } as CanvasDataForAnalysis);
      return;
    }

    // Extract colors from shapes
    const colors: string[] = [];
    const fonts: string[] = [];
    const textSamples: string[] = [];
    let textCount = 0;
    let shapeCount = shapesToAnalyze.length;

    // Use Penpot's shapesColors utility if available
    try {
      const colorData = penpot.shapesColors(shapesToAnalyze);
      if (colorData && Array.isArray(colorData)) {
        colorData.forEach((colorInfo: any) => {
          if (colorInfo?.color) {
            const colorStr = typeof colorInfo.color === "string" 
              ? colorInfo.color 
              : colorInfo.color.hex || colorInfo.color.value;
            if (colorStr && !colors.includes(colorStr)) {
              colors.push(colorStr);
            }
          }
        });
      }
    } catch (error) {
      console.warn("[Plugin] Could not extract colors via shapesColors:", error);
    }

    // Extract fonts and text from text shapes
    shapesToAnalyze.forEach((shape) => {
      try {
        if (penpot.utils.types.isText(shape)) {
          textCount++;
          const textShape = shape as any; // Use any to access plugin API properties
          
          // Try to get font family (may be fontFamily or fontId)
          const fontFamily = textShape.fontFamily || textShape.fontId;
          if (fontFamily && typeof fontFamily === "string" && !fonts.includes(fontFamily)) {
            fonts.push(fontFamily);
          }
          
          // Try to get text content (characters property in Penpot API)
          const textContent = textShape.characters || textShape.content;
          if (textContent && textSamples.length < 10) {
            const textStr = typeof textContent === "string"
              ? textContent
              : String(textContent);
            if (textStr.trim()) {
              textSamples.push(textStr.trim().substring(0, 100)); // Limit length
            }
          }
        }
      } catch (error) {
        console.warn("[Plugin] Error processing text shape:", error);
      }
    });

    // Extract additional colors from shape fills (fallback)
    if (colors.length === 0) {
      shapesToAnalyze.forEach((shape) => {
        try {
          // Try to access fill property
          if ((shape as any).fills && Array.isArray((shape as any).fills)) {
            (shape as any).fills.forEach((fill: any) => {
              if (fill?.color) {
                const colorStr = typeof fill.color === "string"
                  ? fill.color
                  : fill.color.hex || fill.color.value;
                if (colorStr && !colors.includes(colorStr)) {
                  colors.push(colorStr);
                }
              }
            });
          }
        } catch (error) {
          // Ignore errors for individual shapes
        }
      });
    }

    // Analyze layout (basic info)
    let layoutInfo = "";
    if (shapesToAnalyze.length > 1) {
      try {
        const positions = shapesToAnalyze.map((s: any) => ({
          x: s.x || 0,
          y: s.y || 0,
          width: s.width || 0,
          height: s.height || 0,
        }));
        
        const minX = Math.min(...positions.map(p => p.x));
        const maxX = Math.max(...positions.map(p => p.x + p.width));
        const minY = Math.min(...positions.map(p => p.y));
        const maxY = Math.max(...positions.map(p => p.y + p.height));
        
        const width = maxX - minX;
        const height = maxY - minY;
        
        layoutInfo = `${shapesToAnalyze.length} shapes arranged in ${Math.round(width)}x${Math.round(height)} area`;
      } catch (error) {
        // Ignore layout analysis errors
      }
    }

    console.log("[Plugin] Extracted canvas data:", {
      colors: colors.length,
      fonts: fonts.length,
      shapeCount,
      textCount,
      textSamples: textSamples.length,
      colorList: colors,
      fontList: fonts,
      layoutInfo,
    });

    // Validate we have something to analyze
    if (shapeCount === 0) {
      console.warn("[Plugin] No shapes found to analyze");
      penpot.ui.sendMessage({
        type: "canvas-data-for-analysis",
        payload: {
          colors: [],
          fonts: [],
          shapeCount: 0,
          textCount: 0,
          error: "No shapes found on canvas. Please add some shapes, text, or colors to analyze.",
        },
      } as CanvasDataForAnalysis);
      return;
    }

    // Send canvas data to UI; the UI (which has the API key) will call the AI
    console.log("[Plugin] Sending canvas data to UI for AI analysis...");
    penpot.ui.sendMessage({
      type: "canvas-data-for-analysis",
      payload: {
        colors,
        fonts,
        shapeCount,
        textCount,
        textSamples: textSamples.length > 0 ? textSamples : undefined,
        layoutInfo: layoutInfo || undefined,
      },
    } as CanvasDataForAnalysis);
  } catch (error) {
    console.error("[Plugin] Error extracting canvas data:", error);
    penpot.ui.sendMessage({
      type: "canvas-data-for-analysis",
      payload: {
        colors: [],
        fonts: [],
        shapeCount: 0,
        textCount: 0,
        error: `Could not read canvas: ${error instanceof Error ? error.message : "Unknown error"}`,
      },
    } as CanvasDataForAnalysis);
  }
}

async function handleApply(message: ApplyTraitsMessage) {
  console.log("[Plugin] handleApply called with:", message);
  const traits = message.payload?.traits ?? [];
  console.log("[Plugin] Traits count:", traits.length);

  if (!traits.length) {
    console.log("[Plugin] No traits to apply");
    penpot.ui.sendMessage({
      type: "collection-applied",
      payload: {
        success: false,
        error: "Collect at least one palette, typography, or element before applying.",
      },
    });
    return;
  }

  const selection = penpot.selection ?? [];
  console.log("[Plugin] Selection count:", selection.length, selection);
  
  // Analyze what types of traits we have
  const paletteTraits = traits.filter(
    (trait): trait is PaletteTrait => trait.type === "palette",
  );
  const typographyTraits = traits.filter(
    (trait): trait is TypographyTrait => trait.type === "typography",
  );
  const elementTraits = traits.filter(
    (trait): trait is ElementTrait => trait.type === "element",
  );
  const layoutTraits = traits.filter(
    (trait): trait is LayoutTrait => trait.type === "layout",
  );

  // Check what we need to apply
  const hasColors = paletteTraits.length > 0 || elementTraits.some(e => e.colors && e.colors.length > 0);
  const hasFonts = typographyTraits.length > 0 || elementTraits.some(e => e.fonts && e.fonts.length > 0);
  
  // Collect layout hints to check if we can create layout
  const allLayoutHints = [
    ...layoutTraits.flatMap(t => t.layoutTags),
    ...elementTraits.flatMap(t => t.layoutHints ?? []),
  ];
  const hasLayoutHints = allLayoutHints.length > 0;

  // If no selection and no layout hints, require selection
  if (!selection.length && !hasLayoutHints) {
    console.log("[Plugin] No shapes selected and no layout hints");
    let errorMessage = "Please select layers on your canvas first.\n\n";
    if (hasColors && hasFonts) {
      errorMessage += "For this collection, select:\n• Shapes (rectangles, circles, etc.) to apply colors\n• Text layers to apply fonts";
    } else if (hasColors) {
      errorMessage += "Select shapes (rectangles, circles, paths, or text) to apply colors.";
    } else if (hasFonts) {
      errorMessage += "Select text layers to apply fonts.";
    } else {
      errorMessage += "Select any layers on your canvas.";
    }
    
    penpot.ui.sendMessage({
      type: "collection-applied",
      payload: {
        success: false,
        error: errorMessage,
      },
    });
    return;
  }

  // Extract all colors from palette traits and element traits
  const allColors = [
    ...paletteTraits.flatMap(t => t.colors),
    ...elementTraits.flatMap(t => t.colors ?? []),
  ];

  // Extract all fonts from typography traits and element traits
  const allFonts = [
    ...typographyTraits.flatMap(t => t.fonts),
    ...elementTraits.flatMap(t => t.fonts ?? []),
  ];

  console.log("[Plugin] Applying traits:", {
    paletteCount: paletteTraits.length,
    typographyCount: typographyTraits.length,
    elementCount: elementTraits.length,
    layoutCount: layoutTraits.length,
    totalColors: allColors.length,
    totalFonts: allFonts.length,
    layoutHintsCount: allLayoutHints.length,
    selectionCount: selection.length,
  });

  let layoutCreated = false;
  let createdShapes: Shape[] = [];

  // Try to create/arrange layout if layout hints are present
  if (allLayoutHints.length > 0) {
    const viewport = getViewportDimensions();
    let layoutSpecs: LayoutSpec[] = [];
    
    // Try AI-powered layout generation first if element traits are present
    if (elementTraits.length > 0 && aiService.isAvailable()) {
      const aiLayoutSpecs = await aiService.generateIntelligentLayout(
        elementTraits,
        viewport,
        allColors,
        allFonts
      );
      
      if (aiLayoutSpecs && aiLayoutSpecs.length > 0) {
        layoutSpecs = aiLayoutSpecs;
        console.log("[Plugin] Using AI-generated layout specs:", layoutSpecs.length);
      }
    }
    
    // Fallback to pattern-based generation if AI didn't produce results
    if (layoutSpecs.length === 0) {
      const pattern = parseLayoutHints(allLayoutHints);
      
      if (pattern.type !== "unknown") {
        layoutSpecs = generateLayoutSpecs(pattern, viewport, allColors, allFonts);
        console.log("[Plugin] Using pattern-based layout specs:", layoutSpecs.length);
      }
    }

    if (layoutSpecs.length > 0) {
      // If no selection or incompatible selection, create new shapes
      if (selection.length === 0 || !arrangeExistingShapes(selection, layoutSpecs)) {
        createdShapes = createLayoutShapes(layoutSpecs, allColors, allFonts);
        layoutCreated = createdShapes.length > 0;
        
        if (layoutCreated) {
          // Apply colors and fonts to newly created shapes
          applyColorsToShapes(createdShapes, allColors);
          applyFontsToShapes(createdShapes, allFonts);
        }
      } else {
        // Successfully arranged existing shapes
        layoutCreated = true;
        // Apply colors and fonts to arranged shapes
        applyColorsToShapes(selection, allColors);
        applyFontsToShapes(selection, allFonts);
      }
    }
  }

  // Apply colors and fonts to existing selection (if layout wasn't created or arranged)
  let appliedColors = false;
  let appliedFonts = false;
  
  if (!layoutCreated && selection.length > 0) {
    appliedColors = allColors.length > 0 
      ? applyColorsToShapes(selection, allColors)
      : false;
      
    appliedFonts = allFonts.length > 0
      ? applyFontsToShapes(selection, allFonts)
      : false;
  } else if (layoutCreated) {
    // Colors and fonts were already applied during layout creation
    appliedColors = allColors.length > 0;
    appliedFonts = allFonts.length > 0;
  }

  const applied = {
    palette: appliedColors,
    typography: appliedFonts,
    layout: layoutCreated,
  };

  console.log("[Plugin] Applied results:", applied);

  const success = applied.palette || applied.typography || applied.layout;

  if (!success) {
    // Provide specific guidance based on what we tried to apply
    let errorMessage = "Couldn't apply to the selected layers.\n\n";
    const fillable = selection.filter(isFillShape);
    const textLayers = selection.filter(s => penpot.utils.types.isText(s));
    
    if (hasColors && hasFonts) {
      if (!fillable.length && !textLayers.length) {
        errorMessage += "Selected layers can't receive colors or fonts.\n\n";
        errorMessage += "Try selecting:\n• Rectangles, circles, or paths for colors\n• Text layers for fonts";
      } else if (!fillable.length) {
        errorMessage += "No shapes found for colors. Select rectangles, circles, or paths.";
      } else if (!textLayers.length) {
        errorMessage += "No text layers found for fonts. Select text layers.";
      }
    } else if (hasColors) {
      if (!fillable.length) {
        errorMessage += "Selected layers can't receive colors.\n\n";
        errorMessage += "Select shapes like rectangles, circles, paths, or text layers.";
      }
    } else if (hasFonts) {
      if (!textLayers.length) {
        errorMessage += "Selected layers aren't text.\n\n";
        errorMessage += "Select text layers to apply fonts.";
      }
    }
    
    penpot.ui.sendMessage({
      type: "collection-applied",
      payload: {
        success: false,
        error: errorMessage,
      },
    });
  } else {
    // Success message
    const appliedParts: string[] = [];
    if (appliedColors) appliedParts.push("colors");
    if (appliedFonts) appliedParts.push("fonts");
    if (layoutCreated) appliedParts.push("layout");
    
    const shapeCount = layoutCreated ? createdShapes.length : selection.length;
    let message = `Applied ${appliedParts.join(", ")} to ${shapeCount} layer${shapeCount > 1 ? 's' : ''}!`;
    
    if (layoutCreated) {
      message += `\n\n✨ Layout created on your canvas with ${shapeCount} element${shapeCount > 1 ? 's' : ''}.`;
    }
    
    penpot.ui.sendMessage({
      type: "collection-applied",
      payload: {
        success: true,
        message,
      },
    });
  }
  
  console.log("[Plugin] Sent response, success:", success);
}

function applyColorsToShapes(
  shapes: Shape[],
  colors: string[],
): boolean {
  if (!colors.length) return false;

  const fillable = shapes.filter(isFillShape);
  if (!fillable.length) return false;

  fillable.forEach((shape, index) => {
    const color = colors[index % colors.length];
    (shape as Rectangle | Ellipse | Path | Text).fills = [
      { fillColor: color, fillOpacity: 1 },
    ];
  });

  return true;
}

function applyFontsToShapes(
  shapes: Shape[],
  fonts: string[],
): boolean {
  if (!fonts.length) return false;

  let applied = false;
  const fontFamily = fonts[0].split(' ')[0]; // Extract just the font name (remove weight)

  shapes.forEach((shape) => {
    if (penpot.utils.types.isText(shape)) {
      shape.fontFamily = fontFamily;
      applied = true;
    }
  });

  return applied;
}

function isFillShape(shape: Shape): shape is Rectangle | Ellipse | Path | Text {
  const { types } = penpot.utils;
  return (
    types.isRectangle(shape) ||
    types.isEllipse(shape) ||
    types.isPath(shape) ||
    types.isText(shape)
  );
}

function handleResize(message: ResizeWindowMessage) {
  const { width, height } = message.payload;
  console.log("[Plugin] Resizing window to:", width, height);
  penpot.ui.resize(width, height);
}

// Legacy function kept for backwards compatibility, but now handled by AI service
function buildResultSummary(query: string, results: Example[]): string {
  // This is now a fallback - AI service handles summaries
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

/**
 * Gets viewport dimensions and center point
 */
function getViewportDimensions(): ViewportInfo {
  try {
    const viewport = penpot.viewport;
    const center = viewport.center;
    const centerX = (center as any)?.x ?? 600;
    const centerY = (center as any)?.y ?? 400;

    // Try to get viewport dimensions from zoom or use defaults
    const zoom = viewport.zoom ?? 1;
    // Default viewport size, will be adjusted based on actual viewport if available
    const defaultWidth = 1200;
    const defaultHeight = 800;

    return {
      width: defaultWidth,
      height: defaultHeight,
      centerX,
      centerY,
    };
  } catch (error) {
    console.error("[Plugin] Error getting viewport:", error);
    // Fallback to default dimensions
    return {
      width: 1200,
      height: 800,
      centerX: 600,
      centerY: 400,
    };
  }
}

/**
 * Creates shapes based on layout specifications
 */
function createLayoutShapes(
  layoutSpecs: LayoutSpec[],
  colors: string[],
  fonts: string[],
): Shape[] {
  const createdShapes: Shape[] = [];

  try {
    for (const spec of layoutSpecs) {
      if (spec.type === "rectangle") {
        const rect = penpot.createRectangle();
        // Set position - shapes are created at 0,0 with 100x100 default size
        rect.x = spec.x;
        rect.y = spec.y;
        // Try to set width/height - if read-only, shapes will use default size
        try {
          (rect as any).width = spec.width;
          (rect as any).height = spec.height;
        } catch (e) {
          // Width/height may be read-only, use defaults
          console.warn("[Plugin] Could not set rectangle dimensions, using defaults");
        }

        if (spec.color) {
          rect.fills = [{ fillColor: spec.color, fillOpacity: 1 }];
        }

        createdShapes.push(rect);
      } else if (spec.type === "text") {
        const text = penpot.createText(spec.text || "Text");
        if (!text) {
          console.warn("[Plugin] Failed to create text shape");
          continue;
        }

        // Set position
        text.x = spec.x;
        text.y = spec.y;
        // Try to set width/height - text shapes may auto-size
        try {
          (text as any).width = spec.width;
          (text as any).height = spec.height;
        } catch (e) {
          // Width/height may be read-only or auto-sized
          console.warn("[Plugin] Could not set text dimensions, using auto-size");
        }

        if (spec.font) {
          // Extract font family name (remove weight/style)
          const fontFamily = spec.font.split(" ")[0];
          text.fontFamily = fontFamily;
        }

        if (spec.color) {
          text.fills = [{ fillColor: spec.color, fillOpacity: 1 }];
        }

        createdShapes.push(text);
      }
    }
  } catch (error) {
    console.error("[Plugin] Error creating layout shapes:", error);
  }

  return createdShapes;
}

/**
 * Attempts to arrange existing selected shapes into a layout pattern
 */
function arrangeExistingShapes(
  selection: Shape[],
  layoutSpecs: LayoutSpec[],
): boolean {
  if (selection.length === 0 || layoutSpecs.length === 0) {
    return false;
  }

  // Only arrange if we have compatible number of shapes
  if (selection.length !== layoutSpecs.length) {
    return false;
  }

  try {
    for (let i = 0; i < selection.length && i < layoutSpecs.length; i++) {
      const shape = selection[i];
      const spec = layoutSpecs[i];

      // Update position
      shape.x = spec.x;
      shape.y = spec.y;
      // Try to set width/height - may be read-only
      try {
        (shape as any).width = spec.width;
        (shape as any).height = spec.height;
      } catch (e) {
        // Dimensions may be read-only, only position was updated
      }
    }

    return true;
  } catch (error) {
    console.error("[Plugin] Error arranging shapes:", error);
    return false;
  }
}


