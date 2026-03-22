# 🚀 QUICK START - Deploy in 15 Minutes

## What I Need You To Do (Step by Step)

### ⚡ STEP 1: Create GitHub Repository (3 minutes)

1. Open https://github.com/new
2. Fill in:
   - Repository name: `dyf-website`
   - Make it **Public**
   - Click "Create repository"
3. **COPY THE URL** shown (looks like: `https://github.com/YOUR-USERNAME/dyf-website.git`)

---

### ⚡ STEP 2: Push Code to GitHub (2 minutes)

Open Terminal/Command Prompt in the `dyf-website` folder and run:

**On Mac/Linux:**
```bash
cd dyf-website
git init
git add .
git commit -m "Initial commit"
git remote add origin PASTE_YOUR_GITHUB_URL_HERE
git branch -M main
git push -u origin main
```

**On Windows (Command Prompt):**
```cmd
cd dyf-website
git init
git add .
git commit -m "Initial commit"
git remote add origin PASTE_YOUR_GITHUB_URL_HERE
git branch -M main
git push -u origin main
```

**Replace `PASTE_YOUR_GITHUB_URL_HERE` with the URL you copied!**

If you get an error about authentication:
- Use GitHub Desktop app instead (easier): https://desktop.github.com/
- Or create a Personal Access Token: https://github.com/settings/tokens

---

### ⚡ STEP 3: Deploy to Cloudflare (5 minutes)

1. **Go to:** https://pages.cloudflare.com/
2. Click "Sign up" (create free account)
3. Verify your email
4. Click "Create a project"
5. Click "Connect to Git"
6. Click "Connect GitHub"
7. Authorize Cloudflare
8. Select your `dyf-website` repository
9. Click "Begin setup"

**Build Settings (should auto-fill):**
- Framework preset: **Vite**
- Build command: `npm run build`
- Build output directory: `dist`

10. Click "Save and Deploy"
11. Wait 2-3 minutes
12. **DONE!** Your site is live!

---

### ⚡ STEP 4: Get Your Live URL

After deployment completes:
- You'll see: "Success! Your site is live!"
- Your URL: `https://dyf-website-xxx.pages.dev`
- Click the URL to view your live site!

---

## 🎉 That's It!

Your site is now:
- ✅ Live on the internet
- ✅ Free forever
- ✅ Unlimited bandwidth
- ✅ Automatic HTTPS
- ✅ Global CDN (fast everywhere)

---

## 🔄 To Update Your Site Later

Just push to GitHub:
```bash
git add .
git commit -m "Updated content"
git push
```

Cloudflare automatically rebuilds and deploys in 2-3 minutes!

---

## 📞 Need Help?

If you get stuck:
1. Check the detailed instructions in `CLOUDFLARE_SETUP.md`
2. Or let me know what error you're seeing

---

## 🌐 Add Custom Domain (Optional)

Want to use `dyf.org` instead of `.pages.dev`?

1. In Cloudflare dashboard, go to your project
2. Click "Custom domains"
3. Click "Set up a custom domain"
4. Enter your domain
5. Follow the DNS instructions

Takes 5-30 minutes for DNS to propagate.
