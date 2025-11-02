# Quick Start Guide - TOEFL Flashcard App

##  Run Locally (2 minutes)

```bash
cd toefl-flashcard

# Install dependencies
npm install

# Start dev server
npm run dev

# Open browser to http://localhost:5173
```

That's it! The app will:
- Load 285 vocabulary items from JSON
- Display 3 deck cards (Prefixes, Roots, Suffixes)
- Allow you to practice with full progress tracking
- Save progress to browser localStorage automatically

---

##  Build for Production (30 seconds)

```bash
npm run build

# Output in dist/ directory ready for deployment
```

- Production JavaScript: 66.26 KB gzipped
- Production CSS: 3.02 KB gzipped
- Total load time: ~100ms on 4G

---

##  Deploy to Vercel (1 minute)

### Option 1: Using Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

### Option 2: Using GitHub

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"
6. Done! Auto-deploys on every push

---

##  What You Get

### Home Page
- 3 deck selection cards
- Progress bars showing mastered words
- Responsive grid (1-3 columns)
- Purple gradient background

### Practice Session
- Flip cards to reveal definitions
- Click "I knew this" (green) or "I didn't know" (red)
- Auto-advance to next card
- Real-time progress bars
- Words you don't know reappear later

### Progress Saved
- Automatically saves to browser localStorage
- Survives page refreshes
- Persists across sessions
- Per-deck tracking

---

##  Key Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Router setup |
| `src/pages/Home.jsx` | Deck selection |
| `src/pages/Practice.jsx` | Practice session |
| `src/components/Flashcard.jsx` | Card flip component |
| `src/hooks/useFlashcardSession.js` | Session logic & spaced repetition |
| `src/hooks/useLocalStorage.js` | Progress persistence |
| `src/data/words.json` | 285 vocabulary items (auto-generated) |
| `scripts/generateWords.mjs` | CSV to JSON converter |

---

##  Regenerate Data from CSV

If you update `References/contents_in_table/words.csv`:

```bash
node scripts/generateWords.mjs
```

This regenerates `src/data/words.json` with:
- 64 Prefixes
- 159 Roots
- 62 Suffixes

---

##  How It Works

### Card States
1. **New Word** (first encounter)
2. **Learning** (marked as "didn't know")
3. **Reviewing** (cycled back from learning)
4. **Mastered** (marked as "knew it")

### Spaced Repetition
- Unknown words reinsert after ~5 cards
- Keeps you focused on difficult words
- Automatically cycles through session

### Storage
```javascript
localStorage['toefl-progress'] = {
  "prefix-deck": {
    "mastered": ["a-ac-ad...", "a-an"],
    "learning": ["ab-abs"],
    "reviewing": []
  },
  // ... root-deck, suffix-deck
}
```

---

##  Customization

### Change Deck Names
Edit `src/utils/csvToJson.js` † change `"name"` field

### Update Colors
Edit `tailwind.config.js` † modify `purple-magoosh` colors

### Adjust Spaced Repetition
Edit `src/hooks/useFlashcardSession.js` † change `insertPosition` calculation

### Modify Examples Per Card
Edit `src/utils/csvToJson.js` † change `.slice(0, 4)` to different number

---

##  Testing Checklist

- [ ] Home page loads with 3 decks
- [ ] Click a deck card to start practice
- [ ] Card shows root/prefix/suffix on front
- [ ] Click card to flip and see definition
- [ ] Green button works and marks as known
- [ ] Red button works and marks as unknown
- [ ] Progress bars update in real-time
- [ ] Navigate back to home and return to same deck
- [ ] Progress persists after page refresh
- [ ] Test on mobile device (responsive)

---

##  Troubleshooting

| Issue | Solution |
|-------|----------|
| "Module not found" | Run `npm install` |
| Port 5173 already in use | Run on different port: `npm run dev -- --port 3000` |
| CSS not loading | Ensure Tailwind installed: `npm install tailwindcss@3.3.6` |
| Words.json missing | Run `node scripts/generateWords.mjs` |
| Progress not saving | Check localStorage enabled in browser |

---

##  Learn More

- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **Tailwind CSS**: https://tailwindcss.com
- **React Router**: https://reactrouter.com
- **Vercel**: https://vercel.com/docs

---

##  Pro Tips

1. **Batch Learning**: Practice 10-15 cards per session for best retention
2. **Daily Review**: Return to decks daily for spaced repetition to work
3. **Focus on "Didn't Know"**: These words will cycle back more frequently
4. **Mobile Practice**: App works great on phones during commute
5. **Complete Decks**: Try to master one deck before moving to next

---

**Built with React, Vite, and Tailwind CSS** 
