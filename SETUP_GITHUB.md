# Setting Up GitHub Repository

Follow these steps to turn `design-mentor-ai` into a GitHub repository and enable automatic deployment.

## Step 1: Initialize Git (if not already done)

Open a terminal in the `design-mentor-ai` folder and run:

```bash
cd design-mentor-ai

# Initialize git repository
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: Design Discovery Assistant plugin"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in:
   - **Repository name**: `design-discovery-assistant` (or any name you prefer)
   - **Description**: "Penpot plugin for AI-powered design discovery"
   - **Visibility**: Choose Public or Private
   - **DO NOT** check "Initialize with README" (you already have one)
4. Click **"Create repository"**

## Step 3: Connect and Push

GitHub will show you commands. Run these in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/design-discovery-assistant.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **"Source"**, select **"GitHub Actions"**
5. The workflow will automatically run and deploy your plugin

## Step 5: Get Your Plugin URL

After the workflow completes (check the "Actions" tab), your plugin will be available at:

```
https://YOUR_USERNAME.github.io/design-discovery-assistant/manifest.json
```

## Alternative: If design-mentor-ai is a subfolder

If `design-mentor-ai` is inside a larger repository (like your Thesis repo), you have two options:

### Option A: Separate Repository (Recommended)
- Create a new GitHub repo just for the plugin
- Follow the steps above

### Option B: Use the existing repository
- The workflow is already set up to handle `design-mentor-ai` as a subdirectory
- Just push to your existing repo
- Your manifest URL will be:
  ```
  https://YOUR_USERNAME.github.io/YOUR_REPO/design-mentor-ai/manifest.json
  ```
- You'll need to adjust the workflow path accordingly

## Troubleshooting

**"Repository not found" error:**
- Make sure you've created the repository on GitHub first
- Check that the URL matches your repository name

**"Permission denied" error:**
- You may need to authenticate. GitHub will prompt you
- Or use a Personal Access Token instead of password

**Workflow doesn't run:**
- Make sure GitHub Pages is set to "GitHub Actions" source
- Check that the workflow file is in `.github/workflows/deploy.yml`
- Verify you pushed to `main` or `master` branch

