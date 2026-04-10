/**
 * Tracks a session score and a persistent high score in localStorage.
 */
export class ScoreCounter {
  /**
   * @param {string} storageKey - localStorage key for persisting the high score
   */
  constructor(storageKey) {
    this.score = 0;
    this.highScore = 0;
    this.storageKey = storageKey;

    try {
      this.highScore = parseInt(localStorage.getItem(storageKey) || '0', 10) || 0;
    } catch {
      // localStorage unavailable
    }
  }

  /** Increment the score by 1. Updates high score if exceeded. Returns the new score. */
  increment() {
    this.score++;
    if (this.score > this.highScore) {
      this.highScore = this.score;
      try {
        localStorage.setItem(this.storageKey, String(this.highScore));
      } catch {
        // localStorage unavailable
      }
    }
    return this.score;
  }

  /** Reset the session score to 0. High score is preserved. */
  reset() {
    this.score = 0;
  }
}
