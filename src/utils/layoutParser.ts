import type { LayoutPattern } from "../types/catalog";

/**
 * Parses layout hints into structured layout patterns
 */
export function parseLayoutHints(hints: string[]): LayoutPattern {
  if (!hints || hints.length === 0) {
    return { type: "unknown" };
  }

  // Normalize hints to lowercase for easier matching
  const normalizedHints = hints.map((h) => h.toLowerCase());

  // Check for two-column layout
  if (
    normalizedHints.some(
      (h) =>
        h.includes("two-column") ||
        h.includes("two column") ||
        h.includes("2-column") ||
        h.includes("2 column"),
    )
  ) {
    // Try to extract column count if specified
    const columnMatch = normalizedHints.find((h) =>
      /(\d+)[\s-]?column/.test(h),
    );
    const columns = columnMatch
      ? parseInt(columnMatch.match(/(\d+)/)?.[1] || "2")
      : 2;

    return { type: "twoColumn", columns, gap: 40 };
  }

  // Check for vertical split layout
  if (
    normalizedHints.some(
      (h) =>
        h.includes("vertical split") ||
        h.includes("vertical-split") ||
        h.includes("split layout"),
    )
  ) {
    return { type: "verticalSplit", gap: 0 };
  }

  // Check for hero stack (vertical stacking)
  if (
    normalizedHints.some(
      (h) =>
        h.includes("hero") && (h.includes("stack") || h.includes("headline")),
    )
  ) {
    return { type: "heroStack", gap: 20 };
  }

  // Check for left/right positioning hints
  if (
    normalizedHints.some(
      (h) =>
        h.includes("left") ||
        h.includes("right") ||
        h.includes("left-aligned") ||
        h.includes("right-aligned"),
    )
  ) {
    return { type: "leftRight", gap: 40 };
  }

  // Default: unknown pattern
  return { type: "unknown" };
}

