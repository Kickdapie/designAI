/* eslint-disable */
(() => {
  // src/catalog/examples.ts
  var EXAMPLE_DATASET = [
    {
      id: "green-harvest",
      name: "Green Harvest Landing",
      tagline: "Welcoming hero for a farm-to-table service",
      scenario: "Organic grocery delivery startup homepage",
      description: "Soft, friendly illustration with a teal highlight and paired CTA buttons. Uses rounded typography to feel approachable.",
      palette: ["#0AA284", "#F8F4EA", "#FFB85C", "#1E293B"],
      fonts: ["Sora", "Inter"],
      layoutTags: ["Hero", "Two column", "Navigation"],
      thumbnail: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "green-harvest-nav",
          label: "Slim navigation bar",
          description: "Centered nav with logo left and pill CTA on the right using the accent teal.",
          highlight: "Great for product marketing pages",
          trait: {
            id: "green-harvest-nav",
            type: "element",
            label: "Green Harvest navigation",
            sourceExampleId: "green-harvest",
            description: "96px navigation height, horizontal layout, accent-colored pill CTA button.",
            colors: ["#0AA284", "#FFFFFF"],
            fonts: ["Sora 600", "Inter 400"],
            layoutHints: ["Horizontal menu", "Logo left", "CTA right aligned"]
          }
        },
        {
          id: "green-harvest-hero",
          label: "Hero headline stack",
          description: "Bold headline and supporting copy on the left, illustration on the right with overlapping card CTA.",
          highlight: "Pairs well with calm color palettes",
          trait: {
            id: "green-harvest-hero",
            type: "element",
            label: "Green Harvest hero copy",
            sourceExampleId: "green-harvest",
            description: "Left column hero with 56px heading, 18px supporting text, and double CTA buttons.",
            colors: ["#0AA284", "#F8F4EA"],
            fonts: ["Sora 700", "Inter 400"],
            layoutHints: ["Two column hero", "Stacked CTA buttons"]
          }
        },
        {
          id: "green-harvest-cta",
          label: "Primary + secondary CTA pair",
          description: "Rounded buttons with primary teal and outlined secondary using the same hue.",
          highlight: "Good for forms and hero sections",
          trait: {
            id: "green-harvest-cta",
            type: "element",
            label: "Dual CTA buttons",
            sourceExampleId: "green-harvest",
            description: "Primary button uses #0AA284 fill with white text, secondary uses outline with 16px radius.",
            colors: ["#0AA284", "#FFFFFF"],
            fonts: ["Inter 600"],
            layoutHints: ["Horizontal button pair", "16px spacing"]
          }
        }
      ]
    },
    {
      id: "noir-portfolio",
      name: "Noir Portfolio",
      tagline: "High contrast layout for creative portfolios",
      scenario: "Personal brand landing page",
      description: "Dark background with electric accent, asymmetric grid aligning imagery with concise copy.",
      palette: ["#0F172A", "#60A5FA", "#F8FAFC", "#1F2937"],
      fonts: ["Space Grotesk", "Work Sans"],
      layoutTags: ["Portfolio", "Grid", "Dark mode"],
      thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "noir-portfolio-grid",
          label: "Asymmetric project grid",
          description: "Tall left column for hero portrait, staggered cards for project highlights.",
          highlight: "Ideal for showcasing visual work",
          trait: {
            id: "noir-portfolio-grid",
            type: "element",
            label: "Noir project grid",
            sourceExampleId: "noir-portfolio",
            description: "Three-column CSS grid with 24px gaps, hero tile spans two rows.",
            colors: ["#0F172A", "#60A5FA"],
            layoutHints: ["3-column grid", "Hero tile span", "24px gaps"]
          }
        },
        {
          id: "noir-portfolio-header",
          label: "Minimal header",
          description: "Top-left logotype with small nav on the right, accent underline on hover.",
          highlight: "Great for dark UI",
          trait: {
            id: "noir-portfolio-header",
            type: "element",
            label: "Noir minimal header",
            sourceExampleId: "noir-portfolio",
            description: "72px header height, nav spacing 32px, accent underline on active state.",
            colors: ["#0F172A", "#60A5FA", "#F8FAFC"],
            fonts: ["Space Grotesk 600"],
            layoutHints: ["Right aligned nav", "Hover underline"]
          }
        },
        {
          id: "noir-portfolio-hero",
          label: "Elevated intro block",
          description: "Large headline next to portrait with angled accent stripe.",
          highlight: "Works for confident, bold messaging",
          trait: {
            id: "noir-portfolio-hero",
            type: "element",
            label: "Noir hero intro",
            sourceExampleId: "noir-portfolio",
            description: "Display headline at 64px, supporting copy 18px, accent stripe using #60A5FA.",
            colors: ["#60A5FA", "#0F172A"],
            fonts: ["Space Grotesk 700", "Work Sans 400"],
            layoutHints: ["Side-by-side hero", "Accent stripe"]
          }
        }
      ]
    },
    {
      id: "calm-wellness",
      name: "Calm Wellness Studio",
      tagline: "Clean editorial layout for service sites",
      scenario: "Mindfulness studio marketing page",
      description: "Plenty of breathing room, gentle gradient background, three-card service layout with soft imagery.",
      palette: ["#B1C5E8", "#F5F7FB", "#1F3B73", "#F4B9A6"],
      fonts: ["Manrope", "Source Serif"],
      layoutTags: ["Services", "Cards", "Gradient"],
      thumbnail: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "calm-wellness-cards",
          label: "Floating service cards",
          description: "Three cards with soft drop shadow, 24px corner radius, icon + headline + copy.",
          highlight: "Great for feature highlights",
          trait: {
            id: "calm-wellness-cards",
            type: "element",
            label: "Calm service cards",
            sourceExampleId: "calm-wellness",
            description: "Card width 280px, 32px vertical rhythm, subtle 12px blur shadow.",
            colors: ["#F5F7FB", "#B1C5E8", "#1F3B73"],
            fonts: ["Manrope 600", "Source Serif 400"],
            layoutHints: ["3-column card grid", "Soft shadow"]
          }
        },
        {
          id: "calm-wellness-hero",
          label: "Gradient hero",
          description: "Full-width gradient with centered copy and subtle background illustration.",
          highlight: "Helps set calm mood",
          trait: {
            id: "calm-wellness-hero",
            type: "element",
            label: "Calm gradient hero",
            sourceExampleId: "calm-wellness",
            description: "Centered hero with 48px heading, gradient from #B1C5E8 to #F4B9A6, 40px padding.",
            colors: ["#B1C5E8", "#F4B9A6", "#1F3B73"],
            fonts: ["Manrope 700", "Source Serif 400"],
            layoutHints: ["Centered hero", "Soft gradient"]
          }
        },
        {
          id: "calm-wellness-cta",
          label: "Stacked newsletter CTA",
          description: "Rounded input + button pair with supporting reassurance text.",
          highlight: "Great for lead capture",
          trait: {
            id: "calm-wellness-cta",
            type: "element",
            label: "Calm newsletter CTA",
            sourceExampleId: "calm-wellness",
            description: "Input width 320px, pill button using #1F3B73, supporting text at 14px.",
            colors: ["#1F3B73", "#F5F7FB"],
            fonts: ["Manrope 500"],
            layoutHints: ["Input + button", "Stacked copy"]
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
  var UI_DIMENSIONS = { width: 960, height: 740 };
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
    if (!selection.length) {
      console.log("[Plugin] No shapes selected");
      penpot.ui.sendMessage({
        type: "collection-applied",
        payload: {
          success: false,
          error: "Select one or more layers on the canvas so I know where to apply the traits."
        }
      });
      return;
    }
    const paletteTraits = traits.filter(
      (trait) => trait.type === "palette"
    );
    const typographyTraits = traits.filter(
      (trait) => trait.type === "typography"
    );
    console.log("[Plugin] Applying traits:", {
      paletteCount: paletteTraits.length,
      typographyCount: typographyTraits.length,
      selectionCount: selection.length
    });
    const applied = {
      palette: applyPaletteTraits(selection, paletteTraits),
      typography: applyTypographyTraits(selection, typographyTraits)
    };
    console.log("[Plugin] Applied results:", applied);
    const success = applied.palette || applied.typography;
    penpot.ui.sendMessage({
      type: "collection-applied",
      payload: {
        success,
        error: success ? void 0 : "I couldn't find a compatible layer\u2014try selecting shapes or text before applying."
      }
    });
    console.log("[Plugin] Sent response, success:", success);
  }
  function applyPaletteTraits(shapes, traits) {
    if (!traits.length) return false;
    const fillable = shapes.filter(isFillShape);
    if (!fillable.length) return false;
    const colors = traits.flatMap((trait) => trait.colors);
    if (!colors.length) return false;
    fillable.forEach((shape, index) => {
      const color = colors[index % colors.length];
      shape.fills = [
        { fillColor: color, fillOpacity: 1 }
      ];
    });
    return true;
  }
  function applyTypographyTraits(shapes, traits) {
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
