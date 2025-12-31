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
    },
    // Additional examples converted from commented format
    {
      id: "designer-coder-hero",
      name: "Split identity hero",
      tagline: "Clearly communicates hybrid skillset",
      scenario: "Personal portfolio website",
      description: "Full-width hero split vertically to showcase designer and developer identities through typography and imagery.",
      palette: ["#FFFFFF", "#000000", "#F2C94C", "#EB5757"],
      fonts: ["Sans-serif", "Monospace"],
      layoutTags: ["Vertical split layout", "Centered portrait", "Asymmetric typography"],
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=60",
      elements: [
        {
          id: "designer-coder-hero",
          label: "Designer\u2013coder split hero",
          description: "Centered split hero with large typographic labels, half illustrated portrait on left and photographic portrait on right, strong contrast and whitespace.",
          highlight: "Clearly communicates hybrid skillset",
          trait: {
            id: "designer-coder-hero",
            type: "element",
            label: "Designer\u2013coder split hero",
            sourceExampleId: "designer-coder-portfolio",
            description: "Centered split hero with large typographic labels, half illustrated portrait on left and photographic portrait on right, strong contrast and whitespace.",
            colors: ["#FFFFFF", "#000000", "#F2C94C", "#EB5757"],
            fonts: ["Sans-serif", "Monospace"],
            layoutHints: [
              "Vertical split layout",
              "Centered portrait",
              "Asymmetric typography"
            ]
          }
        }
      ]
    },
    {
      id: "writer-portfolio-about-hero",
      name: "Personal about hero",
      tagline: "Builds credibility and personal connection",
      scenario: "Writer's portfolio about page",
      description: "Two-column about section with portrait image on the left and large editorial headline on the right.",
      palette: ["#FFFFFF", "#F6F1EE", "#1A1A1A"],
      fonts: ["Serif", "Sans-serif"],
      layoutTags: ["Two-column layout", "Portrait image left", "Large headline right", "Centered vertical rhythm"],
      thumbnail: "https://images.unsplash.com/photo-1507207611509-ec012433a691?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1507207611509-ec012433a691?auto=format&fit=crop&w=800&q=60",
      elements: [
        {
          id: "writer-portfolio-about-hero",
          label: "Writer about hero",
          description: "Wide content area with left-aligned photo and right-aligned serif headline, generous vertical spacing and soft neutral background.",
          highlight: "Builds credibility and personal connection",
          trait: {
            id: "writer-portfolio-about-hero",
            type: "element",
            label: "Writer about hero",
            sourceExampleId: "ashley-cortez-portfolio",
            description: "Wide content area with left-aligned photo and right-aligned serif headline, generous vertical spacing and soft neutral background.",
            colors: ["#FFFFFF", "#F6F1EE", "#1A1A1A"],
            fonts: ["Serif", "Sans-serif"],
            layoutHints: [
              "Two-column layout",
              "Portrait image left",
              "Large headline right",
              "Centered vertical rhythm"
            ]
          }
        }
      ]
    },
    {
      id: "academic-profile-hero",
      name: "Academic profile hero",
      tagline: "Balances professionalism with approachability",
      scenario: "Academic profile page",
      description: "Clean academic landing section with circular portrait, name headline, short bio, and prominent category navigation buttons.",
      palette: ["#FFFFFF", "#B6D76A", "#F2B24C", "#9EDADF", "#D0D0D0", "#1A1A1A"],
      fonts: ["Sans-serif"],
      layoutTags: ["Two-column layout", "Circular portrait image", "Large name headline", "Short bio paragraph", "Circular navigation buttons"],
      thumbnail: "https://images.unsplash.com/photo-1523875194686-e310a928370f?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1523875194686-e310a928370f?auto=format&fit=crop&w=800&q=60",
      elements: [
        {
          id: "academic-profile-hero",
          label: "Researcher profile hero",
          description: "Centered layout with large circular portrait on the left, bold name headline and short bio on the right, followed by color-coded circular navigation buttons.",
          highlight: "Balances professionalism with approachability",
          trait: {
            id: "academic-profile-hero",
            type: "element",
            label: "Researcher profile hero",
            sourceExampleId: "dalya-baron-portfolio",
            description: "Centered layout with large circular portrait on the left, bold name headline and short bio on the right, followed by color-coded circular navigation buttons.",
            colors: ["#FFFFFF", "#B6D76A", "#F2B24C", "#9EDADF", "#D0D0D0", "#1A1A1A"],
            fonts: ["Sans-serif"],
            layoutHints: [
              "Two-column layout",
              "Circular portrait image",
              "Large name headline",
              "Short bio paragraph",
              "Circular navigation buttons"
            ]
          }
        }
      ]
    },
    {
      id: "default-blog-about-layout",
      name: "Classic blog about page",
      tagline: "Simple and familiar content structure",
      scenario: "Blog website about page",
      description: "Traditional blog-style layout with main content column, inline profile image, and right sidebar widgets.",
      palette: ["#FFFFFF", "#000000", "#F5F5F5", "#CCCCCC"],
      fonts: ["Serif", "Sans-serif"],
      layoutTags: ["Single main content column", "Right sidebar", "Inline profile image", "Long-form text", "Widget-based layout"],
      thumbnail: "https://images.unsplash.com/photo-1499750310107-5fcd61f872a6?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1499750310107-5fcd61f872a6?auto=format&fit=crop&w=800&q=60",
      elements: [
        {
          id: "default-blog-about-layout",
          label: "Blog about layout",
          description: "Left-aligned article content with heading and long-form text, embedded profile image floated within content, and a persistent right sidebar containing search and metadata widgets.",
          highlight: "Simple and familiar content structure",
          trait: {
            id: "default-blog-about-layout",
            type: "element",
            label: "Blog about layout",
            sourceExampleId: "thomas-frank-wordpress",
            description: "Left-aligned article content with heading and long-form text, embedded profile image floated within content, and a persistent right sidebar containing search and metadata widgets.",
            colors: ["#FFFFFF", "#000000", "#F5F5F5", "#CCCCCC"],
            fonts: ["Serif", "Sans-serif"],
            layoutHints: [
              "Single main content column",
              "Right sidebar",
              "Inline profile image",
              "Long-form text",
              "Widget-based layout"
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

  // src/utils/layoutParser.ts
  function parseLayoutHints(hints) {
    if (!hints || hints.length === 0) {
      return { type: "unknown" };
    }
    const normalizedHints = hints.map((h) => h.toLowerCase());
    if (normalizedHints.some(
      (h) => h.includes("two-column") || h.includes("two column") || h.includes("2-column") || h.includes("2 column")
    )) {
      const columnMatch = normalizedHints.find(
        (h) => /(\d+)[\s-]?column/.test(h)
      );
      const columns = columnMatch ? parseInt(columnMatch.match(/(\d+)/)?.[1] || "2") : 2;
      return { type: "twoColumn", columns, gap: 40 };
    }
    if (normalizedHints.some(
      (h) => h.includes("vertical split") || h.includes("vertical-split") || h.includes("split layout")
    )) {
      return { type: "verticalSplit", gap: 0 };
    }
    if (normalizedHints.some(
      (h) => h.includes("hero") && (h.includes("stack") || h.includes("headline"))
    )) {
      return { type: "heroStack", gap: 20 };
    }
    if (normalizedHints.some(
      (h) => h.includes("left") || h.includes("right") || h.includes("left-aligned") || h.includes("right-aligned")
    )) {
      return { type: "leftRight", gap: 40 };
    }
    return { type: "unknown" };
  }

  // src/utils/layoutGenerator.ts
  function generateLayoutSpecs(pattern, viewport, colors, fonts) {
    if (pattern.type === "unknown") {
      return [];
    }
    const specs = [];
    const padding = 40;
    const usableWidth = viewport.width * 0.8;
    const usableHeight = viewport.height * 0.6;
    const startX = viewport.centerX - usableWidth / 2;
    const startY = viewport.centerY - usableHeight / 2;
    switch (pattern.type) {
      case "twoColumn": {
        const { columns, gap } = pattern;
        const columnWidth = (usableWidth - gap * (columns - 1)) / columns;
        const columnHeight = 400;
        for (let i = 0; i < columns; i++) {
          const x = startX + i * (columnWidth + gap);
          const color = colors[i % colors.length] || colors[0] || "#E2E8F0";
          specs.push({
            type: "rectangle",
            x,
            y: startY,
            width: columnWidth,
            height: columnHeight,
            color
          });
          if (fonts.length > 0) {
            specs.push({
              type: "text",
              x: x + 20,
              y: startY + 20,
              width: columnWidth - 40,
              height: 60,
              font: fonts[i % fonts.length] || fonts[0],
              text: i === 0 ? "Headline" : "Content",
              color: colors[colors.length - 1] || "#1A1A1A"
            });
          }
        }
        break;
      }
      case "verticalSplit": {
        const splitX = viewport.centerX;
        const leftWidth = usableWidth / 2;
        const rightWidth = usableWidth / 2;
        const sectionHeight = 400;
        specs.push({
          type: "rectangle",
          x: startX,
          y: startY,
          width: leftWidth,
          height: sectionHeight,
          color: colors[0] || "#E2E8F0"
        });
        if (fonts.length > 0) {
          specs.push({
            type: "text",
            x: startX + 20,
            y: startY + 20,
            width: leftWidth - 40,
            height: 60,
            font: fonts[0],
            text: "Left Section",
            color: colors[colors.length - 1] || "#1A1A1A"
          });
        }
        specs.push({
          type: "rectangle",
          x: splitX,
          y: startY,
          width: rightWidth,
          height: sectionHeight,
          color: colors[1] || colors[0] || "#F1F5F9"
        });
        if (fonts.length > 1) {
          specs.push({
            type: "text",
            x: splitX + 20,
            y: startY + 20,
            width: rightWidth - 40,
            height: 60,
            font: fonts[1] || fonts[0],
            text: "Right Section",
            color: colors[colors.length - 1] || "#1A1A1A"
          });
        }
        break;
      }
      case "heroStack": {
        const { gap } = pattern;
        const stackWidth = usableWidth;
        const textHeight = 80;
        let currentY = startY;
        if (fonts.length > 0) {
          specs.push({
            type: "text",
            x: startX,
            y: currentY,
            width: stackWidth,
            height: textHeight * 1.5,
            font: fonts[0],
            text: "Hero Headline",
            color: colors[0] || "#1A1A1A"
          });
          currentY += textHeight * 1.5 + gap;
          if (fonts.length > 1) {
            specs.push({
              type: "text",
              x: startX,
              y: currentY,
              width: stackWidth,
              height: textHeight,
              font: fonts[1],
              text: "Supporting copy text",
              color: colors[1] || colors[0] || "#4A5568"
            });
          }
        } else {
          specs.push({
            type: "rectangle",
            x: startX,
            y: startY,
            width: stackWidth,
            height: 300,
            color: colors[0] || "#E2E8F0"
          });
        }
        break;
      }
      case "leftRight": {
        const leftWidth = usableWidth * 0.5 - pattern.gap / 2;
        const rightWidth = usableWidth * 0.5 - pattern.gap / 2;
        const sectionHeight = 400;
        specs.push({
          type: "rectangle",
          x: startX,
          y: startY,
          width: leftWidth,
          height: sectionHeight,
          color: colors[0] || "#E2E8F0"
        });
        if (fonts.length > 0) {
          specs.push({
            type: "text",
            x: startX + 20,
            y: startY + 20,
            width: leftWidth - 40,
            height: 60,
            font: fonts[0],
            text: "Left Content",
            color: colors[colors.length - 1] || "#1A1A1A"
          });
        }
        specs.push({
          type: "rectangle",
          x: startX + leftWidth + pattern.gap,
          y: startY,
          width: rightWidth,
          height: sectionHeight,
          color: colors[1] || colors[0] || "#F1F5F9"
        });
        if (fonts.length > 1) {
          specs.push({
            type: "text",
            x: startX + leftWidth + pattern.gap + 20,
            y: startY + 20,
            width: rightWidth - 40,
            height: 60,
            font: fonts[1] || fonts[0],
            text: "Right Content",
            color: colors[colors.length - 1] || "#1A1A1A"
          });
        }
        break;
      }
    }
    return specs;
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
    const allLayoutHints = [
      ...layoutTraits.flatMap((t) => t.layoutTags),
      ...elementTraits.flatMap((t) => t.layoutHints ?? [])
    ];
    const hasLayoutHints = allLayoutHints.length > 0;
    if (!selection.length && !hasLayoutHints) {
      console.log("[Plugin] No shapes selected and no layout hints");
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
      layoutCount: layoutTraits.length,
      totalColors: allColors.length,
      totalFonts: allFonts.length,
      layoutHintsCount: allLayoutHints.length,
      selectionCount: selection.length
    });
    let layoutCreated = false;
    let createdShapes = [];
    if (allLayoutHints.length > 0) {
      const pattern = parseLayoutHints(allLayoutHints);
      if (pattern.type !== "unknown") {
        const viewport = getViewportDimensions();
        const layoutSpecs = generateLayoutSpecs(pattern, viewport, allColors, allFonts);
        if (layoutSpecs.length > 0) {
          if (selection.length === 0 || !arrangeExistingShapes(selection, layoutSpecs)) {
            createdShapes = createLayoutShapes(layoutSpecs, allColors, allFonts);
            layoutCreated = createdShapes.length > 0;
            if (layoutCreated) {
              applyColorsToShapes(createdShapes, allColors);
              applyFontsToShapes(createdShapes, allFonts);
            }
          } else {
            layoutCreated = true;
            applyColorsToShapes(selection, allColors);
            applyFontsToShapes(selection, allFonts);
          }
        }
      }
    }
    let appliedColors = false;
    let appliedFonts = false;
    if (!layoutCreated && selection.length > 0) {
      appliedColors = allColors.length > 0 ? applyColorsToShapes(selection, allColors) : false;
      appliedFonts = allFonts.length > 0 ? applyFontsToShapes(selection, allFonts) : false;
    } else if (layoutCreated) {
      appliedColors = allColors.length > 0;
      appliedFonts = allFonts.length > 0;
    }
    const applied = {
      palette: appliedColors,
      typography: appliedFonts,
      layout: layoutCreated
    };
    console.log("[Plugin] Applied results:", applied);
    const success = applied.palette || applied.typography || applied.layout;
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
      if (layoutCreated) appliedParts.push("layout");
      const shapeCount = layoutCreated ? createdShapes.length : selection.length;
      let message2 = `Applied ${appliedParts.join(", ")} to ${shapeCount} layer${shapeCount > 1 ? "s" : ""}!`;
      if (layoutCreated) {
        message2 += `

\u2728 Layout created on your canvas with ${shapeCount} element${shapeCount > 1 ? "s" : ""}.`;
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
  function getViewportDimensions() {
    try {
      const viewport = penpot.viewport;
      const center = viewport.center;
      const centerX = center?.x ?? 600;
      const centerY = center?.y ?? 400;
      const zoom = viewport.zoom ?? 1;
      const defaultWidth = 1200;
      const defaultHeight = 800;
      return {
        width: defaultWidth,
        height: defaultHeight,
        centerX,
        centerY
      };
    } catch (error) {
      console.error("[Plugin] Error getting viewport:", error);
      return {
        width: 1200,
        height: 800,
        centerX: 600,
        centerY: 400
      };
    }
  }
  function createLayoutShapes(layoutSpecs, colors, fonts) {
    const createdShapes = [];
    try {
      for (const spec of layoutSpecs) {
        if (spec.type === "rectangle") {
          const rect = penpot.createRectangle();
          rect.x = spec.x;
          rect.y = spec.y;
          try {
            rect.width = spec.width;
            rect.height = spec.height;
          } catch (e) {
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
          text.x = spec.x;
          text.y = spec.y;
          try {
            text.width = spec.width;
            text.height = spec.height;
          } catch (e) {
            console.warn("[Plugin] Could not set text dimensions, using auto-size");
          }
          if (spec.font) {
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
  function arrangeExistingShapes(selection, layoutSpecs) {
    if (selection.length === 0 || layoutSpecs.length === 0) {
      return false;
    }
    if (selection.length !== layoutSpecs.length) {
      return false;
    }
    try {
      for (let i = 0; i < selection.length && i < layoutSpecs.length; i++) {
        const shape = selection[i];
        const spec = layoutSpecs[i];
        shape.x = spec.x;
        shape.y = spec.y;
        try {
          shape.width = spec.width;
          shape.height = spec.height;
        } catch (e) {
        }
      }
      return true;
    } catch (error) {
      console.error("[Plugin] Error arranging shapes:", error);
      return false;
    }
  }
})();
