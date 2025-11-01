# 🚀 Complete GitHub Pages Deployment Guide

This guide will help you deploy this cybersecurity portfolio website to your own GitHub Pages from scratch.

## 📋 Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js installed (version 18 or higher)
- Basic familiarity with terminal/command line

## 🎯 Step-by-Step Deployment Process

### Step 1: Fork or Download the Repository

**Option A: Fork the Repository (Recommended)**
1. Go to the original repository: `https://github.com/zeehadzeeshan/testing`
2. Click the **"Fork"** button in the top right
3. This creates a copy in your GitHub account

**Option B: Download and Upload**
1. Download the project as a ZIP file
2. Extract it to your computer
3. Upload to a new GitHub repository

### Step 2: Create a New GitHub Repository

1. **Go to GitHub**: https://github.com/new
2. **Repository name**: Choose a name (e.g., `my-portfolio`, `cybersecurity-portfolio`, `my-website`)
3. **Description**: "My Cybersecurity Portfolio Website"
4. **Make it Public** ⚠️ (Required for free GitHub Pages)
5. **DO NOT** check any initialization options (README, .gitignore, license)
6. **Click "Create repository"**

### Step 3: Clone and Setup the Repository

```bash
# Clone your new repository (replace with your username and repo name)
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Navigate to the project folder
cd YOUR_REPO_NAME

# If you downloaded as ZIP, copy the files to this folder
# If you forked, the files should already be there
```

### Step 4: Install Dependencies

```bash
# Install all required packages
npm install
```

### Step 5: Update Configuration for Your Repository

**Update the GitHub Actions workflow:**

1. **Open the file**: `.github/workflows/deploy.yml`
2. **Find line 38** (the VITE_BASE_PATH line)
3. **Replace `/testing/` with your repository name**:

```yaml
env:
  # Set base path to repository name for GitHub Pages
  VITE_BASE_PATH: /YOUR_REPO_NAME/
```

**Example**: If your repository is named `my-portfolio`, change it to:
```yaml
VITE_BASE_PATH: /my-portfolio/
```

### Step 6: Test the Build Locally (Optional but Recommended)

```bash
# Test the build process
npm run build:static

# Preview the production build
npm run preview
```

This will open your browser to preview the site. Make sure everything looks correct.

### Step 7: Push to GitHub

```bash
# Add all files to git
git add .

# Commit the changes
git commit -m "Initial commit: Setup portfolio website for GitHub Pages"

# Push to GitHub
git push -u origin main
```

### Step 8: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab (at the top)
3. **Scroll down to "Pages"** in the left sidebar
4. **Under "Build and deployment"**:
   - **Source**: Select **"GitHub Actions"** ⚠️ (NOT "Deploy from a branch")
5. **Save the changes**

### Step 9: Wait for Deployment

1. **Go to "Actions" tab** in your repository
2. **Look for "Deploy to GitHub Pages" workflow**
3. **Wait for it to complete** (usually 1-2 minutes)
4. **Look for ✅ (green checkmark)** when done

### Step 10: Access Your Live Site

Your website will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example**: If your username is `johndoe` and repository is `my-portfolio`:
```
https://johndoe.github.io/my-portfolio/
```

## 🔧 Customization Options

### Change Repository Name
If you want to change your repository name later:
1. Go to repository **Settings** → **General**
2. Change the repository name
3. Update `VITE_BASE_PATH` in `.github/workflows/deploy.yml`
4. Push the changes

### Use a Custom Domain
If you have a custom domain:
1. Go to repository **Settings** → **Pages**
2. Enter your custom domain
3. Update `VITE_BASE_PATH` to `/` in `.github/workflows/deploy.yml`
4. Configure your DNS settings as instructed by GitHub

### Update Content
To update your website:
1. Make changes to the code
2. Commit and push:
```bash
git add .
git commit -m "Update: Description of changes"
git push
```
3. GitHub Actions will automatically redeploy your site

## 🎨 What's Included

Your portfolio includes:
- **Home Page**: Hero section with your profile
- **About Section**: Personal information
- **Skills Section**: Technical skills
- **Achievements**: Your accomplishments
- **Certifications**: Professional certifications
- **Security Tools**: Interactive tool cards
- **Writeups**: Security research content
- **Contact**: Contact information
- **Responsive Design**: Works on all devices
- **Dark/Light Mode**: Theme switching

## 🔍 Troubleshooting

### Site shows 404 error
- ✅ Make sure repository is **Public**
- ✅ Check GitHub Pages is set to **"GitHub Actions"**
- ✅ Verify the workflow completed successfully
- ✅ Check the base path matches your repository name

### Images not loading
- ✅ The profile image should work automatically
- ✅ All images are handled by Vite's asset system

### Navigation not working
- ✅ All navigation is configured for GitHub Pages
- ✅ Both desktop and mobile navigation should work

### Build fails
- ✅ Check the Actions tab for error details
- ✅ Make sure all files were committed
- ✅ Verify `package-lock.json` is included

## 📞 Need Help?

- **GitHub Pages Documentation**: https://docs.github.com/pages
- **Vite Deployment Guide**: https://vitejs.dev/guide/static-deploy.html
- **GitHub Actions Documentation**: https://docs.github.com/actions

## ✅ Final Checklist

- [ ] Created GitHub repository
- [ ] Cloned repository locally
- [ ] Installed dependencies (`npm install`)
- [ ] Updated `VITE_BASE_PATH` in workflow file
- [ ] Tested build locally (`npm run build:static`)
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages with GitHub Actions
- [ ] Workflow completed successfully
- [ ] Site is live and accessible
- [ ] All pages load correctly
- [ ] Images and styles load correctly
- [ ] Navigation works properly

## 🎉 Congratulations!

Your cybersecurity portfolio is now live on GitHub Pages! 

**Your live site**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

**Built with**: React + TypeScript + Vite + Tailwind CSS + shadcn/ui  
**Deployed on**: GitHub Pages with GitHub Actions  
**Features**: Responsive design, dark/light mode, interactive components
