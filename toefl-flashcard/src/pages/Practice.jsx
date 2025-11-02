import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Flashcard from '../components/Flashcard';
import ProgressBar from '../components/ProgressBar';
import { useFlashcardSession } from '../hooks/useFlashcardSession';
import wordsData from '../data/words.json';

export default function Practice() {
  const { deckId } = useParams();
  const navigate = useNavigate();
  const [deck, setDeck] = useState(null);

  const {
    currentCard,
    isRevealed,
    setIsRevealed,
    isLoading,
    markAsKnown,
    markAsUnknown,
    stats,
  } = useFlashcardSession(deck);

  useEffect(() => {
    if (wordsData && wordsData.decks) {
      const foundDeck = wordsData.decks.find(d => d.id === deckId);
      setDeck(foundDeck);
    }
  }, [deckId]);

  if (!deck) {
    return (
      <div className="min-h-screen bg-purple-gradient flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-gradient pt-8 pb-12">
      {/* Header with back button */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/')}
            className="text-white text-2xl hover:opacity-80 transition flex items-center gap-2"
          >
            ← {deck.name}
          </button>
          <div className="text-white text-sm flex items-center gap-2">
            <span>🔀</span> Words you don't know will reappear later
          </div>
        </div>

        {/* Account prompt banner */}
        <div className="bg-green-500 text-white p-4 rounded-lg mb-8">
          <p className="text-center">
            You should <a href="#" className="underline hover:opacity-80">create an account</a> to save your progress. It only takes a minute!
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4">
        {/* Flashcard */}
        <div className="mb-12">
          <Flashcard
            card={currentCard}
            isRevealed={isRevealed}
            onCardClick={() => !isRevealed && setIsRevealed(true)}
            onKnown={markAsKnown}
            onUnknown={markAsUnknown}
            isLoading={isLoading}
          />
        </div>

        {/* Progress Bars */}
        <div className="space-y-4">
          <ProgressBar
            label="You have mastered"
            current={stats.mastered}
            total={stats.totalWords}
          />
          <ProgressBar
            label="You are reviewing"
            current={stats.reviewing}
            total={stats.totalWords}
          />
          <ProgressBar
            label="You are learning"
            current={stats.learning}
            total={stats.totalWords}
          />
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-white text-sm">
          <p>
            Have feedback about this deck? Please email{' '}
            <a href="mailto:support@example.com" className="underline hover:opacity-80">
              support@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
