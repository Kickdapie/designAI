export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export type PaletteTrait = {
  id: string;
  type: "palette";
  label: string;
  sourceExampleId: string;
  colors: string[];
};

export type TypographyTrait = {
  id: string;
  type: "typography";
  label: string;
  sourceExampleId: string;
  fonts: string[];
};

export type LayoutTrait = {
  id: string;
  type: "layout";
  label: string;
  sourceExampleId: string;
  layoutTags: string[];
  description?: string;
};

export type ElementTrait = {
  id: string;
  type: "element";
  label: string;
  sourceExampleId: string;
  description: string;
  colors?: string[];
  fonts?: string[];
  layoutHints?: string[];
};

export type Trait = PaletteTrait | TypographyTrait | LayoutTrait | ElementTrait;

export type ExampleElement = {
  id: string;
  label: string;
  description: string;
  highlight: string;
  trait: ElementTrait;
};

export type Example = {
  id: string;
  name: string;
  tagline: string;
  scenario: string;
  description: string;
  palette: string[];
  fonts: string[];
  layoutTags: string[];
  thumbnail: string;
  preview: string;
  elements: ExampleElement[];
};

export type ExampleSearchResponse = {
  query: string;
  results: Example[];
  summary?: string;
};

export type ApplyTraitsMessage = {
  type: "apply-collected-traits";
  payload: { traits: Trait[] };
};

export type CollectionAppliedMessage = {
  type: "collection-applied";
  payload?: { success?: boolean; error?: string; message?: string };
};

export type ResizeWindowMessage = {
  type: "resize-window";
  payload: { width: number; height: number };
};

export type SearchExamplesMessage = {
  type: "search-examples";
  payload: { query: string };
};

export type UiReadyMessage = {
  type: "ui-ready";
};

export type PluginMessage =
  | ApplyTraitsMessage
  | SearchExamplesMessage
  | UiReadyMessage;

// Layout automation types
export type ViewportInfo = {
  width: number;
  height: number;
  centerX: number;
  centerY: number;
};

export type LayoutPattern =
  | { type: "twoColumn"; columns: number; gap: number }
  | { type: "verticalSplit"; gap: number }
  | { type: "heroStack"; gap: number }
  | { type: "leftRight"; gap: number }
  | { type: "unknown" };

export type LayoutSpec = {
  type: "rectangle" | "text";
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
  font?: string;
  text?: string;
};

