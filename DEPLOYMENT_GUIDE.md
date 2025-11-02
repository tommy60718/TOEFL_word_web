# TOEFL Vocabulary Flashcards - Deployment Guide

## Project Overview

TOEFL Vocabulary Flashcards is a React-based Single Page Application (SPA) built with:
- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Storage**: Browser localStorage
- **Data**: JSON-based vocabulary database

## Current Status

The MVP is fully functional and ready for deployment. All core features are implemented:
- 6 vocabulary decks by difficulty level
- Interactive flashcard system with flip animation
- Progress tracking with localStorage persistence
- Spaced repetition for unknown words
- Responsive design for mobile and desktop

## Project Location

```
/Users/linyangsen/.cursor/worktrees/TOEFL_word_web/OmnLV/toefl-flashcard/
```

## Deployment to Vercel

### Prerequisites
- Vercel account (free tier available)
- Node.js 20.19+ installed locally
- Git repository (optional but recommended)

### Step 1: Build the Project Locally

```bash
cd /Users/linyangsen/.cursor/worktrees/TOEFL_word_web/OmnLV/toefl-flashcard

# Install dependencies (if not already done)
npm install

# Build the production bundle
npm run build
```

Expected output: The `dist/` folder will be created with production-ready files.

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Navigate to project directory
cd /Users/linyangsen/.cursor/worktrees/TOEFL_word_web/OmnLV/toefl-flashcard

# Deploy
vercel
```

Follow the prompts:
1. Log in to your Vercel account (browser will open)
2. Create a new project or select existing
3. Set the root directory to current directory
4. Accept default settings (Vercel auto-detects Vite)
5. Deploy will start automatically

#### Option B: GitHub Integration (Recommended for Continuous Deployment)

1. Push code to GitHub:
```bash
cd /Users/linyangsen/.cursor/worktrees/TOEFL_word_web/OmnLV/toefl-flashcard
git init
git add .
git commit -m "Initial commit: TOEFL Flashcard MVP"
git remote add origin https://github.com/your-username/toefl-flashcard.git
git push -u origin main
```

2. Visit https://vercel.com/import
3. Select "GitHub" and authorize
4. Find and import your repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

### Step 3: Verify Deployment

After deployment completes:
1. Vercel will provide a live URL (e.g., `https://toefl-flashcard.vercel.app`)
2. Visit the URL to verify the app is running
3. Test:
   - Click on a vocabulary deck
   - Flip a flashcard
   - Mark words as known/unknown
   - Verify localStorage persistence (progress saves)

## Configuration Files

### vercel.json

The project includes a `vercel.json` file configured for SPA routing:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures all routes redirect to `index.html` for React Router to handle.

## Key Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app with routing setup |
| `src/pages/Home.jsx` | Deck selection page |
| `src/pages/Practice.jsx` | Flashcard practice session |
| `src/components/Flashcard.jsx` | Flashcard component |
| `src/components/DeckCard.jsx` | Deck selection card |
| `src/hooks/useLocalStorage.js` | localStorage persistence |
| `src/utils/progressTracker.js` | Progress tracking logic |
| `src/data/words.json` | Vocabulary database |
| `tailwind.config.js` | Tailwind CSS configuration |
| `vite.config.js` | Vite build configuration |

## Environment Variables

**None required** - This MVP uses:
- Browser localStorage for data persistence
- Static JSON file for vocabulary
- No backend services

## Performance Metrics

After deployment, check Vercel's analytics:
- **Bundle Size**: ~237 KB (gzipped: 75 KB)
- **Build Time**: ~1 minute
- **First Load**: <2 seconds typical

## Maintenance

### Updating Vocabulary Data

To add more words to the decks:

1. Edit `src/data/words.json`
2. Follow the existing structure:
```json
{
  "id": "word-id",
  "word": "vocabulary word",
  "root": "prefix/root/suffix",
  "meaning": "meaning of root",
  "definition": "part of speech: definition",
  "example": "Example sentence using the word."
}
```

3. Rebuild and deploy:
```bash
npm run build
vercel
```

### Monitoring

Vercel provides built-in monitoring:
- Visit your project's dashboard at https://vercel.com/projects
- Monitor build logs, analytics, and real-time errors
- Enable automatic deploy on git push (GitHub integration)

## Troubleshooting

### Build Fails

If the build fails during deployment:
1. Check Vercel build logs in the dashboard
2. Run `npm run build` locally to reproduce
3. Common issues:
   - Missing dependencies: Run `npm install`
   - Node version: Ensure Node 20.19+ (check in Vercel settings)

### App Shows Blank Page

1. Check browser console for errors (F12)
2. Verify `dist/index.html` is generated
3. Clear browser cache and localStorage if needed

### localStorage Not Working

- localStorage only works in secure contexts (HTTPS)
- Vercel provides HTTPS by default
- Check browser privacy settings

## Next Steps (Future Enhancements)

1. **User Authentication**: Add account creation for cross-device sync
2. **Backend Database**: Migrate from localStorage to cloud database
3. **Advanced Spaced Repetition**: Implement SM-2 algorithm
4. **Mobile App**: Create React Native version
5. **Premium Features**: Paid plans with more vocabulary sets

## Contact & Support

For deployment issues or questions about the app, refer to:
- Vercel Documentation: https://vercel.com/docs
- React Documentation: https://react.dev
- Vite Documentation: https://vite.dev
- Tailwind CSS Documentation: https://tailwindcss.com

## Deployment Checklist

- [x] App builds successfully locally
- [x] All routes work correctly
- [x] localStorage persists data
- [x] Responsive design verified
- [x] vercel.json configured for SPA routing
- [x] README.md updated
- [x] Production bundle optimized
- [ ] Deploy to Vercel
- [ ] Test live URL
- [ ] Configure custom domain (optional)

---

**Last Updated**: November 2025
**App Version**: 0.1.0 MVP
**Status**: Ready for Deployment
