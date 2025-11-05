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
      <div className="min-h-screen bg-teal-blue-gradient flex items-center justify-center">
        <div className="text-white text-2xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-teal-blue-gradient pt-8 pb-12">
      {/* Header with back button */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/')}
            className="text-white text-lg font-semibold hover:opacity-80 transition-opacity flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10"
          >
            ← Back to Decks
          </button>
          <div className="text-white text-sm font-medium flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
            <span>🔀</span> Unknown words reappear later
          </div>
        </div>

        {/* Title Banner */}
        <div className="bg-white/15 backdrop-blur-sm border border-white/20 text-white p-6 rounded-card mb-8">
          <h1 className="text-2xl font-bold">
            {deck.name}
          </h1>
          <p className="text-white/80 text-sm mt-1">
            Master these vocabulary elements to boost your TOEFL score
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
        <div className="mt-12 text-center text-white/80 text-sm">
          <p>
            Have feedback about this deck? Please email{' '}
            <a href="mailto:support@example.com" className="underline hover:text-white transition-colors">
              support@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
