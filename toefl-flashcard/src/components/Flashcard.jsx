import { useState } from 'react';

export default function Flashcard({ word, onKnown, onUnknown, index, total }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8 text-white text-center">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{word.root.split(',')[0]}</h2>
          <span className="text-gray-300">Word {index + 1} of {total}</span>
        </div>
        <p className="text-sm text-gray-300">NEW WORD</p>
      </div>

      <div
        onClick={() => setRevealed(!revealed)}
        className="bg-white rounded-lg p-12 mb-6 cursor-pointer hover:shadow-lg transition-shadow min-h-64 flex flex-col justify-center items-center"
      >
        {!revealed ? (
          <div className="text-center">
            <p className="text-5xl font-bold text-gray-800 mb-4">{word.word}</p>
            <p className="text-gray-500">Click to see definition and example</p>
          </div>
        ) : (
          <div className="w-full text-left">
            <p className="text-gray-700 mb-4">
              <span className="font-bold">{word.definition.split(':')[0]}:</span>
              {word.definition.split(':')[1]}
            </p>
            <p className="text-gray-600 italic">{word.example}</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={onUnknown}
          className="bg-red-100 text-red-600 py-4 px-6 rounded-lg font-semibold hover:bg-red-200 transition-colors"
        >
          ✕ I didn't know this word
        </button>
        <button
          onClick={onKnown}
          className="bg-green-100 text-green-600 py-4 px-6 rounded-lg font-semibold hover:bg-green-200 transition-colors"
        >
          ✓ I knew this word
        </button>
      </div>
    </div>
  );
}
