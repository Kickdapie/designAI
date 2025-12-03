// src/analysis/spacing.ts
import { Shape } from "../types/shape";
import { DesignIssue } from "../types/issue";

const GRID = 8;
const TOL = 2;

export function detectSpacingIssues(shapes: Shape[]): DesignIssue[] {
  const issues: DesignIssue[] = [];
  const sorted = [...shapes].sort((a, b) => a.y - b.y || a.x - b.x);

  for (let i = 0; i < sorted.length - 1; i++) {
    const a = sorted[i];
    const b = sorted[i + 1];
    const gap = b.y - (a.y + a.height);

    if (gap > 0) {
      const snapped = Math.round(gap / GRID) * GRID;
      if (Math.abs(gap - snapped) > TOL) {
        issues.push({
          id: `spacing-${a.id}-${b.id}`,
          type: "spacing",
          severity: "info",
          shapes: [a.id, b.id],
          message: `Inconsistent vertical gap (${gap}px).`,
          suggestion: `Use ${snapped}px (8px grid).`
        });
      }
    }
  }

  return issues;
}
