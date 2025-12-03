// src/types/shape.ts
export interface Shape {
  id: string;
  type: "rect" | "text" | "ellipse" | "group" | string;
  x: number;
  y: number;
  width: number;
  height: number;
  fillColor?: string;
  strokeColor?: string;
  parent?: { id: string; fillColor?: string };
  fontSize?: number;
}
