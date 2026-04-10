export class ScoreCounter {
  score = 0;
  highScore = 0;
  private storageKey: string;

  constructor(storageKey: string) {
    this.storageKey = storageKey;
    try {
      this.highScore = Number.parseInt(localStorage.getItem(storageKey) || '0', 10) || 0;
    } catch {
      console.debug('Unable to load high score');
    }
  }

  increment(): number {
    this.score++;
    if (this.score > this.highScore) {
      this.highScore = this.score;
      try {
        localStorage.setItem(this.storageKey, String(this.highScore));
      } catch {
        console.debug('Unable to save high score');
      }
    }
    return this.score;
  }

  reset(): void {
    this.score = 0;
  }
}
