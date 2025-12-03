import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

const mount = document.getElementById("root");

if (mount) {
  const root = createRoot(mount);
  root.render(<App />);
}


