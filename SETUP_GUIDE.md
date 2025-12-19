# 🚀 SportTraid Setup Guide

Welcome! This guide will walk you through setting up SportTraid step by step. Don't worry if you're new to this - I'll explain everything clearly!

## 📋 Prerequisites

Before you start, make sure you have:
- ✅ Node.js installed (v18 or higher) - [Download here](https://nodejs.org/)
- ✅ A GitHub account
- ✅ A Vercel account (free) - [Sign up here](https://vercel.com/signup)
- ✅ Basic terminal/command line knowledge

---

## 🎯 Step-by-Step Setup

### Step 1: Install Dependencies

The project dependencies are already installed! But if you need to reinstall:

```bash
pnpm install
```

---

### Step 2: Set Up Neon Database (PostgreSQL)

Neon is a serverless PostgreSQL database. Here's how to set it up:

1. **Go to Neon**: Visit [https://neon.tech](https://neon.tech) and sign up (it's free!)

2. **Create a New Project**:
   - Click "Create Project"
   - Name it `sporttraid` (or any name you like)
   - Choose a region close to you
   - Click "Create Project"

3. **Get Your Connection String**:
   - After creating the project, you'll see a connection string that looks like:
     ```
     postgresql://username:password@ep-xxx-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
     ```
   - **Copy this entire string** - you'll need it for your `.env.local` file

4. **Add to Environment Variables**:
   - Copy `.env.local.example` to `.env.local`:
     ```bash
     cp .env.local.example .env.local
     ```
   - Open `.env.local` and paste your connection string:
     ```
     POSTGRES_URL=your-connection-string-here
     ```

---

### Step 3: Set Up Vercel Blob Storage

Vercel Blob is used for storing files (like images, documents) that users upload:

1. **Go to Vercel Dashboard**: [https://vercel.com/dashboard](https://vercel.com/dashboard)

2. **Create a Blob Store**:
   - Click on your profile → "Storage" → "Create Database"
   - Select "Blob"
   - Name it `sporttraid-blob` (or any name)
   - Choose a region
   - Click "Create"

3. **Get Your Token**:
   - After creating, go to the Blob store settings
   - Find "Environment Variables" or "Tokens"
   - Copy the `BLOB_READ_WRITE_TOKEN`
   - Add it to your `.env.local`:
     ```
     BLOB_READ_WRITE_TOKEN=vercel_blob_xxx_xxx
     ```

---

### Step 4: Set Up Redis

Redis is used for caching and session management. You have two options:

#### Option A: Vercel Redis (Recommended for Vercel deployments)

1. **In Vercel Dashboard**:
   - Go to "Storage" → "Create Database"
   - Select "Redis"
   - Name it `sporttraid-redis`
   - Choose a region
   - Click "Create"

2. **Get Connection String**:
   - Copy the `REDIS_URL` from the Redis store settings
   - Add to `.env.local`:
     ```
     REDIS_URL=redis://default:password@host:port
     ```

#### Option B: Upstash Redis (Alternative for local dev)

1. **Go to Upstash**: [https://upstash.com](https://upstash.com)
2. **Sign up** (free tier available)
3. **Create a Redis Database**
4. **Copy the REST URL** and add to `.env.local`

---

### Step 5: Set Up AI Gateway API Key

For **local development**, you need an AI Gateway API key:

1. **Go to Vercel AI Gateway**: [https://vercel.com/ai-gateway](https://vercel.com/ai-gateway)

2. **Create an API Key**:
   - Click "Create API Key"
   - Name it `sporttraid-local`
   - Copy the key

3. **Add to `.env.local`**:
   ```
   AI_GATEWAY_API_KEY=your-api-key-here
   ```

> **Note**: If you're deploying to Vercel, you don't need this - it's handled automatically!

---

### Step 6: Generate Auth Secret

You need a secret key for authentication:

1. **Generate a secret**:
   - Visit: [https://generate-secret.vercel.app/32](https://generate-secret.vercel.app/32)
   - Or run in terminal: `openssl rand -base64 32`

2. **Add to `.env.local`**:
   ```
   AUTH_SECRET=your-generated-secret-here
   ```

---

### Step 7: Run Database Migrations

Now that your database is set up, create the tables:

```bash
pnpm db:migrate
```

This will create all the necessary database tables for your chatbot.

---

### Step 8: Start the Development Server

You're almost there! Start the app:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see SportTraid! 🎉

---

## 🚀 Deploying to Vercel

Once everything works locally, deploy to Vercel:

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial SportTraid setup"
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [https://vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository (`asimsiddiqui10/sporttriad`)
   - Vercel will detect it's a Next.js project

3. **Add Environment Variables**:
   - In Vercel project settings → "Environment Variables"
   - Add all the variables from your `.env.local`:
     - `AUTH_SECRET`
     - `POSTGRES_URL`
     - `BLOB_READ_WRITE_TOKEN`
     - `REDIS_URL`
     - (Don't add `AI_GATEWAY_API_KEY` - it's handled automatically on Vercel)

4. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete
   - Your app will be live at `https://sporttriad.vercel.app`!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Link your project
vercel link

# Deploy
vercel
```

---

## 🔧 Troubleshooting

### Database Connection Issues
- Make sure your `POSTGRES_URL` includes `?sslmode=require` at the end
- Check that your Neon project is active (not paused)

### Environment Variables Not Working
- Make sure your `.env.local` file is in the root directory
- Restart your dev server after changing `.env.local`
- For Vercel: Make sure you added variables in the dashboard

### Port Already in Use
- If port 3000 is busy, Next.js will use 3001 automatically
- Or kill the process: `lsof -ti:3000 | xargs kill`

---

## 📚 Next Steps

- ✅ Customize the logo (replace `app/favicon.ico` and opengraph images)
- ✅ Update the greeting message in `components/greeting.tsx`
- ✅ Customize the AI model in `lib/ai/models.ts`
- ✅ Add your own branding and styling

---

## 🆘 Need Help?

- Check the [Vercel AI Chatbot Docs](https://github.com/vercel/ai-chatbot)
- Visit [Vercel Documentation](https://vercel.com/docs)
- Check [Neon Documentation](https://neon.tech/docs)

---

**You're all set! Happy coding! 🎉**

