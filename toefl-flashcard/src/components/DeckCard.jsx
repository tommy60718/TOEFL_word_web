import { Link } from 'react-router-dom';

export default function DeckCard({ deck, masteredCount }) {
  const percentage = deck.totalWords > 0 
    ? Math.round((masteredCount / deck.totalWords) * 100) 
    : 0;

  return (
    <Link
      to={`/practice/${deck.id}`}
      className="card card-hover p-6 flex flex-col justify-between h-full min-h-64 border-2 border-transparent hover:border-green-accent-500 cursor-pointer"
    >
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {deck.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {masteredCount} of {deck.totalWords} words mastered
        </p>
        <div className="progress-bar mb-6">
          <div
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="text-xs text-gray-500 font-medium">
          {percentage}% Complete
        </div>
      </div>
      <div className="text-center text-green-accent-500 hover:text-green-accent-600 font-semibold transition-colors">
        Practice this deck →
      </div>
    </Link>
  );
}
