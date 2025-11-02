<<<<<<< Current (Your changes)
=======
# TOEFL Vocabulary Flashcards

An interactive flashcard web application to help users master TOEFL vocabulary words organized by prefix, root, and suffix.

## Features

- **Interactive Flashcards**: Flip cards to reveal definitions and example sentences
- **Progress Tracking**: Track mastered, learning, and reviewing words with progress bars
- **Spaced Repetition**: Unknown words automatically reappear for additional practice
- **Multiple Difficulty Levels**: 6 decks ranging from Easy to Hard
- **Persistent Storage**: Progress is saved locally in the browser using localStorage
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Clean UI**: Minimalist design with purple gradient theme

## Tech Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 7.1
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router DOM 6.x
- **Package Manager**: npm

## Project Structure

```
src/
├── components/
│   ├── Flashcard.jsx          # Main flashcard component
│   ├── DeckCard.jsx           # Deck selection card
│   └── ProgressBar.jsx        # Progress indicators
├── pages/
│   ├── Home.jsx               # Deck selection page
│   └── Practice.jsx           # Flashcard practice session
├── hooks/
│   └── useLocalStorage.js     # Custom localStorage hook
├── utils/
│   └── progressTracker.js     # Spaced repetition logic
├── data/
│   └── words.json             # Vocabulary data
├── App.jsx                    # Main app with routing
├── index.css                  # Global styles with Tailwind
└── main.jsx                   # Entry point
```

## Getting Started

### Prerequisites

- Node.js 20.19+ (or 22.12+)
- npm 10.7.0 or higher

### Installation

1. Clone the repository:
```bash
cd toefl-flashcard
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building

Build for production:
```bash
npm run build
```

The optimized bundle will be in the `dist/` folder.

Preview the production build locally:
```bash
npm run preview
```

## Deployment to Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to connect your project and deploy

### Method 2: GitHub Integration

1. Push your code to a GitHub repository
2. Go to https://vercel.com/import
3. Import your repository
4. Vercel will automatically detect Vite and configure the build

### Environment Setup

No environment variables are required for this MVP. The app uses browser localStorage for persistence.

## Usage

1. **Select a Deck**: Choose a vocabulary deck by difficulty level
2. **View Words**: Read the vocabulary word and root information
3. **Reveal Answer**: Click the card to reveal the definition and example
4. **Mark Progress**: 
   - "I knew this word" → Marks as mastered
   - "I didn't know this word" → Marks for review
5. **Track Progress**: Monitor your mastery across progress bars

## Data Format

Each vocabulary entry includes:
- **word**: The vocabulary word
- **root**: The prefix/root/suffix component
- **meaning**: Brief meaning of the root
- **definition**: Part of speech and definition
- **example**: Example sentence using the word

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- User authentication and cloud sync
- Advanced spaced repetition algorithm (SM-2)
- Word search and filtering
- Statistics dashboard
- Audio pronunciation
- Downloadable PDFs
- Mobile app

## Contributing

This is a personal project. For suggestions or issues, please reach out.

## License

This project is open source and available for personal and educational use.

## Created

November 2025
>>>>>>> Incoming (Background Agent changes)
