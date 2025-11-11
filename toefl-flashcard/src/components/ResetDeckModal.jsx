import { useState, useEffect } from 'react';

export default function ResetDeckModal({ isOpen, onClose, deckName, onConfirm }) {
  const [confirmText, setConfirmText] = useState('');
  const [error, setError] = useState('');

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setConfirmText('');
      setError('');
    }
  }, [isOpen]);

  // Handle escape key
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

  const handleConfirm = () => {
    const normalizedInput = confirmText.toLowerCase().trim();
    const normalizedTarget = 'reset this deck'.toLowerCase();

    if (normalizedInput === normalizedTarget) {
      onConfirm();
      onClose();
    } else {
      setError('Text does not match. Please try again.');
    }
  };

  const isButtonDisabled = confirmText.toLowerCase().trim() !== 'reset this deck'.toLowerCase();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-200"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white">Reset Deck</h2>
            <p className="text-red-100 text-sm mt-1">This action cannot be undone</p>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            <p className="text-gray-700 mb-4">
              Are you sure you want to reset all progress for <strong>{deckName}</strong>?
            </p>
            <p className="text-gray-600 text-sm mb-6">
              To confirm, type "<strong>reset this deck</strong>" below:
            </p>

            {/* Input */}
            <input
              type="text"
              value={confirmText}
              onChange={(e) => {
                setConfirmText(e.target.value);
                setError('');
              }}
              placeholder="Type confirmation text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              autoFocus
            />

            {/* Error Message */}
            {error && (
              <p className="text-red-600 text-sm mt-2">{error}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="bg-gray-50 px-6 py-4 flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={isButtonDisabled}
              className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                isButtonDisabled
                  ? 'bg-red-300 text-white cursor-not-allowed'
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

