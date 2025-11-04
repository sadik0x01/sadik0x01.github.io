# 🔄 Complete Guide: Changing Your GitHub Repository

This guide will walk you through every step of changing your project's GitHub repository, even if you're a complete beginner.

---

## 📋 Table of Contents

1. [Understanding What We're Doing](#understanding-what-were-doing)
2. [Prerequisites](#prerequisites)
3. [Step-by-Step Instructions](#step-by-step-instructions)
4. [Verification](#verification)
5. [Troubleshooting](#troubleshooting)
6. [Important Notes](#important-notes)

---

## 🎯 Understanding What We're Doing

When you change your GitHub repository, you need to:

1. **Remove the old connection** - Tell Git to forget about the old repository
2. **Clear old credentials** - Remove saved login information for the old account
3. **Create a new repository** - Set up a fresh repository on GitHub
4. **Connect to the new repository** - Link your local code to the new GitHub repository
5. **Update configuration files** - Change repository name in deployment settings
6. **Push your code** - Upload everything to the new repository
7. **Enable GitHub Pages** - Set up automatic deployment

---

## ✅ Prerequisites

Before starting, make sure you have:

- ✅ Git installed on your computer (check with `git --version` in terminal)
- ✅ A GitHub account (the one you want to use for the new repository)
- ✅ All your code saved and committed locally
- ✅ Terminal/Command Prompt open (PowerShell on Windows, Terminal on Mac/Linux)

---

## 📝 Step-by-Step Instructions

### Step 1: Check Your Current Repository Status

First, let's see what remotes (repository connections) you currently have:

**Open your terminal/command prompt and navigate to your project folder:**

```bash
cd "C:\Users\ZISHAN\Desktop\MY MaiN WeBsiTe (1)"
```

**Check current remotes:**
```bash
git remote -v
```

This will show you something like:
```
portfolio       https://github.com/sadikmahmud01/portfolio1.git (fetch)
portfolio       https://github.com/sadikmahmud01/portfolio1.git (push)
```

**Check what branch you're on:**
```bash
git status
```

You should see something like `On branch main`. Make sure you're on the `main` branch.

---

### Step 2: Remove Old Remote Connections

**Remove the old remote (replace `portfolio` with your actual remote name):**

```bash
git remote remove portfolio
```

If you have multiple remotes, remove all of them:
```bash
git remote remove origin
git remote remove portfolio
git remote remove old-repo-name
```

**Verify it's removed:**
```bash
git remote -v
```

You should see no output (or only other remotes you want to keep).

---

### Step 3: Clear Old GitHub Credentials (Windows)

**On Windows, clear old GitHub credentials from Credential Manager:**

```bash
cmdkey /list | findstr github
```

This shows saved GitHub credentials. If you see any, delete them:

```bash
cmdkey /delete:"LegacyGeneric:target=git:https://github.com"
```

**On Mac/Linux, clear credentials:**
```bash
git credential-osxkeychain erase
host=github.com
protocol=https
```

(Press Enter twice after typing the above)

---

### Step 4: Update Git Configuration (Optional but Recommended)

**Set your Git username and email for this repository:**

```bash
git config user.name "YourGitHubUsername"
git config user.email "your-email@example.com"
```

Replace with your actual GitHub username and email.

**Check if it's set correctly:**
```bash
git config user.name
git config user.email
```

---

### Step 5: Create New GitHub Repository

1. **Go to GitHub:** https://github.com
2. **Sign in** to your account
3. **Click the "+" icon** in the top right corner
4. **Select "New repository"**
5. **Fill in the details:**
   - **Repository name:** Choose a name (e.g., `my-portfolio`, `website`, `portfolio-v2`)
   - **Description:** (Optional) Add a description
   - **Visibility:** 
     - **Public** - Free GitHub Pages hosting (recommended for portfolios)
     - **Private** - Requires GitHub Pro for Pages
   - **DO NOT** check:
     - ❌ Add a README file
     - ❌ Add .gitignore
     - ❌ Choose a license
6. **Click "Create repository"**

**After creation, GitHub will show you the repository URL. Copy it!**

It will look like: `https://github.com/yourusername/repository-name.git`

---

### Step 6: Add New Remote Connection

**Add your new repository as a remote:**

```bash
git remote add origin https://github.com/yourusername/repository-name.git
```

Replace `yourusername` and `repository-name` with your actual values.

**Example:**
```bash
git remote add origin https://github.com/sadikmahmud01/my-new-portfolio.git
```

**Verify it's added:**
```bash
git remote -v
```

You should see:
```
origin  https://github.com/yourusername/repository-name.git (fetch)
origin  https://github.com/yourusername/repository-name.git (push)
```

---

### Step 7: Update Deployment Configuration

**You need to update the base path in your deployment workflow file.**

The base path depends on your repository name:

**For Regular Repositories:**
- Repository: `my-portfolio` → URL: `https://username.github.io/my-portfolio/`
- Base path should be: `/my-portfolio/`

**For Root Domain Repositories (`username.github.io`):**
- Repository: `username.github.io` → URL: `https://username.github.io`
- Base path should be: `/`

**Find and edit this file:** `.github/workflows/deploy.yml`

**Look for this line (around line 37):**
```yaml
VITE_BASE_PATH: '/portfolio1/'
```

**Change it based on your repository:**
- Regular repo: `VITE_BASE_PATH: '/your-new-repo-name/'`
- Root domain repo: `VITE_BASE_PATH: '/'`

**If you have multiple remotes with different base paths:**
- Create a separate workflow file: `.github/workflows/deploy-root.yml` for root domain
- Keep `.github/workflows/deploy.yml` for regular repositories
- Each will use the appropriate base path

**Important:** 
- Include the forward slashes: `/` at the start and end for regular repos
- Use `/` only for root domain repos (`username.github.io`)
- If your repository name has spaces, use hyphens instead
- Example: Repository `my portfolio` → Use `/my-portfolio/`

**Save the file(s).**

---

### Step 8: Commit the Configuration Change

**Check what files changed:**
```bash
git status
```

**Add the updated workflow file:**
```bash
git add .github/workflows/deploy.yml
```

**Commit the change:**
```bash
git commit -m "Update repository name for GitHub Pages deployment"
```

---

### Step 9: Push Code to New Repository

**Push your code to the new repository:**

```bash
git push origin main
```

**If this is your first push and you get authentication prompt:**

1. **Username:** Enter your GitHub username
2. **Password:** Enter a **Personal Access Token** (not your GitHub password)

**To create a Personal Access Token:**
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "Portfolio Deployment")
4. Select scopes: Check `repo` (full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when pushing

**Alternative: Use SSH (if you have SSH keys set up):**

Change remote to SSH:
```bash
git remote set-url origin git@github.com:yourusername/repository-name.git
```

Then push:
```bash
git push origin main
```

---

### Step 10: Enable GitHub Pages

1. **Go to your new repository on GitHub**
2. **Click "Settings"** (top menu of your repository)
3. **Scroll down and click "Pages"** (left sidebar)
4. **Under "Source":**
   - Select **"GitHub Actions"** (NOT "Deploy from a branch")
5. **Click "Save"**

**Your site will be available at:**
```
https://yourusername.github.io/your-repo-name/
```

It may take a few minutes for the first deployment to complete.

---

### Step 11: Verify Deployment

1. **Check Actions tab:**
   - Go to your repository on GitHub
   - Click "Actions" tab
   - You should see a workflow run called "Deploy to GitHub Pages"
   - Wait for it to complete (green checkmark)

2. **Check your site:**
   - Visit: `https://yourusername.github.io/your-repo-name/`
   - Your portfolio should be live!

---

## 🔍 Verification

**Check everything is set up correctly:**

```bash
# Check remotes
git remote -v

# Check current branch
git branch

# Check git config
git config user.name
git config user.email

# Check recent commits
git log --oneline -5
```

**All should point to your new repository!**

---

## 🛠️ Troubleshooting

### Problem: "Permission denied" when pushing

**Solution:**
- Clear old credentials (Step 3)
- Make sure you're logged into the correct GitHub account
- Use a Personal Access Token instead of password
- Verify the repository URL is correct

### Problem: "Repository not found"

**Solution:**
- Make sure the repository exists on GitHub
- Check the URL is correct (case-sensitive!)
- Verify you have access to the repository
- Make sure the repository is created (not just a draft)

### Problem: Site shows 404 or blank page

**Solution:**
- Check the base path in `.github/workflows/deploy.yml` matches your repo name
- Make sure GitHub Pages is enabled (Settings → Pages → Source: GitHub Actions)
- Check the Actions tab for build errors
- Wait a few minutes for deployment to complete

### Problem: Assets/images not loading

**Solution:**
- Verify the base path includes forward slashes: `/repo-name/`
- Check that all asset paths use relative paths
- Clear browser cache
- Check browser console for 404 errors

### Problem: "Remote origin already exists"

**Solution:**
```bash
# Remove existing origin
git remote remove origin

# Add new origin
git remote add origin https://github.com/yourusername/repo-name.git
```

### Problem: Authentication keeps failing

**Solution:**
1. Clear all GitHub credentials:
   ```bash
   cmdkey /list | findstr github
   cmdkey /delete:"LegacyGeneric:target=git:https://github.com"
   ```
2. Use SSH instead of HTTPS:
   ```bash
   git remote set-url origin git@github.com:username/repo.git
   ```
3. Or use GitHub CLI: `gh auth login`

---

## ⚠️ Important Notes

### Base Path Rules

**For GitHub Pages with repository name in URL:**
- Repository: `my-portfolio` → Base path: `/my-portfolio/`
- Always include leading and trailing slashes
- Use hyphens, not spaces

**For Custom Domain:**
- If you use a custom domain (e.g., `www.yourname.com`), set base path to `/`

**For Root GitHub Pages (username.github.io):**
- Repository must be named: `username.github.io` (exactly your GitHub username)
- Base path should be: `/`
- Your site will be available at: `https://username.github.io` (no `/repo-name/` path)
- This is special - GitHub automatically serves this at the root domain
- You can have both a regular repo (e.g., `portfolio1`) and a root domain repo (`username.github.io`)
- Use separate workflow files for each (see "Multiple Remotes" section below)

### Repository Naming Best Practices

- ✅ Use lowercase letters
- ✅ Use hyphens instead of spaces: `my-portfolio` not `my portfolio`
- ✅ Keep it short and descriptive
- ✅ Avoid special characters
- ❌ Don't use spaces
- ❌ Don't use underscores (GitHub Pages prefers hyphens)

### What Happens to Old Repository?

- **Your old repository still exists** on GitHub
- **Your local code is unchanged** - you just changed where you push it
- **Old repository's GitHub Pages** will continue working until you disable it
- **You can delete the old repository** if you no longer need it:
  - Go to old repository → Settings → Scroll down → Delete repository

### Keeping Multiple Remotes

If you want to push to multiple repositories:

```bash
# Add multiple remotes with different names
git remote add origin https://github.com/user1/repo1.git
git remote add backup https://github.com/user2/repo2.git
git remote add github-io https://github.com/username/username.github.io.git

# Push to specific remote
git push origin main
git push backup main
git push github-io main
```

**When adding a remote that already has content:**

If the remote repository already has files, you'll need to merge first:

```bash
# Fetch the remote content
git fetch remote-name

# Pull and merge (allows unrelated histories)
git pull remote-name main --allow-unrelated-histories

# Then push
git push remote-name main
```

**Multiple Workflows for Different Deployments:**

If you have multiple remotes with different base paths (e.g., one with `/repo-name/` and one with `/`), you can create separate workflow files:

- `.github/workflows/deploy.yml` - For regular repositories (e.g., `portfolio1`)
  - Uses base path: `/portfolio1/`
- `.github/workflows/deploy-root.yml` - For `username.github.io` repositories
  - Uses base path: `/`

Each workflow will automatically run when you push to the corresponding repository.

---

## 📚 Quick Reference Commands

```bash
# Check remotes
git remote -v

# Remove remote
git remote remove origin

# Add remote
git remote add origin https://github.com/username/repo.git

# Change remote URL
git remote set-url origin https://github.com/username/new-repo.git

# Clear Windows credentials
cmdkey /delete:"LegacyGeneric:target=git:https://github.com"

# Push to new repository
git push origin main

# Check status
git status

# View recent commits
git log --oneline -5
```

---

## ✅ Checklist

Before finishing, make sure:

- [ ] Old remote is removed
- [ ] Old credentials are cleared
- [ ] New repository is created on GitHub
- [ ] New remote is added and verified
- [ ] `.github/workflows/deploy.yml` has correct base path
- [ ] Configuration changes are committed
- [ ] Code is pushed to new repository
- [ ] GitHub Pages is enabled (Settings → Pages → Source: GitHub Actions)
- [ ] Deployment workflow is running successfully
- [ ] Site is accessible at the new URL

---

## 🎉 You're Done!

Your project is now connected to the new GitHub repository and will automatically deploy to GitHub Pages whenever you push changes to the `main` branch.

**Remember:** Every time you change repositories, you need to:
1. Update the remote connection
2. Update the base path in `.github/workflows/deploy.yml`
3. Push your code
4. Enable GitHub Pages on the new repository

---

## 📞 Need Help?

If you encounter issues not covered here:

1. Check GitHub Actions logs (Actions tab in your repository)
2. Check browser console for errors
3. Verify all URLs are correct
4. Make sure you're using the correct GitHub account
5. Check GitHub status: https://www.githubstatus.com/

---

**Last Updated:** This guide is based on your current project setup. Update dates as needed.

**Your Current Setup:**
- Repository: `portfolio1`
- Base Path: `/portfolio1/`
- Deployment: GitHub Actions → GitHub Pages

