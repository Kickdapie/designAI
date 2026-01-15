import type { Example } from "../types/catalog";

export const EXAMPLE_DATASET: Example[] = [
  {
    id: "calm-app-hero",
    name: "Calm hero headline stack",
    tagline: "Pairs well with calm color palettes",
    scenario: "Hero Section",
    description:
      "Bold headline and supporting copy on the left, illustration on the right with overlapping card CTA.",
    palette: ["#F7F4F1", "#A8C5B8", "#4A6B5E", "#2E2E2E"],
    fonts: ["Serif", "Sans-serif"],
    layoutTags: ["Hero headline stack", "Left-aligned text", "Right illustration", "Overlapping CTA card"],
    thumbnail:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=400&q=60",
    preview:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=60",
    elements: [
      {
        id: "calm-app-hero-headline",
        label: "Hero headline stack",
        description:
          "Bold headline and supporting copy on the left, illustration on the right with overlapping card CTA.",
        highlight: "Pairs well with calm color palettes",
        trait: {
          id: "calm-app-hero-headline",
          type: "element",
          label: "Hero headline stack",
          sourceExampleId: "calm-app",
          description:
            "Bold headline and supporting copy on the left, illustration on the right with overlapping card CTA.",
          colors: ["#F7F4F1", "#A8C5B8", "#4A6B5E", "#2E2E2E"],
          fonts: ["Serif", "Sans-serif"],
          layoutHints: [
            "Hero headline stack",
            "Left-aligned text",
            "Right illustration",
            "Overlapping CTA card",
          ],
        },
      },
    ],
  },
  // Additional examples converted from commented format
  {
    id: "designer-coder-hero",
    name: "Split identity hero",
    tagline: "Clearly communicates hybrid skillset",
    scenario: "Personal portfolio website",
    description:
      "Full-width hero split vertically to showcase designer and developer identities through typography and imagery.",
    palette: ["#FFFFFF", "#000000", "#F2C94C", "#EB5757"],
    fonts: ["Sans-serif", "Monospace"],
    layoutTags: ["Vertical split layout", "Centered portrait", "Asymmetric typography"],
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=60",
    preview: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=60",
    elements: [
      {
        id: "designer-coder-hero",
        label: "Designer–coder split hero",
        description:
          "Centered split hero with large typographic labels, half illustrated portrait on left and photographic portrait on right, strong contrast and whitespace.",
        highlight: "Clearly communicates hybrid skillset",
        trait: {
          id: "designer-coder-hero",
          type: "element",
          label: "Designer–coder split hero",
          sourceExampleId: "designer-coder-portfolio",
          description:
            "Centered split hero with large typographic labels, half illustrated portrait on left and photographic portrait on right, strong contrast and whitespace.",
          colors: ["#FFFFFF", "#000000", "#F2C94C", "#EB5757"],
          fonts: ["Sans-serif", "Monospace"],
          layoutHints: [
            "Vertical split layout",
            "Centered portrait",
            "Asymmetric typography",
          ],
        },
      },
    ],
  },
  {
    id: "writer-portfolio-about-hero",
    name: "Personal about hero",
    tagline: "Builds credibility and personal connection",
    scenario: "Writer's portfolio about page",
    description:
      "Two-column about section with portrait image on the left and large editorial headline on the right.",
    palette: ["#FFFFFF", "#F6F1EE", "#1A1A1A"],
    fonts: ["Serif", "Sans-serif"],
    layoutTags: ["Two-column layout", "Portrait image left", "Large headline right", "Centered vertical rhythm"],
    thumbnail: "images/ashley-cortez.jpg",
    preview: "images/ashley-cortez.jpg",
    elements: [
      {
        id: "writer-portfolio-about-hero",
        label: "Writer about hero",
        description:
          "Wide content area with left-aligned photo and right-aligned serif headline, generous vertical spacing and soft neutral background.",
        highlight: "Builds credibility and personal connection",
        trait: {
          id: "writer-portfolio-about-hero",
          type: "element",
          label: "Writer about hero",
          sourceExampleId: "ashley-cortez-portfolio",
          description:
            "Wide content area with left-aligned photo and right-aligned serif headline, generous vertical spacing and soft neutral background.",
          colors: ["#FFFFFF", "#F6F1EE", "#1A1A1A"],
          fonts: ["Serif", "Sans-serif"],
          layoutHints: [
            "Two-column layout",
            "Portrait image left",
            "Large headline right",
            "Centered vertical rhythm",
          ],
        },
      },
    ],
  },
  {
    id: "academic-profile-hero",
    name: "Academic profile hero",
    tagline: "Balances professionalism with approachability",
    scenario: "Academic profile page",
    description:
      "Clean academic landing section with circular portrait, name headline, short bio, and prominent category navigation buttons.",
    palette: ["#FFFFFF", "#B6D76A", "#F2B24C", "#9EDADF", "#D0D0D0", "#1A1A1A"],
    fonts: ["Sans-serif"],
    layoutTags: ["Two-column layout", "Circular portrait image", "Large name headline", "Short bio paragraph", "Circular navigation buttons"],
    thumbnail: "images/dalya-baron.jpg",
    preview: "images/dalya-baron.jpg",
    elements: [
      {
        id: "academic-profile-hero",
        label: "Researcher profile hero",
        description:
          "Centered layout with large circular portrait on the left, bold name headline and short bio on the right, followed by color-coded circular navigation buttons.",
        highlight: "Balances professionalism with approachability",
        trait: {
          id: "academic-profile-hero",
          type: "element",
          label: "Researcher profile hero",
          sourceExampleId: "dalya-baron-portfolio",
          description:
            "Centered layout with large circular portrait on the left, bold name headline and short bio on the right, followed by color-coded circular navigation buttons.",
          colors: ["#FFFFFF", "#B6D76A", "#F2B24C", "#9EDADF", "#D0D0D0", "#1A1A1A"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Two-column layout",
            "Circular portrait image",
            "Large name headline",
            "Short bio paragraph",
            "Circular navigation buttons",
          ],
        },
      },
    ],
  },
  {
    id: "default-blog-about-layout",
    name: "Classic blog about page",
    tagline: "Simple and familiar content structure",
    scenario: "Blog website about page",
    description:
      "Traditional blog-style layout with main content column, inline profile image, and right sidebar widgets.",
    palette: ["#FFFFFF", "#000000", "#F5F5F5", "#CCCCCC"],
    fonts: ["Serif", "Sans-serif"],
    layoutTags: ["Single main content column", "Right sidebar", "Inline profile image", "Long-form text", "Widget-based layout"],
    thumbnail: "images/Default-Theme.jpg",
    preview: "images/Default-Theme.jpg",
    elements: [
      {
        id: "default-blog-about-layout",
        label: "Blog about layout",
        description:
          "Left-aligned article content with heading and long-form text, embedded profile image floated within content, and a persistent right sidebar containing search and metadata widgets.",
        highlight: "Simple and familiar content structure",
        trait: {
          id: "default-blog-about-layout",
          type: "element",
          label: "Blog about layout",
          sourceExampleId: "thomas-frank-wordpress",
          description:
            "Left-aligned article content with heading and long-form text, embedded profile image floated within content, and a persistent right sidebar containing search and metadata widgets.",
          colors: ["#FFFFFF", "#000000", "#F5F5F5", "#CCCCCC"],
          fonts: ["Serif", "Sans-serif"],
          layoutHints: [
            "Single main content column",
            "Right sidebar",
            "Inline profile image",
            "Long-form text",
            "Widget-based layout",
          ],
        },
      },
    ],
  },
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
  {
    id: "gradient-cloud-landing-hero",
    name: "Gradient cloud landing page",
    tagline: "Bold hero typography floating above layered, colorful cloud shapes",
    scenario: "SaaS product landing page",
    description:
      "A modern landing page design with a smooth purple-to-blue gradient background, layered cloud shapes at the bottom, and a strong typographic hero section optimized for conversions.",
    palette: ["#2E2B6F", "#3B3A8F", "#6A3F7A", "#C63A3A", "#E96B2C", "#F5B23C", "#FFFFFF"],
    fonts: ["Sans-serif bold", "Sans-serif regular"],
    layoutTags: ["Full-width gradient hero", "Layered cloud shapes", "Minimal navigation", "Primary and secondary CTAs"],
    thumbnail: "images/istockphoto-2251958429-2048x2048.jpg",
    preview: "images/istockphoto-2251958429-2048x2048.jpg",
    elements: [
      {
        id: "gradient-cloud-landing-hero",
        label: "Gradient cloud landing hero",
        description:
          "Clean SaaS-style landing page with large left-aligned headline and subtitle on a deep gradient background with overlapping cloud-like shapes in warm colors.",
        highlight: "Bold hero typography floating above layered, colorful cloud shapes",
        trait: {
          id: "gradient-cloud-landing-hero",
          type: "element",
          label: "Minimal SaaS-style hero with layered clouds",
          sourceExampleId: "gradient-cloud-landing-hero",
          description:
            "This layout features a clean SaaS-style landing page with a large left-aligned headline and subtitle on a deep gradient background. The lower portion is decorated with overlapping cloud-like shapes in warm reds, oranges, and yellows, creating visual depth while keeping the content area uncluttered.",
          colors: ["#2E2B6F", "#3B3A8F", "#6A3F7A", "#C63A3A", "#E96B2C", "#F5B23C", "#FFFFFF"],
          fonts: ["Sans-serif bold", "Sans-serif regular"],
          layoutHints: [
            "Full-width gradient hero background",
            "Top-left logo with icon + company name",
            "Minimal top navigation with spaced links",
            "Outlined sign-in button on top-right",
            "Large left-aligned headline and subtitle",
            "Primary and secondary CTA buttons with rounded corners",
            "Layered cloud-style shapes at bottom of hero",
          ],
        },
      },
    ],
  },
  {
    id: "minimal-blog-magazine-layout",
    name: "Minimal blog / magazine layout",
    tagline: "Large featured post with image-led headline and sidebar author profile",
    scenario: "Personal blog or magazine website",
    description:
      "A clean, content-focused blog layout with a large hero post, simple top navigation, and a right-hand sidebar for author info and discovery.",
    palette: ["#FFFFFF", "#111111", "#777777", "#E85C4A", "#F2F2F2"],
    fonts: ["Sans-serif bold", "Sans-serif regular"],
    layoutTags: ["Centered site title", "Thin horizontal navigation", "Left-aligned main content", "Large featured image", "Right-hand sidebar", "Author bio card"],
    thumbnail: "images/make-a-blog.png",
    preview: "images/make-a-blog.png",
    elements: [
      {
        id: "minimal-blog-magazine-layout",
        label: "Content-first personal blog with sidebar",
        description:
          "This design follows a modern personal blog or magazine-style layout. The top area features a centered site title and tagline, followed by a slim horizontal navigation bar with category links.",
        highlight: "Large featured post with image-led headline and sidebar author profile",
        trait: {
          id: "minimal-blog-magazine-layout",
          type: "element",
          label: "Content-first personal blog with sidebar",
          sourceExampleId: "minimal-blog-magazine-layout",
          description:
            "The main content column highlights a featured blog post using a large image, category tag, bold headline, and metadata such as date, author, read time, and comments. A right-hand sidebar provides author information with avatar, short bio, social links, and secondary content.",
          colors: ["#FFFFFF", "#111111", "#777777", "#E85C4A", "#F2F2F2"],
          fonts: ["Sans-serif bold", "Sans-serif regular"],
          layoutHints: [
            "Centered site title with short tagline",
            "Thin horizontal navigation bar below header",
            "Left-aligned main content column",
            "Large featured image per post",
            "Overlay category tag on featured image",
            "Prominent post headline with metadata row",
            "Right-hand sidebar for author bio and widgets",
            "Author card with avatar, name, and description",
          ],
        },
      },
    ],
  },
  {
    id: "personal-brand-ecommerce-lifestyle",
    name: "Personal brand e-commerce / lifestyle storefront",
    tagline: "Founder-led hero section with soft imagery, script logo, and seamless shop entry points",
    scenario: "Personal brand e-commerce homepage",
    description:
      "A clean, personality-driven e-commerce homepage that blends personal branding, content, and shopping into a cohesive lifestyle experience.",
    palette: ["#FAF7F4", "#EADFD6", "#C9A98B", "#000000", "#FFFFFF"],
    fonts: ["Handwritten script", "Clean sans-serif"],
    layoutTags: ["Top announcement bar", "Centered handwritten-style logo", "Minimal navigation with icons", "Hero section featuring brand owner", "Grid-based product previews"],
    thumbnail: "images/small-business-websites-alyce-alexandra-oca20.webp",
    preview: "images/small-business-websites-alyce-alexandra-oca20.webp",
    elements: [
      {
        id: "personal-brand-ecommerce-lifestyle",
        label: "Creator-led lifestyle commerce site",
        description:
          "This layout is centered around a strong personal brand identity. The header uses a handwritten-style logo and soft neutral palette to establish warmth and trust.",
        highlight: "Founder-led hero section with soft imagery, script logo, and seamless shop entry points",
        trait: {
          id: "personal-brand-ecommerce-lifestyle",
          type: "element",
          label: "Creator-led lifestyle commerce site",
          sourceExampleId: "personal-brand-ecommerce-lifestyle",
          description:
            "A promotional announcement bar highlights shipping or awards. The hero section prominently features the founder with clear CTAs to shop products, reinforcing authenticity and credibility. Below the fold, modular content blocks showcase featured collections, product categories, and lifestyle imagery.",
          colors: ["#FAF7F4", "#EADFD6", "#C9A98B", "#000000", "#FFFFFF"],
          fonts: ["Handwritten script", "Clean sans-serif"],
          layoutHints: [
            "Top announcement bar for promotions or shipping info",
            "Centered handwritten-style logo for personal branding",
            "Minimal navigation with icons (menu, search, account, cart)",
            "Hero section featuring the brand owner",
            "Clear CTA buttons like 'Shop now' or 'Shop my range'",
            "Grid-based product and collection previews",
            "Editorial-style sections that mix content and commerce",
          ],
        },
      },
    ],
  },
  {
    id: "colorful-cloud-hero-business-layout",
    name: "Colorful cloud hero business site",
    tagline: "Strong visual contrast between playful hero and structured content sections",
    scenario: "Business Layout",
    description:
      "Bright, playful landing page featuring a gradient sky hero with layered cloud illustrations, followed by a structured business layout.",
    palette: ["#4DB3E6", "#F4C430", "#E74C3C", "#8B1A1A", "#FFFFFF", "#1E1E1E"],
    fonts: ["Sans-serif"],
    layoutTags: ["Illustrated gradient hero", "Layered cloud graphics", "Top navigation with search bar", "Left-side login panel", "Two-column About Us section", "Icon-based feature strip"],
    thumbnail: "images/istockphoto-1145896481-2048x2048.jpg",
    preview: "images/istockphoto-1145896481-2048x2048.jpg",
    elements: [
      {
        id: "colorful-cloud-hero-business-layout-element",
        label: "Illustrated gradient hero with classic business sections",
        description:
          "Large illustrated hero with gradient background and layered cloud shapes, top navigation with search, a split login/about section, icon-based feature strip, and a utility-heavy footer.",
        highlight: "Strong visual contrast between playful hero and structured content sections",
        trait: {
          id: "colorful-cloud-hero-business-layout",
          type: "element",
          label: "Illustrated gradient hero with classic business sections",
          sourceExampleId: "colorful-cloud-hero-business-layout",
          description:
            "Large illustrated hero with gradient background and layered cloud shapes, top navigation with search, a split login/about section, icon-based feature strip, and a utility-heavy footer.",
          colors: ["#4DB3E6", "#F4C430", "#E74C3C", "#8B1A1A", "#FFFFFF", "#1E1E1E"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Illustrated gradient hero",
            "Layered cloud graphics",
            "Top navigation with search bar",
            "Left-side login panel",
            "Two-column About Us section",
            "Icon-based feature strip",
            "Dark utility footer",
          ],
        },
      },
    ],
  },
  {
    id: "bold-multicolor-pricing-grid",
    name: "Bold multicolor pricing plans layout",
    tagline: "Strong color segmentation clearly differentiates pricing tiers at a glance",
    scenario: "Pricing Layout",
    description:
      "High-contrast pricing section organized as a grid of large color blocks, each representing a subscription tier with feature checklists and call-to-action buttons.",
    palette: ["#8FAF1F", "#0FA3B1", "#F2C300", "#E53935", "#4A4A4A", "#FFFFFF"],
    fonts: ["Sans-serif"],
    layoutTags: ["Full-width pricing grid", "Color-coded plan cards", "Checklist icons for feature comparison", "Centered plan titles", "Strong call-to-action buttons", "Conversion-oriented design"],
    thumbnail: "images/istockphoto-1165117159-2048x2048.jpg",
    preview: "images/istockphoto-1165117159-2048x2048.jpg",
    elements: [
      {
        id: "bold-multicolor-pricing-grid-element",
        label: "Grid-based pricing comparison with color-coded tiers",
        description:
          "Pricing layout divided into equally weighted rectangular panels for Free, Standard, Premium, and Multi-Seat plans, using bold background colors, checklist icons, concise descriptions, and prominent 'Order Now' buttons to emphasize comparison and conversion.",
        highlight: "Strong color segmentation clearly differentiates pricing tiers at a glance",
        trait: {
          id: "bold-multicolor-pricing-grid",
          type: "element",
          label: "Grid-based pricing comparison with color-coded tiers",
          sourceExampleId: "bold-multicolor-pricing-grid",
          description:
            "Pricing layout divided into equally weighted rectangular panels for Free, Standard, Premium, and Multi-Seat plans, using bold background colors, checklist icons, concise descriptions, and prominent 'Order Now' buttons to emphasize comparison and conversion.",
          colors: ["#8FAF1F", "#0FA3B1", "#F2C300", "#E53935", "#4A4A4A", "#FFFFFF"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Full-width pricing grid",
            "Color-coded plan cards",
            "Checklist icons for feature comparison",
            "Centered plan titles",
            "Strong call-to-action buttons",
            "Minimal navigation focus, conversion-oriented design",
          ],
        },
      },
    ],
  },
  {
    id: "rounded-glass-about-layout",
    name: "Rounded glass content layout",
    tagline: "Creates a calm, modern, glass-like feel",
    scenario: "About Layout",
    description:
      "Centered card-style website layout with rounded corners, soft gradients, and a blurred cityscape hero image.",
    palette: ["#2E3A3A", "#8FBAD3", "#EAF3F8", "#FFFFFF", "#6C8FA5"],
    fonts: ["Sans-serif"],
    layoutTags: ["Centered card layout", "Rounded corners", "Blurred hero background", "Horizontal navigation bar", "Sidebar navigation list", "Icon-based feature row"],
    thumbnail: "images/istockphoto-1165571247-1024x1024.jpg",
    preview: "images/istockphoto-1165571247-1024x1024.jpg",
    elements: [
      {
        id: "rounded-glass-about-layout-element",
        label: "Rounded glass content card",
        description:
          "Main content contained in a centered rounded rectangle with drop shadow, blurred photographic hero banner, soft blue gradient navigation bar, and icon-based footer section.",
        highlight: "Creates a calm, modern, glass-like feel",
        trait: {
          id: "rounded-glass-about-layout",
          type: "element",
          label: "Rounded glass content card",
          sourceExampleId: "rounded-glass-about-layout",
          description:
            "Main content contained in a centered rounded rectangle with drop shadow, blurred photographic hero banner, soft blue gradient navigation bar, and icon-based footer section.",
          colors: ["#2E3A3A", "#8FBAD3", "#EAF3F8", "#FFFFFF", "#6C8FA5"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Centered card layout",
            "Rounded corners",
            "Blurred hero background",
            "Horizontal navigation bar",
            "Sidebar navigation list",
            "Icon-based feature row",
            "Soft gradients and subtle shadows",
          ],
        },
      },
    ],
  },
  {
    id: "layered-tabbed-about-card",
    name: "Layered tabbed about section",
    tagline: "Strong visual hierarchy with clear section focus",
    scenario: "About Layout",
    description:
      "Tabbed interface layout with layered card design, featuring distinct sections for About, Services, and Contact, each with its own color-coded header and content area.",
    palette: ["#F5F5F5", "#E8E8E8", "#4A90E2", "#2C3E50", "#FFFFFF", "#1A1A1A"],
    fonts: ["Sans-serif"],
    layoutTags: ["Tabbed interface", "Layered card design", "Color-coded sections", "Centered content", "Icon-based navigation", "Clear visual hierarchy"],
    thumbnail: "images/istockphoto-1165910056-2048x2048.jpg",
    preview: "images/istockphoto-1165910056-2048x2048.jpg",
    elements: [
      {
        id: "layered-tabbed-about-card-element",
        label: "Layered tabbed content card",
        description:
          "Main content area organized into tabs (About, Services, Contact) with distinct color-coded headers, layered card design with shadows, and clear visual separation between sections.",
        highlight: "Strong visual hierarchy with clear section focus",
        trait: {
          id: "layered-tabbed-about-card",
          type: "element",
          label: "Layered tabbed content card",
          sourceExampleId: "layered-tabbed-about-card",
          description:
            "Main content area organized into tabs (About, Services, Contact) with distinct color-coded headers, layered card design with shadows, and clear visual separation between sections.",
          colors: ["#F5F5F5", "#E8E8E8", "#4A90E2", "#2C3E50", "#FFFFFF", "#1A1A1A"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Tabbed interface",
            "Layered card design",
            "Color-coded section headers",
            "Centered content layout",
            "Icon-based tab navigation",
            "Clear visual hierarchy",
            "Drop shadows for depth",
          ],
        },
      },
    ],
  },
  {
    id: "rounded-portfolio-slider-layout",
    name: "Rounded portfolio hero with slider",
    tagline: "Soft rounded UI with layered depth and motion emphasis",
    scenario: "Portfolio Slider",
    description:
      "Modern web layout featuring rounded rectangular panels, a prominent hero slider with globe imagery, and modular content cards below.",
    palette: [
      "#0E2A47",
      "#1E5FA3",
      "#6FAED9",
      "#E6EEF5",
      "#FFFFFF",
      "#3A3A3A",
    ],
    fonts: ["Sans-serif"],
    layoutTags: ["Rounded container-based layout", "Hero carousel with arrow navigation", "High-contrast callout text in hero", "Three-column card section", "Consistent border radius", "Soft gradients"],
    thumbnail: "images/istockphoto-1168448389-2048x2048.jpg",
    preview: "images/istockphoto-1168448389-2048x2048.jpg",
    elements: [
      {
        id: "rounded-portfolio-slider-layout-element",
        label: "Rounded hero slider with modular cards",
        description:
          "Centered page layout using large rounded containers. Includes a top navigation bar, a wide hero slider with globe illustration and carousel controls, followed by three evenly spaced rounded content cards for About, visual feature, and text.",
        highlight: "Soft rounded UI with layered depth and motion emphasis",
        trait: {
          id: "rounded-portfolio-slider-layout",
          type: "element",
          label: "Rounded hero slider with modular cards",
          sourceExampleId: "rounded-portfolio-slider-layout",
          description:
            "Centered page layout using large rounded containers. Includes a top navigation bar, a wide hero slider with globe illustration and carousel controls, followed by three evenly spaced rounded content cards for About, visual feature, and text.",
          colors: [
            "#0E2A47",
            "#1E5FA3",
            "#6FAED9",
            "#E6EEF5",
            "#FFFFFF",
            "#3A3A3A",
          ],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Rounded container-based layout",
            "Hero carousel with arrow navigation",
            "High-contrast callout text in hero",
            "Three-column card section",
            "Consistent border radius across components",
            "Soft gradients and subtle shadows",
            "Centered, symmetrical composition",
          ],
        },
      },
    ],
  },
  {
    id: "green-idea-slider-layout",
    name: "Green idea hero with services grid",
    tagline: "Fresh green palette with lightbulb innovation theme",
    scenario: "Eco-inspired website layout",
    description:
      "Clean, eco-inspired website layout with a green gradient hero slider, icon-driven sections, and clear service/contact segmentation.",
    palette: [
      "#6FA43A",
      "#8DBE5A",
      "#4F7F2A",
      "#FFFFFF",
      "#2E2E2E",
      "#DCEAC8",
    ],
    fonts: ["Sans-serif bold", "Sans-serif regular"],
    layoutTags: ["Full-width hero slider", "Green gradient background", "Numbered content sections", "Three-column feature strip", "Icon-based contact bar"],
    thumbnail: "images/istockphoto-1169767728-2048x2048.jpg",
    preview: "images/istockphoto-1169767728-2048x2048.jpg",
    elements: [
      {
        id: "green-idea-slider-layout-element",
        label: "Green hero slider with services and contacts",
        description:
          "Full-width green gradient hero with carousel arrows and pagination dots, featuring a laptop + lightbulb illustration. Includes a horizontal top navigation, numbered About/Services/Contacts sections, a three-column feature strip, and a bold contact callout band with icon set.",
        highlight: "Fresh green palette with lightbulb innovation theme",
        trait: {
          id: "green-idea-slider-layout",
          type: "element",
          label: "Green hero slider with services and contacts",
          sourceExampleId: "green-idea-slider-layout",
          description:
            "Full-width green gradient hero with carousel arrows and pagination dots, featuring a laptop + lightbulb illustration. Includes a horizontal top navigation, numbered About/Services/Contacts sections, a three-column feature strip, and a bold contact callout band with icon set.",
          colors: [
            "#6FA43A",
            "#8DBE5A",
            "#4F7F2A",
            "#FFFFFF",
            "#2E2E2E",
            "#DCEAC8",
          ],
          fonts: ["Sans-serif bold", "Sans-serif regular"],
          layoutHints: [
            "Full-width hero slider with arrows",
            "Green gradient background",
            "Centered slogan with pagination dots",
            "Laptop + idea/lightbulb illustration",
            "Numbered content sections",
            "Three-column feature strip",
            "Icon-based contact bar",
            "Clear horizontal section separation",
          ],
        },
      },
    ],
  },
  {
    id: "arrow-flow-glass-header-layout",
    name: "Arrow-driven glass header with about section",
    tagline: "Layered arrow motion over a global gradient background",
    scenario: "Modern glassmorphism website",
    description:
      "Modern glassmorphism-style header with directional arrow graphics, followed by a clean two-column About Us content area and icon-based footer navigation.",
    palette: [
      "#F2A23A",
      "#D47A2C",
      "#2F3A4A",
      "#FFFFFF",
      "#EDEDED",
      "#1E1E1E",
    ],
    fonts: ["Sans-serif bold", "Sans-serif regular"],
    layoutTags: ["Rounded glassmorphism hero", "Gradient background with world map", "Repeating arrow graphics", "Two-column About Us", "Left sidebar navigation", "Minimal icon row"],
    thumbnail: "images/istockphoto-1206907140-1024x1024.jpg",
    preview: "images/istockphoto-1206907140-1024x1024.jpg",
    elements: [
      {
        id: "arrow-flow-glass-header-layout-element",
        label: "Glass header with arrow flow motif",
        description:
          "Rounded glass-like hero header featuring layered arrow icons suggesting motion and direction over a warm gradient world-map backdrop. Includes compact top navigation, followed by a white About Us section with sidebar links, dual text columns, and a minimal icon strip above a slim footer.",
        highlight: "Layered arrow motion over a global gradient background",
        trait: {
          id: "arrow-flow-glass-header-layout",
          type: "element",
          label: "Glass header with arrow flow motif",
          sourceExampleId: "arrow-flow-glass-header-layout",
          description:
            "Rounded glass-like hero header featuring layered arrow icons suggesting motion and direction over a warm gradient world-map backdrop. Includes compact top navigation, followed by a white About Us section with sidebar links, dual text columns, and a minimal icon strip above a slim footer.",
          colors: [
            "#F2A23A",
            "#D47A2C",
            "#2F3A4A",
            "#FFFFFF",
            "#EDEDED",
            "#1E1E1E",
          ],
          fonts: ["Sans-serif bold", "Sans-serif regular"],
          layoutHints: [
            "Rounded glassmorphism hero container",
            "Gradient background with world map overlay",
            "Repeating arrow graphics indicating motion",
            "Centered logo with compact navigation",
            "Two-column About Us text layout",
            "Left sidebar list navigation",
            "Minimal icon row for highlights",
            "Slim footer with inline links",
          ],
        },
      },
    ],
  },
  {
    id: "blue-globe-search-header-layout",
    name: "Blue globe hero with search-focused header",
    tagline: "Right-aligned globe graphic paired with prominent search input",
    scenario: "Corporate-style website layout",
    description:
      "Corporate-style layout featuring a wide blue hero header with vertical texture lines, globe illustration, and integrated search bar, followed by a structured About Us section with feature tiles and circular highlights.",
    palette: [
      "#1E3A5F",
      "#2F5FA7",
      "#4A90E2",
      "#CDE6B8",
      "#EAF4D3",
      "#1B2B3A",
      "#FFFFFF",
    ],
    fonts: ["Sans-serif bold", "Sans-serif regular"],
    layoutTags: ["Wide rounded hero container", "Vertical line texture background", "Prominent search bar", "Right-aligned globe illustration", "Icon-based feature cards", "Two-column About Us"],
    thumbnail: "images/istockphoto-1209896633-2048x2048.jpg",
    preview: "images/istockphoto-1209896633-2048x2048.jpg",
    elements: [
      {
        id: "blue-globe-search-header-layout-element",
        label: "Globe hero with search-centric navigation",
        description:
          "Large rounded hero container with a blue gradient and vertical line texture, showcasing a company name, slogan, horizontal navigation, and a pill-shaped search bar with confirmation button. A floating globe graphic anchors the right side.",
        highlight: "Right-aligned globe graphic paired with prominent search input",
        trait: {
          id: "blue-globe-search-header-layout",
          type: "element",
          label: "Globe hero with search-centric navigation",
          sourceExampleId: "blue-globe-search-header-layout",
          description:
            "Below the hero, a light-toned About Us section combines icon-based feature cards, text blocks, and circular callouts, ending with a compact footer navigation.",
          colors: [
            "#1E3A5F",
            "#2F5FA7",
            "#4A90E2",
            "#CDE6B8",
            "#EAF4D3",
            "#1B2B3A",
            "#FFFFFF",
          ],
          fonts: ["Sans-serif bold", "Sans-serif regular"],
          layoutHints: [
            "Wide rounded hero container",
            "Vertical line texture background",
            "Left-aligned logo and slogan",
            "Top navigation with separators",
            "Prominent pill-shaped search bar with OK button",
            "Right-aligned globe illustration",
            "Icon-based feature cards in grid",
            "Two-column About Us content",
          ],
        },
      },
    ],
  },
  {
    id: "circular-icon-globe-layout",
    name: "Circular icon header with dotted globe backdrop",
    tagline: "Oversized circular feature icons paired with a digital globe motif",
    scenario: "Tech-forward corporate website",
    description:
      "A tech-forward corporate website layout featuring a row of large circular icon modules at the top, a dotted globe visualization, and a structured About Us content area.",
    palette: [
      "#0F1E2E",
      "#1F3B63",
      "#2F5FA7",
      "#3FA9DD",
      "#0B0B0B",
      "#FFFFFF",
      "#D9E6F2",
    ],
    fonts: ["Sans-serif bold", "Sans-serif regular"],
    layoutTags: ["Diagonal striped background", "Row of large circular icon cards", "Gradient blue content panel", "Dotted globe graphic", "Two-column About Us", "Dark feature strip"],
    thumbnail: "images/istockphoto-1210609143-2048x2048.jpg",
    preview: "images/istockphoto-1210609143-2048x2048.jpg",
    elements: [
      {
        id: "circular-icon-globe-layout-element",
        label: "Circular feature navigation with globe accent",
        description:
          "This layout emphasizes a horizontal row of prominent circular icon cards at the top, each representing a core feature or section. A blue gradient panel with a dotted world globe graphic anchors the left side, reinforcing a global or tech-oriented brand.",
        highlight: "Oversized circular feature icons paired with a digital globe motif",
        trait: {
          id: "circular-icon-globe-layout",
          type: "element",
          label: "Circular feature navigation with globe accent",
          sourceExampleId: "circular-icon-globe-layout",
          description:
            "Below, a clean white About Us section is split into two text columns, followed by a dark feature strip and a minimal footer.",
          colors: [
            "#0F1E2E",
            "#1F3B63",
            "#2F5FA7",
            "#3FA9DD",
            "#0B0B0B",
            "#FFFFFF",
            "#D9E6F2",
          ],
          fonts: ["Sans-serif bold", "Sans-serif regular"],
          layoutHints: [
            "Diagonal striped background texture",
            "Top-left logo with minimalist branding",
            "Row of large circular icon cards with thick borders",
            "Gradient blue content panel",
            "Dotted globe graphic on left side",
            "Vertical navigation list with play-style bullets",
            "Two-column About Us text section",
            "Dark feature strip with icons and short descriptions",
          ],
        },
      },
    ],
  },
  {
    id: "hexagon-slider-olive-layout",
    name: "Hexagon hero slider with olive UI theme",
    tagline: "Rounded hexagon-pattern hero slider paired with glossy circular icon buttons",
    scenario: "Olive-toned corporate website",
    description:
      "A soft, olive-toned corporate website layout featuring a rounded hero slider with abstract hexagon graphics, spherical icon navigation, and a balanced three-column content structure.",
    palette: [
      "#4F5F2A",
      "#9FB36A",
      "#F6F3C6",
      "#E6E2B8",
      "#D87C2A",
      "#6B7F3A",
      "#FFFFFF",
    ],
    fonts: ["Sans-serif bold", "Sans-serif regular"],
    layoutTags: ["Olive-green navigation", "Rounded hero slider", "Abstract hexagon mosaic", "Glossy circular icon buttons", "Three-column feature section", "Soft cream background"],
    thumbnail: "images/istockphoto-1210796733-2048x2048.jpg",
    preview: "images/istockphoto-1210796733-2048x2048.jpg",
    elements: [
      {
        id: "hexagon-slider-olive-layout-element",
        label: "Hexagon-based hero with circular feature icons",
        description:
          "This layout centers around a rounded rectangular hero slider displaying layered hexagonal shapes in warm green and orange tones. Below the slider, a row of glossy circular icon buttons introduces key sections.",
        highlight: "Rounded hexagon-pattern hero slider paired with glossy circular icon buttons",
        trait: {
          id: "hexagon-slider-olive-layout",
          type: "element",
          label: "Hexagon-based hero with circular feature icons",
          sourceExampleId: "hexagon-slider-olive-layout",
          description:
            "The main content area is divided into a left vertical navigation list, a central About Us text block, and a right-side account/product panel, followed by a three-column feature section and a minimal footer.",
          colors: [
            "#4F5F2A",
            "#9FB36A",
            "#F6F3C6",
            "#E6E2B8",
            "#D87C2A",
            "#6B7F3A",
            "#FFFFFF",
          ],
          fonts: ["Sans-serif bold", "Sans-serif regular"],
          layoutHints: [
            "Olive-green top navigation bar with lowercase links",
            "Top-left italic logo typography",
            "Rounded hero slider with thick green border",
            "Abstract hexagon mosaic graphic in hero",
            "Carousel navigation arrows and pagination dots",
            "Row of glossy circular icon buttons with shadows",
            "Left-side vertical text navigation with play icons",
            "Centered About Us section with lowercase heading",
            "Three-column feature section with icons and CTAs",
          ],
        },
      },
    ],
  },
  {
    id: "soft-gradient-hero-landing",
    name: "Soft gradient hero landing",
    tagline: "Modern gradient mesh background with strong visual focus on primary CTA",
    scenario: "Minimalist landing page",
    description:
      "A minimalist landing page with a smooth, abstract gradient background and centered welcome message.",
    palette: ["#E8F4F8", "#B8D4E3", "#6B9BD1", "#4A7BA7", "#2E5C8A", "#FFFFFF"],
    fonts: ["Sans-serif"],
    layoutTags: ["Centered content", "Gradient mesh background", "Minimal navigation", "Primary CTA button", "Clean typography"],
    thumbnail: "images/stock-vector-abstract-wave-futuristic-design-of-landing-page-retro-gradient-mesh-website-design-2559939325.jpg",
    preview: "images/stock-vector-abstract-wave-futuristic-design-of-landing-page-retro-gradient-mesh-website-design-2559939325.jpg",
    elements: [
      {
        id: "soft-gradient-hero-landing-element",
        label: "Gradient hero with centered CTA",
        description:
          "Clean landing page with a soft gradient mesh background, minimal top navigation, centered headline and subtitle, and a prominent primary CTA button.",
        highlight: "Modern gradient mesh background with strong visual focus on primary CTA",
        trait: {
          id: "soft-gradient-hero-landing",
          type: "element",
          label: "Gradient hero with centered CTA",
          sourceExampleId: "soft-gradient-hero-landing",
          description:
            "Clean landing page with a soft gradient mesh background, minimal top navigation, centered headline and subtitle, and a prominent primary CTA button.",
          colors: ["#E8F4F8", "#B8D4E3", "#6B9BD1", "#4A7BA7", "#2E5C8A", "#FFFFFF"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Centered content layout",
            "Gradient mesh background",
            "Minimal top navigation",
            "Large centered headline",
            "Supporting subtitle text",
            "Prominent primary CTA button",
            "Clean, spacious design",
          ],
        },
      },
    ],
  },
  {
    id: "minimal-blog-login-landing",
    name: "Minimal blog and login landing",
    tagline: "Simple structure combining content, forms, and feature steps",
    scenario: "Minimal Blog",
    description:
      "Clean monochrome landing page with top navigation, oversized hero icon and text, login and contact forms, and numbered feature highlights.",
    palette: ["#F2F2F2", "#1F1F1F", "#000000", "#BDBDBD", "#FFFFFF"],
    fonts: ["Sans-serif"],
    layoutTags: ["Top navigation bar", "Oversized hero icon", "Split login and contact forms", "Three-column feature section", "Circular step indicators", "Minimal grayscale palette"],
    thumbnail: "images/istockphoto-520244093-2048x2048.jpg",
    preview: "images/istockphoto-520244093-2048x2048.jpg",
    elements: [
      {
        id: "minimal-blog-login-landing-element",
        label: "Minimal content + form layout",
        description:
          "Wide layout with dark navigation bar, large hero illustration and headline, split section for login and contact forms, followed by three-step feature blocks with circular number markers.",
        highlight: "Simple structure combining content, forms, and feature steps",
        trait: {
          id: "minimal-blog-login-landing",
          type: "element",
          label: "Minimal content + form layout",
          sourceExampleId: "minimal-blog-login-landing",
          description:
            "Wide layout with dark navigation bar, large hero illustration and headline, split section for login and contact forms, followed by three-step feature blocks with circular number markers.",
          colors: ["#F2F2F2", "#1F1F1F", "#000000", "#BDBDBD", "#FFFFFF"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Top navigation bar",
            "Oversized hero icon",
            "Split login and contact forms",
            "Three-column feature section",
            "Circular step indicators",
            "Minimal grayscale palette",
          ],
        },
      },
    ],
  },
  {
    id: "lime-accent-web-landing",
    name: "Lime-accent web landing",
    tagline: "High-contrast accents guide attention through sections",
    scenario: "Web Landing",
    description:
      "Bright modern landing page with lime navigation bar, hero text slider, feature card grid, and embedded login and contact forms.",
    palette: ["#D6D92B", "#F2F2F2", "#9E9E9E", "#1F1F1F", "#FFFFFF"],
    fonts: ["Sans-serif"],
    layoutTags: ["High-contrast navigation bar", "Centered hero text", "Hero slider indicators", "Rounded feature card grid", "Split login and contact forms", "Accent color highlights"],
    thumbnail: "images/istockphoto-520259653-1024x1024.jpg",
    preview: "images/istockphoto-520259653-1024x1024.jpg",
    elements: [
      {
        id: "lime-accent-web-landing-element",
        label: "Accent-driven marketing layout",
        description:
          "Wide layout with bold lime navigation bar, centered hero headline and supporting text, icon-based feature cards in a rounded grid, followed by split login and contact forms.",
        highlight: "High-contrast accents guide attention through sections",
        trait: {
          id: "lime-accent-web-landing",
          type: "element",
          label: "Accent-driven marketing layout",
          sourceExampleId: "lime-accent-web-landing",
          description:
            "Wide layout with bold lime navigation bar, centered hero headline and supporting text, icon-based feature cards in a rounded grid, followed by split login and contact forms.",
          colors: ["#D6D92B", "#F2F2F2", "#9E9E9E", "#1F1F1F", "#FFFFFF"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "High-contrast navigation bar",
            "Centered hero text",
            "Hero slider indicators",
            "Rounded feature card grid",
            "Split login and contact forms",
            "Accent color highlights",
          ],
        },
      },
    ],
  },
  {
    id: "red-ribbon-cta-corporate",
    name: "Red ribbon CTA landing",
    tagline: "High-contrast CTAs with strong visual emphasis",
    scenario: "Corporate Landing",
    description:
      "Bold corporate landing page with red hero banner, diagonal ribbon accents, inline login form, and stacked blog highlights.",
    palette: ["#C81E1E", "#F2F2F2", "#FFFFFF", "#1F1F1F", "#9E9E9E"],
    fonts: ["Sans-serif"],
    layoutTags: ["Bold red hero banner", "Diagonal ribbon overlays", "Inline login form", "Sectioned business overview", "Stacked blog highlight cards", "Strong contrast CTAs"],
    thumbnail: "images/istockphoto-520261927-2048x2048.jpg",
    preview: "images/istockphoto-520261927-2048x2048.jpg",
    elements: [
      {
        id: "red-ribbon-cta-corporate-element",
        label: "Ribbon-accent marketing layout",
        description:
          "Prominent red hero section with diagonal ribbon label overlay, centered descriptive text, inline login inputs, followed by business overview and blog card sections using repeated ribbon motifs.",
        highlight: "High-contrast CTAs with strong visual emphasis",
        trait: {
          id: "red-ribbon-cta-corporate",
          type: "element",
          label: "Ribbon-accent marketing layout",
          sourceExampleId: "red-ribbon-cta-corporate",
          description:
            "Prominent red hero section with diagonal ribbon label overlay, centered descriptive text, inline login inputs, followed by business overview and blog card sections using repeated ribbon motifs.",
          colors: ["#C81E1E", "#F2F2F2", "#FFFFFF", "#1F1F1F", "#9E9E9E"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Bold red hero banner",
            "Diagonal ribbon overlays",
            "Inline login form",
            "Sectioned business overview",
            "Stacked blog highlight cards",
            "Strong contrast CTAs",
          ],
        },
      },
    ],
  },
  {
    id: "glass-ui-service-landing",
    name: "Glass UI service landing",
    tagline: "Sleek glass effect creates a premium, modern feel",
    scenario: "Service Landing",
    description:
      "Dark modern landing page using glassmorphism hero banner, icon-based service cards, and gallery preview section.",
    palette: ["#5A5A5A", "#2B2B2B", "#FFFFFF", "#9E9E9E", "#000000"],
    fonts: ["Sans-serif"],
    layoutTags: ["Glassmorphism hero banner", "Centered floating callout", "Pill-style navigation tabs", "Three-column service cards", "Circular gallery placeholders", "Dark minimal footer"],
    thumbnail: "images/istockphoto-588243926-2048x2048.jpg",
    preview: "images/istockphoto-588243926-2048x2048.jpg",
    elements: [
      {
        id: "glass-ui-service-landing-element",
        label: "Glassmorphism marketing layout",
        description:
          "Centered glass-style hero banner with frosted transparency and drop shadow, top navigation with pill tabs, followed by three bordered service cards and a gallery section with circular image placeholders.",
        highlight: "Sleek glass effect creates a premium, modern feel",
        trait: {
          id: "glass-ui-service-landing",
          type: "element",
          label: "Glassmorphism marketing layout",
          sourceExampleId: "glass-ui-service-landing",
          description:
            "Centered glass-style hero banner with frosted transparency and drop shadow, top navigation with pill tabs, followed by three bordered service cards and a gallery section with circular image placeholders.",
          colors: ["#5A5A5A", "#2B2B2B", "#FFFFFF", "#9E9E9E", "#000000"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Glassmorphism hero banner",
            "Centered floating callout",
            "Pill-style navigation tabs",
            "Three-column service cards",
            "Circular gallery placeholders",
            "Dark minimal footer",
          ],
        },
      },
    ],
  },
  {
    id: "network-hero-dashboard-landing",
    name: "Networked dashboard landing",
    tagline: "Combines marketing, authentication, and product discovery in one layout",
    scenario: "Dashboard Landing",
    description:
      "Feature-rich corporate landing page with network-style hero graphic, login panel, content highlights, and utility navigation.",
    palette: ["#F04B23", "#8BC34A", "#4BB6E8", "#E6E6E6", "#2E2E2E", "#FFFFFF"],
    fonts: ["Sans-serif"],
    layoutTags: ["Abstract network hero graphic", "Circular focal element", "Top tab navigation", "Left-aligned login panel", "Highlighted content band", "Multi-column feature tiles"],
    thumbnail: "images/istockphoto-604360684-2048x2048.jpg",
    preview: "images/istockphoto-604360684-2048x2048.jpg",
    elements: [
      {
        id: "network-hero-dashboard-landing-element",
        label: "Dashboard-style marketing layout",
        description:
          "Wide layout featuring a large hero with abstract network visualization and circular focal element, top tab navigation, left-aligned login panel, central content highlight band, and multi-column feature tiles.",
        highlight: "Combines marketing, authentication, and product discovery in one layout",
        trait: {
          id: "network-hero-dashboard-landing",
          type: "element",
          label: "Dashboard-style marketing layout",
          sourceExampleId: "network-hero-dashboard-landing",
          description:
            "Wide layout featuring a large hero with abstract network visualization and circular focal element, top tab navigation, left-aligned login panel, central content highlight band, and multi-column feature tiles.",
          colors: ["#F04B23", "#8BC34A", "#4BB6E8", "#E6E6E6", "#2E2E2E", "#FFFFFF"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Abstract network hero graphic",
            "Circular focal element",
            "Top tab navigation",
            "Left-aligned login panel",
            "Highlighted content band",
            "Multi-column feature tiles",
          ],
        },
      },
    ],
  },
  {
    id: "dark-skyline-about-landing",
    name: "Dark skyline about landing",
    tagline: "Strong visual contrast draws focus to core content",
    scenario: "About Landing",
    description:
      "Elegant corporate website with dark framing, panoramic hero image, informational about section, and integrated login panel.",
    palette: ["#1A1A1A", "#4A97B5", "#FFFFFF", "#F2C94C", "#2E2E2E"],
    fonts: ["Sans-serif"],
    layoutTags: ["Dark framed layout", "Panoramic hero image", "Left-aligned login panel", "Multi-column about section", "Icon-based contact links", "Minimal footer navigation"],
    thumbnail: "images/istockphoto-928516162-2048x2048.jpg",
    preview: "images/istockphoto-928516162-2048x2048.jpg",
    elements: [
      {
        id: "dark-skyline-about-landing-element",
        label: "Panoramic about layout",
        description:
          "Centered layout with dark header and footer, wide panoramic hero image, left-aligned account/login panel, and multi-column about content with contact details and icon links.",
        highlight: "Strong visual contrast draws focus to core content",
        trait: {
          id: "dark-skyline-about-landing",
          type: "element",
          label: "Panoramic about layout",
          sourceExampleId: "dark-skyline-about-landing",
          description:
            "Centered layout with dark header and footer, wide panoramic hero image, left-aligned account/login panel, and multi-column about content with contact details and icon links.",
          colors: ["#1A1A1A", "#4A97B5", "#FFFFFF", "#F2C94C", "#2E2E2E"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Dark framed layout",
            "Panoramic hero image",
            "Left-aligned login panel",
            "Multi-column about section",
            "Icon-based contact links",
            "Minimal footer navigation",
          ],
        },
      },
    ],
  },
  {
    id: "illustrated-hero-circle-features",
    name: "Illustrated hero with circular features",
    tagline: "Playful visuals combined with clear marketing structure",
    scenario: "Illustrated Landing",
    description:
      "Colorful illustrated landing page with hand-drawn hero graphic, circular feature cards, and structured content sections.",
    palette: ["#FF6B6B", "#4ECDC4", "#FFE66D", "#95E1D3", "#FFFFFF", "#2C3E50"],
    fonts: ["Sans-serif"],
    layoutTags: ["Illustrated hero graphic", "Circular feature cards", "Hand-drawn style", "Colorful palette", "Structured content sections", "Playful aesthetic"],
    thumbnail: "images/istockphoto-1030345124-2048x2048.jpg",
    preview: "images/istockphoto-1030345124-2048x2048.jpg",
    elements: [
      {
        id: "illustrated-hero-circle-features-element",
        label: "Illustrated marketing layout",
        description:
          "Hero section with hand-drawn illustration style, followed by circular feature cards with icons and text, structured content sections, and playful color palette.",
        highlight: "Playful visuals combined with clear marketing structure",
        trait: {
          id: "illustrated-hero-circle-features",
          type: "element",
          label: "Illustrated marketing layout",
          sourceExampleId: "illustrated-hero-circle-features",
          description:
            "Hero section with hand-drawn illustration style, followed by circular feature cards with icons and text, structured content sections, and playful color palette.",
          colors: ["#FF6B6B", "#4ECDC4", "#FFE66D", "#95E1D3", "#FFFFFF", "#2C3E50"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Illustrated hero graphic",
            "Circular feature cards",
            "Hand-drawn style",
            "Colorful palette",
            "Structured content sections",
            "Playful aesthetic",
          ],
        },
      },
    ],
  },
  {
    id: "gradient-triangle-portfolio-landing",
    name: "Gradient triangle portfolio landing",
    tagline: "Clean layout with vibrant gradients that frame content",
    scenario: "Portfolio Landing",
    description:
      "Modern portfolio landing page with warm gradient navigation, centered hero slider, and three-column informational sections.",
    palette: ["#E91E63", "#F39C12", "#FFFFFF", "#F2F2F2", "#9E9E9E"],
    fonts: ["Sans-serif"],
    layoutTags: ["Gradient navigation bar", "Centered hero slider", "Minimal headline typography", "Three-column content layout", "Soft card-like section dividers", "Gradient footer accent"],
    thumbnail: "images/istockphoto-1097005808-2048x2048.jpg",
    preview: "images/istockphoto-1097005808-2048x2048.jpg",
    elements: [
      {
        id: "gradient-triangle-portfolio-landing-element",
        label: "Gradient-driven portfolio layout",
        description:
          "Top navigation bar with pink-to-orange gradient and tabbed menu, centered hero slider with headline and dot indicators, followed by three evenly spaced columns for about, portfolio, and news content, and a matching gradient footer.",
        highlight: "Clean layout with vibrant gradients that frame content",
        trait: {
          id: "gradient-triangle-portfolio-landing",
          type: "element",
          label: "Gradient-driven portfolio layout",
          sourceExampleId: "gradient-triangle-portfolio-landing",
          description:
            "Top navigation bar with pink-to-orange gradient and tabbed menu, centered hero slider with headline and dot indicators, followed by three evenly spaced columns for about, portfolio, and news content, and a matching gradient footer.",
          colors: ["#E91E63", "#F39C12", "#FFFFFF", "#F2F2F2", "#9E9E9E"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Gradient navigation bar",
            "Centered hero slider",
            "Minimal headline typography",
            "Three-column content layout",
            "Soft card-like section dividers",
            "Gradient footer accent",
          ],
        },
      },
    ],
  },
  {
    id: "mosaic-portfolio-icon-landing",
    name: "Mosaic portfolio landing",
    tagline: "Distinct visual rhythm using modular blocks and icons",
    scenario: "Portfolio Landing",
    description:
      "Editorial-style landing page with mosaic hero grid, icon-driven feature row, and three-column informational sections.",
    palette: ["#2C3E50", "#3498DB", "#E74C3C", "#FFFFFF", "#ECF0F1"],
    fonts: ["Sans-serif"],
    layoutTags: ["Mosaic hero grid", "Icon-driven feature row", "Three-column informational sections", "Modular block layout", "Editorial style", "Clear visual hierarchy"],
    thumbnail: "images/istockphoto-1145896438-2048x2048.jpg",
    preview: "images/istockphoto-1145896438-2048x2048.jpg",
    elements: [
      {
        id: "mosaic-portfolio-icon-landing-element",
        label: "Mosaic portfolio layout",
        description:
          "Hero section with mosaic grid of image blocks, followed by a row of icon-driven feature cards, and three-column informational sections with clear visual hierarchy.",
        highlight: "Distinct visual rhythm using modular blocks and icons",
        trait: {
          id: "mosaic-portfolio-icon-landing",
          type: "element",
          label: "Mosaic portfolio layout",
          sourceExampleId: "mosaic-portfolio-icon-landing",
          description:
            "Hero section with mosaic grid of image blocks, followed by a row of icon-driven feature cards, and three-column informational sections with clear visual hierarchy.",
          colors: ["#2C3E50", "#3498DB", "#E74C3C", "#FFFFFF", "#ECF0F1"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Mosaic hero grid",
            "Icon-driven feature row",
            "Three-column informational sections",
            "Modular block layout",
            "Editorial style",
            "Clear visual hierarchy",
          ],
        },
      },
    ],
  },
];

