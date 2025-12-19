# 🔐 Vercel Environment Variables Setup

## ✅ Environment Variables to Set in Vercel

When you deploy to Vercel, you need to add these **4 environment variables** in your Vercel project settings.

**Note**: You do **NOT** need to add `AI_GATEWAY_API_KEY` - Vercel handles this automatically!

---

## 📋 Exact Variables to Add

Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

Add these **4 variables**:

### 1. AUTH_SECRET
```
Name: AUTH_SECRET
Value: 51ce2926db5bbf00b8114de3e548f5b8
```

### 2. POSTGRES_URL
```
Name: POSTGRES_URL
Value: postgresql://neondb_owner:npg_DyY7ju5ILVqH@ep-royal-salad-ah66vkg8-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

### 3. BLOB_READ_WRITE_TOKEN
```
Name: BLOB_READ_WRITE_TOKEN
Value: vercel_blob_rw_FqVKlLfnQGGXgPh4_wDl07stUiYci42QNdFdYmnkWGNFjjf
```

### 4. REDIS_URL
```
Name: REDIS_URL
Value: redis://default:miAOuxN68ABMzBJJpttVhlwfrGN396xx@redis-13561.c263.us-east-1-2.ec2.cloud.redislabs.com:13561
```

---

## 🚀 Step-by-Step Instructions

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard

2. **Select Your Project** (or create new one by importing from GitHub)

3. **Go to Settings**: Click on "Settings" tab

4. **Click "Environment Variables"**: In the left sidebar

5. **Add Each Variable**:
   - Click "Add New"
   - Enter the **Name** (exactly as shown above)
   - Enter the **Value** (copy from above)
   - Select environments: **Production**, **Preview**, and **Development** (check all three)
   - Click "Save"

6. **Repeat** for all 4 variables

7. **Redeploy**: After adding variables, trigger a new deployment

---

## ⚠️ Important Notes

- ✅ **DO** add all 4 variables
- ✅ **DO** select all environments (Production, Preview, Development)
- ✅ **DO** copy the values exactly (no extra spaces or quotes)
- ❌ **DON'T** add `AI_GATEWAY_API_KEY` - Vercel handles this automatically!
- ❌ **DON'T** add quotes around the values in Vercel

---

## 🔍 Quick Copy-Paste Checklist

Copy these one by one into Vercel:

```
AUTH_SECRET=51ce2926db5bbf00b8114de3e548f5b8

POSTGRES_URL=postgresql://neondb_owner:npg_DyY7ju5ILVqH@ep-royal-salad-ah66vkg8-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

BLOB_READ_WRITE_TOKEN=vercel_blob_rw_FqVKlLfnQGGXgPh4_wDl07stUiYci42QNdFdYmnkWGNFjjf

REDIS_URL=redis://default:miAOuxN68ABMzBJJpttVhlwfrGN396xx@redis-13561.c263.us-east-1-2.ec2.cloud.redislabs.com:13561
```

---

## ✅ Verification

After adding all variables:
1. Go to "Deployments" tab
2. Click "Redeploy" on the latest deployment
3. Check the build logs - should complete successfully
4. Visit your deployed site - should work!

---

**That's it! Your Vercel deployment is ready! 🎉**

