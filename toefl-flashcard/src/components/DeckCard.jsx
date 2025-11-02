import { Link } from 'react-router-dom';

export default function DeckCard({ deck, masteredCount }) {
  const percentage = deck.totalWords > 0 
    ? Math.round((masteredCount / deck.totalWords) * 100) 
    : 0;

  return (
    <Link
      to={`/practice/${deck.id}`}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105 cursor-pointer flex flex-col justify-between h-full min-h-64"
    >
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {deck.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {masteredCount} of {deck.totalWords} words mastered
        </p>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-6">
          <div
            className="bg-green-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      <div className="text-center text-gray-700 hover:text-gray-900 font-medium">
        Practice this deck →
      </div>
    </Link>
  );
}
