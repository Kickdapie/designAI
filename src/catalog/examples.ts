import { Example } from "../types/catalog";

export const EXAMPLE_DATASET: Example[] = [
  {
    id: "green-harvest",
    name: "Green Harvest Landing",
    tagline: "Welcoming hero for a farm-to-table service",
    scenario: "Organic grocery delivery startup homepage",
    description:
      "Soft, friendly illustration with a teal highlight and paired CTA buttons. Uses rounded typography to feel approachable.",
    palette: ["#0AA284", "#F8F4EA", "#FFB85C", "#1E293B"],
    fonts: ["Sora", "Inter"],
    layoutTags: ["Hero", "Two column", "Navigation"],
    thumbnail:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=60",
    preview:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=900&q=60",
    elements: [
      {
        id: "green-harvest-nav",
        label: "Slim navigation bar",
        description:
          "Centered nav with logo left and pill CTA on the right using the accent teal.",
        highlight: "Great for product marketing pages",
        trait: {
          id: "green-harvest-nav",
          type: "element",
          label: "Green Harvest navigation",
          sourceExampleId: "green-harvest",
          description:
            "96px navigation height, horizontal layout, accent-colored pill CTA button.",
          colors: ["#0AA284", "#FFFFFF"],
          fonts: ["Sora 600", "Inter 400"],
          layoutHints: ["Horizontal menu", "Logo left", "CTA right aligned"],
        },
      },
      {
        id: "green-harvest-hero",
        label: "Hero headline stack",
        description:
          "Bold headline and supporting copy on the left, illustration on the right with overlapping card CTA.",
        highlight: "Pairs well with calm color palettes",
        trait: {
          id: "green-harvest-hero",
          type: "element",
          label: "Green Harvest hero copy",
          sourceExampleId: "green-harvest",
          description:
            "Left column hero with 56px heading, 18px supporting text, and double CTA buttons.",
          colors: ["#0AA284", "#F8F4EA"],
          fonts: ["Sora 700", "Inter 400"],
          layoutHints: ["Two column hero", "Stacked CTA buttons"],
        },
      },
      {
        id: "green-harvest-cta",
        label: "Primary + secondary CTA pair",
        description:
          "Rounded buttons with primary teal and outlined secondary using the same hue.",
        highlight: "Good for forms and hero sections",
        trait: {
          id: "green-harvest-cta",
          type: "element",
          label: "Dual CTA buttons",
          sourceExampleId: "green-harvest",
          description:
            "Primary button uses #0AA284 fill with white text, secondary uses outline with 16px radius.",
          colors: ["#0AA284", "#FFFFFF"],
          fonts: ["Inter 600"],
          layoutHints: ["Horizontal button pair", "16px spacing"],
        },
      },
    ],
  },
  {
    id: "noir-portfolio",
    name: "Noir Portfolio",
    tagline: "High contrast layout for creative portfolios",
    scenario: "Personal brand landing page",
    description:
      "Dark background with electric accent, asymmetric grid aligning imagery with concise copy.",
    palette: ["#0F172A", "#60A5FA", "#F8FAFC", "#1F2937"],
    fonts: ["Space Grotesk", "Work Sans"],
    layoutTags: ["Portfolio", "Grid", "Dark mode"],
    thumbnail:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=60",
    preview:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=60",
    elements: [
      {
        id: "noir-portfolio-grid",
        label: "Asymmetric project grid",
        description:
          "Tall left column for hero portrait, staggered cards for project highlights.",
        highlight: "Ideal for showcasing visual work",
        trait: {
          id: "noir-portfolio-grid",
          type: "element",
          label: "Noir project grid",
          sourceExampleId: "noir-portfolio",
          description:
            "Three-column CSS grid with 24px gaps, hero tile spans two rows.",
          colors: ["#0F172A", "#60A5FA"],
          layoutHints: ["3-column grid", "Hero tile span", "24px gaps"],
        },
      },
      {
        id: "noir-portfolio-header",
        label: "Minimal header",
        description:
          "Top-left logotype with small nav on the right, accent underline on hover.",
        highlight: "Great for dark UI",
        trait: {
          id: "noir-portfolio-header",
          type: "element",
          label: "Noir minimal header",
          sourceExampleId: "noir-portfolio",
          description:
            "72px header height, nav spacing 32px, accent underline on active state.",
          colors: ["#0F172A", "#60A5FA", "#F8FAFC"],
          fonts: ["Space Grotesk 600"],
          layoutHints: ["Right aligned nav", "Hover underline"],
        },
      },
      {
        id: "noir-portfolio-hero",
        label: "Elevated intro block",
        description:
          "Large headline next to portrait with angled accent stripe.",
        highlight: "Works for confident, bold messaging",
        trait: {
          id: "noir-portfolio-hero",
          type: "element",
          label: "Noir hero intro",
          sourceExampleId: "noir-portfolio",
          description:
            "Display headline at 64px, supporting copy 18px, accent stripe using #60A5FA.",
          colors: ["#60A5FA", "#0F172A"],
          fonts: ["Space Grotesk 700", "Work Sans 400"],
          layoutHints: ["Side-by-side hero", "Accent stripe"],
        },
      },
    ],
  },
  {
    id: "calm-wellness",
    name: "Calm Wellness Studio",
    tagline: "Clean editorial layout for service sites",
    scenario: "Mindfulness studio marketing page",
    description:
      "Plenty of breathing room, gentle gradient background, three-card service layout with soft imagery.",
    palette: ["#B1C5E8", "#F5F7FB", "#1F3B73", "#F4B9A6"],
    fonts: ["Manrope", "Source Serif"],
    layoutTags: ["Services", "Cards", "Gradient"],
    thumbnail:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=400&q=60",
    preview:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=60",
    elements: [
      {
        id: "calm-wellness-cards",
        label: "Floating service cards",
        description:
          "Three cards with soft drop shadow, 24px corner radius, icon + headline + copy.",
        highlight: "Great for feature highlights",
        trait: {
          id: "calm-wellness-cards",
          type: "element",
          label: "Calm service cards",
          sourceExampleId: "calm-wellness",
          description:
            "Card width 280px, 32px vertical rhythm, subtle 12px blur shadow.",
          colors: ["#F5F7FB", "#B1C5E8", "#1F3B73"],
          fonts: ["Manrope 600", "Source Serif 400"],
          layoutHints: ["3-column card grid", "Soft shadow"],
        },
      },
      {
        id: "calm-wellness-hero",
        label: "Gradient hero",
        description:
          "Full-width gradient with centered copy and subtle background illustration.",
        highlight: "Helps set calm mood",
        trait: {
          id: "calm-wellness-hero",
          type: "element",
          label: "Calm gradient hero",
          sourceExampleId: "calm-wellness",
          description:
            "Centered hero with 48px heading, gradient from #B1C5E8 to #F4B9A6, 40px padding.",
          colors: ["#B1C5E8", "#F4B9A6", "#1F3B73"],
          fonts: ["Manrope 700", "Source Serif 400"],
          layoutHints: ["Centered hero", "Soft gradient"],
        },
      },
      {
        id: "calm-wellness-cta",
        label: "Stacked newsletter CTA",
        description:
          "Rounded input + button pair with supporting reassurance text.",
        highlight: "Great for lead capture",
        trait: {
          id: "calm-wellness-cta",
          type: "element",
          label: "Calm newsletter CTA",
          sourceExampleId: "calm-wellness",
          description:
            "Input width 320px, pill button using #1F3B73, supporting text at 14px.",
          colors: ["#1F3B73", "#F5F7FB"],
          fonts: ["Manrope 500"],
          layoutHints: ["Input + button", "Stacked copy"],
        },
      },
    ],
  },
];

export const DEFAULT_RESULTS = EXAMPLE_DATASET.slice(0, 3);


