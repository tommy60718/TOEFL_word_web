export function initializeDeckProgress(deckId, words) {
  return {
    deckId,
    mastered: [],
    reviewing: [],
    learning: [],
    currentIndex: 0,
    sessionWords: words.map(w => w.id),
  };
}

export function markWordAsKnown(progress, wordId) {
  return {
    ...progress,
    mastered: [...new Set([...progress.mastered, wordId])],
    reviewing: progress.reviewing.filter(w => w !== wordId),
    learning: progress.learning.filter(w => w !== wordId),
    currentIndex: progress.currentIndex + 1,
  };
}

export function markWordAsUnknown(progress, wordId) {
  // Add to learning and mark for reappearance later
  return {
    ...progress,
    learning: [...new Set([...progress.learning, wordId])],
    reviewing: [...progress.reviewing, wordId],
    mastered: progress.mastered.filter(w => w !== wordId),
    currentIndex: progress.currentIndex + 1,
  };
}

export function getCurrentWord(deck, progress) {
  if (progress.currentIndex >= progress.sessionWords.length) {
    return null;
  }
  const wordId = progress.sessionWords[progress.currentIndex];
  return deck.words.find(w => w.id === wordId);
}

export function getProgressStats(progress, totalWords) {
  return {
    mastered: progress.mastered.length,
    reviewing: progress.reviewing.length,
    learning: progress.learning.length,
    total: totalWords,
    masteredPercent: Math.round((progress.mastered.length / totalWords) * 100),
  };
}
