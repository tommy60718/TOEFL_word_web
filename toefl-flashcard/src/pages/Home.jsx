import { useEffect, useState } from 'react';
import Header from '../components/Header';
import DeckCard from '../components/DeckCard';
import { useFirestoreProgress } from '../hooks/useFirestoreProgress';
import wordsData from '../data/words.json';

export default function Home() {
  const [progress] = useFirestoreProgress('all-progress', {});
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    if (wordsData && wordsData.decks) {
      setDecks(wordsData.decks);
    }
  }, []);

  return (
    <div className="min-h-screen bg-teal-blue-gradient pt-20 pb-12">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Master TOEFL Vocabulary
          </h1>
          <p className="text-white text-lg md:text-xl opacity-95 font-medium">
            Learn roots, prefixes, and suffixes to build your word power
          </p>
        </div>

        {/* Decks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {decks.map(deck => {
            const deckProgress = progress[deck.id] || { mastered: [] };
            const masteredCount = deckProgress.mastered.length;

            return (
              <DeckCard
                key={deck.id}
                deck={deck}
                masteredCount={masteredCount}
              />
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/20">
            <p className="text-sm md:text-base font-medium">
              Track your progress across <span className="font-bold">{decks.length}</span> vocabulary decks
            </p>
            <p className="text-xs md:text-sm opacity-75 mt-2">
              Start with any deck and master TOEFL word patterns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
