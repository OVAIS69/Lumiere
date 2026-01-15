# Deployment Guide for Lumière Jewellery

This project is Vercel-ready. Follow these steps to deploy:

## 1. Environment Variables
You need to configure the following environment variables in your Vercel project settings:

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/lumiere-jewellery
```

## 2. Connect Repository
1. Push this code to GitHub/GitLab.
2. Import the repository in Vercel.
3. Vercel will automatically detect the Next.js framework.

## 3. Build Settings
- **Framework Preset**: Next.js
- **Build Command**: `next build` (default)
- **Output Directory**: `.next` (default)

## 4. Post-Deployment
After deployment, if you are using a real database, ensure your IP whitelist in MongoDB Atlas includes Vercel's IP addresses (or allow access from anywhere `0.0.0.0/0` for initial testing).
