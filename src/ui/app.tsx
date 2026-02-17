import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ApplyTraitsMessage,
  CanvasAnalysisResponse,
  CanvasDataForAnalysis,
  ChatMessage,
  DetectedDesignElement,
  ElementTrait,
  Example,
  ExampleElement,
  ExampleSearchResponse,
  ImageSearchResult,
  LayoutTrait,
  PaletteTrait,
  ResizeWindowMessage,
  Trait,
  TypographyTrait,
} from "../types/catalog";
import { DEFAULT_RESULTS, EXAMPLE_DATASET } from "../catalog/examples";
import { aiService } from "../services/aiService";
import {
  getDetectionConfig,
  setDetectionConfig,
  analyzeImage as detectImage,
  analyzeImageByUrl,
  searchDesignImages,
} from "../services/uiDetectionService";

const INITIAL_ASSISTANT: ChatMessage = {
  id: "assistant-welcome",
  role: "assistant",
  content:
    "Tell me what kind of page you need—industry, mood, or layout—and I'll pull real examples you can reuse.",
};

const FALLBACK_TIMEOUT_MS = 900;

export const App: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_ASSISTANT]);
  const [examples, setExamples] = useState<Example[]>(DEFAULT_RESULTS);
  const [collection, setCollection] = useState<Trait[]>([]);
  const [selectedExample, setSelectedExample] = useState<Example | null>(
    DEFAULT_RESULTS[0] ?? null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [aiEnabled, setAiEnabled] = useState(false);
  const [showAISettings, setShowAISettings] = useState(false);
  const STORAGE_KEY = "openai_api_key";
  const [apiKeyInput, setApiKeyInput] = useState(() => {
    if (typeof window === "undefined") return "";
    return window.localStorage.getItem(STORAGE_KEY) || "";
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [detectionApiUrl, setDetectionApiUrl] = useState(() => getDetectionConfig().baseUrl || "");
  const [detectionApiKey, setDetectionApiKey] = useState(() => (typeof window !== "undefined" ? window.localStorage.getItem("ui_detection_api_key") : null) || "");
  // Google search
  const [googleQuery, setGoogleQuery] = useState("");
  const [googleResults, setGoogleResults] = useState<ImageSearchResult[]>([]);
  const [isSearchingGoogle, setIsSearchingGoogle] = useState(false);
  // Image lightbox
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);
  // Detected elements from YOLO + GPT
  const [detectedElements, setDetectedElements] = useState<DetectedDesignElement[]>([]);
  const [selectedDetectedIds, setSelectedDetectedIds] = useState<Set<string>>(new Set());
  const [isAnalyzingExample, setIsAnalyzingExample] = useState(false);
  const [analyzedExampleName, setAnalyzedExampleName] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const fallbackTimerRef = useRef<number | null>(null);
  const handshakeRef = useRef(false);

  const sendToPlugin = useCallback((message: unknown) => {
    if (typeof window === "undefined") return;
    const payload: { pluginMessage: unknown; pluginId?: string } = { pluginMessage: message };
    if (window.location.origin !== "null" && window.location.protocol.startsWith("http")) {
      payload.pluginId = "design-discovery-assistant";
      window.parent?.postMessage(payload, "https://www.figma.com");
    } else {
      window.parent?.postMessage(payload, "*");
    }
  }, []);

  const pushAssistantMessage = useCallback((content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content,
      },
    ]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const message = event.data?.pluginMessage;
      if (!message || typeof message !== "object") return;

      switch (message.type) {
        case "examples:initial":
        case "search-results": {
          const payload = message.payload as ExampleSearchResponse | undefined;
          const resultList =
            payload?.results && payload.results.length > 0
              ? payload.results
              : DEFAULT_RESULTS;

          if (!handshakeRef.current) {
            handshakeRef.current = true;
          }

          if (fallbackTimerRef.current) {
            window.clearTimeout(fallbackTimerRef.current);
            fallbackTimerRef.current = null;
          }

          setExamples(resultList);
          setSelectedExample(resultList[0] ?? null);
          
          // Update AI status
          if (payload?.aiEnabled !== undefined) {
            setAiEnabled(payload.aiEnabled);
          }

          if (message.type === "search-results") {
            setIsLoading(false);
            if (payload?.summary) {
              pushAssistantMessage(payload.summary);
            }
          }
          break;
        }
        case "ai-configured": {
          const payload = message.payload as { success: boolean; enabled: boolean } | undefined;
          if (payload) {
            setAiEnabled(payload.enabled);
            setShowAISettings(false);
            if (payload.enabled) {
              pushAssistantMessage("✨ AI features enabled! I can now provide smarter search results and recommendations.");
            } else {
              pushAssistantMessage("AI features disabled. Using keyword-based search.");
            }
          }
          break;
        }
        case "collection-applied": {
          const payload = message.payload as
            | { success?: boolean; error?: string; message?: string }
            | undefined;
          if (payload?.success) {
            pushAssistantMessage(
              payload.message || "Those elements are on your canvas! Keep browsing if you'd like more inspiration.",
            );
          } else if (payload?.error) {
            pushAssistantMessage(`I couldn't apply that yet: ${payload.error}`);
          } else {
            pushAssistantMessage(
              "Update sent to your canvas. Let me know if anything looks off.",
            );
          }
          break;
        }
        case "canvas-analysis": {
          setIsAnalyzing(false);
          const payload = message.payload as CanvasAnalysisResponse["payload"];
          if (payload?.success && payload.analysis) {
            pushAssistantMessage(`🎨 Canvas Analysis:\n\n${payload.analysis}`);
          } else if (payload?.error) {
            pushAssistantMessage(`❌ ${payload.error}`);
          }
          break;
        }
        case "canvas-data-for-analysis": {
          const payload = message.payload as CanvasDataForAnalysis["payload"];
          if (payload?.error) {
            setIsAnalyzing(false);
            pushAssistantMessage(`❌ ${payload.error}`);
            break;
          }
          // Run AI in the UI context where we have the API key
          const apiKey = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
          if (!apiKey) {
            setIsAnalyzing(false);
            pushAssistantMessage("❌ No API key found. Please add your OpenAI API key in AI Settings and save.");
            break;
          }
          aiService.initialize(apiKey);
          aiService
            .analyzeCanvas({
              colors: payload.colors ?? [],
              fonts: payload.fonts ?? [],
              shapeCount: payload.shapeCount ?? 0,
              textCount: payload.textCount ?? 0,
              textSamples: payload.textSamples,
              layoutInfo: payload.layoutInfo,
            })
            .then((result) => {
              setIsAnalyzing(false);
              if (result.analysis) {
                pushAssistantMessage(`🎨 Canvas Analysis:\n\n${result.analysis}`);
              } else {
                pushAssistantMessage(`❌ ${result.error || "AI analysis failed. Please try again."}`);
              }
            })
            .catch((err) => {
              setIsAnalyzing(false);
              pushAssistantMessage(`❌ ${err instanceof Error ? err.message : "AI analysis failed."}`);
            });
          break;
        }
        case "screenshot-for-analysis": {
          const payload = message.payload as { imageBytes?: number[]; error?: string };
          if (payload?.error) {
            setIsAnalyzing(false);
            pushAssistantMessage(`❌ ${payload.error}`);
            break;
          }
          const imageBytes = payload?.imageBytes;
          if (!imageBytes || !imageBytes.length) {
            setIsAnalyzing(false);
            pushAssistantMessage("❌ No image received.");
            break;
          }
          const apiKey = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
          if (!apiKey) {
            setIsAnalyzing(false);
            pushAssistantMessage("❌ No OpenAI API key. Add it in AI Settings for GPT reasoning.");
            break;
          }
          aiService.initialize(apiKey);
          const base64 = btoa(String.fromCharCode.apply(null, new Uint8Array(imageBytes)));
          detectImage(base64)
            .then((decomposition) => aiService.analyzeFromStructuredElements(decomposition))
            .then((result) => {
              setIsAnalyzing(false);
              if (result.analysis) {
                pushAssistantMessage(`🎨 Screenshot Analysis (YOLO/Detectron2 + GPT):\n\n${result.analysis}`);
              } else {
                pushAssistantMessage(`❌ ${result.error || "Analysis failed."}`);
              }
            })
            .catch((err) => {
              setIsAnalyzing(false);
              pushAssistantMessage(`❌ ${err instanceof Error ? err.message : "Screenshot analysis failed."}`);
            });
          break;
        }
        default:
          break;
      }
    };

    window.addEventListener("message", handleMessage);

    fallbackTimerRef.current = window.setTimeout(() => {
      if (!handshakeRef.current) {
        setExamples(EXAMPLE_DATASET.slice(0, 4));
        setSelectedExample(EXAMPLE_DATASET[0] ?? null);
        handshakeRef.current = true;
        pushAssistantMessage(
          "Using local inspiration set while I connect to the catalog service.",
        );
      }
    }, FALLBACK_TIMEOUT_MS);

    sendToPlugin({ type: "ui-ready" });

    // If we have a stored API key, send it to the plugin so it stays configured
    const storedKey = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (storedKey) {
      sendToPlugin({ type: "configure-ai", payload: { apiKey: storedKey } });
    }

    return () => {
      window.removeEventListener("message", handleMessage);
      if (fallbackTimerRef.current) {
        window.clearTimeout(fallbackTimerRef.current);
      }
    };
  }, [pushAssistantMessage, sendToPlugin]);

  const handlePromptSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = prompt.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        role: "user",
        content: trimmed,
      },
    ]);

    setPrompt("");
    setIsLoading(true);

    sendToPlugin({
      type: "search-examples",
      payload: { query: trimmed },
    });
  };

  const addTrait = useCallback((trait: Trait) => {
    setCollection((prev) => {
      if (prev.some((existing) => existing.id === trait.id)) {
        return prev;
      }
      return [...prev, trait];
    });
  }, []);

  const handleCollectPalette = useCallback(
    (example: Example) => {
      const trait: PaletteTrait = {
        id: `${example.id}-palette`,
        type: "palette",
        label: `${example.name} palette`,
        sourceExampleId: example.id,
        colors: example.palette,
      };
      addTrait(trait);
    },
    [addTrait],
  );

  const handleCollectSingleColor = useCallback(
    (example: Example, color: string) => {
      const trait: PaletteTrait = {
        id: `${example.id}-color-${color}`,
        type: "palette",
        label: `${color} from ${example.name}`,
        sourceExampleId: example.id,
        colors: [color],
      };
      addTrait(trait);
    },
    [addTrait],
  );

  const handleCollectTypography = useCallback(
    (example: Example) => {
      const trait: TypographyTrait = {
        id: `${example.id}-typography`,
        type: "typography",
        label: `${example.name} typography`,
        sourceExampleId: example.id,
        fonts: example.fonts,
      };
      addTrait(trait);
    },
    [addTrait],
  );

  const handleCollectLayout = useCallback(
    (example: Example) => {
      const trait: LayoutTrait = {
        id: `${example.id}-layout`,
        type: "layout",
        label: `${example.name} layout patterns`,
        sourceExampleId: example.id,
        layoutTags: example.layoutTags,
        description: example.description,
      };
      addTrait(trait);
    },
    [addTrait],
  );

  const handleCollectElement = useCallback(
    (element: ExampleElement) => {
      addTrait(element.trait);
    },
    [addTrait],
  );

  const handleRemoveTrait = useCallback((traitId: string) => {
    setCollection((prev) => prev.filter((trait) => trait.id !== traitId));
  }, []);

  const handleApplyToCanvas = useCallback(() => {
    const message: ApplyTraitsMessage = {
      type: "apply-collected-traits",
      payload: { traits: collection },
    };

    sendToPlugin(message);

    if (collection.length) {
      pushAssistantMessage(
        "Great choice. I'm sending those visual tokens to your canvas—feel free to tweak anything afterward.",
      );
    }
  }, [collection, pushAssistantMessage, sendToPlugin]);

  const handleToggleSize = useCallback(() => {
    const newMinimized = !isMinimized;
    setIsMinimized(newMinimized);
    
    const message: ResizeWindowMessage = {
      type: "resize-window",
      payload: newMinimized
        ? { width: 400, height: 300 }
        : { width: 1300, height: 900 },
    };
    
    sendToPlugin(message);
  }, [isMinimized, sendToPlugin]);

  const handleSaveAPIKey = useCallback(() => {
    const key = apiKeyInput.trim() || undefined;
    if (typeof window !== "undefined") {
      if (key) {
        window.localStorage.setItem(STORAGE_KEY, key);
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
    sendToPlugin({
      type: "configure-ai",
      payload: { apiKey: key },
    });
  }, [apiKeyInput, sendToPlugin]);

  const handleClearAPIKey = useCallback(() => {
    setApiKeyInput("");
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    sendToPlugin({
      type: "configure-ai",
      payload: { apiKey: undefined },
    });
  }, [sendToPlugin]);

  const handleAnalyzeCanvas = useCallback((analyzeSelection: boolean = false) => {
    const hasKey = typeof window !== "undefined" && !!window.localStorage.getItem(STORAGE_KEY);
    if (!hasKey && !aiEnabled) {
      pushAssistantMessage("⚠️ AI is not enabled. Please configure your API key in settings to analyze your canvas.");
      return;
    }
    setIsAnalyzing(true);
    pushAssistantMessage("🔍 Analyzing your canvas...");
    sendToPlugin({
      type: "analyze-canvas",
      payload: { analyzeSelection },
    });
  }, [aiEnabled, sendToPlugin, pushAssistantMessage]);

  const handleAnalyzeScreenshot = useCallback(() => {
    const hasKey = typeof window !== "undefined" && !!window.localStorage.getItem(STORAGE_KEY);
    const { baseUrl } = getDetectionConfig();
    if (!baseUrl) {
      pushAssistantMessage("⚠️ Set the UI Detection API URL in AI Settings (e.g. http://localhost:8000 for local YOLO/Detectron2 backend).");
      return;
    }
    if (!hasKey && !aiEnabled) {
      pushAssistantMessage("⚠️ Add your OpenAI API key in AI Settings for GPT reasoning.");
      return;
    }
    setIsAnalyzing(true);
    pushAssistantMessage("🔍 Exporting selection and running UI detector + GPT...");
    sendToPlugin({ type: "analyze-screenshot" });
  }, [aiEnabled, sendToPlugin, pushAssistantMessage]);

  // ---------- Google Image Search ----------
  const handleGoogleSearch = useCallback(async () => {
    const q = googleQuery.trim();
    if (!q) return;
    const { baseUrl } = getDetectionConfig();
    if (!baseUrl) {
      pushAssistantMessage("⚠️ Set the UI Detection API URL in AI Settings first (e.g. http://localhost:8000).");
      return;
    }
    setIsSearchingGoogle(true);
    try {
      const data = await searchDesignImages(q);
      if (data.results && data.results.length > 0) {
        setGoogleResults(data.results);
        pushAssistantMessage(`Found ${data.results.length} design references for "${q}". Click one to analyze it with YOLO.`);
      } else {
        setGoogleResults([]);
        if (data.fallback_url) {
          pushAssistantMessage(
            `Google Custom Search is not configured on the backend. You can manually browse: ${data.fallback_url}\n\n${data.message || ""}`
          );
        } else {
          pushAssistantMessage(`No results for "${q}". Try a different search.`);
        }
      }
    } catch (err) {
      pushAssistantMessage(`❌ Search failed: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsSearchingGoogle(false);
    }
  }, [googleQuery, pushAssistantMessage]);

  // ---------- Analyze Example with YOLO ----------
  const handleAnalyzeExample = useCallback(async (imageUrl: string, name: string) => {
    const { baseUrl } = getDetectionConfig();
    if (!baseUrl) {
      pushAssistantMessage("⚠️ Set the UI Detection API URL in AI Settings first.");
      return;
    }
    const apiKey = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (!apiKey) {
      pushAssistantMessage("⚠️ Add your OpenAI API key in AI Settings.");
      return;
    }

    setIsAnalyzingExample(true);
    setAnalyzedExampleName(name);
    setDetectedElements([]);
    setSelectedDetectedIds(new Set());
    pushAssistantMessage(`🔍 Analyzing "${name}" with YOLO + GPT...`);

    try {
      aiService.initialize(apiKey);
      const decomposition = await analyzeImageByUrl(imageUrl);
      // Pass source image to GPT-4o Vision for much better analysis
      const result = await aiService.extractActionableElements(
        decomposition,
        decomposition.source_image_base64,
      );

      if (result.error) {
        pushAssistantMessage(`❌ ${result.error}`);
      } else {
        if (result.summary) {
          pushAssistantMessage(`🎨 ${name}: ${result.summary}`);
        }
        if (result.elements.length > 0) {
          setDetectedElements(result.elements);
          // Select all by default
          setSelectedDetectedIds(new Set(result.elements.map((el) => el.id)));
          pushAssistantMessage(
            `Found ${result.elements.length} design elements. Pick the ones you'd like to add to your canvas, then click "Add Selected to Canvas".`
          );
        } else {
          pushAssistantMessage("No actionable elements detected. Try a different example.");
        }
      }
    } catch (err) {
      pushAssistantMessage(`❌ Analysis failed: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsAnalyzingExample(false);
    }
  }, [pushAssistantMessage]);

  // ---------- Apply Detected Elements to Canvas ----------
  const handleApplyDetectedElements = useCallback(() => {
    const selected = detectedElements.filter((el) => selectedDetectedIds.has(el.id));
    if (selected.length === 0) {
      pushAssistantMessage("⚠️ Select at least one element to add.");
      return;
    }

    sendToPlugin({
      type: "apply-detected-elements",
      payload: { elements: selected },
    });

    pushAssistantMessage(
      `Placing ${selected.length} element(s) on your canvas from "${analyzedExampleName}".`
    );
  }, [detectedElements, selectedDetectedIds, analyzedExampleName, pushAssistantMessage, sendToPlugin]);

  const toggleDetectedElement = useCallback((id: string) => {
    setSelectedDetectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const collectionSummary = useMemo(() => collection.length, [collection.length]);

  return (
    <div className={`app-shell ${isMinimized ? "minimized" : ""}`}>
      <header className="app-header">
        <div className="header-top">
          <div>
            <div className="badge-lab">Penpot Plug-in Prototype</div>
            <h1>Design Discovery Assistant</h1>
            {aiEnabled && (
              <span className="ai-badge" title="AI-powered search enabled">
                ✨ AI Enabled
              </span>
            )}
          </div>
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {!isMinimized && (
              <button
                className="secondary-button"
                type="button"
                onClick={() => setShowAISettings(!showAISettings)}
                title="Configure AI settings"
                style={{ fontSize: "12px", padding: "4px 8px" }}
              >
                {aiEnabled ? "⚙️ AI Settings" : "🤖 Enable AI"}
              </button>
            )}
            {!isMinimized && (
              <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
                {([
                  { label: "S", w: 600, h: 500 },
                  { label: "M", w: 900, h: 700 },
                  { label: "L", w: 1300, h: 900 },
                  { label: "XL", w: 1600, h: 1000 },
                ] as { label: string; w: number; h: number }[]).map((preset) => (
                  <button
                    key={preset.label}
                    className="resize-toggle"
                    type="button"
                    onClick={() => sendToPlugin({ type: "resize-window", payload: { width: preset.w, height: preset.h } })}
                    title={`${preset.w}x${preset.h}`}
                    style={{ fontSize: "10px", padding: "2px 6px", minWidth: "24px" }}
                  >
                    {preset.label}
                  </button>
                ))}
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px" }}>|</span>
                <button
                  className="resize-toggle"
                  type="button"
                  onClick={() => sendToPlugin({ type: "resize-window", payload: { width: 1600, height: 450 } })}
                  title="Wide & short — half height so you can see the canvas above (1600x450)"
                  style={{ fontSize: "10px", padding: "2px 6px" }}
                >
                  Half
                </button>
              </div>
            )}
            <button
              className="resize-toggle"
              type="button"
              onClick={handleToggleSize}
              aria-label={isMinimized ? "Expand window" : "Minimize window"}
              title={isMinimized ? "Expand window" : "Minimize window"}
            >
              {isMinimized ? "⛶" : "⊟"}
            </button>
          </div>
        </div>
        {!isMinimized && (
          <>
            <p>
              Describe what you want to build, explore real-world references, and
              collect palettes, typography, or layout blueprints directly onto your
              canvas.
            </p>
            {showAISettings && (
              <div className="ai-settings" style={{ 
                marginTop: "16px", 
                padding: "16px", 
                background: "rgba(255, 255, 255, 0.05)", 
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}>
                <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", fontWeight: "600" }}>
                  AI Configuration
                </h4>
                <p style={{ margin: "0 0 12px 0", fontSize: "12px", opacity: 0.8 }}>
                  Add your OpenAI API key to enable intelligent search, semantic understanding, and AI-generated summaries.
                  Your key is stored locally and never sent to our servers.
                </p>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <input
                    type="password"
                    placeholder="sk-..."
                    value={apiKeyInput}
                    onChange={(e) => setApiKeyInput(e.target.value)}
                    style={{
                      flex: 1,
                      padding: "8px 12px",
                      background: "rgba(0, 0, 0, 0.3)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "4px",
                      color: "white",
                      fontSize: "12px",
                    }}
                  />
                  <button
                    className="primary-button"
                    type="button"
                    onClick={handleSaveAPIKey}
                    style={{ fontSize: "12px", padding: "8px 16px" }}
                  >
                    Save
                  </button>
                  {aiEnabled && (
                    <button
                      className="secondary-button"
                      type="button"
                      onClick={handleClearAPIKey}
                      style={{ fontSize: "12px", padding: "8px 16px" }}
                    >
                      Disable
                    </button>
                  )}
                </div>
                <p style={{ margin: "8px 0 0 0", fontSize: "11px", opacity: 0.6 }}>
                  Get your API key from{" "}
                  <a 
                    href="https://platform.openai.com/api-keys" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: "#4A9EFF" }}
                  >
                    platform.openai.com/api-keys
                  </a>
                </p>
                <h4 style={{ margin: "16px 0 8px 0", fontSize: "13px", fontWeight: "600" }}>
                  UI Detection API (YOLO / Detectron2)
                </h4>
                <p style={{ margin: "0 0 8px 0", fontSize: "11px", opacity: 0.8 }}>
                  Optional. Base URL of your visual decomposition backend (e.g. http://localhost:8000). Add the domain to the plugin manifest networkAccess.
                </p>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                  <input
                    type="url"
                    placeholder="http://localhost:8000"
                    value={detectionApiUrl}
                    onChange={(e) => setDetectionApiUrl(e.target.value)}
                    style={{
                      flex: "1 1 200px",
                      minWidth: "180px",
                      padding: "8px 12px",
                      background: "rgba(0, 0, 0, 0.3)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "4px",
                      color: "white",
                      fontSize: "12px",
                    }}
                  />
                  <input
                    type="password"
                    placeholder="API key (optional)"
                    value={detectionApiKey}
                    onChange={(e) => setDetectionApiKey(e.target.value)}
                    style={{
                      flex: "0 1 140px",
                      padding: "8px 12px",
                      background: "rgba(0, 0, 0, 0.3)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "4px",
                      color: "white",
                      fontSize: "12px",
                    }}
                  />
                  <button
                    className="secondary-button"
                    type="button"
                    onClick={() => {
                      setDetectionConfig(detectionApiUrl.trim() || null, detectionApiKey.trim() || null);
                      pushAssistantMessage("UI Detection API URL saved. Use «Analyze Screenshot» after selecting a frame.");
                    }}
                    style={{ fontSize: "12px", padding: "8px 16px" }}
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </header>

      <main className="app-main">
        <section className="panel">
          <header className="panel-header">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <div>
                <h3>Conversation</h3>
                <span className="panel-subhead">Guide the assistant with intent</span>
              </div>
              {aiEnabled && !isMinimized && (
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <button
                    className="secondary-button"
                    type="button"
                    onClick={() => handleAnalyzeCanvas(false)}
                  disabled={isAnalyzing}
                  title="Analyze your canvas and get AI recommendations"
                  style={{ fontSize: "11px", padding: "6px 12px", whiteSpace: "nowrap" }}
                >
                  {isAnalyzing ? "⏳ Analyzing..." : "🎨 Analyze Canvas"}
                </button>
                  <button
                    className="secondary-button"
                    type="button"
                    disabled={isAnalyzing}
                    onClick={handleAnalyzeScreenshot}
                    title="Export selection as screenshot → YOLO/Detectron2 → GPT reasoning"
                    style={{ fontSize: "11px", padding: "6px 12px", whiteSpace: "nowrap" }}
                  >
                    📷 Analyze Screenshot
                  </button>
                </div>
              )}
            </div>
          </header>
          <form className="prompt-form" onSubmit={handlePromptSubmit}>
            <textarea
              className="prompt-input"
              placeholder="E.g. Minimal blog landing with soft greens and a hero for a new wellness brand"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              rows={3}
            />
            <button className="primary-button" type="submit" disabled={!prompt.trim()}>
              Send
            </button>
          </form>
          <div className="chat-log">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="message-bubble assistant loading">
                Looking for examples…
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        </section>

        <section className="panel results-panel">
          <header className="panel-header">
            <h3>Example Matches</h3>
            <span className="panel-subhead">
              {examples.length + googleResults.length} {(examples.length + googleResults.length) === 1 ? "result" : "results"}
            </span>
          </header>

          {/* Google Image Search */}
          <div style={{ padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <form onSubmit={(e) => { e.preventDefault(); handleGoogleSearch(); }} style={{ display: "flex", gap: "6px" }}>
              <input
                type="text"
                placeholder="Search web for design examples..."
                value={googleQuery}
                onChange={(e) => setGoogleQuery(e.target.value)}
                style={{
                  flex: 1,
                  padding: "6px 10px",
                  background: "rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "4px",
                  color: "white",
                  fontSize: "12px",
                }}
              />
              <button
                className="secondary-button"
                type="submit"
                disabled={isSearchingGoogle || !googleQuery.trim()}
                style={{ fontSize: "11px", padding: "6px 12px", whiteSpace: "nowrap" }}
              >
                {isSearchingGoogle ? "Searching..." : "Search Web"}
              </button>
            </form>
          </div>

          <div className="examples-grid">
            {/* Google results first */}
            {googleResults.map((gr, i) => (
              <GoogleResultCard
                key={`google-${i}`}
                result={gr}
                isActive={false}
                onAnalyze={() => handleAnalyzeExample(gr.image_url, gr.title || `Web Result ${i + 1}`)}
                isAnalyzing={isAnalyzingExample}
                onImageClick={(url, title) => setLightboxImage({ url, title })}
              />
            ))}
            {/* Dataset examples */}
            {examples.map((example) => (
              <ExampleCard
                key={example.id}
                example={example}
                isActive={selectedExample?.id === example.id}
                onSelect={() => setSelectedExample(example)}
                onImageClick={(url, title) => setLightboxImage({ url, title })}
              />
            ))}
            {!examples.length && !googleResults.length && !isLoading && (
              <div className="empty-state">
                <p>No examples yet. Try adjusting your prompt or search the web.</p>
              </div>
            )}
          </div>

          {selectedExample && (
            <ExampleDetail
              example={selectedExample}
              onCollectPalette={handleCollectPalette}
              onCollectSingleColor={handleCollectSingleColor}
              onCollectTypography={handleCollectTypography}
              onCollectLayout={handleCollectLayout}
              onCollectElement={handleCollectElement}
              onAnalyzeWithYolo={handleAnalyzeExample}
              isAnalyzingExample={isAnalyzingExample}
            />
          )}
        </section>

        {/* Detected Elements Panel — replaces Collected Traits when active */}
        {detectedElements.length > 0 ? (
          <section className="panel collection-panel">
            <header className="panel-header">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                <div>
                  <h3>Detected Elements</h3>
                  <span className="panel-subhead">
                    {analyzedExampleName} — {selectedDetectedIds.size}/{detectedElements.length} selected
                  </span>
                </div>
                <button
                  className="tertiary-button"
                  type="button"
                  onClick={() => setDetectedElements([])}
                  title="Dismiss and go back to Collected Traits"
                  style={{ fontSize: "10px", padding: "3px 8px", flexShrink: 0 }}
                >
                  Dismiss
                </button>
              </div>
            </header>
            <div style={{ padding: "8px 12px", display: "flex", gap: "6px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <button
                className="tertiary-button"
                type="button"
                onClick={() => setSelectedDetectedIds(new Set(detectedElements.map((el) => el.id)))}
                style={{ fontSize: "11px" }}
              >
                Select All
              </button>
              <button
                className="tertiary-button"
                type="button"
                onClick={() => setSelectedDetectedIds(new Set())}
                style={{ fontSize: "11px" }}
              >
                Deselect All
              </button>
            </div>
            <div className="element-list" style={{ padding: "8px 12px", maxHeight: "400px", overflowY: "auto" }}>
              {detectedElements.map((el) => (
                <label
                  key={el.id}
                  className="element-card"
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    cursor: "pointer",
                    opacity: selectedDetectedIds.has(el.id) ? 1 : 0.5,
                    border: selectedDetectedIds.has(el.id)
                      ? "1px solid rgba(74, 158, 255, 0.5)"
                      : "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "6px",
                    padding: "10px",
                    marginBottom: "6px",
                    background: selectedDetectedIds.has(el.id) ? "rgba(74, 158, 255, 0.08)" : "transparent",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedDetectedIds.has(el.id)}
                    onChange={() => toggleDetectedElement(el.id)}
                    style={{ marginTop: "3px", flexShrink: 0 }}
                  />
                  {el.crop_base64 && (
                    <img
                      src={`data:image/png;base64,${el.crop_base64}`}
                      alt={el.label}
                      style={{
                        width: "60px",
                        height: "40px",
                        objectFit: "cover",
                        borderRadius: "4px",
                        border: "1px solid rgba(255,255,255,0.15)",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                      <strong style={{ fontSize: "12px" }}>{el.label}</strong>
                      <span style={{
                        fontSize: "10px",
                        padding: "1px 6px",
                        borderRadius: "3px",
                        background: "rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.7)",
                      }}>
                        {el.type}
                      </span>
                    </div>
                    <p style={{ fontSize: "11px", margin: "0 0 4px 0", color: "rgba(203, 213, 225, 0.8)", lineHeight: "1.4" }}>
                      {el.description}
                    </p>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", fontSize: "10px", color: "rgba(148,163,184,0.8)" }}>
                      <span>{el.width}x{el.height}px</span>
                      {el.bg_color && (
                        <span style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                          <span style={{ width: "10px", height: "10px", borderRadius: "2px", background: el.bg_color, display: "inline-block", border: "1px solid rgba(255,255,255,0.2)" }} />
                          {el.bg_color}
                        </span>
                      )}
                      {el.text_color && (
                        <span style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                          <span style={{ width: "10px", height: "10px", borderRadius: "2px", background: el.text_color, display: "inline-block", border: "1px solid rgba(255,255,255,0.2)" }} />
                          text: {el.text_color}
                        </span>
                      )}
                      {el.text && <span>"{el.text}"</span>}
                    </div>
                  </div>
                </label>
              ))}
            </div>
            <div style={{ padding: "10px 12px" }}>
              <button
                className="primary-button"
                type="button"
                disabled={selectedDetectedIds.size === 0}
                onClick={handleApplyDetectedElements}
                style={{ width: "100%" }}
              >
                Add {selectedDetectedIds.size} Element{selectedDetectedIds.size !== 1 ? "s" : ""} to Canvas
              </button>
            </div>
          </section>
        ) : (
        <section className="panel collection-panel">
          <header className="panel-header">
            <h3>Collected Traits</h3>
            <span className="panel-subhead">
              {collectionSummary} {collectionSummary === 1 ? "selection" : "selections"}
            </span>
          </header>

          <div className="collection-explainer">
            Pick traits to remix in your canvas. You can combine palettes, copy
            styles, and layout blueprints.
          </div>

          <div className="collection-list">
            {collection.map((trait) => (
              <TraitItem key={trait.id} trait={trait} onRemove={handleRemoveTrait} />
            ))}
            {!collection.length && (
              <div className="empty-state">
                <p>No traits yet. Collect a palette, typography, or element.</p>
              </div>
            )}
          </div>

          <div className="apply-section">
            <button
              className="primary-button apply-button"
              type="button"
              disabled={!collection.length}
              onClick={handleApplyToCanvas}
            >
              Apply to canvas
            </button>
            {collection.length > 0 && (
              <div className="apply-hint">
                {(() => {
                  const hasColors = collection.some(t => t.type === "palette" || (t.type === "element" && (t as ElementTrait).colors?.length));
                  const hasFonts = collection.some(t => t.type === "typography" || (t.type === "element" && (t as ElementTrait).fonts?.length));
                  const hasLayoutHints = collection.some(
                    t => 
                      (t.type === "layout") || 
                      (t.type === "element" && (t as ElementTrait).layoutHints && (t as ElementTrait).layoutHints!.length > 0)
                  );
                  
                  if (hasLayoutHints) {
                    return "✨ Layout will be created automatically! You can also select existing shapes to arrange them.";
                  } else if (hasColors && hasFonts) {
                    return "💡 Select shapes (rectangles, circles) for colors and text layers for fonts";
                  } else if (hasColors) {
                    return "💡 Select shapes (rectangles, circles, paths, or text) to apply colors";
                  } else if (hasFonts) {
                    return "💡 Select text layers to apply fonts";
                  }
                  return "💡 Select layers on your canvas to apply traits";
                })()}
              </div>
            )}
          </div>
        </section>
        )}
      </main>

      {/* Image Lightbox */}
      {lightboxImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => setLightboxImage(null)}
        >
          <div style={{ color: "white", fontSize: "14px", marginBottom: "12px", fontWeight: 600 }}>
            {lightboxImage.title}
          </div>
          <img
            src={lightboxImage.url}
            alt={lightboxImage.title}
            style={{
              maxWidth: "90%",
              maxHeight: "80%",
              objectFit: "contain",
              borderRadius: "8px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", marginTop: "12px" }}>
            Click anywhere to close
          </div>
        </div>
      )}
    </div>
  );
};

const MessageBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
  return <div className={`message-bubble ${message.role}`}>{message.content}</div>;
};

const ExampleCard: React.FC<{
  example: Example;
  isActive: boolean;
  onSelect: () => void;
  onImageClick: (url: string, title: string) => void;
}> = ({ example, isActive, onSelect, onImageClick }) => {
  // Construct image URL relative to current page location
  const getImageUrl = (path: string) => {
    if (path.startsWith("http")) return path; // Already a full URL
    
    // Hardcoded GitHub Pages base URL for reliability
    // This ensures images work even if URL detection fails
    const GITHUB_PAGES_BASE = "https://kickdapie.github.io/designAI";
    
    // Try to detect base path from script source first
    let baseUrl = window.location.origin;
    let basePath = "/";
    let detected = false;
    
    // Try to find the script that loaded this bundle to get the correct base path
    const scripts = document.getElementsByTagName("script");
    for (let i = 0; i < scripts.length; i++) {
      const src = scripts[i].src;
      if (src && (src.includes("bundle.js") || src.includes("dist/bundle.js"))) {
        try {
          const scriptUrl = new URL(src);
          // Extract base path from script URL
          // e.g., https://kickdapie.github.io/designAI/dist/bundle.js -> /designAI/
          const scriptPath = scriptUrl.pathname;
          const distIndex = scriptPath.indexOf("/dist/");
          if (distIndex > 0) {
            basePath = scriptPath.substring(0, distIndex + 1);
            baseUrl = scriptUrl.origin;
            detected = true;
            break;
          }
        } catch (e) {
          // Continue to next method
        }
      }
    }
    
    // If detection failed, use hardcoded GitHub Pages URL
    if (!detected && window.location.origin.includes("github.io")) {
      baseUrl = GITHUB_PAGES_BASE.split("/").slice(0, 3).join("/");
      basePath = "/designAI/";
    }
    
    // Handle absolute paths (starting with /)
    if (path.startsWith("/")) {
      // Remove leading / and prepend basePath
      const relativePath = path.substring(1);
      const finalUrl = baseUrl + basePath + relativePath;
      console.log("[getImageUrl] Resolved:", { path, baseUrl, basePath, finalUrl });
      return finalUrl;
    } else {
      // Relative path
      const finalUrl = baseUrl + basePath + path;
      console.log("[getImageUrl] Resolved relative:", { path, baseUrl, basePath, finalUrl });
      return finalUrl;
    }
  };
  
  return (
    <button
      type="button"
      className={`example-card ${isActive ? "active" : ""}`}
      onClick={onSelect}
    >
      <img
        src={getImageUrl(example.thumbnail)}
        alt={example.name}
        loading="lazy"
        style={{ cursor: "zoom-in" }}
        onClick={(e) => {
          e.stopPropagation();
          onImageClick(getImageUrl(example.preview), example.name);
        }}
      />
      <div className="example-name">{example.name}</div>
      <div className="example-tags">
        {example.layoutTags.slice(0, 2).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </button>
  );
};

const GoogleResultCard: React.FC<{
  result: ImageSearchResult;
  isActive: boolean;
  onAnalyze: () => void;
  isAnalyzing: boolean;
  onImageClick: (url: string, title: string) => void;
}> = ({ result, isActive, onAnalyze, isAnalyzing, onImageClick }) => {
  return (
    <div
      className={`example-card ${isActive ? "active" : ""}`}
      style={{ position: "relative" }}
    >
      <img
        src={result.thumbnail}
        alt={result.title}
        loading="lazy"
        style={{ width: "100%", height: "auto", borderRadius: "4px", cursor: "zoom-in" }}
        onClick={(e) => {
          e.stopPropagation();
          onImageClick(result.image_url || result.thumbnail, result.title || "Web Result");
        }}
      />
      <div className="example-name" style={{ fontSize: "11px", marginTop: "4px" }}>
        {result.title ? result.title.slice(0, 50) : "Web Result"}
      </div>
      <div className="example-tags">
        <span style={{ fontSize: "9px" }}>{result.source}</span>
        <span style={{ fontSize: "9px", background: "rgba(74,158,255,0.2)", color: "#4A9EFF" }}>Web</span>
      </div>
      <button
        className="primary-button"
        type="button"
        disabled={isAnalyzing}
        onClick={(e) => {
          e.stopPropagation();
          onAnalyze();
        }}
        style={{ fontSize: "10px", padding: "4px 8px", marginTop: "6px", width: "100%" }}
      >
        {isAnalyzing ? "Analyzing..." : "Analyze with YOLO"}
      </button>
    </div>
  );
};

const ExampleDetail: React.FC<{
  example: Example;
  onCollectPalette: (example: Example) => void;
  onCollectSingleColor: (example: Example, color: string) => void;
  onCollectTypography: (example: Example) => void;
  onCollectLayout: (example: Example) => void;
  onCollectElement: (element: ExampleElement) => void;
  onAnalyzeWithYolo: (imageUrl: string, name: string) => void;
  isAnalyzingExample: boolean;
}> = ({
  example,
  onCollectPalette,
  onCollectSingleColor,
  onCollectTypography,
  onCollectLayout,
  onCollectElement,
  onAnalyzeWithYolo,
  isAnalyzingExample,
}) => {
  // Construct image URL relative to current page location
  const getImageUrl = (path: string) => {
    if (path.startsWith("http")) return path; // Already a full URL
    
    // Hardcoded GitHub Pages base URL for reliability
    // This ensures images work even if URL detection fails
    const GITHUB_PAGES_BASE = "https://kickdapie.github.io/designAI";
    
    // Try to detect base path from script source first
    let baseUrl = window.location.origin;
    let basePath = "/";
    let detected = false;
    
    // Try to find the script that loaded this bundle to get the correct base path
    const scripts = document.getElementsByTagName("script");
    for (let i = 0; i < scripts.length; i++) {
      const src = scripts[i].src;
      if (src && (src.includes("bundle.js") || src.includes("dist/bundle.js"))) {
        try {
          const scriptUrl = new URL(src);
          // Extract base path from script URL
          // e.g., https://kickdapie.github.io/designAI/dist/bundle.js -> /designAI/
          const scriptPath = scriptUrl.pathname;
          const distIndex = scriptPath.indexOf("/dist/");
          if (distIndex > 0) {
            basePath = scriptPath.substring(0, distIndex + 1);
            baseUrl = scriptUrl.origin;
            detected = true;
            break;
          }
        } catch (e) {
          // Continue to next method
        }
      }
    }
    
    // If detection failed, use hardcoded GitHub Pages URL
    if (!detected && window.location.origin.includes("github.io")) {
      baseUrl = GITHUB_PAGES_BASE.split("/").slice(0, 3).join("/");
      basePath = "/designAI/";
    }
    
    // Handle absolute paths (starting with /)
    if (path.startsWith("/")) {
      // Remove leading / and prepend basePath
      const relativePath = path.substring(1);
      const finalUrl = baseUrl + basePath + relativePath;
      console.log("[getImageUrl] Resolved:", { path, baseUrl, basePath, finalUrl });
      return finalUrl;
    } else {
      // Relative path
      const finalUrl = baseUrl + basePath + path;
      console.log("[getImageUrl] Resolved relative:", { path, baseUrl, basePath, finalUrl });
      return finalUrl;
    }
  };
  
  return (
    <div className="example-detail">
      <div className="example-preview">
        <img src={getImageUrl(example.preview)} alt={`${example.name} preview`} loading="lazy" />
      </div>

      <div className="example-meta">
        <h4>{example.name}</h4>
        <p>{example.tagline}</p>
        <div className="meta-tags">
          <span>{example.scenario}</span>
          <span>{example.layoutTags.join(" • ")}</span>
        </div>
      </div>

      <div className="example-actions">
        <button
          className="primary-button"
          type="button"
          disabled={isAnalyzingExample}
          onClick={() => {
            const imgUrl = getImageUrl(example.preview);
            onAnalyzeWithYolo(imgUrl, example.name);
          }}
          style={{ fontSize: "12px" }}
        >
          {isAnalyzingExample ? "Analyzing..." : "Analyze with YOLO"}
        </button>
        <button
          className="secondary-button"
          type="button"
          onClick={() => onCollectPalette(example)}
        >
          Collect palette
        </button>
        <button
          className="secondary-button"
          type="button"
          onClick={() => onCollectTypography(example)}
        >
          Collect typography
        </button>
        <button
          className="secondary-button"
          type="button"
          onClick={() => onCollectLayout(example)}
        >
          Save layout cues
        </button>
      </div>

      <div className="palette-section">
        <div className="palette-header">
          <span className="palette-label">Color palette</span>
          <button
            className="tertiary-button"
            type="button"
            onClick={() => onCollectPalette(example)}
            style={{ fontSize: "0.8rem", padding: "6px 10px" }}
          >
            Collect all
          </button>
        </div>
        <div className="palette-row">
          {example.palette.map((hex) => (
            <button
              key={hex}
              type="button"
              className="palette-swatch-clickable"
              style={{ background: hex }}
              onClick={() => onCollectSingleColor(example, hex)}
              title={`Collect ${hex}`}
            >
              <span>{hex}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="example-elements">
        <h5>Reusable elements</h5>
        <p style={{ fontSize: "0.8rem", color: "rgba(203, 213, 225, 0.7)", margin: "0 0 12px 0", lineHeight: "1.4" }}>
          These will automatically create a layout on your canvas with colors and fonts applied. You can also select existing shapes to arrange them into the layout pattern.
        </p>
        <div className="element-list">
          {example.elements.map((element) => (
            <div key={element.id} className="element-card">
              <div className="element-header">
                <h6>{element.label}</h6>
                <span>{element.highlight}</span>
              </div>
              <p>{element.description}</p>
              {element.trait.layoutHints && element.trait.layoutHints.length > 0 && (
                <p style={{ fontSize: "0.75rem", color: "rgba(148, 163, 184, 0.8)", margin: "8px 0 0 0", fontStyle: "italic" }}>
                  Layout: {element.trait.layoutHints.slice(0, 2).join(" • ")}
                </p>
              )}
              <button
                className="tertiary-button"
                type="button"
                onClick={() => onCollectElement(element)}
              >
                Add this element
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TraitItem: React.FC<{
  trait: Trait;
  onRemove: (id: string) => void;
}> = ({ trait, onRemove }) => {
  return (
    <div className={`collection-item type-${trait.type}`}>
      <div className="collection-text">
        <strong>{trait.label}</strong>
        {renderTraitMeta(trait)}
      </div>
      <button
        className="icon-button"
        type="button"
        aria-label="Remove trait"
        onClick={() => onRemove(trait.id)}
      >
        ×
      </button>
    </div>
  );
};

function renderTraitMeta(trait: Trait) {
  switch (trait.type) {
    case "palette":
      return (
        <div className="mini-palette">
          {trait.colors.map((hex) => (
            <span
              key={hex}
              className="mini-swatch"
              style={{ background: hex }}
              title={hex}
            />
          ))}
        </div>
      );
    case "typography":
      return <p className="meta-line">{trait.fonts.join(", ")}</p>;
    case "layout":
      return (
        <p className="meta-line">
          {trait.layoutTags.join(" • ")}<br />
          <span className="meta-muted">{trait.description}</span>
        </p>
      );
    case "element":
      return (
        <p className="meta-line">
          {trait.description}
          {trait.layoutHints && trait.layoutHints.length > 0 && (
            <span className="meta-muted">
              {` • ${trait.layoutHints.join(" / ")}`}
            </span>
          )}
        </p>
      );
    default:
      return null;
  }
}

