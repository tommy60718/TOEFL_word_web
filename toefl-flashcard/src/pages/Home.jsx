import { useEffect, useState } from 'react';
import Header from '../components/Header';
import DeckCard from '../components/DeckCard';
import { useLocalStorage } from '../hooks/useLocalStorage';
import wordsData from '../data/words.json';

export default function Home() {
  const [progress] = useLocalStorage('toefl-progress', {});
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    if (wordsData && wordsData.decks) {
      setDecks(wordsData.decks);
    }
  }, []);

  return (
    <div className="min-h-screen bg-purple-gradient pt-20 pb-12">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            TOEFL Root/Prefix/Suffix Flashcards
          </h1>
          <p className="text-white text-lg opacity-90">
            Master word building with roots, prefixes, and suffixes
          </p>
        </div>

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
        <div className="mt-16 text-center text-white opacity-75">
          <p className="text-sm">
            Track your progress across {decks.length} vocabulary decks
          </p>
        </div>
      </div>
    </div>
  );
}
