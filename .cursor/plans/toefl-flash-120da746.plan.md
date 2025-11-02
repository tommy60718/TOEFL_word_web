<!-- 120da746-2f2d-44fc-bf1c-65e3e564b068 612e1942-73f3-4fea-a752-6f1412cdd879 -->
# TOEFL Flashcard MVP Plan

## High-Level User Flow

1. **Landing Page** - Display deck selection (Common Words, Easy Words, Medium Words 1-3, Hard Words)
2. **Flashcard View** - Show word → Click to reveal definition/example → Mark "I knew it" or "I didn't know it"
3. **Progress Tracking** - Track mastered/reviewing/learning words with progress bars
4. **Spaced Repetition** - Words marked as unknown reappear later in the session

## High-Level Technical Architecture

**Frontend (React + Vite)**

- `/src/data/words.json` - Converted vocabulary data from CSV
- `/src/components/` - DeckSelection, Flashcard, ProgressBar components
- `/src/hooks/useLocalStorage.js` - Custom hook for progress persistence
- `/src/utils/flashcardLogic.js` - Spaced repetition algorithm

**Data Structure**

```javascript
{
  "decks": [
    {
      "id": "common-words",
      "name": "Common Words",
      "totalWords": 51,
      "words": [
        {
          "word": "indicate",
          "root": "dic, dict",
          "meaning": "to show, to point out",
          "definition": "verb: to be a sign of, to show",
          "example": "The way you speak and act indicates your emotions."
        }
      ]
    }
  ]
}
```

**localStorage Schema**

```javascript
{
  "deckProgress": {
    "common-words": {
      "mastered": ["indicate", "approach"],
      "reviewing": [],
      "learning": ["word1", "word2"],
      "unknown": ["word3"]
    }
  }
}
```

## Implementation Steps

### 1. Project Setup

- Initialize Vite + React project
- Install dependencies: `react-router-dom` for routing
- Configure Tailwind CSS for styling (purple theme matching mockups)
- Set up project structure with folders: components, hooks, utils, data

### 2. Data Preparation

- Convert `words.csv` to `src/data/words.json` with proper structure
- Group words by difficulty levels (Common, Easy, Medium 1-3, Hard)
- Ensure each word has: word, root, meaning, definition, example

### 3. Core Components

- `DeckSelection.jsx` - Grid of deck cards with progress display
- `Flashcard.jsx` - Word display with flip animation, definition reveal
- `ProgressBar.jsx` - Visual progress indicators (mastered/reviewing/learning)
- `FlashcardSession.jsx` - Main session container with state management

### 4. Progress Tracking

- `useLocalStorage` hook for reading/writing progress
- Track word states: new → learning → reviewing → mastered
- Implement spaced repetition: unknown words cycle back after 5 cards

### 5. Styling

- Purple gradient background (#5b21b6 to #7c3aed)
- White card containers with clean typography
- Green button for "I knew this word"
- Pink/red button for "I didn't know this word"
- Progress bars with visual fill animation

### 6. Deployment

- Build production bundle: `npm run build`
- Deploy to Vercel via CLI or GitHub integration
- Configure `vercel.json` for SPA routing

## Key Files to Create

- `src/App.jsx` - Main routing logic
- `src/pages/Home.jsx` - Deck selection page
- `src/pages/Practice.jsx` - Flashcard practice page
- `src/components/Flashcard.jsx`
- `src/components/DeckCard.jsx`
- `src/hooks/useLocalStorage.js`
- `src/hooks/useFlashcardSession.js`
- `src/utils/progressTracker.js`
- `src/data/words.json`
- `tailwind.config.js`

## MVP Scope (What's Included)

- 6 decks based on difficulty
- Basic spaced repetition (unknown words reappear)
- localStorage progress tracking
- Clean, mobile-responsive UI
- Deploy to Vercel

## MVP Scope (What's Excluded)

- User authentication
- Backend/database
- Advanced spaced repetition algorithms
- Word search/filtering
- Statistics dashboard
- Cross-device sync

### To-dos

- [ ] Initialize Vite + React project with Tailwind CSS and folder structure
- [ ] Convert words.csv to words.json with proper deck structure
- [ ] Create DeckSelection and DeckCard components for home page
- [ ] Create Flashcard component with flip animation and answer buttons
- [ ] Build localStorage hook and progress tracking logic
- [ ] Create FlashcardSession container with spaced repetition logic
- [ ] Apply purple theme styling and responsive design to all components
- [ ] Build production bundle and deploy to Vercel