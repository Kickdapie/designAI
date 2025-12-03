# Design Discovery Assistant

A Penpot plugin that helps non-designers discover and apply design inspiration through conversational AI. Describe what you want to build, explore real-world design examples, and collect visual traits (palettes, typography, layouts) directly onto your canvas.

## Features

- **Conversational Interface**: Describe your design needs in natural language
- **Example Gallery**: Browse curated real-world website design examples
- **Trait Collection**: Collect color palettes, typography, and layout patterns
- **Direct Application**: Apply collected traits to selected layers on your Penpot canvas

## Development

### Prerequisites

- Node.js 20+
- npm

### Build

```bash
npm install
npm run build
```

This generates:
- `dist/plugin.js` - The Penpot plugin runtime
- `dist/bundle.js` - The React UI bundle

### Local Testing

1. Build the plugin: `npm run build`
2. Serve the files locally (e.g., using `npx serve` or a local web server)
3. In Penpot, go to Plugins → Manage plugins
4. Install using the local manifest URL (e.g., `http://localhost:3000/manifest.json`)

## Deployment

This plugin is configured for automatic deployment to GitHub Pages.

### Setup GitHub Pages

**If `design-mentor-ai` is your repository root:**
1. Rename `.github/workflows/deploy-root.yml` to `deploy.yml`
2. Delete the original `deploy.yml` file

**If `design-mentor-ai` is a subdirectory:**
- The existing `deploy.yml` workflow will work as-is

**Then:**
1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select "GitHub Actions" as the source
4. The workflow will automatically deploy on pushes to `main`/`master`

### Install in Penpot

Once deployed, install the plugin in Penpot:

1. Open Penpot → Plugins → "Manage plugins"
2. Paste your GitHub Pages manifest URL:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO/manifest.json
   ```
3. Click "Install"
4. The plugin will appear in your plugins menu

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Project Structure

```
design-mentor-ai/
├── plugin.ts              # Main plugin runtime (communicates with Penpot API)
├── src/
│   ├── ui/               # React UI components
│   ├── catalog/          # Example dataset and search logic
│   └── types/            # TypeScript type definitions
├── dist/                 # Build output (generated)
├── manifest.json         # Plugin manifest
└── index.html           # Plugin UI entry point
```

## Research Context

This plugin was developed as part of a thesis research project investigating how conversational, example-driven AI systems can help non-designers create more cohesive and aesthetically pleasing web interfaces.

## License

MIT

