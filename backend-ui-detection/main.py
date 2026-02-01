"""
Visual decomposition API for Design Discovery Assistant.
Accepts a screenshot (base64 PNG); returns structured UI elements via YOLO.

No training needed: by default we use a pre-trained UI model from Hugging Face
(MacPaw YOLOv11 UI elements). Set UI_DETECTION_MODEL_PATH only if you want your own weights.
"""

import base64
import os
from io import BytesIO
from typing import Any, Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="UI Detection API", description="YOLO visual decomposition")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Optional: your own YOLO weights. If unset, we use a pre-trained UI model from Hugging Face.
MODEL_PATH = os.environ.get("UI_DETECTION_MODEL_PATH", "").strip()
CONFIDENCE_THRESHOLD = float(os.environ.get("UI_DETECTION_CONF", "0.25"))

# Pre-trained UI model (no training required). Downloaded once and cached.
PRETRAINED_REPO = "macpaw-research/yolov11l-ui-elements-detection"
PRETRAINED_FILENAME = "ui-elements-detection.pt"

_yolo_model = None


def get_yolo_model():
    global _yolo_model
    if _yolo_model is not None:
        return _yolo_model
    # 1) Use your own weights if set
    if MODEL_PATH and os.path.isfile(MODEL_PATH):
        try:
            from ultralytics import YOLO
            _yolo_model = YOLO(MODEL_PATH)
            return _yolo_model
        except Exception:
            pass
    # 2) Use pre-trained UI model from Hugging Face (downloads once, then cached)
    try:
        from huggingface_hub import hf_hub_download
        from ultralytics import YOLO
        path = hf_hub_download(
            repo_id=PRETRAINED_REPO,
            filename=PRETRAINED_FILENAME,
        )
        _yolo_model = YOLO(path)
        return _yolo_model
    except Exception:
        return None


def rgb_to_hex(r: int, g: int, b: int) -> str:
    return "#{:02X}{:02X}{:02X}".format(
        max(0, min(255, int(r))),
        max(0, min(255, int(g))),
        max(0, min(255, int(b))),
    )


def dominant_color_from_region(image_bytes: bytes, x: int, y: int, w: int, h: int) -> Optional[str]:
    """Sample a small crop and return the most frequent color as hex. Simple fallback if no PIL."""
    try:
        from PIL import Image
        import numpy as np
        img = Image.open(BytesIO(image_bytes)).convert("RGB")
        arr = np.array(img)
        h_img, w_img = arr.shape[:2]
        x1 = max(0, min(x, w_img - 1))
        y1 = max(0, min(y, h_img - 1))
        x2 = max(x1 + 1, min(x + w, w_img))
        y2 = max(y1 + 1, min(y + h, h_img))
        crop = arr[y1:y2, x1:x2]
        if crop.size == 0:
            return None
        # Downsample and take median color (robust to noise)
        crop_small = crop.reshape(-1, 3)
        r, g, b = np.median(crop_small, axis=0)
        return rgb_to_hex(r, g, b)
    except Exception:
        return None


def palette_from_image(image_bytes: bytes, max_colors: int = 8) -> list[str]:
    """Extract up to max_colors dominant colors from the full image (simple sampling)."""
    try:
        from PIL import Image
        import numpy as np
        img = Image.open(BytesIO(image_bytes)).convert("RGB")
        arr = np.array(img)
        # Downsample for speed
        h, w = arr.shape[:2]
        step = max(1, (h * w) // (200 * 200))
        pixels = arr.reshape(-1, 3)[::step]
        if len(pixels) == 0:
            return []
        # K-means would be better; use simple binning + top counts
        from collections import Counter
        def quantize(p):
            return (p[0] // 32) * 64 + (p[1] // 32) * 8 + (p[2] // 32)
        counts = Counter(quantize(tuple(p)) for p in pixels)
        palette = []
        for q, _ in counts.most_common(max_colors):
            r = ((q // 64) % 8) * 32 + 16
            g = ((q // 8) % 8) * 32 + 16
            b = (q % 8) * 32 + 16
            palette.append(rgb_to_hex(r, g, b))
        return palette[:max_colors]
    except Exception:
        return []


def run_yolo_detection(image_bytes: bytes) -> dict[str, Any]:
    """Run YOLO on image and return structured elements + palette."""
    model = get_yolo_model()
    if model is None:
        return run_mock_detection(image_bytes)

    try:
        import numpy as np
        from PIL import Image
    except ImportError:
        return run_mock_detection(image_bytes)

    img = Image.open(BytesIO(image_bytes))
    img_rgb = img.convert("RGB")
    img_np = np.array(img_rgb)

    results = model.predict(img_np, verbose=False)
    elements: list[dict[str, Any]] = []
    class_names = getattr(model, "names", {}) or {}

    for r in results:
        if r.boxes is None:
            continue
        for i, box in enumerate(r.boxes):
            xyxy = box.xyxy[0].cpu().numpy()
            x1, y1, x2, y2 = float(xyxy[0]), float(xyxy[1]), float(xyxy[2]), float(xyxy[3])
            w = max(1, x2 - x1)
            h = max(1, y2 - y1)
            cls_id = int(box.cls[0].item())
            label = class_names.get(cls_id, f"element_{cls_id}")
            conf = float(box.conf[0].item())
            if conf < CONFIDENCE_THRESHOLD:
                continue

            el: dict[str, Any] = {
                "type": label.replace(" ", "_").lower(),
                "bbox": [round(x1), round(y1), round(w), round(h)],
            }
            bg = dominant_color_from_region(image_bytes, int(x1), int(y1), int(w), int(h))
            if bg:
                el["bg_color"] = bg
            elements.append(el)

    palette = palette_from_image(image_bytes)

    return {"elements": elements, "palette": palette}


def run_mock_detection(image_bytes: bytes) -> dict[str, Any]:
    """Fallback when no YOLO model is loaded."""
    return {
        "elements": [
            {"type": "button", "bbox": [100, 200, 280, 60], "bg_color": "#2563EB", "text_color": "#FFFFFF", "font_size": "16px", "text": "Get started"},
            {"type": "heading", "bbox": [80, 80, 400, 48], "text_color": "#1F2937", "font_size": "32px", "text": "Welcome"},
            {"type": "text", "bbox": [80, 140, 400, 40], "text_color": "#6B7280", "font_size": "14px", "text": "Lorem ipsum"},
        ],
        "palette": ["#2563EB", "#1F2937", "#6B7280", "#FFFFFF"],
    }


class AnalyzeRequest(BaseModel):
    image_base64: str


@app.post("/analyze")
def analyze(request: AnalyzeRequest) -> dict[str, Any]:
    """Accept base64 PNG; return structured elements (and optional palette)."""
    try:
        image_bytes = base64.b64decode(request.image_base64)
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid base64 image: {e}")

    if not image_bytes:
        raise HTTPException(status_code=400, detail="Empty image")

    result = run_yolo_detection(image_bytes)
    return result


@app.get("/health")
def health() -> dict[str, Any]:
    model_loaded = get_yolo_model() is not None
    return {"status": "ok", "yolo_loaded": model_loaded, "model_path": MODEL_PATH or "(none)"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
