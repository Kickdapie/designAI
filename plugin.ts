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
import type {
  ApplyTraitsMessage,
  ElementTrait,
  Example,
  LayoutTrait,
  PaletteTrait,
  PluginMessage,
  ResizeWindowMessage,
  TypographyTrait,
} from "./src/types/catalog";

declare const penpot: Penpot;

const UI_DIMENSIONS = { width: 1300, height: 900 };
const MINIMIZED_DIMENSIONS = { width: 400, height: 300 };

penpot.ui.open("Design Discovery Assistant", "https://kickdapie.github.io/designAI/index.html", UI_DIMENSIONS);

penpot.ui.onMessage((message: PluginMessage | { type: string; payload?: any }) => {
  console.log("[Plugin] Received message:", message.type, message);
  switch (message.type) {
    case "ui-ready":
      sendInitialExamples();
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

function handleSearch(query: string) {
  const results = scoreExamples(query, EXAMPLE_DATASET);
  const summary = buildResultSummary(query, results);

  penpot.ui.sendMessage({
    type: "search-results",
    payload: {
      query,
      results,
      summary,
    },
  });
}

function handleApply(message: ApplyTraitsMessage) {
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

  if (!selection.length) {
    console.log("[Plugin] No shapes selected");
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
    totalColors: allColors.length,
    totalFonts: allFonts.length,
    selectionCount: selection.length,
  });

  // Apply colors and fonts
  const appliedColors = allColors.length > 0 
    ? applyColorsToShapes(selection, allColors)
    : false;
    
  const appliedFonts = allFonts.length > 0
    ? applyFontsToShapes(selection, allFonts)
    : false;

  const applied = {
    palette: appliedColors,
    typography: appliedFonts,
  };

  console.log("[Plugin] Applied results:", applied);

  const success = applied.palette || applied.typography;

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
    
    // Collect layout hints for reference
    const allLayoutHints = [
      ...layoutTraits.flatMap(t => t.layoutTags),
      ...elementTraits.flatMap(t => t.layoutHints ?? []),
    ];
    
    let message = `Applied ${appliedParts.join(" and ")} to ${selection.length} layer${selection.length > 1 ? 's' : ''}!`;
    
    if (allLayoutHints.length > 0) {
      message += `\n\n📐 Layout reference: ${allLayoutHints.slice(0, 3).join(" • ")}`;
      message += `\n\nNote: Layout patterns are for reference. Use the colors and fonts as a starting point, then manually arrange your elements to match the layout pattern.`;
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

function buildResultSummary(query: string, results: Example[]): string {
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


