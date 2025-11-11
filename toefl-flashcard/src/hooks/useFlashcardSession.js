import { useState, useEffect, useCallback } from 'react';
import { useFirestoreProgress } from './useFirestoreProgress';

export function useFlashcardSession(deck) {
  const [progress, setProgress, , resetProgress] = useFirestoreProgress('all-progress', {});
  const [queue, setQueue] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [deckProgress, setDeckProgress] = useState({
    mastered: [],
    reviewing: [],
    learning: [],
  });

  // Initialize session
  useEffect(() => {
    if (!deck || !deck.words) return;

    const deckId = deck.id;
    const savedProgress = progress[deckId] || {
      mastered: [],
      reviewing: [],
      learning: [],
    };

    setDeckProgress(savedProgress);

    // Build queue: unknown/learning first, then new words
    const wordIds = deck.words.map(w => w.id);
    const unknown = wordIds.filter(
      id => !savedProgress.mastered.includes(id) &&
            !savedProgress.learning.includes(id) &&
            !savedProgress.reviewing.includes(id)
    );
    const reviewing = savedProgress.reviewing || [];
    const learning = savedProgress.learning || [];

    // Shuffle unknown words for variety
    const shuffled = [...unknown].sort(() => Math.random() - 0.5);
    const reviewingShuffled = [...reviewing].sort(() => Math.random() - 0.5);

    const newQueue = [...reviewingShuffled, ...learning, ...shuffled];
    setQueue(newQueue);
    setCurrentCardIndex(0);
    setIsRevealed(false);
  }, [deck, progress]);

  const getCurrentCard = useCallback(() => {
    if (!deck || !deck.words || queue.length === 0) return null;
    const currentWordId = queue[currentCardIndex];
    return deck.words.find(w => w.id === currentWordId);
  }, [deck, queue, currentCardIndex]);

  const markAsKnown = useCallback(() => {
    const deckId = deck.id;
    const currentWordId = queue[currentCardIndex];

    const newProgress = { ...deckProgress };

    // Remove from other states
    newProgress.learning = newProgress.learning.filter(id => id !== currentWordId);
    newProgress.reviewing = newProgress.reviewing.filter(id => id !== currentWordId);

    // Add to mastered
    if (!newProgress.mastered.includes(currentWordId)) {
      newProgress.mastered.push(currentWordId);
    }

    setDeckProgress(newProgress);
    setProgress(prev => ({
      ...prev,
      [deckId]: newProgress,
    }));

    // Advance to next card after delay
    setIsLoading(true);
    setTimeout(() => {
      advanceCard(currentWordId, 'mastered');
    }, 500);
  }, [deck, queue, currentCardIndex, deckProgress, setProgress]);

  const markAsUnknown = useCallback(() => {
    const deckId = deck.id;
    const currentWordId = queue[currentCardIndex];

    const newProgress = { ...deckProgress };

    // Move from mastered to learning/reviewing
    newProgress.mastered = newProgress.mastered.filter(id => id !== currentWordId);

    // Add to learning or reviewing
    if (!newProgress.learning.includes(currentWordId)) {
      newProgress.learning.push(currentWordId);
    }

    setDeckProgress(newProgress);
    setProgress(prev => ({
      ...prev,
      [deckId]: newProgress,
    }));

    // Advance to next card after delay
    setIsLoading(true);
    setTimeout(() => {
      advanceCard(currentWordId, 'unknown');
    }, 500);
  }, [deck, queue, currentCardIndex, deckProgress, setProgress]);

  const advanceCard = useCallback((currentWordId, result) => {
    let newQueue = [...queue];

    if (result === 'unknown') {
      // Reinsert unknown word after ~5 cards
      const insertPosition = Math.min(currentCardIndex + 5, newQueue.length);
      newQueue.splice(currentCardIndex, 1);
      newQueue.splice(insertPosition, 0, currentWordId);
    } else {
      // Remove mastered word from queue
      newQueue = newQueue.filter(id => id !== currentWordId);
    }

    setQueue(newQueue);
    setCurrentCardIndex(0);
    setIsRevealed(false);
    setIsLoading(false);
  }, [queue, currentCardIndex]);

  const stats = {
    totalWords: deck?.words?.length || 0,
    mastered: deckProgress.mastered.length,
    reviewing: deckProgress.reviewing.length,
    learning: deckProgress.learning.length,
    masteredPercent: Math.round((deckProgress.mastered.length / (deck?.words?.length || 1)) * 100),
    reviewingPercent: Math.round((deckProgress.reviewing.length / (deck?.words?.length || 1)) * 100),
    learningPercent: Math.round((deckProgress.learning.length / (deck?.words?.length || 1)) * 100),
  };

  return {
    currentCard: getCurrentCard(),
    isRevealed,
    setIsRevealed,
    isLoading,
    markAsKnown,
    markAsUnknown,
    stats,
    currentCardIndex,
    queueLength: queue.length,
    deckProgress,
    resetProgress,
  };
}
