# Deployment Guide

## Recommended: Cloudflare Pages

### Why Cloudflare Pages?
- **FREE forever** with unlimited bandwidth
- 330+ global CDN locations
- Automatic SSL certificates
- No surprise bills or bandwidth overages
- Perfect for nonprofits

### Deployment Steps

1. **Create Cloudflare Account**
   - Go to https://pages.cloudflare.com/
   - Sign up (free)

2. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Connect to Cloudflare Pages**
   - Click "Create a project"
   - Connect your GitHub account
   - Select the repository
   - Configure build settings:
     - **Framework preset:** Vite
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
     - **Node version:** 18 or higher

4. **Deploy**
   - Click "Save and Deploy"
   - Wait 2-3 minutes for first build
   - Your site will be live at `your-project.pages.dev`

5. **Add Custom Domain**
   - Go to "Custom domains" tab
   - Add `dyf.org` or your domain
   - Follow DNS configuration instructions
   - SSL certificate auto-generated

### Automatic Deployments
Every push to `main` branch automatically deploys to production.

---

## Alternative: Vercel

### Deployment Steps

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings

3. **Deploy**
   - Click "Deploy"
   - Live in ~2 minutes

### Custom Domain
- Go to Project Settings → Domains
- Add your domain
- Update DNS records as instructed

---

## Alternative: Netlify

### Deployment Steps

1. **Create Netlify Account**
   - Go to https://netlify.com
   - Sign up with GitHub

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Deploy**
   - Click "Deploy site"

### Custom Domain
- Go to Site settings → Domain management
- Add custom domain
- Configure DNS

---

## Environment Variables (if needed)

If you need to add API keys or environment variables:

### Cloudflare Pages
- Go to Settings → Environment variables
- Add variables (prefix with `VITE_` for Vite)

### Vercel
- Go to Settings → Environment Variables
- Add variables

### Netlify
- Go to Site settings → Environment variables
- Add variables

---

## Performance Optimization

The site is already optimized:
- ✅ Vite production build (minified, tree-shaken)
- ✅ Lazy loading images
- ✅ CSS optimized
- ✅ No external dependencies (except React)

---

## Monitoring

### Cloudflare Pages
- Built-in analytics in dashboard
- Real-time traffic monitoring
- No additional setup needed

### Vercel
- Analytics available on Pro plan ($20/month)
- Or use Google Analytics (free)

### Netlify
- Analytics available on Pro plan ($19/month)
- Or use Google Analytics (free)

---

## Troubleshooting

### Build fails
- Check Node version (should be 18+)
- Verify `package.json` dependencies
- Check build logs for errors

### Site not loading
- Verify build output directory is `dist`
- Check browser console for errors
- Verify custom domain DNS settings

### Images not loading
- Ensure image URLs are correct
- Check CORS settings if using external images

---

## Cost Comparison

| Platform | Free Tier | Bandwidth | Custom Domain | SSL |
|----------|-----------|-----------|---------------|-----|
| **Cloudflare Pages** | ✅ Forever | ✅ Unlimited | ✅ Free | ✅ Free |
| **Vercel** | ✅ Yes | 100GB/month | ✅ Free | ✅ Free |
| **Netlify** | ✅ Yes | 100GB/month | ✅ Free | ✅ Free |

**Recommendation:** Cloudflare Pages for unlimited bandwidth (critical for nonprofits during fundraising campaigns).
