import { useState, useEffect } from 'react';

export default function Flashcard({
  card,
  isRevealed,
  onCardClick,
  onKnown,
  onUnknown,
  isLoading,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(isRevealed);
  }, [isRevealed]);

  if (!card) {
    return (
      <div className="bg-white rounded-lg shadow-2xl p-8 text-center h-96 flex items-center justify-center">
        <p className="text-gray-600 text-xl">No words to practice</p>
      </div>
    );
  }

  const isNewWord = true; // In a full implementation, track word state

  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
      {/* Card Body - Front */}
      {!isFlipped ? (
        <div
          onClick={onCardClick}
          className="p-12 min-h-96 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition"
        >
          {isNewWord && (
            <span className="bg-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              NEW WORD
            </span>
          )}
          <h2 className="text-6xl font-bold text-gray-900 text-center mb-12">
            {card.root}
          </h2>
          <p className="text-gray-600 text-lg text-center hover:text-gray-900 transition">
            Click to see definition and example →
          </p>
        </div>
      ) : (
        /* Card Body - Back */
        <div className="p-12 min-h-96 flex flex-col justify-between">
          <div>
            {isNewWord && (
              <span className="bg-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block">
                NEW WORD
              </span>
            )}
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {card.root}
            </h2>
            <p className="text-lg text-gray-800 mb-4">
              <strong>{card.type}:</strong> {card.meaning}
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700 italic">
                <strong>Examples:</strong> {card.examples.join(', ')}
              </p>
            </div>
          </div>

          {/* Answer Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={onKnown}
              disabled={isLoading}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold text-white transition ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600 active:bg-green-700'
              }`}
            >
              {isLoading ? 'Loading next word...' : '✓ I knew this word'}
            </button>
            <button
              onClick={onUnknown}
              disabled={isLoading}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold text-white transition ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-400 hover:bg-red-500 active:bg-red-600'
              }`}
            >
              {isLoading ? 'Loading next word...' : '✗ I didn\'t know this word'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
