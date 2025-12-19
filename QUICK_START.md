# ⚡ Quick Start Guide

## 🎯 Fastest Way to Get Running

### 1. Copy Environment Template
```bash
cp .env.local.template .env.local
```

### 2. Fill in Your `.env.local` File

You need to set up these services (all have free tiers):

#### ✅ Neon Database (PostgreSQL)
1. Go to [neon.tech](https://neon.tech) → Sign up
2. Create project → Copy connection string
3. Add to `.env.local`: `POSTGRES_URL=your-connection-string`

#### ✅ Vercel Blob Storage
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard) → Storage → Create Blob
2. Copy the token
3. Add to `.env.local`: `BLOB_READ_WRITE_TOKEN=your-token`

#### ✅ Redis
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard) → Storage → Create Redis
2. Copy connection string
3. Add to `.env.local`: `REDIS_URL=your-redis-url`

#### ✅ Auth Secret
```bash
openssl rand -base64 32
```
Add to `.env.local`: `AUTH_SECRET=your-secret`

#### ✅ AI Gateway (for local dev)
1. Go to [vercel.com/ai-gateway](https://vercel.com/ai-gateway)
2. Create API key
3. Add to `.env.local`: `AI_GATEWAY_API_KEY=your-key`

### 3. Run Migrations
```bash
pnpm db:migrate
```

### 4. Start Dev Server
```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) 🎉

---

## 📖 Need More Details?

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for comprehensive instructions.

