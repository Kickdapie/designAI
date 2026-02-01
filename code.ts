/**
 * Figma plugin main (Design Discovery Assistant).
 * Replaces Penpot plugin; uses Figma Plugin API for UI and canvas.
 */
/// <reference types="@figma/plugin-typings" />
/** Injected at build time by scripts/inject-html.js to avoid redefining Figma's __html__ */
declare var __pluginUiHtml__: string;

import {
  DEFAULT_RESULTS,
  EXAMPLE_DATASET,
} from "./src/catalog/examples";
import { scoreExamples } from "./src/catalog/search";
import { aiService } from "./src/services/aiService";
import type {
  ApplyTraitsMessage,
  CanvasDataForAnalysis,
  ElementTrait,
  LayoutSpec,
  LayoutTrait,
  PaletteTrait,
  PluginMessage,
  ResizeWindowMessage,
  TypographyTrait,
  ViewportInfo,
} from "./src/types/catalog";
import { parseLayoutHints } from "./src/utils/layoutParser";
import { generateLayoutSpecs } from "./src/utils/layoutGenerator";

const UI_WIDTH = 1300;
const UI_HEIGHT = 900;
const UI_MINIMIZED_WIDTH = 400;
const UI_MINIMIZED_HEIGHT = 300;

/** Deployed UI URL (e.g. GitHub Pages). Loads UI from URL to avoid Figma iframe document.write/syntax issues. Add domain to manifest networkAccess. Use "" to try inlined UI. */
const UI_BASE_URL = "https://kickdapie.github.io/designAI/";

if (UI_BASE_URL && UI_BASE_URL.startsWith("http")) {
  figma.showUI(
    '<script>window.location.href = "' + UI_BASE_URL.replace(/"/g, "\\\"") + 'index.html"</script>',
    { width: UI_WIDTH, height: UI_HEIGHT }
  );
} else {
  figma.showUI(
    typeof __pluginUiHtml__ !== "undefined" ? __pluginUiHtml__ : (typeof __html__ !== "undefined" ? __html__ : ""),
    { width: UI_WIDTH, height: UI_HEIGHT }
  );
}

// No localStorage in plugin context; API key is passed from UI via configure-ai
figma.ui.onmessage = (message: PluginMessage | { type: string; payload?: unknown }) => {
  console.log("[Plugin] Received:", message.type, message);
  switch (message.type) {
    case "ui-ready":
      sendInitialExamples();
      break;
    case "configure-ai":
      handleAIConfiguration((message.payload as { apiKey?: string })?.apiKey);
      break;
    case "search-examples":
      handleSearch(((message.payload as { query?: string })?.query) ?? "");
      break;
    case "apply-collected-traits":
      handleApply(message as ApplyTraitsMessage);
      break;
    case "resize-window":
      handleResize(message as ResizeWindowMessage);
      break;
    case "analyze-canvas":
      handleAnalyzeCanvas((message.payload as { analyzeSelection?: boolean })?.analyzeSelection ?? false);
      break;
    case "analyze-screenshot":
      handleAnalyzeScreenshot();
      break;
    default:
      console.log("[Plugin] Unknown message type:", (message as { type: string }).type);
      break;
  }
};

function postToUI(msg: Record<string, unknown>): void {
  figma.ui.postMessage(msg);
}

function sendInitialExamples(): void {
  postToUI({
    type: "examples:initial",
    payload: {
      query: "",
      results: DEFAULT_RESULTS,
      summary:
        "Here are a few starting points—swap your prompt anytime to see more tailored inspiration.",
    },
  });
}

async function handleSearch(query: string): Promise<void> {
  const initialResults = scoreExamples(query, EXAMPLE_DATASET);
  const results = await aiService.enhanceSearchResults(
    query,
    initialResults,
    EXAMPLE_DATASET
  );
  const summary = await aiService.generateSummary(query, results);

  postToUI({
    type: "search-results",
    payload: {
      query,
      results,
      summary,
      aiEnabled: aiService.isAvailable(),
    },
  });
}

