import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

function run() {
  const mount = document.getElementById("root");
  if (!mount) {
    document.body.textContent = "Error: #root not found";
    return;
  }
  try {
    const root = createRoot(mount);
    root.render(<App />);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    mount.innerHTML = "<pre style='color:#f88;padding:1rem;white-space:pre-wrap'>" + msg + "</pre>";
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", run);
} else {
  run();
}


