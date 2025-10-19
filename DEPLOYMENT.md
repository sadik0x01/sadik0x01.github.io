# 🚀 Deployment Guide - GitHub Pages

This guide will help you deploy your portfolio website to GitHub Pages.

## 📋 Prerequisites

- Git installed on your machine
- A GitHub account
- Your code ready to push

## 🔧 Setup Steps

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Fill in the repository details:
   - **Repository name**: Choose a name (e.g., `my-portfolio`, `cybersecurity-portfolio`)
   - **Description**: Optional description of your site
   - **Public/Private**: Choose Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **Create repository**

### 2. Push Your Code to GitHub

Your code is already configured! Just run these commands in order:

```bash
# Stage all changes
git add .

# Commit your changes
git commit -m "Initial commit: Setup GitHub Pages deployment"

# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Replace** `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (tab at the top)
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**
5. Save the changes

### 4. Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 1-2 minutes)
4. Once completed, your site will be live!

## 🌐 Accessing Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

Example: `https://johndoe.github.io/my-portfolio/`

## 🔄 Updating Your Site

After the initial deployment, any time you push changes to the `main` branch, GitHub Actions will automatically rebuild and redeploy your site!

```bash
# Make your changes to the code
# Then commit and push:
git add .
git commit -m "Update: Description of changes"
git push
```

## 🎨 Using a Custom Domain (Optional)

If you have a custom domain:

1. Go to **Settings** → **Pages** in your GitHub repository
2. Under **Custom domain**, enter your domain name
3. Follow GitHub's instructions to configure your DNS settings
4. Update the `VITE_BASE_PATH` in `.github/workflows/deploy.yml` to `/`

## 🛠️ Build Configuration

The deployment uses:
- **Build Command**: `npm run build:static`
- **Output Directory**: `dist-static`
- **Base Path**: Automatically set to `/{repository-name}/`

### Manual Build Test

To test the build locally:

```bash
npm run build:static
npm run preview
```

Then open your browser to the URL shown in the terminal.

## ⚙️ Configuration Files

### `.github/workflows/deploy.yml`
- GitHub Actions workflow for automated deployment
- Triggers on push to `main` branch
- Can also be triggered manually from Actions tab

### `vite.config.ts`
- Configured with `base` path for GitHub Pages
- Uses `VITE_BASE_PATH` environment variable

### `.gitignore`
- Excludes `node_modules`, build outputs, and sensitive files

## 🐛 Troubleshooting

### Site shows 404 or blank page
- Check that the repository is **Public**
- Verify GitHub Pages is enabled in Settings
- Check that the workflow completed successfully in Actions tab
- Make sure the base path matches your repository name

### Workflow fails
- Check the Actions tab for error messages
- Ensure all dependencies are listed in `package.json`
- Make sure `package-lock.json` is committed

### Styles not loading
- This usually means the base path is incorrect
- Check the browser console for 404 errors
- Verify `VITE_BASE_PATH` in the workflow file

## 📞 Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## ✅ Checklist

- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages with GitHub Actions
- [ ] Workflow completed successfully
- [ ] Site is live and accessible
- [ ] All pages load correctly
- [ ] Images and styles load correctly

---

**Happy Deploying! 🎉**

