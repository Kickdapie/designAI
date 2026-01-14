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
    },
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
    },
    {
      id: "gradient-cloud-landing-hero",
      name: "Gradient cloud landing page",
      tagline: "Bold hero typography floating above layered, colorful cloud shapes",
      scenario: "SaaS product landing page",
      description: "A modern landing page design with a smooth purple-to-blue gradient background, layered cloud shapes at the bottom, and a strong typographic hero section optimized for conversions.",
      palette: ["#2E2B6F", "#3B3A8F", "#6A3F7A", "#C63A3A", "#E96B2C", "#F5B23C", "#FFFFFF"],
      fonts: ["Sans-serif bold", "Sans-serif regular"],
      layoutTags: ["Full-width gradient hero", "Layered cloud shapes", "Minimal navigation", "Primary and secondary CTAs"],
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "gradient-cloud-landing-hero",
          label: "Gradient cloud landing hero",
          description: "Clean SaaS-style landing page with large left-aligned headline and subtitle on a deep gradient background with overlapping cloud-like shapes in warm colors.",
          highlight: "Bold hero typography floating above layered, colorful cloud shapes",
          trait: {
            id: "gradient-cloud-landing-hero",
            type: "element",
            label: "Minimal SaaS-style hero with layered clouds",
            sourceExampleId: "gradient-cloud-landing-hero",
            description: "This layout features a clean SaaS-style landing page with a large left-aligned headline and subtitle on a deep gradient background. The lower portion is decorated with overlapping cloud-like shapes in warm reds, oranges, and yellows, creating visual depth while keeping the content area uncluttered.",
            colors: ["#2E2B6F", "#3B3A8F", "#6A3F7A", "#C63A3A", "#E96B2C", "#F5B23C", "#FFFFFF"],
            fonts: ["Sans-serif bold", "Sans-serif regular"],
            layoutHints: [
              "Full-width gradient hero background",
              "Top-left logo with icon + company name",
              "Minimal top navigation with spaced links",
              "Outlined sign-in button on top-right",
              "Large left-aligned headline and subtitle",
              "Primary and secondary CTA buttons with rounded corners",
              "Layered cloud-style shapes at bottom of hero"
            ]
          }
        }
      ]
    },
    {
      id: "minimal-blog-magazine-layout",
      name: "Minimal blog / magazine layout",
      tagline: "Large featured post with image-led headline and sidebar author profile",
      scenario: "Personal blog or magazine website",
      description: "A clean, content-focused blog layout with a large hero post, simple top navigation, and a right-hand sidebar for author info and discovery.",
      palette: ["#FFFFFF", "#111111", "#777777", "#E85C4A", "#F2F2F2"],
      fonts: ["Sans-serif bold", "Sans-serif regular"],
      layoutTags: ["Centered site title", "Thin horizontal navigation", "Left-aligned main content", "Large featured image", "Right-hand sidebar", "Author bio card"],
      thumbnail: "https://images.unsplash.com/photo-1499750310107-5fcd61f872a6?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1499750310107-5fcd61f872a6?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "minimal-blog-magazine-layout",
          label: "Content-first personal blog with sidebar",
          description: "This design follows a modern personal blog or magazine-style layout. The top area features a centered site title and tagline, followed by a slim horizontal navigation bar with category links.",
          highlight: "Large featured post with image-led headline and sidebar author profile",
          trait: {
            id: "minimal-blog-magazine-layout",
            type: "element",
            label: "Content-first personal blog with sidebar",
            sourceExampleId: "minimal-blog-magazine-layout",
            description: "The main content column highlights a featured blog post using a large image, category tag, bold headline, and metadata such as date, author, read time, and comments. A right-hand sidebar provides author information with avatar, short bio, social links, and secondary content.",
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
              "Author card with avatar, name, and description"
            ]
          }
        }
      ]
    },
    {
      id: "personal-brand-ecommerce-lifestyle",
      name: "Personal brand e-commerce / lifestyle storefront",
      tagline: "Founder-led hero section with soft imagery, script logo, and seamless shop entry points",
      scenario: "Personal brand e-commerce homepage",
      description: "A clean, personality-driven e-commerce homepage that blends personal branding, content, and shopping into a cohesive lifestyle experience.",
      palette: ["#FAF7F4", "#EADFD6", "#C9A98B", "#000000", "#FFFFFF"],
      fonts: ["Handwritten script", "Clean sans-serif"],
      layoutTags: ["Top announcement bar", "Centered handwritten-style logo", "Minimal navigation with icons", "Hero section featuring brand owner", "Grid-based product previews"],
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "personal-brand-ecommerce-lifestyle",
          label: "Creator-led lifestyle commerce site",
          description: "This layout is centered around a strong personal brand identity. The header uses a handwritten-style logo and soft neutral palette to establish warmth and trust.",
          highlight: "Founder-led hero section with soft imagery, script logo, and seamless shop entry points",
          trait: {
            id: "personal-brand-ecommerce-lifestyle",
            type: "element",
            label: "Creator-led lifestyle commerce site",
            sourceExampleId: "personal-brand-ecommerce-lifestyle",
            description: "A promotional announcement bar highlights shipping or awards. The hero section prominently features the founder with clear CTAs to shop products, reinforcing authenticity and credibility. Below the fold, modular content blocks showcase featured collections, product categories, and lifestyle imagery.",
            colors: ["#FAF7F4", "#EADFD6", "#C9A98B", "#000000", "#FFFFFF"],
            fonts: ["Handwritten script", "Clean sans-serif"],
            layoutHints: [
              "Top announcement bar for promotions or shipping info",
              "Centered handwritten-style logo for personal branding",
              "Minimal navigation with icons (menu, search, account, cart)",
              "Hero section featuring the brand owner",
              "Clear CTA buttons like 'Shop now' or 'Shop my range'",
              "Grid-based product and collection previews",
              "Editorial-style sections that mix content and commerce"
            ]
          }
        }
      ]
    },
    {
      id: "colorful-cloud-hero-business-layout",
      name: "Colorful cloud hero business site",
      tagline: "Strong visual contrast between playful hero and structured content sections",
      scenario: "Business Layout",
      description: "Bright, playful landing page featuring a gradient sky hero with layered cloud illustrations, followed by a structured business layout.",
      palette: ["#4DB3E6", "#F4C430", "#E74C3C", "#8B1A1A", "#FFFFFF", "#1E1E1E"],
      fonts: ["Sans-serif"],
      layoutTags: ["Illustrated gradient hero", "Layered cloud graphics", "Top navigation with search bar", "Left-side login panel", "Two-column About Us section", "Icon-based feature strip"],
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "colorful-cloud-hero-business-layout-element",
          label: "Illustrated gradient hero with classic business sections",
          description: "Large illustrated hero with gradient background and layered cloud shapes, top navigation with search, a split login/about section, icon-based feature strip, and a utility-heavy footer.",
          highlight: "Strong visual contrast between playful hero and structured content sections",
          trait: {
            id: "colorful-cloud-hero-business-layout",
            type: "element",
            label: "Illustrated gradient hero with classic business sections",
            sourceExampleId: "colorful-cloud-hero-business-layout",
            description: "Large illustrated hero with gradient background and layered cloud shapes, top navigation with search, a split login/about section, icon-based feature strip, and a utility-heavy footer.",
            colors: ["#4DB3E6", "#F4C430", "#E74C3C", "#8B1A1A", "#FFFFFF", "#1E1E1E"],
            fonts: ["Sans-serif"],
            layoutHints: [
              "Illustrated gradient hero",
              "Layered cloud graphics",
              "Top navigation with search bar",
              "Left-side login panel",
              "Two-column About Us section",
              "Icon-based feature strip",
              "Dark utility footer"
            ]
          }
        }
      ]
    },
    {
      id: "bold-multicolor-pricing-grid",
      name: "Bold multicolor pricing plans layout",
      tagline: "Strong color segmentation clearly differentiates pricing tiers at a glance",
      scenario: "Pricing Layout",
      description: "High-contrast pricing section organized as a grid of large color blocks, each representing a subscription tier with feature checklists and call-to-action buttons.",
      palette: ["#8FAF1F", "#0FA3B1", "#F2C300", "#E53935", "#4A4A4A", "#FFFFFF"],
      fonts: ["Sans-serif"],
      layoutTags: ["Full-width pricing grid", "Color-coded plan cards", "Checklist icons for feature comparison", "Centered plan titles", "Strong call-to-action buttons", "Conversion-oriented design"],
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f3129cbfb?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1522071820081-009f3129cbfb?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "bold-multicolor-pricing-grid-element",
          label: "Grid-based pricing comparison with color-coded tiers",
          description: "Pricing layout divided into equally weighted rectangular panels for Free, Standard, Premium, and Multi-Seat plans, using bold background colors, checklist icons, concise descriptions, and prominent 'Order Now' buttons to emphasize comparison and conversion.",
          highlight: "Strong color segmentation clearly differentiates pricing tiers at a glance",
          trait: {
            id: "bold-multicolor-pricing-grid",
            type: "element",
            label: "Grid-based pricing comparison with color-coded tiers",
            sourceExampleId: "bold-multicolor-pricing-grid",
            description: "Pricing layout divided into equally weighted rectangular panels for Free, Standard, Premium, and Multi-Seat plans, using bold background colors, checklist icons, concise descriptions, and prominent 'Order Now' buttons to emphasize comparison and conversion.",
            colors: ["#8FAF1F", "#0FA3B1", "#F2C300", "#E53935", "#4A4A4A", "#FFFFFF"],
            fonts: ["Sans-serif"],
            layoutHints: [
              "Full-width pricing grid",
              "Color-coded plan cards",
              "Checklist icons for feature comparison",
              "Centered plan titles",
              "Strong call-to-action buttons",
              "Minimal navigation focus, conversion-oriented design"
            ]
          }
        }
      ]
    },
    {
      id: "rounded-glass-about-layout",
      name: "Rounded glass content layout",
      tagline: "Creates a calm, modern, glass-like feel",
      scenario: "About Layout",
      description: "Centered card-style website layout with rounded corners, soft gradients, and a blurred cityscape hero image.",
      palette: ["#2E3A3A", "#8FBAD3", "#EAF3F8", "#FFFFFF", "#6C8FA5"],
      fonts: ["Sans-serif"],
      layoutTags: ["Centered card layout", "Rounded corners", "Blurred hero background", "Horizontal navigation bar", "Sidebar navigation list", "Icon-based feature row"],
      thumbnail: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "rounded-glass-about-layout-element",
          label: "Rounded glass content card",
          description: "Main content contained in a centered rounded rectangle with drop shadow, blurred photographic hero banner, soft blue gradient navigation bar, and icon-based footer section.",
          highlight: "Creates a calm, modern, glass-like feel",
          trait: {
            id: "rounded-glass-about-layout",
            type: "element",
            label: "Rounded glass content card",
            sourceExampleId: "rounded-glass-about-layout",
            description: "Main content contained in a centered rounded rectangle with drop shadow, blurred photographic hero banner, soft blue gradient navigation bar, and icon-based footer section.",
            colors: ["#2E3A3A", "#8FBAD3", "#EAF3F8", "#FFFFFF", "#6C8FA5"],
            fonts: ["Sans-serif"],
            layoutHints: [
              "Centered card layout",
              "Rounded corners",
              "Blurred hero background",
              "Horizontal navigation bar",
              "Sidebar navigation list",
              "Icon-based feature row",
              "Soft gradients and subtle shadows"
            ]
          }
        }
      ]
    },
    {
      id: "layered-tabbed-about-card",
      name: "Layered tabbed about section",
      tagline: "Strong visual hierarchy with clear section focus",
      scenario: "About Layout",
      description: "Tabbed interface layout with layered card design, featuring distinct sections for About, Services, and Contact, each with its own color-coded header and content area.",
      palette: ["#F5F5F5", "#E8E8E8", "#4A90E2", "#2C3E50", "#FFFFFF", "#1A1A1A"],
      fonts: ["Sans-serif"],
      layoutTags: ["Tabbed interface", "Layered card design", "Color-coded sections", "Centered content", "Icon-based navigation", "Clear visual hierarchy"],
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "layered-tabbed-about-card-element",
          label: "Layered tabbed content card",
          description: "Main content area organized into tabs (About, Services, Contact) with distinct color-coded headers, layered card design with shadows, and clear visual separation between sections.",
          highlight: "Strong visual hierarchy with clear section focus",
          trait: {
            id: "layered-tabbed-about-card",
            type: "element",
            label: "Layered tabbed content card",
            sourceExampleId: "layered-tabbed-about-card",
            description: "Main content area organized into tabs (About, Services, Contact) with distinct color-coded headers, layered card design with shadows, and clear visual separation between sections.",
            colors: ["#F5F5F5", "#E8E8E8", "#4A90E2", "#2C3E50", "#FFFFFF", "#1A1A1A"],
            fonts: ["Sans-serif"],
            layoutHints: [
              "Tabbed interface",
              "Layered card design",
              "Color-coded section headers",
              "Centered content layout",
              "Icon-based tab navigation",
              "Clear visual hierarchy",
              "Drop shadows for depth"
            ]
          }
        }
      ]
    },
    {
      id: "rounded-portfolio-slider-layout",
      name: "Rounded portfolio hero with slider",
      tagline: "Soft rounded UI with layered depth and motion emphasis",
      scenario: "Portfolio Slider",
      description: "Modern web layout featuring rounded rectangular panels, a prominent hero slider with globe imagery, and modular content cards below.",
      palette: [
        "#0E2A47",
        "#1E5FA3",
        "#6FAED9",
        "#E6EEF5",
        "#FFFFFF",
        "#3A3A3A"
      ],
      fonts: ["Sans-serif"],
      layoutTags: ["Rounded container-based layout", "Hero carousel with arrow navigation", "High-contrast callout text in hero", "Three-column card section", "Consistent border radius", "Soft gradients"],
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "rounded-portfolio-slider-layout-element",
          label: "Rounded hero slider with modular cards",
          description: "Centered page layout using large rounded containers. Includes a top navigation bar, a wide hero slider with globe illustration and carousel controls, followed by three evenly spaced rounded content cards for About, visual feature, and text.",
          highlight: "Soft rounded UI with layered depth and motion emphasis",
          trait: {
            id: "rounded-portfolio-slider-layout",
            type: "element",
            label: "Rounded hero slider with modular cards",
            sourceExampleId: "rounded-portfolio-slider-layout",
            description: "Centered page layout using large rounded containers. Includes a top navigation bar, a wide hero slider with globe illustration and carousel controls, followed by three evenly spaced rounded content cards for About, visual feature, and text.",
            colors: [
              "#0E2A47",
              "#1E5FA3",
              "#6FAED9",
              "#E6EEF5",
              "#FFFFFF",
              "#3A3A3A"
            ],
            fonts: ["Sans-serif"],
            layoutHints: [
              "Rounded container-based layout",
              "Hero carousel with arrow navigation",
              "High-contrast callout text in hero",
              "Three-column card section",
              "Consistent border radius across components",
              "Soft gradients and subtle shadows",
              "Centered, symmetrical composition"
            ]
          }
        }
      ]
    },
    {
      id: "green-idea-slider-layout",
      name: "Green idea hero with services grid",
      tagline: "Fresh green palette with lightbulb innovation theme",
      scenario: "Eco-inspired website layout",
      description: "Clean, eco-inspired website layout with a green gradient hero slider, icon-driven sections, and clear service/contact segmentation.",
      palette: [
        "#6FA43A",
        "#8DBE5A",
        "#4F7F2A",
        "#FFFFFF",
        "#2E2E2E",
        "#DCEAC8"
      ],
      fonts: ["Sans-serif bold", "Sans-serif regular"],
      layoutTags: ["Full-width hero slider", "Green gradient background", "Numbered content sections", "Three-column feature strip", "Icon-based contact bar"],
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "green-idea-slider-layout-element",
          label: "Green hero slider with services and contacts",
          description: "Full-width green gradient hero with carousel arrows and pagination dots, featuring a laptop + lightbulb illustration. Includes a horizontal top navigation, numbered About/Services/Contacts sections, a three-column feature strip, and a bold contact callout band with icon set.",
          highlight: "Fresh green palette with lightbulb innovation theme",
          trait: {
            id: "green-idea-slider-layout",
            type: "element",
            label: "Green hero slider with services and contacts",
            sourceExampleId: "green-idea-slider-layout",
            description: "Full-width green gradient hero with carousel arrows and pagination dots, featuring a laptop + lightbulb illustration. Includes a horizontal top navigation, numbered About/Services/Contacts sections, a three-column feature strip, and a bold contact callout band with icon set.",
            colors: [
              "#6FA43A",
              "#8DBE5A",
              "#4F7F2A",
              "#FFFFFF",
              "#2E2E2E",
              "#DCEAC8"
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
              "Clear horizontal section separation"
            ]
          }
        }
      ]
    },
    {
      id: "arrow-flow-glass-header-layout",
      name: "Arrow-driven glass header with about section",
      tagline: "Layered arrow motion over a global gradient background",
      scenario: "Modern glassmorphism website",
      description: "Modern glassmorphism-style header with directional arrow graphics, followed by a clean two-column About Us content area and icon-based footer navigation.",
      palette: [
        "#F2A23A",
        "#D47A2C",
        "#2F3A4A",
        "#FFFFFF",
        "#EDEDED",
        "#1E1E1E"
      ],
      fonts: ["Sans-serif bold", "Sans-serif regular"],
      layoutTags: ["Rounded glassmorphism hero", "Gradient background with world map", "Repeating arrow graphics", "Two-column About Us", "Left sidebar navigation", "Minimal icon row"],
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "arrow-flow-glass-header-layout-element",
          label: "Glass header with arrow flow motif",
          description: "Rounded glass-like hero header featuring layered arrow icons suggesting motion and direction over a warm gradient world-map backdrop. Includes compact top navigation, followed by a white About Us section with sidebar links, dual text columns, and a minimal icon strip above a slim footer.",
          highlight: "Layered arrow motion over a global gradient background",
          trait: {
            id: "arrow-flow-glass-header-layout",
            type: "element",
            label: "Glass header with arrow flow motif",
            sourceExampleId: "arrow-flow-glass-header-layout",
            description: "Rounded glass-like hero header featuring layered arrow icons suggesting motion and direction over a warm gradient world-map backdrop. Includes compact top navigation, followed by a white About Us section with sidebar links, dual text columns, and a minimal icon strip above a slim footer.",
            colors: [
              "#F2A23A",
              "#D47A2C",
              "#2F3A4A",
              "#FFFFFF",
              "#EDEDED",
              "#1E1E1E"
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
              "Slim footer with inline links"
            ]
          }
        }
      ]
    },
    {
      id: "blue-globe-search-header-layout",
      name: "Blue globe hero with search-focused header",
      tagline: "Right-aligned globe graphic paired with prominent search input",
      scenario: "Corporate-style website layout",
      description: "Corporate-style layout featuring a wide blue hero header with vertical texture lines, globe illustration, and integrated search bar, followed by a structured About Us section with feature tiles and circular highlights.",
      palette: [
        "#1E3A5F",
        "#2F5FA7",
        "#4A90E2",
        "#CDE6B8",
        "#EAF4D3",
        "#1B2B3A",
        "#FFFFFF"
      ],
      fonts: ["Sans-serif bold", "Sans-serif regular"],
      layoutTags: ["Wide rounded hero container", "Vertical line texture background", "Prominent search bar", "Right-aligned globe illustration", "Icon-based feature cards", "Two-column About Us"],
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "blue-globe-search-header-layout-element",
          label: "Globe hero with search-centric navigation",
          description: "Large rounded hero container with a blue gradient and vertical line texture, showcasing a company name, slogan, horizontal navigation, and a pill-shaped search bar with confirmation button. A floating globe graphic anchors the right side.",
          highlight: "Right-aligned globe graphic paired with prominent search input",
          trait: {
            id: "blue-globe-search-header-layout",
            type: "element",
            label: "Globe hero with search-centric navigation",
            sourceExampleId: "blue-globe-search-header-layout",
            description: "Below the hero, a light-toned About Us section combines icon-based feature cards, text blocks, and circular callouts, ending with a compact footer navigation.",
            colors: [
              "#1E3A5F",
              "#2F5FA7",
              "#4A90E2",
              "#CDE6B8",
              "#EAF4D3",
              "#1B2B3A",
              "#FFFFFF"
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
              "Two-column About Us content"
            ]
          }
        }
      ]
    },
    {
      id: "circular-icon-globe-layout",
      name: "Circular icon header with dotted globe backdrop",
      tagline: "Oversized circular feature icons paired with a digital globe motif",
      scenario: "Tech-forward corporate website",
      description: "A tech-forward corporate website layout featuring a row of large circular icon modules at the top, a dotted globe visualization, and a structured About Us content area.",
      palette: [
        "#0F1E2E",
        "#1F3B63",
        "#2F5FA7",
        "#3FA9DD",
        "#0B0B0B",
        "#FFFFFF",
        "#D9E6F2"
      ],
      fonts: ["Sans-serif bold", "Sans-serif regular"],
      layoutTags: ["Diagonal striped background", "Row of large circular icon cards", "Gradient blue content panel", "Dotted globe graphic", "Two-column About Us", "Dark feature strip"],
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "circular-icon-globe-layout-element",
          label: "Circular feature navigation with globe accent",
          description: "This layout emphasizes a horizontal row of prominent circular icon cards at the top, each representing a core feature or section. A blue gradient panel with a dotted world globe graphic anchors the left side, reinforcing a global or tech-oriented brand.",
          highlight: "Oversized circular feature icons paired with a digital globe motif",
          trait: {
            id: "circular-icon-globe-layout",
            type: "element",
            label: "Circular feature navigation with globe accent",
            sourceExampleId: "circular-icon-globe-layout",
            description: "Below, a clean white About Us section is split into two text columns, followed by a dark feature strip and a minimal footer.",
            colors: [
              "#0F1E2E",
              "#1F3B63",
              "#2F5FA7",
              "#3FA9DD",
              "#0B0B0B",
              "#FFFFFF",
              "#D9E6F2"
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
              "Dark feature strip with icons and short descriptions"
            ]
          }
        }
      ]
    },
    {
      id: "hexagon-slider-olive-layout",
      name: "Hexagon hero slider with olive UI theme",
      tagline: "Rounded hexagon-pattern hero slider paired with glossy circular icon buttons",
      scenario: "Olive-toned corporate website",
      description: "A soft, olive-toned corporate website layout featuring a rounded hero slider with abstract hexagon graphics, spherical icon navigation, and a balanced three-column content structure.",
      palette: [
        "#4F5F2A",
        "#9FB36A",
        "#F6F3C6",
        "#E6E2B8",
        "#D87C2A",
        "#6B7F3A",
        "#FFFFFF"
      ],
      fonts: ["Sans-serif bold", "Sans-serif regular"],
      layoutTags: ["Olive-green navigation", "Rounded hero slider", "Abstract hexagon mosaic", "Glossy circular icon buttons", "Three-column feature section", "Soft cream background"],
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "hexagon-slider-olive-layout-element",
          label: "Hexagon-based hero with circular feature icons",
          description: "This layout centers around a rounded rectangular hero slider displaying layered hexagonal shapes in warm green and orange tones. Below the slider, a row of glossy circular icon buttons introduces key sections.",
          highlight: "Rounded hexagon-pattern hero slider paired with glossy circular icon buttons",
          trait: {
            id: "hexagon-slider-olive-layout",
            type: "element",
            label: "Hexagon-based hero with circular feature icons",
            sourceExampleId: "hexagon-slider-olive-layout",
            description: "The main content area is divided into a left vertical navigation list, a central About Us text block, and a right-side account/product panel, followed by a three-column feature section and a minimal footer.",
            colors: [
              "#4F5F2A",
              "#9FB36A",
              "#F6F3C6",
              "#E6E2B8",
              "#D87C2A",
              "#6B7F3A",
              "#FFFFFF"
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
              "Three-column feature section with icons and CTAs"
            ]
          }
        }
      ]
    },
    {
      id: "soft-gradient-hero-landing",
      name: "Soft gradient hero landing",
      tagline: "Modern gradient mesh background with strong visual focus on primary CTA",
      scenario: "Minimalist landing page",
      description: "A minimalist landing page with a smooth, abstract gradient background and centered welcome message.",
      palette: ["#E8F4F8", "#B8D4E3", "#6B9BD1", "#4A7BA7", "#2E5C8A", "#FFFFFF"],
      fonts: ["Sans-serif"],
      layoutTags: ["Centered content", "Gradient mesh background", "Minimal navigation", "Primary CTA button", "Clean typography"],
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "soft-gradient-hero-landing-element",
          label: "Gradient hero with centered CTA",
          description: "Clean landing page with a soft gradient mesh background, minimal top navigation, centered headline and subtitle, and a prominent primary CTA button.",
          highlight: "Modern gradient mesh background with strong visual focus on primary CTA",
          trait: {
            id: "soft-gradient-hero-landing",
            type: "element",
            label: "Gradient hero with centered CTA",
            sourceExampleId: "soft-gradient-hero-landing",
            description: "Clean landing page with a soft gradient mesh background, minimal top navigation, centered headline and subtitle, and a prominent primary CTA button.",
            colors: ["#E8F4F8", "#B8D4E3", "#6B9BD1", "#4A7BA7", "#2E5C8A", "#FFFFFF"],
            fonts: ["Sans-serif"],
            layoutHints: [
              "Centered content layout",
              "Gradient mesh background",
              "Minimal top navigation",
              "Large centered headline",
              "Supporting subtitle text",
              "Prominent primary CTA button",
              "Clean, spacious design"
            ]
          }
        }
      ]
    },
    {
      id: "minimal-blog-login-landing",
      name: "Minimal blog and login landing",
      tagline: "Simple structure combining content, forms, and feature steps",
      scenario: "Minimal Blog",
      description: "Clean monochrome landing page with top navigation, oversized hero icon and text, login and contact forms, and numbered feature highlights.",
      palette: ["#F2F2F2", "#1F1F1F", "#000000", "#BDBDBD", "#FFFFFF"],
      fonts: ["Sans-serif"],
      layoutTags: ["Top navigation bar", "Oversized hero icon", "Split login and contact forms", "Three-column feature section", "Circular step indicators", "Minimal grayscale palette"],
      thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "minimal-blog-login-landing-element",
          label: "Minimal content + form layout",
          description: "Wide layout with dark navigation bar, large hero illustration and headline, split section for login and contact forms, followed by three-step feature blocks with circular number markers.",
          highlight: "Simple structure combining content, forms, and feature steps",
          trait: {
            id: "minimal-blog-login-landing",
            type: "element",
            label: "Minimal content + form layout",
            sourceExampleId: "minimal-blog-login-landing",
            description: "Wide layout with dark navigation bar, large hero illustration and headline, split section for login and contact forms, followed by three-step feature blocks with circular number markers.",
            colors: ["#F2F2F2", "#1F1F1F", "#000000", "#BDBDBD", "#FFFFFF"],
            fonts: ["Sans-serif"],
            layoutHints: [
              "Top navigation bar",
              "Oversized hero icon",
              "Split login and contact forms",
              "Three-column feature section",
              "Circular step indicators",
              "Minimal grayscale palette"
            ]
          }
        }
      ]
    },
    {
      id: "lime-accent-web-landing",
      name: "Lime-accent web landing",
      tagline: "High-contrast accents guide attention through sections",
      scenario: "Web Landing",
      description: "Bright modern landing page with lime navigation bar, hero text slider, feature card grid, and embedded login and contact forms.",
      palette: ["#D6D92B", "#F2F2F2", "#9E9E9E", "#1F1F1F", "#FFFFFF"],
      fonts: ["Sans-serif"],
      layoutTags: ["High-contrast navigation bar", "Centered hero text", "Hero slider indicators", "Rounded feature card grid", "Split login and contact forms", "Accent color highlights"],
      thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "lime-accent-web-landing-element",
          label: "Accent-driven marketing layout",
          description: "Wide layout with bold lime navigation bar, centered hero headline and supporting text, icon-based feature cards in a rounded grid, followed by split login and contact forms.",
          highlight: "High-contrast accents guide attention through sections",
          trait: {
            id: "lime-accent-web-landing",
            type: "element",
            label: "Accent-driven marketing layout",
            sourceExampleId: "lime-accent-web-landing",
            description: "Wide layout with bold lime navigation bar, centered hero headline and supporting text, icon-based feature cards in a rounded grid, followed by split login and contact forms.",
            colors: ["#D6D92B", "#F2F2F2", "#9E9E9E", "#1F1F1F", "#FFFFFF"],
            fonts: ["Sans-serif"],
            layoutHints: [
              "High-contrast navigation bar",
              "Centered hero text",
              "Hero slider indicators",
              "Rounded feature card grid",
              "Split login and contact forms",
              "Accent color highlights"
            ]
          }
        }
      ]
    },
    {
      id: "red-ribbon-cta-corporate",
      name: "Red ribbon CTA landing",
      tagline: "High-contrast CTAs with strong visual emphasis",
      scenario: "Corporate Landing",
      description: "Bold corporate landing page with red hero banner, diagonal ribbon accents, inline login form, and stacked blog highlights.",
      palette: ["#C81E1E", "#F2F2F2", "#FFFFFF", "#1F1F1F", "#9E9E9E"],
      fonts: ["Sans-serif"],
      layoutTags: ["Bold red hero banner", "Diagonal ribbon overlays", "Inline login form", "Sectioned business overview", "Stacked blog highlight cards", "Strong contrast CTAs"],
      thumbnail: "https://images.unsplash.com/photo-1515895307828-95d45c2cbf0a?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1515895307828-95d45c2cbf0a?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "red-ribbon-cta-corporate-element",
          label: "Ribbon-accent marketing layout",
          description: "Prominent red hero section with diagonal ribbon label overlay, centered descriptive text, inline login inputs, followed by business overview and blog card sections using repeated ribbon motifs.",
          highlight: "High-contrast CTAs with strong visual emphasis",
          trait: {
            id: "red-ribbon-cta-corporate",
            type: "element",
            label: "Ribbon-accent marketing layout",
            sourceExampleId: "red-ribbon-cta-corporate",
            description: "Prominent red hero section with diagonal ribbon label overlay, centered descriptive text, inline login inputs, followed by business overview and blog card sections using repeated ribbon motifs.",
            colors: ["#C81E1E", "#F2F2F2", "#FFFFFF", "#1F1F1F", "#9E9E9E"],
            fonts: ["Sans-serif"],
            layoutHints: [
              "Bold red hero banner",
              "Diagonal ribbon overlays",
              "Inline login form",
              "Sectioned business overview",
              "Stacked blog highlight cards",
              "Strong contrast CTAs"
            ]
          }
        }
      ]
    },
    {
      id: "glass-ui-service-landing",
      name: "Glass UI service landing",
      tagline: "Sleek glass effect creates a premium, modern feel",
      scenario: "Service Landing",
      description: "Dark modern landing page using glassmorphism hero banner, icon-based service cards, and gallery preview section.",
      palette: ["#5A5A5A", "#2B2B2B", "#FFFFFF", "#9E9E9E", "#000000"],
      fonts: ["Sans-serif"],
      layoutTags: ["Glassmorphism hero banner", "Centered floating callout", "Pill-style navigation tabs", "Three-column service cards", "Circular gallery placeholders", "Dark minimal footer"],
      thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "glass-ui-service-landing-element",
          label: "Glassmorphism marketing layout",
          description: "Centered glass-style hero banner with frosted transparency and drop shadow, top navigation with pill tabs, followed by three bordered service cards and a gallery section with circular image placeholders.",
          highlight: "Sleek glass effect creates a premium, modern feel",
          trait: {
            id: "glass-ui-service-landing",
            type: "element",
            label: "Glassmorphism marketing layout",
            sourceExampleId: "glass-ui-service-landing",
            description: "Centered glass-style hero banner with frosted transparency and drop shadow, top navigation with pill tabs, followed by three bordered service cards and a gallery section with circular image placeholders.",
            colors: ["#5A5A5A", "#2B2B2B", "#FFFFFF", "#9E9E9E", "#000000"],
            fonts: ["Sans-serif"],
            layoutHints: [
              "Glassmorphism hero banner",
              "Centered floating callout",
              "Pill-style navigation tabs",
              "Three-column service cards",
              "Circular gallery placeholders",
              "Dark minimal footer"
            ]
          }
        }
      ]
    },
    {
      id: "network-hero-dashboard-landing",
      name: "Networked dashboard landing",
      tagline: "Combines marketing, authentication, and product discovery in one layout",
      scenario: "Dashboard Landing",
      description: "Feature-rich corporate landing page with network-style hero graphic, login panel, content highlights, and utility navigation.",
      palette: ["#F04B23", "#8BC34A", "#4BB6E8", "#E6E6E6", "#2E2E2E", "#FFFFFF"],
      fonts: ["Sans-serif"],
      layoutTags: ["Abstract network hero graphic", "Circular focal element", "Top tab navigation", "Left-aligned login panel", "Highlighted content band", "Multi-column feature tiles"],
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "network-hero-dashboard-landing-element",
          label: "Dashboard-style marketing layout",
          description: "Wide layout featuring a large hero with abstract network visualization and circular focal element, top tab navigation, left-aligned login panel, central content highlight band, and multi-column feature tiles.",
          highlight: "Combines marketing, authentication, and product discovery in one layout",
          trait: {
            id: "network-hero-dashboard-landing",
            type: "element",
            label: "Dashboard-style marketing layout",
            sourceExampleId: "network-hero-dashboard-landing",
            description: "Wide layout featuring a large hero with abstract network visualization and circular focal element, top tab navigation, left-aligned login panel, central content highlight band, and multi-column feature tiles.",
            colors: ["#F04B23", "#8BC34A", "#4BB6E8", "#E6E6E6", "#2E2E2E", "#FFFFFF"],
            fonts: ["Sans-serif"],
            layoutHints: [
              "Abstract network hero graphic",
              "Circular focal element",
              "Top tab navigation",
              "Left-aligned login panel",
              "Highlighted content band",
              "Multi-column feature tiles"
            ]
          }
        }
      ]
    },
    {
      id: "dark-skyline-about-landing",
      name: "Dark skyline about landing",
      tagline: "Strong visual contrast draws focus to core content",
      scenario: "About Landing",
      description: "Elegant corporate website with dark framing, panoramic hero image, informational about section, and integrated login panel.",
      palette: ["#1A1A1A", "#4A97B5", "#FFFFFF", "#F2C94C", "#2E2E2E"],
      fonts: ["Sans-serif"],
      layoutTags: ["Dark framed layout", "Panoramic hero image", "Left-aligned login panel", "Multi-column about section", "Icon-based contact links", "Minimal footer navigation"],
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "dark-skyline-about-landing-element",
          label: "Panoramic about layout",
          description: "Centered layout with dark header and footer, wide panoramic hero image, left-aligned account/login panel, and multi-column about content with contact details and icon links.",
          highlight: "Strong visual contrast draws focus to core content",
          trait: {
            id: "dark-skyline-about-landing",
            type: "element",
            label: "Panoramic about layout",
            sourceExampleId: "dark-skyline-about-landing",
            description: "Centered layout with dark header and footer, wide panoramic hero image, left-aligned account/login panel, and multi-column about content with contact details and icon links.",
            colors: ["#1A1A1A", "#4A97B5", "#FFFFFF", "#F2C94C", "#2E2E2E"],
            fonts: ["Sans-serif"],
            layoutHints: [
              "Dark framed layout",
              "Panoramic hero image",
              "Left-aligned login panel",
              "Multi-column about section",
              "Icon-based contact links",
              "Minimal footer navigation"
            ]
          }
        }
      ]
    },
    {
      id: "illustrated-hero-circle-features",
      name: "Illustrated hero with circular features",
      tagline: "Playful visuals combined with clear marketing structure",
      scenario: "Illustrated Landing",
      description: "Colorful illustrated landing page with hand-drawn hero graphic, circular feature cards, and structured content sections.",
      palette: ["#FF6B6B", "#4ECDC4", "#FFE66D", "#95E1D3", "#FFFFFF", "#2C3E50"],
      fonts: ["Sans-serif"],
      layoutTags: ["Illustrated hero graphic", "Circular feature cards", "Hand-drawn style", "Colorful palette", "Structured content sections", "Playful aesthetic"],
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "illustrated-hero-circle-features-element",
          label: "Illustrated marketing layout",
          description: "Hero section with hand-drawn illustration style, followed by circular feature cards with icons and text, structured content sections, and playful color palette.",
          highlight: "Playful visuals combined with clear marketing structure",
          trait: {
            id: "illustrated-hero-circle-features",
            type: "element",
            label: "Illustrated marketing layout",
            sourceExampleId: "illustrated-hero-circle-features",
            description: "Hero section with hand-drawn illustration style, followed by circular feature cards with icons and text, structured content sections, and playful color palette.",
            colors: ["#FF6B6B", "#4ECDC4", "#FFE66D", "#95E1D3", "#FFFFFF", "#2C3E50"],
            fonts: ["Sans-serif"],
            layoutHints: [
              "Illustrated hero graphic",
              "Circular feature cards",
              "Hand-drawn style",
              "Colorful palette",
              "Structured content sections",
              "Playful aesthetic"
            ]
          }
        }
      ]
    },
    {
      id: "gradient-triangle-portfolio-landing",
      name: "Gradient triangle portfolio landing",
      tagline: "Clean layout with vibrant gradients that frame content",
      scenario: "Portfolio Landing",
      description: "Modern portfolio landing page with warm gradient navigation, centered hero slider, and three-column informational sections.",
      palette: ["#E91E63", "#F39C12", "#FFFFFF", "#F2F2F2", "#9E9E9E"],
      fonts: ["Sans-serif"],
      layoutTags: ["Gradient navigation bar", "Centered hero slider", "Minimal headline typography", "Three-column content layout", "Soft card-like section dividers", "Gradient footer accent"],
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "gradient-triangle-portfolio-landing-element",
          label: "Gradient-driven portfolio layout",
          description: "Top navigation bar with pink-to-orange gradient and tabbed menu, centered hero slider with headline and dot indicators, followed by three evenly spaced columns for about, portfolio, and news content, and a matching gradient footer.",
          highlight: "Clean layout with vibrant gradients that frame content",
          trait: {
            id: "gradient-triangle-portfolio-landing",
            type: "element",
            label: "Gradient-driven portfolio layout",
            sourceExampleId: "gradient-triangle-portfolio-landing",
            description: "Top navigation bar with pink-to-orange gradient and tabbed menu, centered hero slider with headline and dot indicators, followed by three evenly spaced columns for about, portfolio, and news content, and a matching gradient footer.",
            colors: ["#E91E63", "#F39C12", "#FFFFFF", "#F2F2F2", "#9E9E9E"],
            fonts: ["Sans-serif"],
            layoutHints: [
              "Gradient navigation bar",
              "Centered hero slider",
              "Minimal headline typography",
              "Three-column content layout",
              "Soft card-like section dividers",
              "Gradient footer accent"
            ]
          }
        }
      ]
    },
    {
      id: "mosaic-portfolio-icon-landing",
      name: "Mosaic portfolio landing",
      tagline: "Distinct visual rhythm using modular blocks and icons",
      scenario: "Portfolio Landing",
      description: "Editorial-style landing page with mosaic hero grid, icon-driven feature row, and three-column informational sections.",
      palette: ["#2C3E50", "#3498DB", "#E74C3C", "#FFFFFF", "#ECF0F1"],
      fonts: ["Sans-serif"],
      layoutTags: ["Mosaic hero grid", "Icon-driven feature row", "Three-column informational sections", "Modular block layout", "Editorial style", "Clear visual hierarchy"],
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=60",
      preview: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=60",
      elements: [
        {
          id: "mosaic-portfolio-icon-landing-element",
          label: "Mosaic portfolio layout",
          description: "Hero section with mosaic grid of image blocks, followed by a row of icon-driven feature cards, and three-column informational sections with clear visual hierarchy.",
          highlight: "Distinct visual rhythm using modular blocks and icons",
          trait: {
            id: "mosaic-portfolio-icon-landing",
            type: "element",
            label: "Mosaic portfolio layout",
            sourceExampleId: "mosaic-portfolio-icon-landing",
            description: "Hero section with mosaic grid of image blocks, followed by a row of icon-driven feature cards, and three-column informational sections with clear visual hierarchy.",
            colors: ["#2C3E50", "#3498DB", "#E74C3C", "#FFFFFF", "#ECF0F1"],
            fonts: ["Sans-serif"],
            layoutHints: [
              "Mosaic hero grid",
              "Icon-driven feature row",
              "Three-column informational sections",
              "Modular block layout",
              "Editorial style",
              "Clear visual hierarchy"
            ]
          }
        }
      ]
    }
  ];
  var DEFAULT_RESULTS = EXAMPLE_DATASET.slice(0, 12);

  // src/catalog/search.ts
  function scoreExamples(query, dataset) {
    if (!query.trim()) {
      return dataset.slice(0, 12);
    }
    const tokens = query.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
    if (!tokens.length) {
      return dataset.slice(0, 12);
    }
    const ranked = dataset.map((example) => ({
      example,
      score: scoreExample(example, tokens)
    })).sort((a, b) => b.score - a.score);
    const results = ranked.filter((entry, index) => entry.score > 0 || index < 2).slice(0, 12).map((entry) => entry.example);
    return results.length ? results : dataset.slice(0, Math.min(12, dataset.length));
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

  // src/services/aiService.ts
  var AIService = class {
    config = {
      enabled: false,
      model: "gpt-4o-mini"
      // Cost-effective model
    };
    /**
     * Initialize the AI service with API key
     */
    initialize(apiKey) {
      if (apiKey) {
        this.config.apiKey = apiKey;
        this.config.enabled = true;
      } else {
        const storedKey = typeof window !== "undefined" ? localStorage.getItem("openai_api_key") : null;
        if (storedKey) {
          this.config.apiKey = storedKey;
          this.config.enabled = true;
        }
      }
    }
    /**
     * Check if AI is available and configured
     */
    isAvailable() {
      return this.config.enabled && !!this.config.apiKey;
    }
    /**
     * Enhance search results using AI semantic understanding
     * Falls back to original results if AI is unavailable
     */
    async enhanceSearchResults(query, results, allExamples) {
      if (!this.isAvailable() || !query.trim()) {
        return results;
      }
      try {
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
    async generateSummary(query, results) {
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
    async generateRecommendations(query, selectedExample) {
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
     * Generate intelligent layout specs based on element descriptions
     * Uses AI to understand what the element represents and creates appropriate layouts
     */
    async generateIntelligentLayout(elementTraits, viewport, colors, fonts) {
      if (!this.isAvailable() || elementTraits.length === 0) {
        return null;
      }
      try {
        const elementInfo = elementTraits.map((trait) => ({
          label: trait.label,
          description: trait.description,
          layoutHints: trait.layoutHints || [],
          colors: trait.colors || [],
          fonts: trait.fonts || []
        }));
        const prompt = this.buildLayoutGenerationPrompt(elementInfo, viewport, colors, fonts);
        const response = await this.callLLM(prompt);
        const layoutSpecs = this.parseLayoutSpecsResponse(response, viewport);
        return layoutSpecs.length > 0 ? layoutSpecs : null;
      } catch (error) {
        console.warn("[AI Service] Intelligent layout generation failed:", error);
        return null;
      }
    }
    /**
     * Use AI to semantically re-rank search results
     */
    async semanticRerank(query, initialResults, allExamples) {
      const prompt = this.buildRerankPrompt(query, initialResults.slice(0, 20));
      try {
        const response = await this.callLLM(prompt);
        return this.parseRerankResponse(response, initialResults);
      } catch (error) {
        return initialResults;
      }
    }
    /**
     * Call the LLM API
     */
    async callLLM(prompt) {
      if (!this.config.apiKey) {
        throw new Error("API key not configured");
      }
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.config.apiKey}`
        },
        body: JSON.stringify({
          model: this.config.model,
          messages: [
            {
              role: "system",
              content: "You are a helpful design assistant that provides clear, concise, and actionable design advice. Always respond in a friendly, professional tone."
            },
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
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
    buildSummaryPrompt(query, results) {
      const examplesInfo = results.slice(0, 5).map(
        (ex, idx) => `${idx + 1}. ${ex.name}: ${ex.tagline || ex.description || ""} (Tags: ${ex.layoutTags.join(", ")})`
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
    buildRecommendationPrompt(query, selectedExample) {
      let context = `User is looking for: "${query}"`;
      if (selectedExample) {
        context += `

They're currently viewing: ${selectedExample.name} - ${selectedExample.tagline || selectedExample.description}`;
        context += `
Layout: ${selectedExample.layoutTags.join(", ")}`;
        context += `
Colors: ${selectedExample.palette.join(", ")}`;
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
    buildRerankPrompt(query, results) {
      const examplesList = results.map(
        (ex, idx) => `${idx + 1}. ${ex.name} - ${ex.tagline || ""} | Tags: ${ex.layoutTags.join(", ")}`
      ).join("\n");
      return `User query: "${query}"

Rank these design examples by relevance (most relevant first). Return only the numbers in order, separated by commas:

${examplesList}

Respond with just the numbers in order of relevance (e.g., "3, 1, 5, 2, 4").`;
    }
    /**
     * Parse AI re-ranking response
     */
    parseRerankResponse(response, originalResults) {
      const numbers = response.match(/\d+/g)?.map(Number) || [];
      if (numbers.length === 0) {
        return originalResults;
      }
      const reordered = [];
      const used = /* @__PURE__ */ new Set();
      numbers.forEach((num) => {
        const idx = num - 1;
        if (idx >= 0 && idx < originalResults.length && !used.has(idx)) {
          reordered.push(originalResults[idx]);
          used.add(idx);
        }
      });
      originalResults.forEach((result, idx) => {
        if (!used.has(idx)) {
          reordered.push(result);
        }
      });
      return reordered;
    }
    /**
     * Build prompt for intelligent layout generation
     */
    buildLayoutGenerationPrompt(elementInfo, viewport, availableColors, availableFonts) {
      const elementDescriptions = elementInfo.map(
        (el, idx) => `Element ${idx + 1}: "${el.label}"
Description: ${el.description}
Layout hints: ${el.layoutHints.join(", ") || "none"}
Colors: ${el.colors.join(", ") || "none"}
Fonts: ${el.fonts.join(", ") || "none"}`
      ).join("\n\n");
      const centerX = Math.round(viewport.centerX);
      const centerY = Math.round(viewport.centerY);
      const width = Math.round(viewport.width * 0.8);
      const height = Math.round(viewport.height * 0.6);
      const startX = Math.round(centerX - width / 2);
      const startY = Math.round(centerY - height / 2);
      return `You are a design layout generator. Based on the element descriptions below, generate a JSON array of layout specifications.

Viewport: ${viewport.width}x${viewport.height}, center at (${centerX}, ${centerY})
Available area: ${width}x${height} starting at (${startX}, ${startY})
Available colors: ${availableColors.join(", ")}
Available fonts: ${availableFonts.join(", ")}

Elements to create:
${elementDescriptions}

Generate a JSON array of layout specs. Each spec should be:
{
  "type": "rectangle" | "text",
  "x": number (absolute position),
  "y": number (absolute position),
  "width": number,
  "height": number,
  "color": "#hex" (optional, for rectangles or text fill),
  "font": "font name" (optional, for text),
  "text": "content" (required for text)
}

Rules:
- Create layouts that match the element descriptions semantically
- Use meaningful text content (not generic "Headline" or "Content")
- Position elements appropriately based on layout hints
- Use available colors and fonts intelligently
- Return ONLY valid JSON array, no other text
- Keep shapes within the available area (${startX} to ${startX + width}, ${startY} to ${startY + height})

Example format:
[{"type":"text","x":100,"y":200,"width":400,"height":80,"text":"Welcome to Our Platform","color":"#1A1A1A","font":"Sans-serif"},{"type":"rectangle","x":100,"y":300,"width":400,"height":300,"color":"#E2E8F0"}]`;
    }
    /**
     * Parse AI response into LayoutSpec array
     */
    parseLayoutSpecsResponse(response, viewport) {
      try {
        let jsonStr = response.trim();
        jsonStr = jsonStr.replace(/^```json\n?/i, "").replace(/^```\n?/i, "").replace(/\n?```$/i, "");
        const jsonMatch = jsonStr.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          jsonStr = jsonMatch[0];
        }
        const parsed = JSON.parse(jsonStr);
        if (!Array.isArray(parsed)) {
          return [];
        }
        return parsed.filter((spec) => {
          return spec && typeof spec === "object" && (spec.type === "rectangle" || spec.type === "text") && typeof spec.x === "number" && typeof spec.y === "number" && typeof spec.width === "number" && typeof spec.height === "number";
        }).map((spec) => ({
          type: spec.type,
          x: Math.round(spec.x),
          y: Math.round(spec.y),
          width: Math.round(spec.width),
          height: Math.round(spec.height),
          color: spec.color,
          font: spec.font,
          text: spec.text
        })).filter((spec) => {
          return spec.x >= 0 && spec.y >= 0 && spec.width > 0 && spec.height > 0;
        });
      } catch (error) {
        console.warn("[AI Service] Failed to parse layout specs:", error, response);
        return [];
      }
    }
    /**
     * Fallback summary when AI is unavailable
     */
    fallbackSummary(query, results) {
      if (!results.length) {
        return `I couldn't find a strong match for "${query}". Try adding the page type or mood you're going for.`;
      }
      const highlight = results.slice(0, 3).map((entry) => entry.name).join(", ");
      if (!query.trim()) {
        return `Here are ${results.length} inspiration examples to get you started. Spotlight: ${highlight}.`;
      }
      return `Here are ${results.length} directions inspired by "${query}". Spotlight: ${highlight}. Pick one to collect traits or refine your prompt.`;
    }
  };
  var aiService = new AIService();

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
  aiService.initialize();
  penpot.ui.onMessage((message) => {
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
  async function handleSearch(query) {
    const initialResults = scoreExamples(query, EXAMPLE_DATASET);
    const results = await aiService.enhanceSearchResults(
      query,
      initialResults,
      EXAMPLE_DATASET
    );
    const summary = await aiService.generateSummary(query, results);
    penpot.ui.sendMessage({
      type: "search-results",
      payload: {
        query,
        results,
        summary,
        aiEnabled: aiService.isAvailable()
      }
    });
  }
  function handleAIConfiguration(apiKey) {
    if (apiKey) {
      aiService.initialize(apiKey);
      if (typeof window !== "undefined") {
        localStorage.setItem("openai_api_key", apiKey);
      }
      penpot.ui.sendMessage({
        type: "ai-configured",
        payload: {
          success: true,
          enabled: aiService.isAvailable()
        }
      });
    } else {
      if (typeof window !== "undefined") {
        localStorage.removeItem("openai_api_key");
      }
      aiService.initialize();
      penpot.ui.sendMessage({
        type: "ai-configured",
        payload: {
          success: true,
          enabled: false
        }
      });
    }
  }
  async function handleApply(message) {
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
      const viewport = getViewportDimensions();
      let layoutSpecs = [];
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
      if (layoutSpecs.length === 0) {
        const pattern = parseLayoutHints(allLayoutHints);
        if (pattern.type !== "unknown") {
          layoutSpecs = generateLayoutSpecs(pattern, viewport, allColors, allFonts);
          console.log("[Plugin] Using pattern-based layout specs:", layoutSpecs.length);
        }
      }
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
