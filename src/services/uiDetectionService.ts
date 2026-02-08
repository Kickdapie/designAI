import type { VisualDecompositionResult, ImageSearchResult } from "../types/catalog";

/**
 * Client for the visual decomposition backend (YOLO / Detectron2).
 * Sends an image; receives structured JSON (elements with type, bbox, colors, etc.).
 * The backend runs outside the plugin (Python, GPU); this only calls it via HTTP.
 */

const STORAGE_KEY_URL = "ui_detection_api_url";
const STORAGE_KEY_API_KEY = "ui_detection_api_key";

function getBaseUrl(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(STORAGE_KEY_URL) || null;
}

function getApiKey(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(STORAGE_KEY_API_KEY) || null;
}

export function getDetectionConfig(): { baseUrl: string | null; hasApiKey: boolean } {
  return { baseUrl: getBaseUrl(), hasApiKey: !!getApiKey() };
}

export function setDetectionConfig(baseUrl: string | null, apiKey: string | null): void {
  if (typeof window === "undefined") return;
  if (baseUrl) window.localStorage.setItem(STORAGE_KEY_URL, baseUrl);
  else window.localStorage.removeItem(STORAGE_KEY_URL);
  if (apiKey) window.localStorage.setItem(STORAGE_KEY_API_KEY, apiKey);
  else window.localStorage.removeItem(STORAGE_KEY_API_KEY);
}

function buildHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  const apiKey = getApiKey();
  if (apiKey) headers["Authorization"] = `Bearer ${apiKey}`;
  return headers;
}

/**
 * POST image (base64 PNG) to the detection API; returns structured elements.
 */
export async function analyzeImage(imageBase64Png: string): Promise<VisualDecompositionResult> {
  const baseUrl = getBaseUrl();
  if (!baseUrl || !imageBase64Png) {
    throw new Error("UI Detection API URL not set. Add it in AI Settings.");
  }

  const url = baseUrl.replace(/\/$/, "") + "/analyze";

  const response = await fetch(url, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify({ image_base64: imageBase64Png }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`UI Detection API error: ${response.status} ${response.statusText}. ${text}`);
  }

  const data = (await response.json()) as VisualDecompositionResult;
  if (!data || !Array.isArray(data.elements)) {
    throw new Error("Invalid response: expected { elements: [...] }");
  }

  return data;
}

/**
 * Analyze an image by URL (the backend fetches it). Used for dataset + Google examples.
 */
export async function analyzeImageByUrl(imageUrl: string): Promise<VisualDecompositionResult> {
  const baseUrl = getBaseUrl();
  if (!baseUrl) {
    throw new Error("UI Detection API URL not set. Add it in AI Settings.");
  }

  const url = baseUrl.replace(/\/$/, "") + "/analyze-url";

  const response = await fetch(url, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify({ image_url: imageUrl }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`UI Detection API error: ${response.status} ${response.statusText}. ${text}`);
  }

  const data = (await response.json()) as VisualDecompositionResult;
  if (!data || !Array.isArray(data.elements)) {
    throw new Error("Invalid response: expected { elements: [...] }");
  }

  return data;
}

/**
 * Search for design images via the backend (Google Custom Search).
 */
export async function searchDesignImages(query: string, numResults: number = 8): Promise<{
  results: ImageSearchResult[];
  message?: string;
  fallback_url?: string;
}> {
  const baseUrl = getBaseUrl();
  if (!baseUrl) {
    throw new Error("UI Detection API URL not set. Add it in AI Settings.");
  }

  const url = baseUrl.replace(/\/$/, "") + "/search-images";

  const response = await fetch(url, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify({ query, num_results: numResults }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Search API error: ${response.status} ${response.statusText}. ${text}`);
  }

  return await response.json();
}
