// src/analysis/contrast.ts
import { Shape } from "../types/shape";
import { DesignIssue } from "../types/issue";
import { getContrastRatio } from "../utils/color";

const TEXT_MIN = 4.5;
const UI_MIN = 3.0;

export function detectContrastIssues(shapes: Shape[]): DesignIssue[] {
  const issues: DesignIssue[] = [];

  for (const shape of shapes) {
    if (shape.type === "text" && shape.fillColor) {
      const bg = getBackgroundColor(shape);
      const ratio = getContrastRatio(shape.fillColor, bg);

      if (ratio < TEXT_MIN) {
        issues.push({
          id: `contrast-${shape.id}`,
          type: "contrast",
          severity: ratio < 3 ? "error" : "warning",
          shapes: [shape.id],
          message: `Text contrast is ${ratio.toFixed(2)}:1 (needs ≥ ${TEXT_MIN}:1).`,
          suggestion: "Darken text or lighten background for better readability."
        });
      }
    }

    if (shape.type === "rect" && shape.strokeColor) {
      const bg = getBackgroundColor(shape);
      const ratio = getContrastRatio(shape.strokeColor, bg);
      if (ratio < UI_MIN) {
        issues.push({
          id: `contrast-ui-${shape.id}`,
          type: "contrast",
          severity: "warning",
          shapes: [shape.id],
          message: `UI element contrast is low (${ratio.toFixed(2)}:1).`,
          suggestion: "Increase border/fill contrast to reach 3:1."
        });
      }
    }
  }

  return issues;
}

function getBackgroundColor(shape: Shape): string {
  return shape.parent?.fillColor ?? "#ffffff";
}
