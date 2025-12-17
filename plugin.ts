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
  Example,
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
  if (!selection.length) {
    console.log("[Plugin] No shapes selected");
    penpot.ui.sendMessage({
      type: "collection-applied",
      payload: {
        success: false,
        error: "Select one or more layers on the canvas so I know where to apply the traits.",
      },
    });
    return;
  }

  const paletteTraits = traits.filter(
    (trait): trait is PaletteTrait => trait.type === "palette",
  );
  const typographyTraits = traits.filter(
    (trait): trait is TypographyTrait => trait.type === "typography",
  );

  console.log("[Plugin] Applying traits:", {
    paletteCount: paletteTraits.length,
    typographyCount: typographyTraits.length,
    selectionCount: selection.length,
  });

  const applied = {
    palette: applyPaletteTraits(selection, paletteTraits),
    typography: applyTypographyTraits(selection, typographyTraits),
  };

  console.log("[Plugin] Applied results:", applied);

  const success = applied.palette || applied.typography;

  penpot.ui.sendMessage({
    type: "collection-applied",
    payload: {
      success,
      error: success
        ? undefined
        : "I couldn't find a compatible layer—try selecting shapes or text before applying.",
    },
  });
  
  console.log("[Plugin] Sent response, success:", success);
}

function applyPaletteTraits(
  shapes: Shape[],
  traits: PaletteTrait[],
): boolean {
  if (!traits.length) return false;

  const fillable = shapes.filter(isFillShape);
  if (!fillable.length) return false;

  const colors = traits.flatMap((trait) => trait.colors);
  if (!colors.length) return false;

  fillable.forEach((shape, index) => {
    const color = colors[index % colors.length];
    (shape as Rectangle | Ellipse | Path | Text).fills = [
      { fillColor: color, fillOpacity: 1 },
    ];
  });

  return true;
}

function applyTypographyTraits(
  shapes: Shape[],
  traits: TypographyTrait[],
): boolean {
  if (!traits.length) return false;

  const fontNames = traits.flatMap((trait) => trait.fonts);
  if (!fontNames.length) return false;

  let applied = false;

  shapes.forEach((shape) => {
    if (penpot.utils.types.isText(shape)) {
      const fontFamily = fontNames[0];
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


