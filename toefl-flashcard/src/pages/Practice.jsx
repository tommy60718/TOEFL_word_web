import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Flashcard from '../components/Flashcard';
import wordsData from '../data/words.json';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
  initializeDeckProgress,
  markWordAsKnown,
  markWordAsUnknown,
  getCurrentWord,
  getProgressStats,
} from '../utils/progressTracker';

export default function Practice() {
  const { deckId } = useParams();
  const navigate = useNavigate();
  const [deckProgress, setDeckProgress] = useLocalStorage('deckProgress', {});

  const deck = wordsData.decks.find((d) => d.id === deckId);
  const currentProgress = deckProgress[deckId] || initializeDeckProgress(deckId, deck.words);
  const [progress, setProgress] = useState(currentProgress);
  const [sessionEnded, setSessionEnded] = useState(false);

  useEffect(() => {
    setDeckProgress((prev) => ({
      ...prev,
      [deckId]: progress,
    }));
  }, [progress, deckId, setDeckProgress]);

  if (!deck) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-purple-600 flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-xl mb-4">Deck not found</p>
          <Link to="/" className="text-blue-300 hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const currentWord = getCurrentWord(deck, progress);
  const stats = getProgressStats(progress, deck.totalWords);

  const handleKnown = () => {
    const newProgress = markWordAsKnown(progress, currentWord.id);
    setProgress(newProgress);
    if (newProgress.currentIndex >= progress.sessionWords.length) {
      setSessionEnded(true);
    }
  };

  const handleUnknown = () => {
    const newProgress = markWordAsUnknown(progress, currentWord.id);
    setProgress(newProgress);
    if (newProgress.currentIndex >= progress.sessionWords.length) {
      setSessionEnded(true);
    }
  };

  if (sessionEnded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-purple-600 p-8">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-8">Session Complete!</h1>

          <div className="bg-white bg-opacity-10 rounded-lg p-8 mb-8 space-y-6">
            <div>
              <p className="text-gray-300 text-lg mb-2">Words Mastered</p>
              <p className="text-5xl font-bold text-green-400">{stats.mastered}</p>
            </div>

            <div className="border-t border-white border-opacity-20 pt-6">
              <p className="text-gray-300 text-lg mb-2">Still Learning</p>
              <p className="text-3xl font-bold text-yellow-400">{stats.learning}</p>
            </div>

            <div className="border-t border-white border-opacity-20 pt-6">
              <p className="text-gray-300 text-lg mb-2">Progress</p>
              <p className="text-3xl font-bold text-blue-400">{stats.masteredPercent}%</p>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => {
                setProgress(initializeDeckProgress(deckId, deck.words));
                setSessionEnded(false);
              }}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Practice Again
            </button>
            <Link to="/" className="block bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-purple-600 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="text-white hover:text-gray-200 font-semibold">
            ← {deck.name}
          </Link>
          <p className="text-gray-300 text-sm">
            Words you don't know will reappear later
          </p>
        </div>

        <div className="bg-green-400 text-white p-4 rounded-lg mb-8">
          <p>You should <a href="#" className="underline font-semibold">create an account</a> to save your progress. It only takes a minute!</p>
        </div>

        {currentWord && (
          <>
            <Flashcard
              word={currentWord}
              onKnown={handleKnown}
              onUnknown={handleUnknown}
              index={progress.currentIndex}
              total={deck.totalWords}
            />

            <div className="mt-12 space-y-4 text-white">
              <div className="flex items-center justify-between">
                <span>You have mastered {stats.mastered} out of {stats.total} words</span>
                <div className="w-1/2 bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all"
                    style={{ width: `${stats.masteredPercent}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span>You are reviewing {stats.reviewing} out of {stats.total} words</span>
                <div className="w-1/2 bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full transition-all"
                    style={{ width: `${(stats.reviewing / stats.total) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span>You are learning {stats.learning} out of {stats.total} words</span>
                <div className="w-1/2 bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${(stats.learning / stats.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