export const DEFAULT_RESULTS = EXAMPLE_DATASET.slice(0, 12);

/*
// Additional examples converted from commented format
export const ADDITIONAL_EXAMPLES: Example[] = [
  {
    id: "designer-coder-hero",
    name: "Split identity hero",
    tagline: "Clearly communicates hybrid skillset",
    scenario: "Portfolio website showcasing dual skills",
    description:
      "Full-width hero split vertically to showcase designer and developer identities through typography and imagery.",
    palette: ["#FFFFFF", "#000000", "#F2C94C", "#EB5757"],
    fonts: ["Sans-serif bold", "Monospace"],
    layoutTags: ["Vertical split layout", "Centered portrait", "Asymmetric typography", "High whitespace"],
    thumbnail:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=400&q=60",
    preview:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=60",
    elements: [
      {
        id: "designer-coder-hero",
        label: "Designer–coder split hero",
        description:
          "Centered split hero with large typographic labels, half illustrated portrait on left and photographic portrait on right, strong contrast and whitespace.",
        highlight: "Clearly communicates hybrid skillset",
        trait: {
          id: "designer-coder-hero",
          type: "element",
          label: "Designer–coder split hero",
          sourceExampleId: "designer-coder-hero",
          description:
            "Centered split hero with large typographic labels, half illustrated portrait on left and photographic portrait on right, strong contrast and whitespace.",
          colors: ["#FFFFFF", "#000000", "#F2C94C", "#EB5757"],
          fonts: ["Sans-serif bold", "Monospace"],
          layoutHints: [
            "Vertical split layout",
            "Centered portrait",
            "Asymmetric typography",
            "High whitespace",
          ],
        },
      },
    ],
  },
  {
    id: "writer-portfolio-about-hero",
    name: "Personal about hero",
    tagline: "Builds credibility and personal connection",
    scenario: "Portfolio website about page",
    description:
      "Two-column about section with portrait image on the left and large editorial headline on the right.",
    palette: ["#FFFFFF", "#F6F1EE", "#1A1A1A"],
    fonts: ["Serif", "Sans-serif"],
    layoutTags: ["Two-column layout", "Portrait image left", "Large headline right", "Centered vertical rhythm"],
    thumbnail:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=60",
    preview:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=60",
    elements: [
      {
        id: "writer-portfolio-about-hero",
        label: "Writer about hero",
        description:
          "Wide content area with left-aligned photo and right-aligned serif headline, generous vertical spacing and soft neutral background.",
        highlight: "Builds credibility and personal connection",
        trait: {
          id: "writer-portfolio-about-hero",
          type: "element",
          label: "Writer about hero",
          sourceExampleId: "writer-portfolio-about-hero",
          description:
            "Wide content area with left-aligned photo and right-aligned serif headline, generous vertical spacing and soft neutral background.",
          colors: ["#FFFFFF", "#F6F1EE", "#1A1A1A"],
          fonts: ["Serif", "Sans-serif"],
          layoutHints: [
            "Two-column layout",
            "Portrait image left",
            "Large headline right",
            "Centered vertical rhythm",
          ],
        },
      },
    ],
  },




  {
    id: "academic-profile-hero",
    name: "Academic profile hero",
    tagline: "Balances professionalism with approachability",
    scenario: "Academic portfolio website",
    description:
      "Clean academic landing section with circular portrait, name headline, short bio, and prominent category navigation buttons.",
    palette: ["#FFFFFF", "#B6D76A", "#F2B24C", "#9EDADF", "#D0D0D0", "#1A1A1A"],
    fonts: ["Sans-serif"],
    layoutTags: ["Two-column layout", "Circular portrait image", "Large name headline", "Short bio paragraph", "Circular navigation buttons"],
    thumbnail:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=60",
    preview:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=60",
    elements: [
      {
        id: "academic-profile-hero",
        label: "Researcher profile hero",
        description:
          "Centered layout with large circular portrait on the left, bold name headline and short bio on the right, followed by color-coded circular navigation buttons.",
        highlight: "Balances professionalism with approachability",
        trait: {
          id: "academic-profile-hero",
          type: "element",
          label: "Researcher profile hero",
          sourceExampleId: "academic-profile-hero",
          description:
            "Centered layout with large circular portrait on the left, bold name headline and short bio on the right, followed by color-coded circular navigation buttons.",
          colors: ["#FFFFFF", "#B6D76A", "#F2B24C", "#9EDADF", "#D0D0D0", "#1A1A1A"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Two-column layout",
            "Circular portrait image",
            "Large name headline",
            "Short bio paragraph",
            "Circular navigation buttons",
          ],
        },
      },
    ],
  },
  {
    id: "default-blog-about-layout",
    name: "Classic blog about page",
    tagline: "Simple and familiar content structure",
    scenario: "Blog website about page",
    description:
      "Traditional blog-style layout with main content column, inline profile image, and right sidebar widgets.",
    palette: ["#FFFFFF", "#000000", "#F5F5F5", "#CCCCCC"],
    fonts: ["Serif", "Sans-serif"],
    layoutTags: ["Single main content column", "Right sidebar", "Inline profile image", "Long-form text", "Widget-based layout"],
    thumbnail:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=400&q=60",
    preview:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=60",
    elements: [
      {
        id: "default-blog-about-layout",
        label: "Blog about layout",
        description:
          "Left-aligned article content with heading and long-form text, embedded profile image floated within content, and a persistent right sidebar containing search and metadata widgets.",
        highlight: "Simple and familiar content structure",
        trait: {
          id: "default-blog-about-layout",
          type: "element",
          label: "Blog about layout",
          sourceExampleId: "default-blog-about-layout",
          description:
            "Left-aligned article content with heading and long-form text, embedded profile image floated within content, and a persistent right sidebar containing search and metadata widgets.",
          colors: ["#FFFFFF", "#000000", "#F5F5F5", "#CCCCCC"],
          fonts: ["Serif", "Sans-serif"],
          layoutHints: [
            "Single main content column",
            "Right sidebar",
            "Inline profile image",
            "Long-form text",
            "Widget-based layout",
          ],
        },
      },
    ],
  },
  {
    id: "coaching-brand-hero-stack",
    name: "Lifestyle coaching hero stack",
    tagline: "Strong personal brand with clear conversion paths",
    scenario: "Coaching Website",
    description:
      "Full-width lifestyle hero with value-driven headline, followed by email capture, social proof metrics, and service offerings.",
    palette: ["#A9714B", "#2F5D50", "#F3E8E3", "#FFFFFF", "#1F1F1F"],
    fonts: ["Serif", "Sans-serif"],
    layoutTags: ["Full-width hero", "Lifestyle photography", "Overlay headline and CTA", "Email signup section", "Stat highlight band", "Alternating image-text sections"],
    thumbnail: "images/image16.png",
    preview: "images/image16.png",
    elements: [
      {
        id: "coaching-brand-hero-stack-element",
        label: "Personal coaching landing stack",
        description:
          "Large hero with lifestyle photography and warm overlay, bold headline and CTA, followed by newsletter signup, stat highlights, and alternating service sections with imagery.",
        highlight: "Strong personal brand with clear conversion paths",
        trait: {
          id: "coaching-brand-hero-stack",
          type: "element",
          label: "Personal coaching landing stack",
          sourceExampleId: "coaching-brand-hero-stack",
          description:
            "Large hero with lifestyle photography and warm overlay, bold headline and CTA, followed by newsletter signup, stat highlights, and alternating service sections with imagery.",
          colors: ["#A9714B", "#2F5D50", "#F3E8E3", "#FFFFFF", "#1F1F1F"],
          fonts: ["Serif", "Sans-serif"],
          layoutHints: [
            "Full-width hero",
            "Lifestyle photography",
            "Overlay headline and CTA",
            "Email signup section",
            "Stat highlight band",
            "Alternating image-text sections",
            "Grid image gallery",
          ],
        },
      },
    ],
  },
  {
    id: "corporate-software-landing",
    name: "Corporate software landing page",
    tagline: "Communicates credibility and breadth of offerings",
    scenario: "Corporate Software",
    description:
      "Dark-themed corporate landing page with large headline hero, feature list, newsletter signup, testimonials, and footer link columns.",
    palette: ["#1E1F26", "#2E3440", "#FFFFFF", "#C7D2E0", "#9FB3C8"],
    fonts: ["Sans-serif"],
    layoutTags: ["Full-width hero", "Dark gradient background", "Large headline typography", "Icon-based feature list", "Newsletter signup bar", "Testimonial blocks"],
    thumbnail: "images/istockphoto-188055259-2048x2048.jpg",
    preview: "images/istockphoto-188055259-2048x2048.jpg",
    elements: [
      {
        id: "corporate-software-landing-element",
        label: "Enterprise software hero layout",
        description:
          "Wide hero section with gradient dark background, oversized headline, supporting paragraph text, and icon-based feature list, followed by newsletter CTA and content sections.",
        highlight: "Communicates credibility and breadth of offerings",
        trait: {
          id: "corporate-software-landing",
          type: "element",
          label: "Enterprise software hero layout",
          sourceExampleId: "corporate-software-landing",
          description:
            "Wide hero section with gradient dark background, oversized headline, supporting paragraph text, and icon-based feature list, followed by newsletter CTA and content sections.",
          colors: ["#1E1F26", "#2E3440", "#FFFFFF", "#C7D2E0", "#9FB3C8"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Full-width hero",
            "Dark gradient background",
            "Large headline typography",
            "Icon-based feature list",
            "Newsletter signup bar",
            "Testimonial blocks",
            "Multi-column footer links",
          ],
        },
      },
    ],
  },
  {
    id: "enterprise-dashboard-landing",
    name: "Enterprise dashboard landing",
    tagline: "Communicates structure and functionality at a glance",
    scenario: "Enterprise Dashboard",
    description:
      "Multi-section enterprise landing page with segmented navigation, login panel, feature highlights, and illustrated solution blocks.",
    palette: ["#2F3A4A", "#4F78A8", "#8DBF3F", "#E6E6E6", "#FFFFFF"],
    fonts: ["Sans-serif"],
    layoutTags: ["Segmented horizontal navigation", "Embedded login form", "Multi-column content grid", "Illustrated feature blocks", "Arrow-based progress indicators", "Dense information layout"],
    thumbnail: "images/istockphoto-475461576-2048x2048.jpg",
    preview: "images/istockphoto-475461576-2048x2048.jpg",
    elements: [
      {
        id: "enterprise-dashboard-landing-element",
        label: "Dashboard-style corporate layout",
        description:
          "Wide layout with horizontal segmented navigation tabs, embedded login form, multi-column content blocks, icon-driven illustrations, and layered information panels.",
        highlight: "Communicates structure and functionality at a glance",
        trait: {
          id: "enterprise-dashboard-landing",
          type: "element",
          label: "Dashboard-style corporate layout",
          sourceExampleId: "enterprise-dashboard-landing",
          description:
            "Wide layout with horizontal segmented navigation tabs, embedded login form, multi-column content blocks, icon-driven illustrations, and layered information panels.",
          colors: ["#2F3A4A", "#4F78A8", "#8DBF3F", "#E6E6E6", "#FFFFFF"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Segmented horizontal navigation",
            "Embedded login form",
            "Multi-column content grid",
            "Illustrated feature blocks",
            "Arrow-based progress indicators",
            "Dense information layout",
          ],
        },
      },
    ],
  },
  {
    id: "tech-agency-blue-dark-landing",
    name: "Blue tech agency landing",
    tagline: "Clean visual hierarchy with strong utility sections",
    scenario: "Tech Agency",
    description:
      "Modern tech agency homepage with blue gradient header, informational hero, icon feature grid, and subscription-focused footer.",
    palette: ["#4BB6E8", "#2B2B2B", "#FFFFFF", "#6F6F6F", "#1E88C9"],
    fonts: ["Sans-serif"],
    layoutTags: ["Gradient top navigation", "Wide informational hero", "Split text and illustration", "Icon feature grid", "Newsletter subscription section", "Multi-column utility footer"],
    thumbnail: "images/istockphoto-495838160-2048x2048.jpg",
    preview: "images/istockphoto-495838160-2048x2048.jpg",
    elements: [
      {
        id: "tech-agency-blue-dark-landing-element",
        label: "Agency marketing layout",
        description:
          "Top navigation with blue gradient bar, wide informational hero with split content, icon-based feature cards, and multi-column footer containing newsletter, social links, and contact info.",
        highlight: "Clean visual hierarchy with strong utility sections",
        trait: {
          id: "tech-agency-blue-dark-landing",
          type: "element",
          label: "Agency marketing layout",
          sourceExampleId: "tech-agency-blue-dark-landing",
          description:
            "Top navigation with blue gradient bar, wide informational hero with split content, icon-based feature cards, and multi-column footer containing newsletter, social links, and contact info.",
          colors: ["#4BB6E8", "#2B2B2B", "#FFFFFF", "#6F6F6F", "#1E88C9"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Gradient top navigation",
            "Wide informational hero",
            "Split text and illustration",
            "Icon feature grid",
            "Newsletter subscription section",
            "Multi-column utility footer",
          ],
        },
      },
    ],
  },




{
  id: "flat-business-template-hero",
  label: "Flat business website template",
  description:
    "Clean business website layout with illustrated hero, login inputs, feature columns, and team section.",
  highlight: "Balances marketing content with functional UI elements",
  trait: {
    id: "flat-business-template-hero",
    type: "element",
    label: "Illustrated business landing",
    sourceExampleId: "business-website-template",
    description:
      "Wide hero with flat illustration of a laptop and callout bubbles, top navigation with secondary descriptors, inline login form, followed by multi-column feature summaries and team avatars.",
    colors: ["#7BC1B7", "#E6E6E6", "#FFFFFF", "#F39C34", "#4A4A4A"],
    fonts: ["Sans-serif bold", "Sans-serif regular"],
    layoutHints: [
      "Top navigation with sublabels",
      "Illustrated hero graphic",
      "Inline login form",
      "Three-column feature section",
      "News sidebar block",
      "Team member avatar row",
    ],
  },
  // Duplicate - removing
  /*{
    id: "flat-business-template-hero",
    name: "Flat business website template",
    tagline: "Balances marketing content with functional UI elements",
    scenario: "Business Website",
    description:
      "Clean business website layout with illustrated hero, login inputs, feature columns, and team section.",
    palette: ["#7BC1B7", "#E6E6E6", "#FFFFFF", "#F39C34", "#4A4A4A"],
    fonts: ["Sans-serif"],
    layoutTags: ["Top navigation with sublabels", "Illustrated hero graphic", "Inline login form", "Three-column feature section", "News sidebar block", "Team member avatar row"],
    thumbnail:
      "https://images.unsplash.com/photo-1522071820081-009f3129cbfb?auto=format&fit=crop&w=400&q=60",
    preview:
      "https://images.unsplash.com/photo-1522071820081-009f3129cbfb?auto=format&fit=crop&w=900&q=60",
    elements: [
      {
        id: "flat-business-template-hero-element",
        label: "Illustrated business landing",
        description:
          "Wide hero with flat illustration of a laptop and callout bubbles, top navigation with secondary descriptors, inline login form, followed by multi-column feature summaries and team avatars.",
        highlight: "Balances marketing content with functional UI elements",
        trait: {
          id: "flat-business-template-hero",
          type: "element",
          label: "Illustrated business landing",
          sourceExampleId: "flat-business-template-hero",
          description:
            "Wide hero with flat illustration of a laptop and callout bubbles, top navigation with secondary descriptors, inline login form, followed by multi-column feature summaries and team avatars.",
          colors: ["#7BC1B7", "#E6E6E6", "#FFFFFF", "#F39C34", "#4A4A4A"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Top navigation with sublabels",
            "Illustrated hero graphic",
            "Inline login form",
            "Three-column feature section",
            "News sidebar block",
            "Team member avatar row",
          ],
        },
      },
    ],
  },
  {
    id: "minimal-blog-login-landing",
    name: "Minimal blog and login landing",
    tagline: "Simple structure combining content, forms, and feature steps",
    scenario: "Minimal Blog",
    description:
      "Clean monochrome landing page with top navigation, oversized hero icon and text, login and contact forms, and numbered feature highlights.",
    palette: ["#F2F2F2", "#1F1F1F", "#000000", "#BDBDBD", "#FFFFFF"],
    fonts: ["Sans-serif"],
    layoutTags: ["Top navigation bar", "Oversized hero icon", "Split login and contact forms", "Three-column feature section", "Circular step indicators", "Minimal grayscale palette"],
    thumbnail: "images/istockphoto-520244093-2048x2048.jpg",
    preview: "images/istockphoto-520244093-2048x2048.jpg",
    elements: [
      {
        id: "minimal-blog-login-landing-element",
        label: "Minimal content + form layout",
        description:
          "Wide layout with dark navigation bar, large hero illustration and headline, split section for login and contact forms, followed by three-step feature blocks with circular number markers.",
        highlight: "Simple structure combining content, forms, and feature steps",
        trait: {
          id: "minimal-blog-login-landing",
          type: "element",
          label: "Minimal content + form layout",
          sourceExampleId: "minimal-blog-login-landing",
          description:
            "Wide layout with dark navigation bar, large hero illustration and headline, split section for login and contact forms, followed by three-step feature blocks with circular number markers.",
          colors: ["#F2F2F2", "#1F1F1F", "#000000", "#BDBDBD", "#FFFFFF"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Top navigation bar",
            "Oversized hero icon",
            "Split login and contact forms",
            "Three-column feature section",
            "Circular step indicators",
            "Minimal grayscale palette",
          ],
        },
      },
    ],
  },





{
  id: "lime-accent-web-landing",
  label: "Lime-accent web landing",
  description:
    "Bright modern landing page with lime navigation bar, hero text slider, feature card grid, and embedded login and contact forms.",
  highlight: "High-contrast accents guide attention through sections",
  trait: {
    id: "lime-accent-web-landing",
    type: "element",
    label: "Accent-driven marketing layout",
    sourceExampleId: "lime-web-template",
    description:
      "Wide layout with bold lime navigation bar, centered hero headline and supporting text, icon-based feature cards in a rounded grid, followed by split login and contact forms.",
    colors: ["#D6D92B", "#F2F2F2", "#9E9E9E", "#1F1F1F", "#FFFFFF"],
    fonts: ["Sans-serif bold", "Sans-serif regular"],
    layoutHints: [
      "High-contrast navigation bar",
      "Centered hero text",
      "Hero slider indicators",
      "Rounded feature card grid",
      "Split login and contact forms",
      "Accent color highlights",
    ],
  },
  {
    id: "lime-accent-web-landing",
    name: "Lime-accent web landing",
    tagline: "High-contrast accents guide attention through sections",
    scenario: "Web Landing",
    description:
      "Bright modern landing page with lime navigation bar, hero text slider, feature card grid, and embedded login and contact forms.",
    palette: ["#D6D92B", "#F2F2F2", "#9E9E9E", "#1F1F1F", "#FFFFFF"],
    fonts: ["Sans-serif"],
    layoutTags: ["High-contrast navigation bar", "Centered hero text", "Hero slider indicators", "Rounded feature card grid", "Split login and contact forms", "Accent color highlights"],
    thumbnail: "images/istockphoto-520259653-1024x1024.jpg",
    preview: "images/istockphoto-520259653-1024x1024.jpg",
    elements: [
      {
        id: "lime-accent-web-landing-element",
        label: "Accent-driven marketing layout",
        description:
          "Wide layout with bold lime navigation bar, centered hero headline and supporting text, icon-based feature cards in a rounded grid, followed by split login and contact forms.",
        highlight: "High-contrast accents guide attention through sections",
        trait: {
          id: "lime-accent-web-landing",
          type: "element",
          label: "Accent-driven marketing layout",
          sourceExampleId: "lime-accent-web-landing",
          description:
            "Wide layout with bold lime navigation bar, centered hero headline and supporting text, icon-based feature cards in a rounded grid, followed by split login and contact forms.",
          colors: ["#D6D92B", "#F2F2F2", "#9E9E9E", "#1F1F1F", "#FFFFFF"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "High-contrast navigation bar",
            "Centered hero text",
            "Hero slider indicators",
            "Rounded feature card grid",
            "Split login and contact forms",
            "Accent color highlights",
          ],
        },
      },
    ],
  },
  {
    id: "green-grid-corporate-blog",
    name: "Green grid corporate blog",
    tagline: "Strong visual hierarchy with modular content blocks",
    scenario: "Corporate Blog",
    description:
      "Bold corporate landing page with oversized headline hero, content summaries, and grid-based blog category blocks.",
    palette: ["#0E4D45", "#1F6F6B", "#9FC6B4", "#2F8C8C", "#FFFFFF"],
    fonts: ["Sans-serif"],
    layoutTags: ["Oversized hero headline", "Patterned background", "Centered navigation bar", "Two-column text summaries", "Grid-based content cards", "Color-coded sections"],
    thumbnail: "images/istockphoto-520261905-2048x2048.jpg",
    preview: "images/istockphoto-520261905-2048x2048.jpg",
    elements: [
      {
        id: "green-grid-corporate-blog-element",
        label: "Grid-based corporate landing",
        description:
          "Large headline hero over dark green patterned background, horizontal navigation, followed by solution/news text sections and a multi-row grid of color-coded blog and service cards.",
        highlight: "Strong visual hierarchy with modular content blocks",
        trait: {
          id: "green-grid-corporate-blog",
          type: "element",
          label: "Grid-based corporate landing",
          sourceExampleId: "green-grid-corporate-blog",
          description:
            "Large headline hero over dark green patterned background, horizontal navigation, followed by solution/news text sections and a multi-row grid of color-coded blog and service cards.",
          colors: ["#0E4D45", "#1F6F6B", "#9FC6B4", "#2F8C8C", "#FFFFFF"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Oversized hero headline",
            "Patterned background",
            "Centered navigation bar",
            "Two-column text summaries",
            "Grid-based content cards",
            "Color-coded sections",
          ],
        },
      },
    ],
  },
  {
    id: "bubble-ui-corporate-landing",
    name: "Bubble-style corporate landing",
    tagline: "Friendly aesthetic with strong modular structure",
    scenario: "Corporate Landing",
    description:
      "Light corporate homepage with circular visual motifs, hero text slider, feature bubbles, and utility sections.",
    palette: ["#2E3B8F", "#DADADA", "#FFFFFF", "#6B7BD1", "#1F1F1F"],
    fonts: ["Sans-serif"],
    layoutTags: ["Circular background motifs", "Hero text slider", "Large circular feature cards", "Multi-column info lists", "Inline login form", "Utility footer with contact details"],
    thumbnail: "images/istockphoto-520261915-2048x2048.jpg",
    preview: "images/istockphoto-520261915-2048x2048.jpg",
    elements: [
      {
        id: "bubble-ui-corporate-landing-element",
        label: "Circular content marketing layout",
        description:
          "Hero section with circular background accents and headline slider, followed by large circular feature cards, information lists, client sections, and an inline login form.",
        highlight: "Friendly aesthetic with strong modular structure",
        trait: {
          id: "bubble-ui-corporate-landing",
          type: "element",
          label: "Circular content marketing layout",
          sourceExampleId: "bubble-ui-corporate-landing",
          description:
            "Hero section with circular background accents and headline slider, followed by large circular feature cards, information lists, client sections, and an inline login form.",
          colors: ["#2E3B8F", "#DADADA", "#FFFFFF", "#6B7BD1", "#1F1F1F"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Circular background motifs",
            "Hero text slider",
            "Large circular feature cards",
            "Multi-column info lists",
            "Inline login form",
            "Utility footer with contact details",
          ],
        },
      },
    ],
  },
  {
    id: "blue-cta-blog-login-landing",
    name: "Blue CTA blog landing",
    tagline: "Clear call-to-action hierarchy for login and subscriptions",
    scenario: "Blog Landing",
    description:
      "Structured corporate landing page with bold hero banner, inline login form, newsletter signup, and three-column content sections.",
    palette: ["#1E73B8", "#D1D1D1", "#FFFFFF", "#2E2E2E", "#2C2F6B"],
    fonts: ["Sans-serif"],
    layoutTags: ["Bold hero banner", "Inline login form", "Newsletter subscription bar", "Three-column content layout", "Stacked blog cards", "Utility footer with contact info"],
    thumbnail: "images/istockphoto-520261923-2048x2048.jpg",
    preview: "images/istockphoto-520261923-2048x2048.jpg",
    elements: [
      {
        id: "blue-cta-blog-login-landing-element",
        label: "CTA-focused corporate layout",
        description:
          "Wide layout featuring a prominent blue hero banner with headline and login inputs, followed by a newsletter subscription bar and three-column sections for news, blog cards, and client lists.",
        highlight: "Clear call-to-action hierarchy for login and subscriptions",
        trait: {
          id: "blue-cta-blog-login-landing",
          type: "element",
          label: "CTA-focused corporate layout",
          sourceExampleId: "blue-cta-blog-login-landing",
          description:
            "Wide layout featuring a prominent blue hero banner with headline and login inputs, followed by a newsletter subscription bar and three-column sections for news, blog cards, and client lists.",
          colors: ["#1E73B8", "#D1D1D1", "#FFFFFF", "#2E2E2E", "#2C2F6B"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Bold hero banner",
            "Inline login form",
            "Newsletter subscription bar",
            "Three-column content layout",
            "Stacked blog cards",
            "Utility footer with contact info",
          ],
        },
      },
    ],
  },




{
  id: "red-ribbon-cta-corporate",
  label: "Red ribbon CTA landing",
  description:
    "Bold corporate landing page with red hero banner, diagonal ribbon accents, inline login form, and stacked blog highlights.",
  highlight: "High-contrast CTAs with strong visual emphasis",
  trait: {
    id: "red-ribbon-cta-corporate",
    type: "element",
    label: "Ribbon-accent marketing layout",
    sourceExampleId: "red-ribbon-template",
    description:
      "Prominent red hero section with diagonal ribbon label overlay, centered descriptive text, inline login inputs, followed by business overview and blog card sections using repeated ribbon motifs.",
    colors: ["#C81E1E", "#F2F2F2", "#FFFFFF", "#1F1F1F", "#9E9E9E"],
    fonts: ["Sans-serif bold", "Sans-serif regular"],
    layoutHints: [
      "Bold red hero banner",
      "Diagonal ribbon overlays",
      "Inline login form",
      "Sectioned business overview",
      "Stacked blog highlight cards",
      "Strong contrast CTAs",
    ],
  },
  {
    id: "red-ribbon-cta-corporate",
    name: "Red ribbon CTA landing",
    tagline: "High-contrast CTAs with strong visual emphasis",
    scenario: "Corporate Landing",
    description:
      "Bold corporate landing page with red hero banner, diagonal ribbon accents, inline login form, and stacked blog highlights.",
    palette: ["#C81E1E", "#F2F2F2", "#FFFFFF", "#1F1F1F", "#9E9E9E"],
    fonts: ["Sans-serif"],
    layoutTags: ["Bold red hero banner", "Diagonal ribbon overlays", "Inline login form", "Sectioned business overview", "Stacked blog highlight cards", "Strong contrast CTAs"],
    thumbnail: "images/istockphoto-520261927-2048x2048.jpg",
    preview: "images/istockphoto-520261927-2048x2048.jpg",
    elements: [
      {
        id: "red-ribbon-cta-corporate-element",
        label: "Ribbon-accent marketing layout",
        description:
          "Prominent red hero section with diagonal ribbon label overlay, centered descriptive text, inline login inputs, followed by business overview and blog card sections using repeated ribbon motifs.",
        highlight: "High-contrast CTAs with strong visual emphasis",
        trait: {
          id: "red-ribbon-cta-corporate",
          type: "element",
          label: "Ribbon-accent marketing layout",
          sourceExampleId: "red-ribbon-cta-corporate",
          description:
            "Prominent red hero section with diagonal ribbon label overlay, centered descriptive text, inline login inputs, followed by business overview and blog card sections using repeated ribbon motifs.",
          colors: ["#C81E1E", "#F2F2F2", "#FFFFFF", "#1F1F1F", "#9E9E9E"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Bold red hero banner",
            "Diagonal ribbon overlays",
            "Inline login form",
            "Sectioned business overview",
            "Stacked blog highlight cards",
            "Strong contrast CTAs",
          ],
        },
      },
    ],
  },
  {
    id: "aqua-dual-panel-blog-landing",
    name: "Aqua dual-panel landing",
    tagline: "Soft color palette with clear sectional flow",
    scenario: "Blog Landing",
    description:
      "Clean corporate landing page with dual angled hero panels, business overview section, and card-based blog grid.",
    palette: ["#BFE8EA", "#EDEDED", "#FFFFFF", "#1F1F1F", "#9E9E9E"],
    fonts: ["Sans-serif"],
    layoutTags: ["Dual angled hero panels", "Centered hero slider indicators", "Sectioned business overview", "Three-column blog card grid", "High-contrast CTA buttons", "Minimal decorative accents"],
    thumbnail: "images/istockphoto-520261931-2048x2048.jpg",
    preview: "images/istockphoto-520261931-2048x2048.jpg",
    elements: [
      {
        id: "aqua-dual-panel-blog-landing-element",
        label: "Dual-panel marketing layout",
        description:
          "Hero section featuring two mirrored aqua panels with angled edges and headline text, followed by a centered business summary and a three-column blog card layout with strong call-to-action buttons.",
        highlight: "Soft color palette with clear sectional flow",
        trait: {
          id: "aqua-dual-panel-blog-landing",
          type: "element",
          label: "Dual-panel marketing layout",
          sourceExampleId: "aqua-dual-panel-blog-landing",
          description:
            "Hero section featuring two mirrored aqua panels with angled edges and headline text, followed by a centered business summary and a three-column blog card layout with strong call-to-action buttons.",
          colors: ["#BFE8EA", "#EDEDED", "#FFFFFF", "#1F1F1F", "#9E9E9E"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Dual angled hero panels",
            "Centered hero slider indicators",
            "Sectioned business overview",
            "Three-column blog card grid",
            "High-contrast CTA buttons",
            "Minimal decorative accents",
          ],
        },
      },
    ],
  },
  {
    id: "diagonal-purple-motivational-landing",
    name: "Diagonal motivational corporate landing",
    tagline: "Strong emotional messaging paired with clear CTAs",
    scenario: "Motivational Landing",
    description:
      "Bold motivational landing page with diagonal color blocks, inspirational hero copy, and multiple call-to-action sections.",
    palette: ["#6A3D9A", "#2E2B6F", "#FFFFFF", "#1F1F1F", "#3FA9F5"],
    fonts: ["Sans-serif"],
    layoutTags: ["Diagonal split hero", "Large motivational headline", "High-contrast CTA buttons", "Icon-supported value sections", "Bullet-style benefit list", "Footer login form"],
    thumbnail: "images/istockphoto-520261939-2048x2048.jpg",
    preview: "images/istockphoto-520261939-2048x2048.jpg",
    elements: [
      {
        id: "diagonal-purple-motivational-landing-element",
        label: "Motivational marketing layout",
        description:
          "Hero section split diagonally between dark blue and purple backgrounds with large motivational headline, followed by a CTA banner, icon-supported value sections, and a utility footer with login form.",
        highlight: "Strong emotional messaging paired with clear CTAs",
        trait: {
          id: "diagonal-purple-motivational-landing",
          type: "element",
          label: "Motivational marketing layout",
          sourceExampleId: "diagonal-purple-motivational-landing",
          description:
            "Hero section split diagonally between dark blue and purple backgrounds with large motivational headline, followed by a CTA banner, icon-supported value sections, and a utility footer with login form.",
          colors: ["#6A3D9A", "#2E2B6F", "#FFFFFF", "#1F1F1F", "#3FA9F5"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Diagonal split hero",
            "Large motivational headline",
            "High-contrast CTA buttons",
            "Icon-supported value sections",
            "Bullet-style benefit list",
            "Footer login form",
          ],
        },
      },
    ],
  },
  {
    id: "red-faceted-service-landing",
    name: "Red faceted service landing",
    tagline: "Clear service discovery with strong visual emphasis",
    scenario: "Service Landing",
    description:
      "Modern service-oriented landing page with faceted red hero banner, icon-based service cards, and gallery showcase section.",
    palette: ["#C61C1C", "#F2F2F2", "#8A8A8A", "#FFFFFF", "#1F1F1F"],
    fonts: ["Sans-serif"],
    layoutTags: ["Faceted polygon hero background", "Headline with slider indicators", "Three-column service cards", "Icon-led content blocks", "Gallery preview section", "Structured footer with company info"],
    thumbnail: "images/istockphoto-588243744-2048x2048.jpg",
    preview: "images/istockphoto-588243744-2048x2048.jpg",
    elements: [
      {
        id: "red-faceted-service-landing-element",
        label: "Service-driven marketing layout",
        description:
          "Top navigation with rounded tabs, large faceted red hero banner featuring headline and slider indicators, followed by three icon-based service cards and a gallery preview section with circular image placeholders.",
        highlight: "Clear service discovery with strong visual emphasis",
        trait: {
          id: "red-faceted-service-landing",
          type: "element",
          label: "Service-driven marketing layout",
          sourceExampleId: "red-faceted-service-landing",
          description:
            "Top navigation with rounded tabs, large faceted red hero banner featuring headline and slider indicators, followed by three icon-based service cards and a gallery preview section with circular image placeholders.",
          colors: ["#C61C1C", "#F2F2F2", "#8A8A8A", "#FFFFFF", "#1F1F1F"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Faceted polygon hero background",
            "Headline with slider indicators",
            "Three-column service cards",
            "Icon-led content blocks",
            "Gallery preview section",
            "Structured footer with company info",
          ],
        },
      },
    ],
  },



{
  id: "glass-ui-service-landing",
  label: "Glass UI service landing",
    tagline: "Sleek glass effect creates a premium, modern feel",
    scenario: "Service Landing",
    description:
      "Dark modern landing page using glassmorphism hero banner, icon-based service cards, and gallery preview section.",
    palette: ["#5A5A5A", "#2B2B2B", "#FFFFFF", "#9E9E9E", "#000000"],
    fonts: ["Sans-serif"],
    layoutTags: ["Glassmorphism hero banner", "Centered floating callout", "Pill-style navigation tabs", "Three-column service cards", "Circular gallery placeholders", "Dark minimal footer"],
    thumbnail: "images/istockphoto-588243926-2048x2048.jpg",
    preview: "images/istockphoto-588243926-2048x2048.jpg",
    elements: [
      {
        id: "glass-ui-service-landing-element",
        label: "Glassmorphism marketing layout",
        description:
          "Centered glass-style hero banner with frosted transparency and drop shadow, top navigation with pill tabs, followed by three bordered service cards and a gallery section with circular image placeholders.",
        highlight: "Sleek glass effect creates a premium, modern feel",
        trait: {
          id: "glass-ui-service-landing",
          type: "element",
          label: "Glassmorphism marketing layout",
          sourceExampleId: "glass-ui-service-landing",
          description:
            "Centered glass-style hero banner with frosted transparency and drop shadow, top navigation with pill tabs, followed by three bordered service cards and a gallery section with circular image placeholders.",
          colors: ["#5A5A5A", "#2B2B2B", "#FFFFFF", "#9E9E9E", "#000000"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Glassmorphism hero banner",
            "Centered floating callout",
            "Pill-style navigation tabs",
            "Three-column service cards",
            "Circular gallery placeholders",
            "Dark minimal footer",
          ],
        },
      },
    ],
  },
  {
    id: "network-hero-dashboard-landing",
    name: "Networked dashboard landing",
    tagline: "Combines marketing, authentication, and product discovery in one layout",
    scenario: "Dashboard Landing",
    description:
      "Feature-rich corporate landing page with network-style hero graphic, login panel, content highlights, and utility navigation.",
    palette: ["#F04B23", "#8BC34A", "#4BB6E8", "#E6E6E6", "#2E2E2E", "#FFFFFF"],
    fonts: ["Sans-serif"],
    layoutTags: ["Abstract network hero graphic", "Circular focal element", "Top tab navigation", "Left-aligned login panel", "Highlighted content band", "Multi-column feature tiles"],
    thumbnail: "images/istockphoto-604360684-2048x2048.jpg",
    preview: "images/istockphoto-604360684-2048x2048.jpg",
    elements: [
      {
        id: "network-hero-dashboard-landing-element",
        label: "Dashboard-style marketing layout",
        description:
          "Wide layout featuring a large hero with abstract network visualization and circular focal element, top tab navigation, left-aligned login panel, central content highlight band, and multi-column feature tiles.",
        highlight: "Combines marketing, authentication, and product discovery in one layout",
        trait: {
          id: "network-hero-dashboard-landing",
          type: "element",
          label: "Dashboard-style marketing layout",
          sourceExampleId: "network-hero-dashboard-landing",
          description:
            "Wide layout featuring a large hero with abstract network visualization and circular focal element, top tab navigation, left-aligned login panel, central content highlight band, and multi-column feature tiles.",
          colors: ["#F04B23", "#8BC34A", "#4BB6E8", "#E6E6E6", "#2E2E2E", "#FFFFFF"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Abstract network hero graphic",
            "Circular focal element",
            "Top tab navigation",
            "Left-aligned login panel",
            "Highlighted content band",
            "Multi-column feature tiles",
            "Dense dashboard-style layout",
          ],
        },
      },
    ],
  },




{
    id: "dark-skyline-about-landing",
    name: "Dark skyline about landing",
    tagline: "Strong visual contrast draws focus to core content",
    scenario: "About Landing",
    description:
      "Elegant corporate website with dark framing, panoramic hero image, informational about section, and integrated login panel.",
    palette: ["#1A1A1A", "#4A97B5", "#FFFFFF", "#F2C94C", "#2E2E2E"],
    fonts: ["Sans-serif"],
    layoutTags: ["Dark framed layout", "Panoramic hero image", "Left-aligned login panel", "Multi-column about section", "Icon-based contact links", "Minimal footer navigation"],
    thumbnail: "images/istockphoto-928516162-2048x2048.jpg",
    preview: "images/istockphoto-928516162-2048x2048.jpg",
    elements: [
      {
        id: "dark-skyline-about-landing-element",
        label: "Panoramic about layout",
        description:
          "Centered layout with dark header and footer, wide panoramic hero image, left-aligned account/login panel, and multi-column about content with contact details and icon links.",
        highlight: "Strong visual contrast draws focus to core content",
        trait: {
          id: "dark-skyline-about-landing",
          type: "element",
          label: "Panoramic about layout",
          sourceExampleId: "dark-skyline-about-landing",
          description:
            "Centered layout with dark header and footer, wide panoramic hero image, left-aligned account/login panel, and multi-column about content with contact details and icon links.",
          colors: ["#1A1A1A", "#4A97B5", "#FFFFFF", "#F2C94C", "#2E2E2E"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Dark framed layout",
            "Panoramic hero image",
            "Left-aligned login panel",
            "Multi-column about section",
            "Icon-based contact links",
            "Minimal footer navigation",
          ],
        },
      },
    ],
  },




  {
    id: "illustrated-hero-circle-features",
    name: "Illustrated hero with circular features",
    tagline: "Playful visuals combined with clear marketing structure",
    scenario: "Illustrated Landing",
    description:
      "Bright, illustration-driven landing page with vector hero artwork, welcoming intro section, and circular service highlights.",
    palette: ["#F7C600", "#E91E63", "#8E24AA", "#212121", "#FFFFFF"],
    fonts: ["Sans-serif"],
    layoutTags: ["Illustrated hero graphic", "Framed headline callout", "Centered welcome text block", "Team avatar row", "Circular feature cards", "Bright accent color usage"],
    thumbnail:
      "https://images.unsplash.com/photo-1516116217924-9b57c11fb66e?auto=format&fit=crop&w=400&q=60",
    preview:
      "https://images.unsplash.com/photo-1516116217924-9b57c11fb66e?auto=format&fit=crop&w=900&q=60",
    elements: [
      {
        id: "illustrated-hero-circle-features-element",
        label: "Vector illustration landing layout",
        description:
          "Centered hero featuring colorful vector illustration with framed headline, followed by welcome copy, team avatars, and a row of circular feature cards using bold accent colors.",
        highlight: "Playful visuals combined with clear marketing structure",
        trait: {
          id: "illustrated-hero-circle-features",
          type: "element",
          label: "Vector illustration landing layout",
          sourceExampleId: "illustrated-hero-circle-features",
          description:
            "Centered hero featuring colorful vector illustration with framed headline, followed by welcome copy, team avatars, and a row of circular feature cards using bold accent colors.",
          colors: ["#F7C600", "#E91E63", "#8E24AA", "#212121", "#FFFFFF"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Illustrated hero graphic",
            "Framed headline callout",
            "Centered welcome text block",
            "Team avatar row",
            "Circular feature cards",
            "Bright accent color usage",
          ],
        },
      },
    ],
  },





  {
    id: "gradient-triangle-portfolio-landing",
    name: "Gradient triangle portfolio landing",
    tagline: "Clean layout with vibrant gradients that frame content",
    scenario: "Portfolio Landing",
    description:
      "Modern portfolio landing page with warm gradient navigation, centered hero slider, and three-column informational sections.",
    palette: ["#E91E63", "#F39C12", "#FFFFFF", "#F2F2F2", "#9E9E9E"],
    fonts: ["Sans-serif"],
    layoutTags: ["Gradient navigation bar", "Centered hero slider", "Minimal headline typography", "Three-column content layout", "Soft card-like section dividers", "Gradient footer accent"],
    thumbnail: "images/istockphoto-1097005808-2048x2048.jpg",
    preview: "images/istockphoto-1097005808-2048x2048.jpg",
    elements: [
      {
        id: "gradient-triangle-portfolio-landing-element",
        label: "Gradient-driven portfolio layout",
        description:
          "Top navigation bar with pink-to-orange gradient and tabbed menu, centered hero slider with headline and dot indicators, followed by three evenly spaced columns for about, portfolio, and news content, and a matching gradient footer.",
        highlight: "Clean layout with vibrant gradients that frame content",
        trait: {
          id: "gradient-triangle-portfolio-landing",
          type: "element",
          label: "Gradient-driven portfolio layout",
          sourceExampleId: "gradient-triangle-portfolio-landing",
          description:
            "Top navigation bar with pink-to-orange gradient and tabbed menu, centered hero slider with headline and dot indicators, followed by three evenly spaced columns for about, portfolio, and news content, and a matching gradient footer.",
          colors: ["#E91E63", "#F39C12", "#FFFFFF", "#F2F2F2", "#9E9E9E"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Gradient navigation bar",
            "Centered hero slider",
            "Minimal headline typography",
            "Three-column content layout",
            "Soft card-like section dividers",
            "Gradient footer accent",
          ],
        },
      },
    ],
  },




  {
    id: "mosaic-portfolio-icon-landing",
    name: "Mosaic portfolio landing",
    tagline: "Distinct visual rhythm using modular blocks and icons",
    scenario: "Portfolio Landing",
    description:
      "Editorial-style landing page with mosaic hero grid, icon-driven feature row, and three-column informational sections.",
    palette: ["#F5E7A3", "#C49A6C", "#3F3F3F", "#1F1F1F", "#FFFFFF"],
    fonts: ["Sans-serif"],
    layoutTags: ["Mosaic grid hero", "Uneven rectangular panels", "Icon-based feature row", "Three-column informational section", "Muted warm color palette", "Utility-focused footer navigation"],
    thumbnail:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&q=60",
    preview:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=900&q=60",
    elements: [
      {
        id: "mosaic-portfolio-icon-landing-element",
        label: "Grid-based editorial layout",
        description:
          "Top navigation with utility links, followed by a large mosaic-style hero composed of uneven rectangular panels, an icon feature strip, and a three-column section highlighting about, mobile, and contact content.",
        highlight: "Distinct visual rhythm using modular blocks and icons",
        trait: {
          id: "mosaic-portfolio-icon-landing",
          type: "element",
          label: "Grid-based editorial layout",
          sourceExampleId: "mosaic-portfolio-icon-landing",
          description:
            "Top navigation with utility links, followed by a large mosaic-style hero composed of uneven rectangular panels, an icon feature strip, and a three-column section highlighting about, mobile, and contact content.",
          colors: ["#F5E7A3", "#C49A6C", "#3F3F3F", "#1F1F1F", "#FFFFFF"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Mosaic grid hero",
            "Uneven rectangular panels",
            "Icon-based feature row",
            "Three-column informational section",
            "Muted warm color palette",
            "Utility-focused footer navigation",
          ],
        },
      },
    ],
  },




{
    id: "colorful-cloud-hero-business-layout",
    name: "Colorful cloud hero business site",
    tagline: "Strong visual contrast between playful hero and structured content sections",
    scenario: "Business Layout",
    description:
      "Bright, playful landing page featuring a gradient sky hero with layered cloud illustrations, followed by a structured business layout.",
    palette: ["#4DB3E6", "#F4C430", "#E74C3C", "#8B1A1A", "#FFFFFF", "#1E1E1E"],
    fonts: ["Sans-serif"],
    layoutTags: ["Illustrated gradient hero", "Layered cloud graphics", "Top navigation with search bar", "Left-side login panel", "Two-column About Us section", "Icon-based feature strip"],
    thumbnail: "images/istockphoto-1145896481-2048x2048.jpg",
    preview: "images/istockphoto-1145896481-2048x2048.jpg",
    elements: [
      {
        id: "colorful-cloud-hero-business-layout-element",
        label: "Illustrated gradient hero with classic business sections",
        description:
          "Large illustrated hero with gradient background and layered cloud shapes, top navigation with search, a split login/about section, icon-based feature strip, and a utility-heavy footer.",
        highlight: "Strong visual contrast between playful hero and structured content sections",
        trait: {
          id: "colorful-cloud-hero-business-layout",
          type: "element",
          label: "Illustrated gradient hero with classic business sections",
          sourceExampleId: "colorful-cloud-hero-business-layout",
          description:
            "Large illustrated hero with gradient background and layered cloud shapes, top navigation with search, a split login/about section, icon-based feature strip, and a utility-heavy footer.",
          colors: ["#4DB3E6", "#F4C430", "#E74C3C", "#8B1A1A", "#FFFFFF", "#1E1E1E"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Illustrated gradient hero",
            "Layered cloud graphics",
            "Top navigation with search bar",
            "Left-side login panel",
            "Two-column About Us section",
            "Icon-based feature strip",
            "Dark utility footer",
          ],
        },
      },
    ],
  },




{
    id: "bold-multicolor-pricing-grid",
    name: "Bold multicolor pricing plans layout",
    tagline: "Strong color segmentation clearly differentiates pricing tiers at a glance",
    scenario: "Pricing Layout",
    description:
      "High-contrast pricing section organized as a grid of large color blocks, each representing a subscription tier with feature checklists and call-to-action buttons.",
    palette: ["#8FAF1F", "#0FA3B1", "#F2C300", "#E53935", "#4A4A4A", "#FFFFFF"],
    fonts: ["Sans-serif"],
    layoutTags: ["Full-width pricing grid", "Color-coded plan cards", "Checklist icons for feature comparison", "Centered plan titles", "Strong call-to-action buttons", "Conversion-oriented design"],
    thumbnail: "images/istockphoto-1165117159-2048x2048.jpg",
    preview: "images/istockphoto-1165117159-2048x2048.jpg",
    elements: [
      {
        id: "bold-multicolor-pricing-grid-element",
        label: "Grid-based pricing comparison with color-coded tiers",
        description:
          "Pricing layout divided into equally weighted rectangular panels for Free, Standard, Premium, and Multi-Seat plans, using bold background colors, checklist icons, concise descriptions, and prominent 'Order Now' buttons to emphasize comparison and conversion.",
        highlight: "Strong color segmentation clearly differentiates pricing tiers at a glance",
        trait: {
          id: "bold-multicolor-pricing-grid",
          type: "element",
          label: "Grid-based pricing comparison with color-coded tiers",
          sourceExampleId: "bold-multicolor-pricing-grid",
          description:
            "Pricing layout divided into equally weighted rectangular panels for Free, Standard, Premium, and Multi-Seat plans, using bold background colors, checklist icons, concise descriptions, and prominent 'Order Now' buttons to emphasize comparison and conversion.",
          colors: ["#8FAF1F", "#0FA3B1", "#F2C300", "#E53935", "#4A4A4A", "#FFFFFF"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Full-width pricing grid",
            "Color-coded plan cards",
            "Checklist icons for feature comparison",
            "Centered plan titles",
            "Strong call-to-action buttons",
            "Minimal navigation focus, conversion-oriented design",
          ],
        },
      },
    ],
  },




{
    id: "rounded-glass-about-layout",
    name: "Rounded glass content layout",
    tagline: "Creates a calm, modern, glass-like feel",
    scenario: "About Layout",
    description:
      "Centered card-style website layout with rounded corners, soft gradients, and a blurred cityscape hero image.",
    palette: ["#2E3A3A", "#8FBAD3", "#EAF3F8", "#FFFFFF", "#6C8FA5"],
    fonts: ["Sans-serif"],
    layoutTags: ["Centered card layout", "Rounded corners", "Blurred hero background", "Horizontal navigation bar", "Sidebar navigation list", "Icon-based feature row"],
    thumbnail: "images/istockphoto-1165571247-1024x1024.jpg",
    preview: "images/istockphoto-1165571247-1024x1024.jpg",
    elements: [
      {
        id: "rounded-glass-about-layout-element",
        label: "Rounded glass content card",
        description:
          "Main content contained in a centered rounded rectangle with drop shadow, blurred photographic hero banner, soft blue gradient navigation bar, and icon-based footer section.",
        highlight: "Creates a calm, modern, glass-like feel",
        trait: {
          id: "rounded-glass-about-layout",
          type: "element",
          label: "Rounded glass content card",
          sourceExampleId: "rounded-glass-about-layout",
          description:
            "Main content contained in a centered rounded rectangle with drop shadow, blurred photographic hero banner, soft blue gradient navigation bar, and icon-based footer section.",
          colors: ["#2E3A3A", "#8FBAD3", "#EAF3F8", "#FFFFFF", "#6C8FA5"],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Centered card layout",
            "Rounded corners",
            "Blurred hero background",
            "Horizontal navigation bar",
            "Sidebar navigation list",
            "Icon-based feature row",
            "Soft gradients and subtle shadows",
          ],
        },
      },
    ],
  },
  {
    id: "layered-tabbed-about-card",
    name: "Layered tabbed about section",
    tagline: "Strong visual hierarchy with clear section focus",
    scenario: "About Card",
    description:
      "Prominent centered content card with rounded corners, tab-style navigation pills, and a textured architectural background.",
    palette: [
      "#8F1D2C",
      "#B12A3F",
      "#5A0F1C",
      "#C9A999",
      "#F4F1EE",
      "#2E2E2E",
    ],
    fonts: ["Sans-serif"],
    layoutTags: ["Centered primary content card", "Rounded corners throughout", "Pill-style tab navigation", "Layered panels with depth", "Circular accent element for contact info", "Textured background"],
    thumbnail:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=60",
    preview:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=60",
    elements: [
      {
        id: "layered-tabbed-about-card-element",
        label: "Tabbed content card with rounded panels",
        description:
          "Large rounded rectangular card centered on the page featuring an 'About Us' section, pill-shaped top tabs (About, Services, Solutions, Support), subtle vertical gradient fill, and a floating circular contact panel for emphasis.",
        highlight: "Strong visual hierarchy with clear section focus",
        trait: {
          id: "layered-tabbed-about-card",
          type: "element",
          label: "Tabbed content card with rounded panels",
          sourceExampleId: "layered-tabbed-about-card",
          description:
            "Large rounded rectangular card centered on the page featuring an 'About Us' section, pill-shaped top tabs (About, Services, Solutions, Support), subtle vertical gradient fill, and a floating circular contact panel for emphasis.",
          colors: [
            "#8F1D2C",
            "#B12A3F",
            "#5A0F1C",
            "#C9A999",
            "#F4F1EE",
            "#2E2E2E",
          ],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Centered primary content card",
            "Rounded corners throughout",
            "Pill-style tab navigation",
            "Layered panels with depth",
            "Circular accent element for contact info",
            "Textured or photographic background",
            "Minimal footer icon row",
          ],
        },
      },
    ],
  },





  {
    id: "rounded-portfolio-slider-layout",
    name: "Rounded portfolio hero with slider",
    tagline: "Soft rounded UI with layered depth and motion emphasis",
    scenario: "Portfolio Slider",
    description:
      "Modern web layout featuring rounded rectangular panels, a prominent hero slider with globe imagery, and modular content cards below.",
    palette: [
      "#0E2A47",
      "#1E5FA3",
      "#6FAED9",
      "#E6EEF5",
      "#FFFFFF",
      "#3A3A3A",
    ],
    fonts: ["Sans-serif"],
    layoutTags: ["Rounded container-based layout", "Hero carousel with arrow navigation", "High-contrast callout text in hero", "Three-column card section", "Consistent border radius", "Soft gradients"],
    thumbnail: "images/istockphoto-1168448389-2048x2048.jpg",
    preview: "images/istockphoto-1168448389-2048x2048.jpg",
    elements: [
      {
        id: "rounded-portfolio-slider-layout-element",
        label: "Rounded hero slider with modular cards",
        description:
          "Centered page layout using large rounded containers. Includes a top navigation bar, a wide hero slider with globe illustration and carousel controls, followed by three evenly spaced rounded content cards for About, visual feature, and text.",
        highlight: "Soft rounded UI with layered depth and motion emphasis",
        trait: {
          id: "rounded-portfolio-slider-layout",
          type: "element",
          label: "Rounded hero slider with modular cards",
          sourceExampleId: "rounded-portfolio-slider-layout",
          description:
            "Centered page layout using large rounded containers. Includes a top navigation bar, a wide hero slider with globe illustration and carousel controls, followed by three evenly spaced rounded content cards for About, visual feature, and text.",
          colors: [
            "#0E2A47",
            "#1E5FA3",
            "#6FAED9",
            "#E6EEF5",
            "#FFFFFF",
            "#3A3A3A",
          ],
          fonts: ["Sans-serif"],
          layoutHints: [
            "Rounded container-based layout",
            "Hero carousel with arrow navigation",
            "High-contrast callout text in hero",
            "Three-column card section",
            "Consistent border radius across components",
            "Soft gradients and subtle shadows",
            "Centered, symmetrical composition",
          ],
        },
      },
    ],
  },




{
  id: "green-idea-slider-layout",
  label: "Green idea hero with services grid",
  description:
    "Clean, eco-inspired website layout with a green gradient hero slider, icon-driven sections, and clear service/contact segmentation.",
  highlight: "Fresh green palette with lightbulb innovation theme",
  trait: {
    id: "green-idea-slider-layout",
    type: "layout",
    label: "Green hero slider with services and contacts",
    sourceExampleId: "samplesite-green-idea",
    description:
      "Full-width green gradient hero with carousel arrows and pagination dots, featuring a laptop + lightbulb illustration. Includes a horizontal top navigation, numbered About/Services/Contacts sections, a three-column feature strip, and a bold contact callout band with icon set.",
    colors: [
      "#6FA43A",
      "#8DBE5A",
      "#4F7F2A",
      "#FFFFFF",
      "#2E2E2E",
      "#DCEAC8",
    ],
    fonts: ["Sans-serif bold", "Sans-serif regular"],
    layoutHints: [
      "Full-width hero slider with arrows",
      "Green gradient background",
      "Centered slogan with pagination dots",
      "Laptop + idea/lightbulb illustration",
      "Numbered content sections",
      "Three-column feature strip",
      "Icon-based contact bar",
      "Clear horizontal section separation",
      "Footer with inline navigation",
    ],
  },
},




{
  id: "arrow-flow-glass-header-layout",
  label: "Arrow-driven glass header with about section",
  description:
    "Modern glassmorphism-style header with directional arrow graphics, followed by a clean two-column About Us content area and icon-based footer navigation.",
  highlight: "Layered arrow motion over a global gradient background",
  trait: {
    id: "arrow-flow-glass-header-layout",
    type: "layout",
    label: "Glass header with arrow flow motif",
    sourceExampleId: "your-site-arrow-glass",
    description:
      "Rounded glass-like hero header featuring layered arrow icons suggesting motion and direction over a warm gradient world-map backdrop. Includes compact top navigation, followed by a white About Us section with sidebar links, dual text columns, and a minimal icon strip above a slim footer.",
    colors: [
      "#F2A23A",
      "#D47A2C",
      "#2F3A4A",
      "#FFFFFF",
      "#EDEDED",
      "#1E1E1E",
    ],
    fonts: ["Sans-serif bold", "Sans-serif regular"],
    layoutHints: [
      "Rounded glassmorphism hero container",
      "Gradient background with world map overlay",
      "Repeating arrow graphics indicating motion",
      "Centered logo with compact navigation",
      "Two-column About Us text layout",
      "Left sidebar list navigation",
      "Minimal icon row for highlights",
      "Slim footer with inline links",
    ],
  },
},



{
  id: "blue-globe-search-header-layout",
  label: "Blue globe hero with search-focused header",
  description:
    "Corporate-style layout featuring a wide blue hero header with vertical texture lines, globe illustration, and integrated search bar, followed by a structured About Us section with feature tiles and circular highlights.",
  highlight: "Right-aligned globe graphic paired with prominent search input",
  trait: {
    id: "blue-globe-search-header-layout",
    type: "layout",
    label: "Globe hero with search-centric navigation",
    sourceExampleId: "samplename-globe-search",
    description:
      "Large rounded hero container with a blue gradient and vertical line texture, showcasing a company name, slogan, horizontal navigation, and a pill-shaped search bar with confirmation button. A floating globe graphic anchors the right side. Below, a light-toned About Us section combines icon-based feature cards, text blocks, and circular callouts, ending with a compact footer navigation.",
    colors: [
      "#1E3A5F",
      "#2F5FA7",
      "#4A90E2",
      "#CDE6B8",
      "#EAF4D3",
      "#1B2B3A",
      "#FFFFFF",
    ],
    fonts: ["Sans-serif bold", "Sans-serif regular"],
    layoutHints: [
      "Wide rounded hero container",
      "Vertical line texture background",
      "Left-aligned logo and slogan",
      "Top navigation with separators",
      "Prominent pill-shaped search bar with OK button",
      "Right-aligned globe illustration",
      "Icon-based feature cards in grid",
      "Two-column About Us content",
      "Row of circular info badges",
      "Slim footer with inline navigation",
    ],
  },
},



{
  id: "circular-icon-globe-layout",
  label: "Circular icon header with dotted globe backdrop",
  description:
    "A tech-forward corporate website layout featuring a row of large circular icon modules at the top, a dotted globe visualization, and a structured About Us content area.",
  highlight: "Oversized circular feature icons paired with a digital globe motif",
  trait: {
    id: "circular-icon-globe-layout",
    type: "layout",
    label: "Circular feature navigation with globe accent",
    sourceExampleId: "your-site-circular-globe",
    description:
      "This layout emphasizes a horizontal row of prominent circular icon cards at the top, each representing a core feature or section. A blue gradient panel with a dotted world globe graphic anchors the left side, reinforcing a global or tech-oriented brand. Below, a clean white About Us section is split into two text columns, followed by a dark feature strip and a minimal footer.",
    colors: [
      "#0F1E2E",
      "#1F3B63",
      "#2F5FA7",
      "#3FA9DD",
      "#0B0B0B",
      "#FFFFFF",
      "#D9E6F2",
    ],
    fonts: ["Sans-serif bold", "Sans-serif regular"],
    layoutHints: [
      "Diagonal striped background texture",
      "Top-left logo with minimalist branding",
      "Row of large circular icon cards with thick borders",
      "Gradient blue content panel",
      "Dotted globe graphic on left side",
      "Vertical navigation list with play-style bullets",
      "Horizontal secondary navigation bar",
      "Two-column About Us text section",
      "Dark feature strip with icons and short descriptions",
      "Rounded container edges with soft drop shadows",
      "Compact footer with inline navigation links",
    ],
  },
},




{
  id: "hexagon-slider-olive-layout",
  label: "Hexagon hero slider with olive UI theme",
  description:
    "A soft, olive-toned corporate website layout featuring a rounded hero slider with abstract hexagon graphics, spherical icon navigation, and a balanced three-column content structure.",
  highlight: "Rounded hexagon-pattern hero slider paired with glossy circular icon buttons",
  trait: {
    id: "hexagon-slider-olive-layout",
    type: "layout",
    label: "Hexagon-based hero with circular feature icons",
    sourceExampleId: "your-site-hexagon-olive",
    description:
      "This layout centers around a rounded rectangular hero slider displaying layered hexagonal shapes in warm green and orange tones. Below the slider, a row of glossy circular icon buttons introduces key sections. The main content area is divided into a left vertical navigation list, a central About Us text block, and a right-side account/product panel, followed by a three-column feature section and a minimal footer.",
    colors: [
      "#4F5F2A",
      "#9FB36A",
      "#F6F3C6",
      "#E6E2B8",
      "#D87C2A",
      "#6B7F3A",
      "#FFFFFF",
    ],
    fonts: ["Sans-serif bold", "Sans-serif regular"],
    layoutHints: [
      "Olive-green top navigation bar with lowercase links",
      "Top-left italic logo typography",
      "Rounded hero slider with thick green border",
      "Abstract hexagon mosaic graphic in hero",
      "Carousel navigation arrows and pagination dots",
      "Row of glossy circular icon buttons with shadows",
      "Left-side vertical text navigation with play icons",
      "Centered About Us section with lowercase heading",
      "Right-side login/account and product detail panel",
      "Three-column feature section with icons and CTAs",
      "Soft cream background for content area",
      "Minimal footer with inline navigation links",
    ],
  },
],




{
  id: "gradient-cloud-landing-hero",
  label: "Gradient cloud landing page",
  description:
    "A modern landing page design with a smooth purple-to-blue gradient background, layered cloud shapes at the bottom, and a strong typographic hero section optimized for conversions.",
  highlight: "Bold hero typography floating above layered, colorful cloud shapes",
  trait: {
    id: "gradient-cloud-landing-hero",
    type: "landing-page",
    label: "Minimal SaaS-style hero with layered clouds",
    sourceExampleId: "company-name-creative-landing",
    description:
      "This layout features a clean SaaS-style landing page with a large left-aligned headline and subtitle on a deep gradient background. The lower portion is decorated with overlapping cloud-like shapes in warm reds, oranges, and yellows, creating visual depth while keeping the content area uncluttered. The top navigation is minimal, with a logo on the left, simple text links, and a prominent sign-in button on the right. Primary and secondary CTA buttons sit below the hero text for conversion-focused interaction.",
    colors: [
      "#2E2B6F",
      "#3B3A8F",
      "#6A3F7A",
      "#C63A3A",
      "#E96B2C",
      "#F5B23C",
      "#FFFFFF",
    ],
    fonts: [
      "Sans-serif bold (hero heading)",
      "Sans-serif regular (body and navigation)",
    ],
    layoutHints: [
      "Full-width gradient hero background",
      "Top-left logo with icon + company name",
      "Minimal top navigation with spaced links",
      "Outlined sign-in button on top-right",
      "Large left-aligned headline and subtitle",
      "Short descriptive paragraph under hero text",
      "Primary and secondary CTA buttons with rounded corners",
      "Layered cloud-style shapes at bottom of hero",
      "Warm color contrast against cool background",
      "No visible footer in hero-focused layout",
    ],
    useCases: [
      "SaaS product landing pages",
      "Startup marketing websites",
      "App launch pages",
      "Creative portfolio intros",
    ],
  },
},





{
  id: "minimal-blog-magazine-layout",
  label: "Minimal blog / magazine layout",
  description:
    "A clean, content-focused blog layout with a large hero post, simple top navigation, and a right-hand sidebar for author info and discovery.",
  highlight: "Large featured post with image-led headline and sidebar author profile",
  trait: {
    id: "minimal-blog-magazine-layout",
    type: "blog",
    label: "Content-first personal blog with sidebar",
    sourceExampleId: "demo-sample-blog",
    description:
      "This design follows a modern personal blog or magazine-style layout. The top area features a centered site title and tagline, followed by a slim horizontal navigation bar with category links. The main content column highlights a featured blog post using a large image, category tag, bold headline, and metadata such as date, author, read time, and comments. Supporting excerpt text and a clear 'Continue Reading' CTA encourage engagement. A right-hand sidebar provides author information with avatar, short bio, social links, and secondary content such as recommended or recent posts, improving discoverability without distracting from the main article.",
    colors: [
      "#FFFFFF",
      "#111111",
      "#777777",
      "#E85C4A",
      "#F2F2F2",
    ],
    fonts: [
      "Sans-serif bold (site title and post headlines)",
      "Sans-serif regular (body text and navigation)",
    ],
    layoutHints: [
      "Centered site title with short tagline",
      "Thin horizontal navigation bar below header",
      "Left-aligned main content column",
      "Large featured image per post",
      "Overlay category tag on featured image",
      "Prominent post headline with metadata row",
      "Excerpt text followed by primary CTA button",
      "Right-hand sidebar for author bio and widgets",
      "Author card with avatar, name, and description",
      "Social media follow icons in sidebar",
      "Secondary post list for continued reading",
      "Generous white space for readability",
    ],
    useCases: [
      "Personal blogs",
      "Lifestyle or food blogs",
      "Tech or tutorial blogs",
      "Online magazines",
      "Content marketing websites",
    ],
  },
},





{
  id: "personal-brand-ecommerce-lifestyle",
  label: "Personal brand e-commerce / lifestyle storefront",
  description:
    "A clean, personality-driven e-commerce homepage that blends personal branding, content, and shopping into a cohesive lifestyle experience.",
  highlight:
    "Founder-led hero section with soft imagery, script logo, and seamless shop entry points",
  trait: {
    id: "personal-brand-ecommerce-lifestyle",
    type: "ecommerce",
    label: "Creator-led lifestyle commerce site",
    sourceExampleId: "alyce-alexandra-storefront",
    description:
      "This layout is centered around a strong personal brand identity. The header uses a handwritten-style logo and soft neutral palette to establish warmth and trust. A promotional announcement bar highlights shipping or awards. The hero section prominently features the founder with clear CTAs to shop products, reinforcing authenticity and credibility. Below the fold, modular content blocks showcase featured collections, product categories, and lifestyle imagery, blending editorial storytelling with commerce. Navigation is minimal and icon-driven, keeping the focus on products and the creator’s presence.",
    colors: [
      "#FAF7F4",
      "#EADFD6",
      "#C9A98B",
      "#000000",
      "#FFFFFF"
    ],
    fonts: [
      "Handwritten script (logo/brand name)",
      "Clean sans-serif (navigation and body text)"
    ],
    layoutHints: [
      "Top announcement bar for promotions or shipping info",
      "Centered handwritten-style logo for personal branding",
      "Minimal navigation with icons (menu, search, account, cart)",
      "Hero section featuring the brand owner",
      "Clear CTA buttons like 'Shop now' or 'Shop my range'",
      "Soft, lifestyle-focused photography",
      "Grid-based product and collection previews",
      "Editorial-style sections that mix content and commerce",
      "High white space for a calm, premium feel",
      "Mobile-first, scroll-friendly structure"
    ],
    useCases: [
      "Creator or influencer storefronts",
      "Personal brand e-commerce",
      "Lifestyle and wellness brands",
      "Cookbooks or digital product sales",
      "Small business direct-to-consumer sites"
    ]
  }
}




{
  id: "soft-gradient-hero-landing",
  label: "Soft gradient hero landing",
  description:
    "A minimalist landing page with a smooth, abstract gradient background and centered welcome message.",
  highlight:
    "Modern gradient mesh background with strong visual focus on primary CTA",
  trait: {
    id: "soft-gradient-hero-landing",
    type: "element",
    label: "Gradient welcome hero",
    sourceExampleId: "abstract-gradient-landing",
    description:
      "This hero layout uses a rounded container floating on a dark background to create contrast and depth. The centerpiece is a soft, flowing gradient mesh blending pastel yellow, pink, purple, and blue hues. Typography is clean and centered, with a bold all-caps headline, short supporting copy, and a single pill-shaped primary CTA. Navigation is lightweight and evenly spaced across the top, including a subtle sign-in action. The overall design emphasizes clarity, calmness, and a premium modern feel.",
    colors: [
      "#FFFFFF",
      "#F7E96D",
      "#F48FB1",
      "#B388FF",
      "#81D4FA",
      "#1C1C1C"
    ],
    fonts: [
      "Modern sans-serif (headings)",
      "Light sans-serif (body text)"
    ],
    layoutHints: [
      "Rounded hero container on dark background",
      "Centered headline and description",
      "Abstract gradient mesh backdrop",
      "Minimal top navigation with wide spacing",
      "Single primary CTA button",
      "High contrast between container and page background",
      "Soft shadows for floating effect",
      "Generous white space",
      "Focus on first-impression messaging"
    ],
    useCases: [
      "Startup landing pages",
      "Product launch pages",
      "SaaS welcome screens",
      "Marketing splash pages",
      "Portfolio or studio homepages"
    ],
  },
];

*/

