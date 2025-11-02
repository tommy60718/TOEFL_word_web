# TOEFL Root/Prefix/Suffix Flashcard App

A modern web application for learning TOEFL vocabulary through interactive flashcards organized by roots, prefixes, and suffixes.

## Features

- **Interactive Flashcards**: Flip cards to reveal definitions and examples
- **Spaced Repetition**: Automatically resurface words you don't know
- **Progress Tracking**: Monitor mastery across three vocabulary categories
- **Responsive Design**: Beautiful purple gradient UI optimized for all devices
- **Local Storage**: Progress saved automatically in browser
- **No Account Required**: Fully functional without authentication

## Data

The app includes **285 vocabulary items** organized into three decks:
- **Prefixes**: 64 word elements
- **Roots**: 159 word elements
- **Suffixes**: 62 word elements

Source data derived from `References/contents_in_table/words.csv`

## Tech Stack

- **Frontend**: React 18 + Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v3
- **State**: React Hooks + Custom Hooks
- **Storage**: Browser localStorage
- **Build**: Vite
- **Deployment**: Vercel

## Installation

```bash
# Navigate to project directory
cd toefl-flashcard

# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:5173
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── DeckCard.jsx    # Deck selection card
│   ├── ProgressBar.jsx # Progress visualization
│   └── Flashcard.jsx   # Interactive flashcard with flip
├── pages/              # Page components
│   ├── Home.jsx        # Deck selection view
│   └── Practice.jsx    # Flashcard practice session
├── hooks/              # Custom React hooks
│   ├── useLocalStorage.js      # Browser storage hook
│   └── useFlashcardSession.js  # Session logic & spaced repetition
├── utils/              # Utility functions
│   └── csvToJson.js    # CSV parsing and transformation
├── data/               # Generated data
│   └── words.json      # Transformed flashcard vocabulary
└── App.jsx             # Router setup
```

## How It Works

### Deck Selection (Home Page)
1. View all 3 vocabulary decks
2. See progress for each deck
3. Click any card to start practice

### Practice Session
1. Flashcards appear face-up with the word/root/suffix
2. Click to flip and reveal definition and examples
3. Mark as "I knew this" (green button) or "I didn't know" (red button)
4. Unknown words reappear after ~5 cards (spaced repetition)
5. Progress bars update in real-time

### Progress Storage
- All progress saved to browser's localStorage
- Survives page refreshes and browser restarts
- Three states tracked per deck: Mastered, Reviewing, Learning

## Development

### Generate Words from CSV

```bash
node scripts/generateWords.mjs
```

This converts `References/contents_in_table/words.csv` into `src/data/words.json`.

### Build for Production

```bash
npm run build
```

Output files in `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

### Option 1: CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel --prod
```

### Option 2: GitHub Integration

1. Push code to GitHub
2. Connect repository in Vercel dashboard
3. Automatic deployments on push

## UX Features

- **Auto-advance**: Next card loads automatically after answer
- **Loading State**: "Loading next word..." feedback
- **Smooth Transitions**: Card flip and progress bar animations
- **Responsive Grid**: Adapts from 1 to 3 columns based on screen size
- **Dark Mode**: Purple gradient background reduces eye strain
- **Inline Buttons**: Answer buttons integrated into card
- **Real-time Progress**: Stats update immediately

## Spaced Repetition Algorithm

- Unknown words are reinserted ~5 positions ahead in queue
- Reviewing words cycle back until mastered
- Mastered words removed from session queue
- Words shuffled for variety within each state category

## Browser Support

- Chrome/Edge: Latest
- Firefox: Latest
- Safari: Latest
- Mobile: Full responsive support

## Future Enhancements

- User authentication & sync
- Backend database for cross-device progress
- Advanced spaced repetition (SM-2 algorithm)
- Word search and filtering
- Statistics dashboard
- Custom deck creation
- Audio pronunciation

## License

Educational use - TOEFL vocabulary preparation

## Support

For questions or feedback, please reach out to support@example.com
