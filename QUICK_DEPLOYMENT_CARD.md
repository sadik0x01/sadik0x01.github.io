# 🚀 Quick Deployment Reference Card

## Essential Steps (5 minutes)

### 1. Create GitHub Repository
- Go to https://github.com/new
- Name: `my-portfolio` (or your choice)
- **Public** ✅ (required for free GitHub Pages)
- **Don't** initialize with README

### 2. Clone & Setup
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
npm install
```

### 3. Update Configuration
**Edit `.github/workflows/deploy.yml` line 38:**
```yaml
VITE_BASE_PATH: /YOUR_REPO_NAME/
```
*(Replace `YOUR_REPO_NAME` with your actual repository name)*

### 4. Push to GitHub
```bash
git add .
git commit -m "Setup portfolio for GitHub Pages"
git push -u origin main
```

### 5. Enable GitHub Pages
- Go to repository **Settings** → **Pages**
- Source: **GitHub Actions** ✅
- Wait for deployment (1-2 minutes)

### 6. Access Your Site
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## 🔧 Quick Fixes

**Repository name changed?**
- Update `VITE_BASE_PATH` in `.github/workflows/deploy.yml`
- Push changes

**Site not working?**
- Check repository is **Public**
- Verify GitHub Pages source is **GitHub Actions**
- Check Actions tab for errors

**Need custom domain?**
- Set domain in Settings → Pages
- Change `VITE_BASE_PATH` to `/`

## 📱 Test Your Site
- [ ] Home page loads
- [ ] Profile image shows
- [ ] Navigation works
- [ ] All sections scroll properly
- [ ] Security tools work
- [ ] Mobile responsive

---
**Time to deploy**: ~5 minutes  
**Your live site**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
