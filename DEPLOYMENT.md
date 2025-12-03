# Deployment Guide

## Quick Start

1. **Push to GitHub**: Make sure your code is in a GitHub repository
2. **Enable GitHub Pages**: 
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"
3. **Push to main/master**: The workflow will automatically deploy

## Manual Installation in Penpot

Once deployed, your plugin will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/manifest.json
```

### Steps:

1. Open Penpot
2. Go to **Plugins** → **Manage plugins**
3. Click **"Add plugin"** or **"Install plugin"**
4. Paste your manifest URL:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO/manifest.json
   ```
5. Click **Install**
6. The plugin will appear in your plugins menu

## Local Testing

For local development and testing:

1. Build the plugin:
   ```bash
   cd design-mentor-ai
   npm install
   npm run build
   ```

2. Serve the files locally:
   ```bash
   # Option 1: Using npx serve
   npx serve design-mentor-ai
   
   # Option 2: Using Python
   cd design-mentor-ai
   python -m http.server 8000
   
   # Option 3: Using Node.js http-server
   npx http-server design-mentor-ai -p 8000
   ```

3. In Penpot, install using the local URL:
   ```
   http://localhost:8000/manifest.json
   ```

## Troubleshooting

### Plugin doesn't load
- Check that `dist/plugin.js` and `dist/bundle.js` exist after building
- Verify `manifest.json` points to the correct paths
- Check browser console for errors

### GitHub Pages deployment fails
- Ensure the workflow file is in `.github/workflows/deploy.yml`
- Check that GitHub Pages is enabled in repository settings
- Verify the workflow has the correct permissions

### CORS errors
- GitHub Pages should handle CORS automatically
- If testing locally, make sure your local server allows CORS

## File Structure

After deployment, your GitHub Pages should have:
```
/
├── manifest.json       # Plugin manifest
├── index.html          # UI entry point
├── dist/
│   ├── plugin.js       # Plugin runtime
│   └── bundle.js       # React UI bundle
└── assets/
    └── icon.svg        # Plugin icon
```

