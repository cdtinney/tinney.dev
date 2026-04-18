export interface MultiTapOptions {
  taps: number;
  window?: number;
}

/**
 * Calls `callback` when the element receives `taps` clicks
 * within `window` milliseconds (default 600).
 */
export function onMultiTap(
  element: HTMLElement,
  callback: () => void,
  { taps, window: tapWindow = 600 }: MultiTapOptions,
): void {
  let count = 0;
  let timer: ReturnType<typeof setTimeout> | null = null;

  element.addEventListener('click', (e) => {
    e.preventDefault();
    count++;
    if (timer) clearTimeout(timer);

    if (count >= taps) {
      count = 0;
      callback();
    } else {
      timer = setTimeout(() => {
        count = 0;
      }, tapWindow);
    }
  });
}
