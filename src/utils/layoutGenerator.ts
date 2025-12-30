import type { LayoutPattern, LayoutSpec, ViewportInfo } from "../types/catalog";

/**
 * Generates shape specifications based on layout pattern and viewport
 */
export function generateLayoutSpecs(
  pattern: LayoutPattern,
  viewport: ViewportInfo,
  colors: string[],
  fonts: string[],
): LayoutSpec[] {
  if (pattern.type === "unknown") {
    return [];
  }

  const specs: LayoutSpec[] = [];
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
          color,
        });

        // Add text in each column if fonts are available
        if (fonts.length > 0) {
          specs.push({
            type: "text",
            x: x + 20,
            y: startY + 20,
            width: columnWidth - 40,
            height: 60,
            font: fonts[i % fonts.length] || fonts[0],
            text: i === 0 ? "Headline" : "Content",
            color: colors[colors.length - 1] || "#1A1A1A",
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

      // Left section
      specs.push({
        type: "rectangle",
        x: startX,
        y: startY,
        width: leftWidth,
        height: sectionHeight,
        color: colors[0] || "#E2E8F0",
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
          color: colors[colors.length - 1] || "#1A1A1A",
        });
      }

      // Right section
      specs.push({
        type: "rectangle",
        x: splitX,
        y: startY,
        width: rightWidth,
        height: sectionHeight,
        color: colors[1] || colors[0] || "#F1F5F9",
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
          color: colors[colors.length - 1] || "#1A1A1A",
        });
      }
      break;
    }

    case "heroStack": {
      const { gap } = pattern;
      const stackWidth = usableWidth;
      const textHeight = 80;
      let currentY = startY;

      // Create hero headline stack with text elements
      if (fonts.length > 0) {
        // Main headline
        specs.push({
          type: "text",
          x: startX,
          y: currentY,
          width: stackWidth,
          height: textHeight * 1.5,
          font: fonts[0],
          text: "Hero Headline",
          color: colors[0] || "#1A1A1A",
        });
        currentY += textHeight * 1.5 + gap;

        // Supporting text
        if (fonts.length > 1) {
          specs.push({
            type: "text",
            x: startX,
            y: currentY,
            width: stackWidth,
            height: textHeight,
            font: fonts[1],
            text: "Supporting copy text",
            color: colors[1] || colors[0] || "#4A5568",
          });
        }
      } else {
        // If no fonts, create a background rectangle
        specs.push({
          type: "rectangle",
          x: startX,
          y: startY,
          width: stackWidth,
          height: 300,
          color: colors[0] || "#E2E8F0",
        });
      }
      break;
    }

    case "leftRight": {
      const leftWidth = usableWidth * 0.5 - pattern.gap / 2;
      const rightWidth = usableWidth * 0.5 - pattern.gap / 2;
      const sectionHeight = 400;

      // Left section
      specs.push({
        type: "rectangle",
        x: startX,
        y: startY,
        width: leftWidth,
        height: sectionHeight,
        color: colors[0] || "#E2E8F0",
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
          color: colors[colors.length - 1] || "#1A1A1A",
        });
      }

      // Right section
      specs.push({
        type: "rectangle",
        x: startX + leftWidth + pattern.gap,
        y: startY,
        width: rightWidth,
        height: sectionHeight,
        color: colors[1] || colors[0] || "#F1F5F9",
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
          color: colors[colors.length - 1] || "#1A1A1A",
        });
      }
      break;
    }
  }

  return specs;
}

