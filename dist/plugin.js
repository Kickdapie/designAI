/* eslint-disable */
(() => {
  // src/catalog/examples.ts
  var EXAMPLE_DATASET = [
    {
      id: "calm-app-hero",
      name: "Calm hero headline stack",
      tagline: "Pairs well with calm color palettes",
      scenario: "Hero Section",
      description: "Bold headline and supporting copy on the left, illustration on the right with overlapping card CTA.",
      palette: ["#F7F4F1", "#A8C5B8", "#4A6B5E", "#2E2E2E"],
      fonts: ["Serif", "Sans-serif"],
      layoutTags: ["Hero headline stack", "Left-aligned text", "Right illustration", "Overlapping CTA card"],
      thumbnail: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "calm-app-hero-headline",
          label: "Hero headline stack",
          description: "Bold headline and supporting copy on the left, illustration on the right with overlapping card CTA.",
          highlight: "Pairs well with calm color palettes",
          trait: {
            id: "calm-app-hero-headline",
            type: "element",
            label: "Hero headline stack",
            sourceExampleId: "calm-app",
            description: "Bold headline and supporting copy on the left, illustration on the right with overlapping card CTA.",
            colors: ["#F7F4F1", "#A8C5B8", "#4A6B5E", "#2E2E2E"],
            fonts: ["Serif", "Sans-serif"],
            layoutHints: [
              "Hero headline stack",
              "Left-aligned text",
              "Right illustration",
              "Overlapping CTA card"
            ]
          }
        }
      ]
    }
  ];
  var DEFAULT_RESULTS = EXAMPLE_DATASET.slice(0, 3);

  // src/catalog/search.ts
  function scoreExamples(query, dataset) {
    if (!query.trim()) {
      return dataset.slice(0, 4);
    }
    const tokens = query.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
    if (!tokens.length) {
      return dataset.slice(0, 4);
    }
    const ranked = dataset.map((example) => ({
      example,
      score: scoreExample(example, tokens)
    })).sort((a, b) => b.score - a.score);
    const results = ranked.filter((entry, index) => entry.score > 0 || index < 2).slice(0, 4).map((entry) => entry.example);
    return results.length ? results : dataset.slice(0, Math.min(4, dataset.length));
  }
  function scoreExample(example, tokens) {
    const base = [
      example.name,
      example.tagline,
      example.scenario,
      example.description,
      example.layoutTags.join(" "),
      example.fonts.join(" ")
    ].join(" ").toLowerCase();
    let score = 0;
    tokens.forEach((token) => {
      if (base.includes(token)) {
        score += 2;
      }
    });
    example.elements.forEach((element) => {
      const detail = [
        element.label,
        element.description,
        element.highlight,
        element.trait.description,
        (element.trait.layoutHints ?? []).join(" ")
      ].join(" ").toLowerCase();
      tokens.forEach((token) => {
        if (detail.includes(token)) {
          score += 1;
        }
      });
    });
    return score;
  }

  // plugin.ts
  var UI_DIMENSIONS = { width: 1300, height: 900 };
  penpot.ui.open("Design Discovery Assistant", "https://kickdapie.github.io/designAI/index.html", UI_DIMENSIONS);
  penpot.ui.onMessage((message) => {
    console.log("[Plugin] Received message:", message.type, message);
    switch (message.type) {
      case "ui-ready":
        sendInitialExamples();
        break;
      case "search-examples":
        handleSearch(message.payload?.query ?? "");
        break;
      case "apply-collected-traits":
        handleApply(message);
        break;
      case "resize-window":
        handleResize(message);
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
        summary: "Here are a few starting points\u2014swap your prompt anytime to see more tailored inspiration."
      }
    });
  }
  function handleSearch(query) {
    const results = scoreExamples(query, EXAMPLE_DATASET);
    const summary = buildResultSummary(query, results);
    penpot.ui.sendMessage({
      type: "search-results",
      payload: {
        query,
        results,
        summary
      }
    });
  }
  function handleApply(message) {
    console.log("[Plugin] handleApply called with:", message);
    const traits = message.payload?.traits ?? [];
    console.log("[Plugin] Traits count:", traits.length);
    if (!traits.length) {
      console.log("[Plugin] No traits to apply");
      penpot.ui.sendMessage({
        type: "collection-applied",
        payload: {
          success: false,
          error: "Collect at least one palette, typography, or element before applying."
        }
      });
      return;
    }
    const selection = penpot.selection ?? [];
    console.log("[Plugin] Selection count:", selection.length, selection);
    const paletteTraits = traits.filter(
      (trait) => trait.type === "palette"
    );
    const typographyTraits = traits.filter(
      (trait) => trait.type === "typography"
    );
    const elementTraits = traits.filter(
      (trait) => trait.type === "element"
    );
    const layoutTraits = traits.filter(
      (trait) => trait.type === "layout"
    );
    const hasColors = paletteTraits.length > 0 || elementTraits.some((e) => e.colors && e.colors.length > 0);
    const hasFonts = typographyTraits.length > 0 || elementTraits.some((e) => e.fonts && e.fonts.length > 0);
    if (!selection.length) {
      console.log("[Plugin] No shapes selected");
      let errorMessage = "Please select layers on your canvas first.\n\n";
      if (hasColors && hasFonts) {
        errorMessage += "For this collection, select:\n\u2022 Shapes (rectangles, circles, etc.) to apply colors\n\u2022 Text layers to apply fonts";
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
          error: errorMessage
        }
      });
      return;
    }
    const allColors = [
      ...paletteTraits.flatMap((t) => t.colors),
      ...elementTraits.flatMap((t) => t.colors ?? [])
    ];
    const allFonts = [
      ...typographyTraits.flatMap((t) => t.fonts),
      ...elementTraits.flatMap((t) => t.fonts ?? [])
    ];
    console.log("[Plugin] Applying traits:", {
      paletteCount: paletteTraits.length,
      typographyCount: typographyTraits.length,
      elementCount: elementTraits.length,
      totalColors: allColors.length,
      totalFonts: allFonts.length,
      selectionCount: selection.length
    });
    const appliedColors = allColors.length > 0 ? applyColorsToShapes(selection, allColors) : false;
    const appliedFonts = allFonts.length > 0 ? applyFontsToShapes(selection, allFonts) : false;
    const applied = {
      palette: appliedColors,
      typography: appliedFonts
    };
    console.log("[Plugin] Applied results:", applied);
    const success = applied.palette || applied.typography;
    if (!success) {
      let errorMessage = "Couldn't apply to the selected layers.\n\n";
      const fillable = selection.filter(isFillShape);
      const textLayers = selection.filter((s) => penpot.utils.types.isText(s));
      if (hasColors && hasFonts) {
        if (!fillable.length && !textLayers.length) {
          errorMessage += "Selected layers can't receive colors or fonts.\n\n";
          errorMessage += "Try selecting:\n\u2022 Rectangles, circles, or paths for colors\n\u2022 Text layers for fonts";
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
          error: errorMessage
        }
      });
    } else {
      const appliedParts = [];
      if (appliedColors) appliedParts.push("colors");
      if (appliedFonts) appliedParts.push("fonts");
      const allLayoutHints = [
        ...layoutTraits.flatMap((t) => t.layoutTags),
        ...elementTraits.flatMap((t) => t.layoutHints ?? [])
      ];
      let message2 = `Applied ${appliedParts.join(" and ")} to ${selection.length} layer${selection.length > 1 ? "s" : ""}!`;
      if (allLayoutHints.length > 0) {
        message2 += `

\u{1F4D0} Layout reference: ${allLayoutHints.slice(0, 3).join(" \u2022 ")}`;
        message2 += `

Note: Layout patterns are for reference. Use the colors and fonts as a starting point, then manually arrange your elements to match the layout pattern.`;
      }
      penpot.ui.sendMessage({
        type: "collection-applied",
        payload: {
          success: true,
          message: message2
        }
      });
    }
    console.log("[Plugin] Sent response, success:", success);
  }
  function applyColorsToShapes(shapes, colors) {
    if (!colors.length) return false;
    const fillable = shapes.filter(isFillShape);
    if (!fillable.length) return false;
    fillable.forEach((shape, index) => {
      const color = colors[index % colors.length];
      shape.fills = [
        { fillColor: color, fillOpacity: 1 }
      ];
    });
    return true;
  }
  function applyFontsToShapes(shapes, fonts) {
    if (!fonts.length) return false;
    let applied = false;
    const fontFamily = fonts[0].split(" ")[0];
    shapes.forEach((shape) => {
      if (penpot.utils.types.isText(shape)) {
        shape.fontFamily = fontFamily;
        applied = true;
      }
    });
    return applied;
  }
  function isFillShape(shape) {
    const { types } = penpot.utils;
    return types.isRectangle(shape) || types.isEllipse(shape) || types.isPath(shape) || types.isText(shape);
  }
  function handleResize(message) {
    const { width, height } = message.payload;
    console.log("[Plugin] Resizing window to:", width, height);
    penpot.ui.resize(width, height);
  }
  function buildResultSummary(query, results) {
    if (!results.length) {
      return `I couldn't find a strong match for "${query}". Try adding the page type or mood you're going for.`;
    }
    const highlight = results.slice(0, 3).map((entry) => entry.name).join(", ");
    if (!query.trim()) {
      return `Here are ${results.length} inspiration examples to get you started. Spotlight: ${highlight}.`;
    }
    return `Here are ${results.length} directions inspired by "${query}". Spotlight: ${highlight}. Pick one to collect traits or refine your prompt.`;
  }
})();
