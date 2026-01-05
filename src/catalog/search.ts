import { Example } from "../types/catalog";

export function scoreExamples(query: string, dataset: Example[]): Example[] {
  if (!query.trim()) {
    return dataset.slice(0, 12);
  }

  const tokens = query
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);

  if (!tokens.length) {
    return dataset.slice(0, 12);
  }

  const ranked = dataset
    .map((example) => ({
      example,
      score: scoreExample(example, tokens),
    }))
    .sort((a, b) => b.score - a.score);

  const results = ranked
    .filter((entry, index) => entry.score > 0 || index < 2)
    .slice(0, 12)
    .map((entry) => entry.example);

  return results.length ? results : dataset.slice(0, Math.min(12, dataset.length));
}

function scoreExample(example: Example, tokens: string[]): number {
  const base = [
    example.name,
    example.tagline,
    example.scenario,
    example.description,
    example.layoutTags.join(" "),
    example.fonts.join(" "),
  ]
    .join(" ")
    .toLowerCase();

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
      (element.trait.layoutHints ?? []).join(" "),
    ]
      .join(" ")
      .toLowerCase();

    tokens.forEach((token) => {
      if (detail.includes(token)) {
        score += 1;
      }
    });
  });

  return score;
}


