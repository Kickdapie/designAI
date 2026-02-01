# UI Detection Backend (YOLO)

This service is called by the Design Discovery Assistant Figma plugin for **visual decomposition**: it receives a screenshot (base64 PNG), runs **YOLO** to detect UI elements, and returns structured JSON. ChatGPT then uses that JSON for **reasoning and narration** only.

**You do not need to train a model.** The backend uses a **pre-trained UI model** from Hugging Face by default.

## How it works

1. **Plugin** exports the current selection (or a dataset image) as PNG and sends it to this API.
2. **This backend** runs a pre-trained YOLO model (MacPaw YOLOv11 UI elements) and extracts elements + colors.
3. **Plugin UI** sends the JSON to ChatGPT; ChatGPT narrates and suggests—it does not extract.

## Run locally (no training)

```bash
cd backend-ui-detection
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

- **First run**: the backend downloads the pre-trained UI model from Hugging Face once (~100MB). After that it’s cached.
- **In the plugin**: AI Settings → UI Detection API URL = `http://localhost:8000` → Save. Select a frame in Figma and click **Analyze Screenshot**.

That’s it. No training, no custom weights—just run the backend and point the plugin at it.

## Pre-trained model

- **Source**: [MacPaw YOLOv11 UI Elements Detection](https://huggingface.co/macpaw-research/yolov11l-ui-elements-detection) on Hugging Face.
- **Labels**: AXButton, AXDisclosureTriangle, AXImage, AXLink, AXTextArea (common UI components).
- **Use case**: Analyzing design screenshots (Figma exports or images from your dataset) to give structured info to ChatGPT.

## Optional: your own weights

If you later train your own YOLO model (e.g. on Rico or your dataset), set:

```bash
export UI_DETECTION_MODEL_PATH=weights/best.pt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Then the backend uses your weights instead of the pre-trained one.

## Output format

```json
{
  "elements": [
    {
      "type": "AXButton",
      "bbox": [x, y, w, h],
      "bg_color": "#2563EB"
    }
  ],
  "palette": ["#hex", "..."]
}
```

`bbox` is `[x, y, width, height]` in image coordinates. `bg_color` is computed from the image crop.

## Health check

`GET http://localhost:8000/health` returns `"yolo_loaded": true` when the model (pre-trained or your own) is loaded, and `"model_path"` so you can see which one is in use.
