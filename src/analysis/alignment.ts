// src/analysis/alignment.ts
import { Shape } from "../types/shape";
import { DesignIssue } from "../types/issue";

const GRID_SIZE = 8;
const TOLERANCE_PX = 2;

export function detectAlignmentIssues(shapes: Shape[]): DesignIssue[] {
  const issues: DesignIssue[] = [];
  const groups = groupByProximity(shapes, 120);

  for (const group of groups) {
    if (group.length < 2) continue;

    const h = checkHorizontalAlignment(group);
    if (!h.isAligned) {
      issues.push({
        id: `align-h-${group.map((g) => g.id).join("-")}`,
        type: "alignment",
        severity: "warning",
        shapes: group.map((g) => g.id),
        message: "Elements are not horizontally aligned.",
        suggestion: `Align to ${nearestGrid(h.avgY)}px Y`
      });
    }

    const v = checkVerticalAlignment(group);
    if (!v.isAligned) {
      issues.push({
        id: `align-v-${group.map((g) => g.id).join("-")}`,
        type: "alignment",
        severity: "warning",
        shapes: group.map((g) => g.id),
        message: "Elements are not vertically aligned.",
        suggestion: `Align to ${nearestGrid(v.avgX)}px X`
      });
    }
  }

  return issues;
}

function groupByProximity(shapes: Shape[], threshold: number): Shape[][] {
  const groups: Shape[][] = [];
  for (const shape of shapes) {
    let added = false;
    for (const group of groups) {
      if (isNearby(shape, group, threshold)) {
        group.push(shape);
        added = true;
        break;
      }
    }
    if (!added) groups.push([shape]);
  }
  return groups;
}

function isNearby(shape: Shape, group: Shape[], threshold: number): boolean {
  return group.some((other) => {
    const dx = Math.abs(shape.x - other.x);
    const dy = Math.abs(shape.y - other.y);
    return dx < threshold && dy < threshold;
  });
}

function checkHorizontalAlignment(shapes: Shape[]) {
  const ys = shapes.map((s) => s.y);
  const avgY = ys.reduce((a, b) => a + b, 0) / ys.length;
  const isAligned = ys.every((y) => Math.abs(y - avgY) <= TOLERANCE_PX);
  return { isAligned, avgY };
}

function checkVerticalAlignment(shapes: Shape[]) {
  const xs = shapes.map((s) => s.x);
  const avgX = xs.reduce((a, b) => a + b, 0) / xs.length;
  const isAligned = xs.every((x) => Math.abs(x - avgX) <= TOLERANCE_PX);
  return { isAligned, avgX };
}

function nearestGrid(val: number) {
  return Math.round(val / GRID_SIZE) * GRID_SIZE;
}
