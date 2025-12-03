// src/types/issue.ts
export type IssueType = "alignment" | "contrast" | "spacing" | "typography";

export type IssueSeverity = "error" | "warning" | "info";

export interface DesignIssue {
  id: string;               // unique per analysis run
  type: IssueType;
  severity: IssueSeverity;
  shapes: string[];         // Penpot shape ids
  message: string;          // human readable
  suggestion?: string;      // quick fix text
  meta?: Record<string, any>;
}
