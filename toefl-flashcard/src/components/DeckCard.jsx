import { useNavigate } from 'react-router-dom';

export default function DeckCard({ deck, stats }) {
  const navigate = useNavigate();
  const masterPercent = stats ? (stats.mastered / deck.totalWords) * 100 : 0;

  return (
    <div
      onClick={() => navigate(`/practice/${deck.id}`)}
      className="bg-white rounded-lg p-8 cursor-pointer hover:shadow-lg transition-shadow h-full flex flex-col justify-between"
    >
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{deck.name}</h3>
        <p className="text-gray-600 mb-6">
          {stats?.mastered || 0} of {deck.totalWords} words mastered
        </p>

        <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
          <div
            className="bg-green-500 h-3 rounded-full transition-all"
            style={{ width: `${masterPercent}%` }}
          ></div>
        </div>
      </div>

      <button className="text-center py-3 text-gray-600 hover:text-gray-800 font-semibold transition-colors">
        Practice this deck →
      </button>
    </div>
  );
}