function handleAIConfiguration(apiKey?: string): void {
  if (apiKey) {
    aiService.initialize(apiKey);
    postToUI({
      type: "ai-configured",
      payload: { success: true, enabled: aiService.isAvailable() },
    });
  } else {
    aiService.initialize();
    postToUI({
      type: "ai-configured",
      payload: { success: true, enabled: false },
    });
  }
}

/** Convert hex (#RRGGBB) to Figma RGB 0–1 */
function hexToFigmaRgb(hex: string): { r: number; g: number; b: number } {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(m[1], 16) / 255,
    g: parseInt(m[2], 16) / 255,
    b: parseInt(m[3], 16) / 255,
  };
}

/** Collect unique hex colors from nodes (fills) */
function collectColorsFromNodes(nodes: SceneNode[]): string[] {
  const hexSet = new Set<string>();
  const visit = (node: SceneNode) => {
    if ("fills" in node && Array.isArray(node.fills)) {
      for (const fill of node.fills as Paint[]) {
        if (fill.type === "SOLID" && fill.color) {
          const { r, g, b } = fill.color;
          const hex = rgbToHex(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
          hexSet.add(hex);
        }
      }
    }
    if ("children" in node) {
      (node as ChildrenMixin).children.forEach(visit);
    }
  };
  nodes.forEach(visit);
  return Array.from(hexSet);
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

async function handleAnalyzeCanvas(analyzeSelection: boolean): Promise<void> {
  console.log("[Plugin] Analyzing canvas, selection only:", analyzeSelection);

  try {
    let nodesToAnalyze: SceneNode[] = [];

    if (analyzeSelection) {
      nodesToAnalyze = [...figma.currentPage.selection];
      if (nodesToAnalyze.length === 0) {
        postToUI({
          type: "canvas-data-for-analysis",
          payload: {
            colors: [],
            fonts: [],
            shapeCount: 0,
            textCount: 0,
            error: "No shapes selected. Please select shapes on the canvas to analyze.",
          },
        });
        return;
      }
    } else {
      nodesToAnalyze = figma.currentPage.findAll(() => true);
      if (nodesToAnalyze.length === 0) {
        postToUI({
          type: "canvas-data-for-analysis",
          payload: {
            colors: [],
            fonts: [],
            shapeCount: 0,
            textCount: 0,
            error: "No shapes found. Add or select shapes on the canvas to analyze.",
          },
        });
        return;
      }
    }

    const colors = collectColorsFromNodes(nodesToAnalyze);
    const fonts: string[] = [];
    const textSamples: string[] = [];
    let textCount = 0;
    const shapeCount = nodesToAnalyze.length;

    const allTextNodes: TextNode[] = [];
    figma.currentPage.findAll((n) => n.type === "TEXT").forEach((n) => allTextNodes.push(n as TextNode));

    for (const node of allTextNodes) {
      if (!nodesToAnalyze.includes(node) && !isDescendantOfAny(node, nodesToAnalyze)) continue;
      textCount++;
      try {
        await figma.loadFontAsync(node.fontName as FontName);
        const family = (node.fontName as FontName).family;
        if (family && !fonts.includes(family)) fonts.push(family);
        const chars = node.characters?.trim().slice(0, 100);
        if (chars && textSamples.length < 10) textSamples.push(chars);
      } catch (_) {
        // skip font load errors
      }
    }

    let layoutInfo = "";
    if (nodesToAnalyze.length > 1) {
      const positions = nodesToAnalyze.map((n) => ({
        x: "x" in n ? (n as { x: number }).x : 0,
        y: "y" in n ? (n as { y: number }).y : 0,
        w: "width" in n ? (n as { width: number }).width : 0,
        h: "height" in n ? (n as { height: number }).height : 0,
      }));
      const minX = Math.min(...positions.map((p) => p.x));
      const maxX = Math.max(...positions.map((p) => p.x + p.w));
      const minY = Math.min(...positions.map((p) => p.y));
      const maxY = Math.max(...positions.map((p) => p.y + p.h));
      layoutInfo = `${nodesToAnalyze.length} shapes in ${Math.round(maxX - minX)}×${Math.round(maxY - minY)} area`;
    }

    if (shapeCount === 0) {
      postToUI({
        type: "canvas-data-for-analysis",
        payload: {
          colors: [],
          fonts: [],
          shapeCount: 0,
          textCount: 0,
          error: "No shapes found on canvas.",
        },
      });
      return;
    }

    postToUI({
      type: "canvas-data-for-analysis",
      payload: {
        colors,
        fonts,
        shapeCount,
        textCount,
        textSamples: textSamples.length > 0 ? textSamples : undefined,
        layoutInfo: layoutInfo || undefined,
      },
    });
  } catch (err) {
    console.error("[Plugin] Error extracting canvas data:", err);
    postToUI({
      type: "canvas-data-for-analysis",
      payload: {
        colors: [],
        fonts: [],
        shapeCount: 0,
        textCount: 0,
        error: err instanceof Error ? err.message : "Unknown error",
      },
    });
  }
}

async function handleAnalyzeScreenshot(): Promise<void> {
  try {
    const selection = [...figma.currentPage.selection];
    if (selection.length === 0) {
      postToUI({
        type: "screenshot-for-analysis",
        payload: { error: "Select one or more frames/nodes to export as screenshot." },
      });
      return;
    }
    const bytes = await figma.exportAsync(selection, { format: "PNG", constraint: { type: "SCALE", value: 2 } });
    postToUI({
      type: "screenshot-for-analysis",
      payload: { imageBytes: Array.from(bytes) },
    });
  } catch (err) {
    console.error("[Plugin] Error exporting screenshot:", err);
    postToUI({
      type: "screenshot-for-analysis",
      payload: { error: err instanceof Error ? err.message : "Export failed" },
    });
  }
}

function isDescendantOfAny(node: BaseNode, ancestors: SceneNode[]): boolean {
  let current: BaseNode | null = node.parent;
  while (current) {
    if (ancestors.includes(current as SceneNode)) return true;
    current = current.parent;
  }
  return false;
}

async function handleApply(message: ApplyTraitsMessage): Promise<void> {
  const traits = message.payload?.traits ?? [];
  if (!traits.length) {
    postToUI({
      type: "collection-applied",
      payload: {
        success: false,
        error: "Collect at least one palette, typography, or element before applying.",
      },
    });
    return;
  }

  const selection = [...figma.currentPage.selection];
  const paletteTraits = traits.filter((t): t is PaletteTrait => t.type === "palette");
  const typographyTraits = traits.filter((t): t is TypographyTrait => t.type === "typography");
  const elementTraits = traits.filter((t): t is ElementTrait => t.type === "element");
  const layoutTraits = traits.filter((t): t is LayoutTrait => t.type === "layout");

  const hasColors =
    paletteTraits.length > 0 || elementTraits.some((e) => e.colors && e.colors.length > 0);
  const hasFonts =
    typographyTraits.length > 0 || elementTraits.some((e) => e.fonts && e.fonts.length > 0);
  const allLayoutHints = [
    ...layoutTraits.flatMap((t) => t.layoutTags),
    ...elementTraits.flatMap((t) => t.layoutHints ?? []),
  ];
  const hasLayoutHints = allLayoutHints.length > 0;

  if (!selection.length && !hasLayoutHints) {
    let errorMessage = "Please select layers on your canvas first.\n\n";
    if (hasColors && hasFonts) {
      errorMessage += "Select shapes for colors and text layers for fonts.";
    } else if (hasColors) {
      errorMessage += "Select shapes (rectangles, frames, or text) to apply colors.";
    } else if (hasFonts) {
      errorMessage += "Select text layers to apply fonts.";
    } else {
      errorMessage += "Select any layers on your canvas.";
    }
    postToUI({ type: "collection-applied", payload: { success: false, error: errorMessage } });
    return;
  }

  const allColors = [
    ...paletteTraits.flatMap((t) => t.colors),
    ...elementTraits.flatMap((t) => t.colors ?? []),
  ];
  const allFonts = [
    ...typographyTraits.flatMap((t) => t.fonts),
    ...elementTraits.flatMap((t) => t.fonts ?? []),
  ];

  let layoutCreated = false;
  let createdNodes: SceneNode[] = [];

  if (allLayoutHints.length > 0) {
    const viewport = getViewportDimensions();
    let layoutSpecs: LayoutSpec[] = [];

    if (elementTraits.length > 0 && aiService.isAvailable()) {
      const aiLayoutSpecs = await aiService.generateIntelligentLayout(
        elementTraits,
        viewport,
        allColors,
        allFonts
      );
      if (aiLayoutSpecs && aiLayoutSpecs.length > 0) layoutSpecs = aiLayoutSpecs;
    }
    if (layoutSpecs.length === 0) {
      const pattern = parseLayoutHints(allLayoutHints);
      if (pattern.type !== "unknown") {
        layoutSpecs = generateLayoutSpecs(pattern, viewport, allColors, allFonts);
      }
    }

    if (layoutSpecs.length > 0) {
      if (selection.length === 0 || !arrangeExistingNodes(selection, layoutSpecs)) {
        createdNodes = await createLayoutNodes(layoutSpecs, allColors, allFonts);
        layoutCreated = createdNodes.length > 0;
        if (layoutCreated) {
          applyColorsToNodes(createdNodes, allColors);
          await applyFontsToNodes(createdNodes, allFonts);
        }
      } else {
        layoutCreated = true;
        applyColorsToNodes(selection, allColors);
        await applyFontsToNodes(selection, allFonts);
      }
    }
  }

  let appliedColors = false;
  let appliedFonts = false;
  if (!layoutCreated && selection.length > 0) {
    appliedColors =
      allColors.length > 0 ? applyColorsToNodes(selection, allColors) : false;
    appliedFonts =
      allFonts.length > 0 ? await applyFontsToNodes(selection, allFonts) : false;
  } else if (layoutCreated) {
    appliedColors = allColors.length > 0;
    appliedFonts = allFonts.length > 0;
  }

  const success = appliedColors || appliedFonts || layoutCreated;
  if (!success) {
    const fillable = selection.filter(canHaveFills);
    const textNodes = selection.filter((n) => n.type === "TEXT");
    let errorMessage = "Couldn't apply to the selected layers.\n\n";
    if (hasColors && hasFonts) {
      if (!fillable.length && !textNodes.length) {
        errorMessage += "Selected layers can't receive colors or fonts. Try rectangles, frames, or text.";
      } else if (!fillable.length) {
        errorMessage += "No shapes found for colors.";
      } else if (!textNodes.length) {
        errorMessage += "No text layers for fonts.";
      }
    } else if (hasColors && !fillable.length) {
      errorMessage += "Select shapes that can have fills.";
    } else if (hasFonts && !textNodes.length) {
      errorMessage += "Select text layers to apply fonts.";
    }
    postToUI({ type: "collection-applied", payload: { success: false, error: errorMessage } });
    return;
  }

  const appliedParts: string[] = [];
  if (appliedColors) appliedParts.push("colors");
  if (appliedFonts) appliedParts.push("fonts");
  if (layoutCreated) appliedParts.push("layout");
  const count = layoutCreated ? createdNodes.length : selection.length;
  let msg = `Applied ${appliedParts.join(", ")} to ${count} layer${count !== 1 ? "s" : ""}!`;
  if (layoutCreated) {
    msg += `\n\n✨ Layout created on your canvas with ${count} element${count !== 1 ? "s" : ""}.`;
  }
  postToUI({ type: "collection-applied", payload: { success: true, message: msg } });
}

function canHaveFills(node: SceneNode): boolean {
  return "fills" in node && Array.isArray((node as { fills?: unknown }).fills);
}

function applyColorsToNodes(nodes: SceneNode[], colors: string[]): boolean {
  if (!colors.length) return false;
  const fillable = nodes.filter(canHaveFills);
  if (!fillable.length) return false;
  fillable.forEach((node, i) => {
    const color = hexToFigmaRgb(colors[i % colors.length]);
    (node as GeometryMixin & { fills: Paint[] }).fills = [
      { type: "SOLID", color, opacity: 1 },
    ];
  });
  return true;
}

async function applyFontsToNodes(nodes: SceneNode[], fonts: string[]): Promise<boolean> {
  if (!fonts.length) return false;
  const textNodes = nodes.filter((n) => n.type === "TEXT") as TextNode[];
  if (!textNodes.length) return false;
  const family = fonts[0].split(" ")[0];
  const fontList = await figma.listAvailableFontsAsync();
  const match = fontList.find((f) => f.fontName.family === family) ?? fontList[0];
  if (!match) return false;
  for (const node of textNodes) {
    try {
      await figma.loadFontAsync(match.fontName);
      node.fontName = match.fontName;
    } catch (_) {
      // skip
    }
  }
  return true;
}

function handleResize(message: ResizeWindowMessage): void {
  const { width, height } = message.payload;
  figma.ui.resize(width, height);
}

function getViewportDimensions(): ViewportInfo {
  const center = figma.viewport.center;
  return {
    width: 1200,
    height: 800,
    centerX: center.x,
    centerY: center.y,
  };
}

async function createLayoutNodes(
  layoutSpecs: LayoutSpec[],
  colors: string[],
  fonts: string[]
): Promise<SceneNode[]> {
  const created: SceneNode[] = [];
  const page = figma.currentPage;

  for (const spec of layoutSpecs) {
    if (spec.type === "rectangle") {
      const rect = figma.createRectangle();
      rect.x = spec.x;
      rect.y = spec.y;
      rect.resize(spec.width, spec.height);
      if (spec.color) {
        rect.fills = [{ type: "SOLID", color: hexToFigmaRgb(spec.color), opacity: 1 }];
      }
      page.appendChild(rect);
      created.push(rect);
    } else if (spec.type === "text") {
      const text = figma.createText();
      const fontList = await figma.listAvailableFontsAsync();
      const family = (spec.font || fonts[0] || "").split(" ")[0];
      const fontMatch = fontList.find((f) => f.fontName.family === family) ?? fontList[0];
      if (fontMatch) {
        await figma.loadFontAsync(fontMatch.fontName);
        text.fontName = fontMatch.fontName;
      }
      text.characters = spec.text || "Text";
      text.x = spec.x;
      text.y = spec.y;
      text.resize(spec.width, spec.height);
      if (spec.color) {
        text.fills = [{ type: "SOLID", color: hexToFigmaRgb(spec.color), opacity: 1 }];
      }
      page.appendChild(text);
      created.push(text);
    }
  }

  if (created.length > 0) {
    figma.currentPage.selection = created;
    figma.viewport.scrollAndZoomIntoView(created);
  }
  return created;
}

function arrangeExistingNodes(
  nodes: SceneNode[],
  layoutSpecs: LayoutSpec[]
): boolean {
  if (nodes.length === 0 || layoutSpecs.length === 0) return false;
  if (nodes.length !== layoutSpecs.length) return false;
  try {
    for (let i = 0; i < nodes.length && i < layoutSpecs.length; i++) {
      const node = nodes[i];
      const spec = layoutSpecs[i];
      if ("x" in node) (node as { x: number }).x = spec.x;
      if ("y" in node) (node as { y: number }).y = spec.y;
      if ("resize" in node && typeof (node as { resize: (w: number, h: number) => void }).resize === "function") {
        (node as { resize: (w: number, h: number) => void }).resize(spec.width, spec.height);
      }
    }
    return true;
  } catch {
    return false;
  }
}
