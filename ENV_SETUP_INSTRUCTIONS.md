# 🔐 Environment Variables Setup - Step by Step

## What is `.env.local`?

`.env.local` is a file that stores your secret keys and passwords. It's **NOT** committed to git (it's in `.gitignore`), so your secrets stay safe on your computer only.

---

## 📝 Exact Environment Variable Names

Here are the **exact names** you need to use (copy them exactly):

```
POSTGRES_URL=your-neon-connection-string-here
BLOB_READ_WRITE_TOKEN=your-vercel-blob-token-here
REDIS_URL=your-redis-connection-string-here
AUTH_SECRET=your-generated-secret-here
AI_GATEWAY_API_KEY=your-ai-gateway-key-here
```

---

## 🚀 How to Create Your `.env.local` File

### Option 1: Using Terminal (Recommended)

1. **Copy the template**:
   ```bash
   cp .env.local.template .env.local
   ```

2. **Open the file** in any text editor:
   ```bash
   # On Mac, you can use:
   open -a TextEdit .env.local
   
   # Or use VS Code:
   code .env.local
   
   # Or use nano (terminal editor):
   nano .env.local
   ```

3. **Replace the placeholder values** with your actual values (see below)

### Option 2: Manual Creation

1. Create a new file called `.env.local` in the root directory
2. Copy and paste the template below, then fill in your values

---

## 📋 What to Fill In

### 1. POSTGRES_URL
- **What you have**: Neon connection string
- **Format**: `postgresql://username:password@host/database?sslmode=require`
- **Example**:
  ```
  POSTGRES_URL=postgresql://user:pass123@ep-cool-name-123.us-east-2.aws.neon.tech/neondb?sslmode=require
  ```
- **Important**: Make sure it ends with `?sslmode=require`

### 2. BLOB_READ_WRITE_TOKEN
- **What you have**: Vercel Blob token
- **Format**: Usually starts with `vercel_blob_`
- **Example**:
  ```
  BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  ```

### 3. REDIS_URL
- **What you have**: Redis connection string
- **Format**: `redis://default:password@host:port` or `rediss://...`
- **Example**:
  ```
  REDIS_URL=redis://default:password123@ep-cool-redis-123.upstash.io:6379
  ```
  OR
  ```
  REDIS_URL=rediss://default:password123@ep-cool-redis-123.upstash.io:6379
  ```

### 4. AUTH_SECRET
- **Generate one**: Run `openssl rand -base64 32` in terminal
- **Example**:
  ```
  AUTH_SECRET=AbCdEfGhIjKlMnOpQrStUvWxYz1234567890+/==
  ```

### 5. AI_GATEWAY_API_KEY
- **Get from**: https://vercel.com/ai-gateway
- **Format**: Usually a long string
- **Example**:
  ```
  AI_GATEWAY_API_KEY=sk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  ```

---

## ✅ Example Complete `.env.local` File

Here's what your complete file should look like (with your actual values):

```bash
# ============================================
# SportTraid - Environment Variables
# ============================================

AUTH_SECRET=AbCdEfGhIjKlMnOpQrStUvWxYz1234567890+/==

AI_GATEWAY_API_KEY=sk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

POSTGRES_URL=postgresql://user:pass123@ep-cool-name-123.us-east-2.aws.neon.tech/neondb?sslmode=require

BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

REDIS_URL=redis://default:password123@ep-cool-redis-123.upstash.io:6379
```

---

## 🔍 How to Verify It's Set Up Correctly

After creating `.env.local`, check:

1. **File exists**: `ls -la .env.local` (should show the file)
2. **File is NOT in git**: `git status` (should NOT show `.env.local`)
3. **File has your values**: Open it and verify all 5 variables are filled in

---

## ⚠️ Important Notes

- ✅ **DO** use `.env.local` for local development
- ✅ **DO** keep it secret (never commit it)
- ✅ **DO** use the exact variable names shown above
- ❌ **DON'T** commit `.env.local` to git
- ❌ **DON'T** share your `.env.local` file with anyone
- ❌ **DON'T** use quotes around the values (unless the value itself contains spaces)

---

## 🚀 Next Steps

Once your `.env.local` is set up:

1. **Run database migrations**:
   ```bash
   pnpm db:migrate
   ```

2. **Start the dev server**:
   ```bash
   pnpm dev
   ```

3. **Visit**: http://localhost:3000

---

## 🆘 Troubleshooting

**"Cannot find module" or "Environment variable not found"**
- Make sure `.env.local` is in the root directory (same folder as `package.json`)
- Restart your dev server after creating/editing `.env.local`

**"Database connection failed"**
- Check that `POSTGRES_URL` includes `?sslmode=require` at the end
- Verify your Neon project is active (not paused)

**"Invalid token"**
- Double-check you copied the entire token (no extra spaces)
- Make sure there are no quotes around the values

