# Deploy to Vercel - Step by Step

Your app is ready to deploy! Here are two ways to deploy to Vercel:

##  Option 1: Using Vercel CLI (Recommended - 2 minutes)

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
This opens your browser to authenticate. Log in with your GitHub/Google account.

### Step 3: Deploy
```bash
cd /Users/linyangsen/Desktop/side\ projects/TOEFL_word_web/toefl-flashcard
vercel --prod
```

### Step 4: Follow prompts
```
? Set up and deploy "~/toefl-flashcard"? [Y/n] y
? Which scope do you want to deploy to? [your-username]
? Link to existing project? [y/N] n
? What's your project's name? toefl-flashcard
? In which directory is your code located? ./
? Want to modify these settings? [y/N] n
```

###  Done!
Your app is now live at a URL like: `https://toefl-flashcard-xyz.vercel.app`

---

## Option 2: Using GitHub (Auto-deploy - 5 minutes)

### Step 1: Push to GitHub
```bash
cd /Users/linyangsen/Desktop/side\ projects/TOEFL_word_web

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: TOEFL flashcard app"

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/toefl-flashcard.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Select your repository `toefl-flashcard`
4. Click "Deploy"

###  Auto-deploy enabled!
Every time you push to GitHub, Vercel auto-deploys. You can also set preview deployments for pull requests.

---

## ç Verify Deployment

After deployment, check:

```bash
# Visit your live URL (shown in terminal)
# Should see:
# - 3 deck cards (Prefixes, Roots, Suffixes)
# - Purple gradient background
# - Click to enter practice mode
# - All interactive features working
```

---

##  What Gets Deployed

The `vercel.json` config automatically:
- Builds from source: `npm run build`
- Serves from: `dist/` directory
- Handles SPA routing (all routes Üí index.html)
- Caches assets efficiently

---

##  Environment Variables (Optional)

If you add environment variables later:

1. Go to **Project Settings** Üí **Environment Variables**
2. Add your variables
3. Redeploy: `vercel --prod`

Currently none are needed - the app works with just localStorage!

---

##  Redeploy After Changes

### Using CLI:
```bash
# Make changes, commit, then:
vercel --prod
```

### Using GitHub:
```bash
git add .
git commit -m "Update description"
git push origin main
# Auto-deploys automatically!
```

---

## à Monitor Your Deployment

### Vercel Dashboard
- Visit: https://vercel.com/dashboard
- See deployment history
- View analytics
- Check performance metrics

### Build Logs
```bash
# View last deployment
vercel ls

# View logs for specific deployment
vercel logs [deployment-url]
```

---

##  Troubleshooting

| Issue | Solution |
|-------|----------|
| "Build failed" | Check build command in vercel.json; ensure `npm run build` works locally |
| "404 on routes" | Already fixed in vercel.json with SPA rewrites |
| "CSS not loading" | Clear browser cache or do hard refresh (Cmd+Shift+R) |
| "Progress not saving" | localStorage works in all modern browsers |
| "Stuck on loading" | Check browser console (F12) for errors |

---

## í° Pro Tips

1. **Custom Domain**: Add your own domain in Vercel project settings
2. **Preview URLs**: Every git push creates a preview URL for testing
3. **Rollback**: Easily revert to previous deployment in dashboard
4. **Analytics**: Enable Web Analytics in Vercel dashboard to track usage
5. **Feedback**: Share deploy URL with friends for feedback

---

##  Test After Deployment

Once live, test:
- [ ] Home page loads (3 decks visible)
- [ ] Click deck card Üí enters practice mode
- [ ] Click word Üí flips to show definition
- [ ] Green button works (marks as known)
- [ ] Red button works (marks as unknown)
- [ ] Progress bars update
- [ ] Back button returns to home
- [ ] Progress persists after refresh
- [ ] Works on mobile device

---

## â You're Live!

Your TOEFL flashcard app is now available on the internet for you, friends, and potential users to access.

**Share the link and start learning!** 

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- React Router with Vercel: https://vercel.com/guides/nextjs-build-configuration#vercel-json
- Contact Vercel Support: support@vercel.com
