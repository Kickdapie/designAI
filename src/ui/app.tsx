import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ApplyTraitsMessage,
  ChatMessage,
  ElementTrait,
  Example,
  ExampleElement,
  ExampleSearchResponse,
  LayoutTrait,
  PaletteTrait,
  ResizeWindowMessage,
  Trait,
  TypographyTrait,
} from "../types/catalog";
import { DEFAULT_RESULTS, EXAMPLE_DATASET } from "../catalog/examples";

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
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const fallbackTimerRef = useRef<number | null>(null);
  const handshakeRef = useRef(false);

  const sendToPlugin = useCallback((message: unknown) => {
    if (typeof window !== "undefined") {
      window.parent?.postMessage(message, "*");
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
      const message = event.data;
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

          if (message.type === "search-results") {
            setIsLoading(false);
            if (payload?.summary) {
              pushAssistantMessage(payload.summary);
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

  const collectionSummary = useMemo(() => collection.length, [collection.length]);

  return (
    <div className={`app-shell ${isMinimized ? "minimized" : ""}`}>
      <header className="app-header">
        <div className="header-top">
          <div>
            <div className="badge-lab">Penpot Plug-in Prototype</div>
            <h1>Design Discovery Assistant</h1>
          </div>
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
        {!isMinimized && (
          <p>
            Describe what you want to build, explore real-world references, and
            collect palettes, typography, or layout blueprints directly onto your
            canvas.
          </p>
        )}
      </header>

      <main className="app-main">
        <section className="panel">
          <header className="panel-header">
            <h3>Conversation</h3>
            <span className="panel-subhead">Guide the assistant with intent</span>
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
              {examples.length} {examples.length === 1 ? "result" : "results"}
            </span>
          </header>

          <div className="examples-grid">
            {examples.map((example) => (
              <ExampleCard
                key={example.id}
                example={example}
                isActive={selectedExample?.id === example.id}
                onSelect={() => setSelectedExample(example)}
              />
            ))}
            {!examples.length && !isLoading && (
              <div className="empty-state">
                <p>No examples yet. Try adjusting your prompt.</p>
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
            />
          )}
        </section>

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
                  
                  if (hasColors && hasFonts) {
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
      </main>
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
}> = ({ example, isActive, onSelect }) => {
  return (
    <button
      type="button"
      className={`example-card ${isActive ? "active" : ""}`}
      onClick={onSelect}
    >
      <img src={example.thumbnail} alt={example.name} loading="lazy" />
      <div className="example-name">{example.name}</div>
      <div className="example-tags">
        {example.layoutTags.slice(0, 2).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </button>
  );
};

const ExampleDetail: React.FC<{
  example: Example;
  onCollectPalette: (example: Example) => void;
  onCollectSingleColor: (example: Example, color: string) => void;
  onCollectTypography: (example: Example) => void;
  onCollectLayout: (example: Example) => void;
  onCollectElement: (element: ExampleElement) => void;
}> = ({
  example,
  onCollectPalette,
  onCollectSingleColor,
  onCollectTypography,
  onCollectLayout,
  onCollectElement,
}) => {
  return (
    <div className="example-detail">
      <div className="example-preview">
        <img src={example.preview} alt={`${example.name} preview`} loading="lazy" />
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
        <div className="element-list">
          {example.elements.map((element) => (
            <div key={element.id} className="element-card">
              <div className="element-header">
                <h6>{element.label}</h6>
                <span>{element.highlight}</span>
              </div>
              <p>{element.description}</p>
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

