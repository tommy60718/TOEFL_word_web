import { useEffect } from 'react';

export default function DeckListModal({ isOpen, onClose, deck, deckProgress }) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !deck) return null;

  // Determine status of each word
  const getWordStatus = (wordId) => {
    if (deckProgress.mastered.includes(wordId)) return 'Mastered';
    if (deckProgress.learning.includes(wordId) || deckProgress.reviewing?.includes(wordId)) return 'Learning';
    return 'New';
  };

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Mastered':
        return 'bg-green-100 text-green-800';
      case 'Learning':
        return 'bg-blue-100 text-blue-800';
      case 'New':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-200"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full md:w-[60%] h-[60vh] md:h-[70vh] max-w-5xl flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{deck.name}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {deck.totalWords} vocabulary {deck.totalWords === 1 ? 'item' : 'items'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Word List */}
          <div className="flex-1 overflow-y-auto">
            <div className="divide-y divide-gray-200">
              {deck.words && deck.words.map((word, index) => {
                const status = getWordStatus(word.id);
                const statusColor = getStatusColor(status);

                return (
                  <div
                    key={word.id}
                    className={`px-6 py-4 flex items-start justify-between gap-4 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    } hover:bg-gray-50`}
                  >
                    {/* Word & Definition */}
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-base leading-tight">
                        {word.root}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {word.meaning}
                      </p>
                    </div>

                    {/* Status Badge */}
                    <div className="flex-shrink-0">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${statusColor}`}
                      >
                        {status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Stats */}
          <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between text-sm gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-700">
                  <span className="font-semibold text-gray-900">{deckProgress.mastered.length}</span> Mastered
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-gray-700">
                  <span className="font-semibold text-gray-900">{(deckProgress.learning?.length || 0) + (deckProgress.reviewing?.length || 0)}</span> Learning
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-gray-400" />
                <span className="text-gray-700">
                  <span className="font-semibold text-gray-900">
                    {deck.words.length - deckProgress.mastered.length - (deckProgress.learning?.length || 0) - (deckProgress.reviewing?.length || 0)}
                  </span> New
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

