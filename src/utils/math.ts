/** Returns a random number in [min, max). */
export function randomBetween(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

/** Returns a random phase angle in [0, 2π). */
export function randomStartPhase(): number {
  return Math.random() * Math.PI * 2;
}

/** Returns a random diagonal angle, avoiding near-horizontal/vertical trajectories. */
export function randomDiagonalAngle(): number {
  const steepness = randomBetween(0.2, 1);
  const quarterTurn = (steepness * Math.PI) / 2;
  const mirrored = Math.random() < 0.5 ? -quarterTurn : quarterTurn;
  return Math.random() < 0.5 ? mirrored + Math.PI : mirrored;
}

/** Computes a sine-wave offset: amplitude * sin(phase * frequency). */
export function sineOffset(phase: number, frequency: number, amplitude: number): number {
  return Math.sin(phase * frequency) * amplitude;
}

/** Clamps value to [min, max] and reverses velocity on contact. */
export function bounceAtBounds(
  value: number,
  velocity: number,
  min: number,
  max: number,
): [number, number] {
  if (value <= min) return [min, Math.abs(velocity)];
  if (value >= max) return [max, -Math.abs(velocity)];
  return [value, velocity];
}

/** Returns a random Y position within a viewport-relative band. */
export function randomYInBand(minFraction: number, maxFraction: number): number {
  return randomBetween(window.innerHeight * minFraction, window.innerHeight * maxFraction);
}
