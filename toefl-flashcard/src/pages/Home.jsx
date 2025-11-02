import { useEffect } from 'react';
import DeckCard from '../components/DeckCard';
import wordsData from '../data/words.json';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getProgressStats } from '../utils/progressTracker';

export default function Home() {
  const [deckProgress, setDeckProgress] = useLocalStorage('deckProgress', {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-purple-600 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-2">TOEFL Vocabulary Flashcards</h1>
        <p className="text-gray-200 mb-12">
          Master TOEFL vocabulary organized by prefix, root, and suffix
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wordsData.decks.map((deck) => {
            const progress = deckProgress[deck.id];
            const stats = progress ? getProgressStats(progress, deck.totalWords) : null;
            return (
              <DeckCard
                key={deck.id}
                deck={deck}
                stats={stats}
              />
            );
          })}
        </div>

        <div className="mt-12 text-center text-gray-300 text-sm">
          <p>Created to help you master TOEFL vocabulary efficiently</p>
        </div>
      </div>
    </div>
  );
}
