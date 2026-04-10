import { describe, it, expect, beforeEach } from 'vitest';
import { ScoreCounter } from '../ScoreCounter.js';

describe('ScoreCounter', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('starts at zero', () => {
    const counter = new ScoreCounter('test-score');
    expect(counter.score).toBe(0);
    expect(counter.highScore).toBe(0);
  });

  it('increments the score', () => {
    const counter = new ScoreCounter('test-score');
    expect(counter.increment()).toBe(1);
    expect(counter.increment()).toBe(2);
    expect(counter.score).toBe(2);
  });

  it('tracks high score', () => {
    const counter = new ScoreCounter('test-score');
    counter.increment();
    counter.increment();
    counter.increment();
    expect(counter.highScore).toBe(3);
  });

  it('persists high score to localStorage', () => {
    const counter = new ScoreCounter('test-score');
    counter.increment();
    counter.increment();
    expect(localStorage.getItem('test-score')).toBe('2');
  });

  it('loads persisted high score on construction', () => {
    localStorage.setItem('test-score', '5');
    const counter = new ScoreCounter('test-score');
    expect(counter.highScore).toBe(5);
    expect(counter.score).toBe(0);
  });

  it('does not lower high score on new session', () => {
    localStorage.setItem('test-score', '10');
    const counter = new ScoreCounter('test-score');
    counter.increment();
    expect(counter.highScore).toBe(10);
    expect(localStorage.getItem('test-score')).toBe('10');
  });

  it('resets session score but preserves high score', () => {
    const counter = new ScoreCounter('test-score');
    counter.increment();
    counter.increment();
    counter.reset();
    expect(counter.score).toBe(0);
    expect(counter.highScore).toBe(2);
  });
});
