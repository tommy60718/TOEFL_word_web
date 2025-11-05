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
      <div className="card flex items-center justify-center h-96 shadow-md">
        <p className="text-gray-600 text-xl font-medium">No words to practice</p>
      </div>
    );
  }

  const isNewWord = true;

  return (
    <div className="card shadow-xl overflow-hidden transition-all duration-300">
      {/* Card Body - Front */}
      {!isFlipped ? (
        <div
          onClick={onCardClick}
          className="p-12 min-h-96 flex flex-col items-center justify-center cursor-pointer hover:bg-green-50 transition-colors duration-200"
        >
          {isNewWord && (
            <span className="badge badge-success mb-6">
              NEW WORD
            </span>
          )}
          <h2 className="text-6xl font-bold text-transparent bg-gradient-to-r from-green-accent-500 to-blue-accent-400 bg-clip-text text-center mb-12">
            {card.root}
          </h2>
          <p className="text-gray-600 text-lg text-center hover:text-green-accent-500 transition-colors duration-200">
            Click to see definition and example →
          </p>
        </div>
      ) : (
        /* Card Body - Back */
        <div className="p-12 min-h-96 flex flex-col justify-between bg-gradient-to-br from-gray-50 to-white">
          <div>
            {isNewWord && (
              <span className="badge badge-success mb-6 inline-block">
                NEW WORD
              </span>
            )}
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {card.root}
            </h2>
            <p className="text-lg text-gray-800 mb-4 font-medium">
              <span className="text-green-accent-600">{card.type}:</span> {card.meaning}
            </p>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border-l-4 border-green-accent-500">
              <p className="text-gray-700">
                <strong className="text-green-accent-600">Examples:</strong> {card.examples.join(', ')}
              </p>
            </div>
          </div>

          {/* Answer Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={onKnown}
              disabled={isLoading}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed opacity-60'
                  : 'bg-gradient-to-r from-green-accent-500 to-green-accent-600 hover:shadow-lg hover:-translate-y-1 active:scale-95'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="spinner border-2" style={{ borderTopColor: 'white' }}></span>
                  Loading next word...
                </span>
              ) : (
                '✓ I knew this word'
              )}
            </button>
            <button
              onClick={onUnknown}
              disabled={isLoading}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed opacity-60'
                  : 'bg-gradient-to-r from-blue-accent-400 to-blue-accent-600 hover:shadow-lg hover:-translate-y-1 active:scale-95'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="spinner border-2" style={{ borderTopColor: 'white' }}></span>
                  Loading next word...
                </span>
              ) : (
                '✗ I didn\'t know this word'
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
