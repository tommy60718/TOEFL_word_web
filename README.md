# TOEFL Root/Prefix/Suffix Flashcard App

A modern, interactive web application for mastering TOEFL vocabulary through roots, prefixes, and suffixes. Built with React, Vite, and Tailwind CSS.

## Features

- **285 Vocabulary Items**: 64 prefixes, 159 roots, 62 suffixes
- **Interactive Flashcards**: Smooth flip animations on click
- **Spaced Repetition**: Automatically resurface words you don't know
- **Progress Tracking**: Real-time progress bars across three learning states
- **Auto-Save**: localStorage persistence (no account needed)
- **Responsive Design**: Beautiful purple gradient UI for all devices
- **Production Ready**: Optimized build (65KB gzipped)

## Quick Start

```bash
cd toefl-flashcard

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

## Deploy to Vercel

```bash
# Install Vercel CLI (first time only)
npm i -g vercel

# Login and deploy
vercel login
vercel --prod
```

Your app goes live at: `https://toefl-flashcard-[hash].vercel.app`

## Documentation

- **[Quick Start Guide](./docs/QUICK_START.md)** - Get running in 2 minutes
- **[User Guide](./docs/USER_GUIDE.md)** - Complete usage guide
- **[Implementation Summary](./docs/IMPLEMENTATION_SUMMARY.md)** - Technical deep dive
- **[Documentation Index](./docs/DOCUMENTATION_INDEX.md)** - Full documentation map
- **[Contributing](./CONTRIBUTING.md)** - How to contribute

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| React Router 6 | Client-side routing |
| Tailwind CSS 3 | Styling |
| localStorage | Progress persistence |
| Vercel | Deployment platform |

## Project Structure

```
TOEFL_word_web/
 toefl-flashcard/        # Main React app
�    src/
�   �    components/     # UI components
�   �    pages/          # Page components
�   �    hooks/          # Custom hooks
�   �    utils/          # Utilities
�   �    data/           # Vocabulary data (285 items)
�    dist/               # Production build
�    package.json        # Dependencies
 docs/                   # Documentation
 References/             # Original data & mockups
 README.md               # This file
```

## How It Works

### Card States
```
NEW �� LEARNING �� REVIEWING �� MASTERED
  ��                            �
  �
  (Unknown words cycle back after ~5 cards)
```

### Usage Flow

1. **Select a Deck** - Choose Prefixes, Roots, or Suffixes
2. **Practice** - Flip cards to see definitions
3. **Rate Knowledge** - Click "I knew this" (green) or "I didn't know" (red)
4. **Track Progress** - See real-time progress bars
5. **Auto-Advance** - Next card loads automatically

## Learning Tips

- **Practice 10-15 cards per session** for optimal retention
- **Return daily** to benefit from spaced repetition
- **Focus on red button words** - they'll cycle back
- **Complete one deck** before moving to next
- **Use mobile** - practice during commute

## Stats

- **285 Vocabulary Items** organized by type
- **Build Time**: ~715ms
- **Bundle Size**: 65.48 KB gzipped
- **Initial Load**: ~100ms on 4G
- **661 Lines** of clean, modular code

## Development

### Regenerate Data
```bash
node scripts/generateWords.mjs
```

### Build for Production
```bash
npm run build
# Output in dist/
```

### Deployment Options
1. **Vercel CLI** (recommended): `vercel --prod`
2. **GitHub Integration**: Push to GitHub �� Connect to Vercel
3. **Manual**: Upload `dist/` to any static host

## Testing Checklist

- [ ] Home page loads with 3 deck cards
- [ ] Click deck to enter practice mode
- [ ] Card flips to show definition
- [ ] Green/red buttons work correctly
- [ ] Progress bars update in real-time
- [ ] Back button returns to home
- [ ] Progress persists after refresh
- [ ] Works on mobile device

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 5173 in use | `npm run dev -- --port 3000` |
| CSS not loading | `npm install tailwindcss@3.3.6` |
| Build fails | Ensure Node.js 20.11.1+ |
| Progress not saving | Enable localStorage in browser |

See [User Guide](./docs/USER_GUIDE.md) for detailed troubleshooting.

## Contributing

Contributions welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

MIT License - see [LICENSE](./LICENSE) for details.

## Acknowledgments

- Inspired by [Magoosh TOEFL Flashcards](https://toefl.magoosh.com/flashcards)
- Built for TOEFL learners worldwide
- Data sourced from common TOEFL root/prefix/suffix vocabulary

---

**Ready to start learning?**

```bash
cd toefl-flashcard && npm install && npm run dev
```

Visit http://localhost:5173 and master those TOEFL words!

---

**Last Updated**: November 2024 | **Version**: 1.0.0 | **Status**: Production Ready
