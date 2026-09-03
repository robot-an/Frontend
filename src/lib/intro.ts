/** Shared easing/stagger so hero copy reveals in a consistent cascade. */
export const EASE_REVEAL: [number, number, number, number] = [0.16, 1, 0.3, 1];

const REVEAL_BASE_DELAY = 0.15;
const REVEAL_STEP = 0.12;

export function revealTransition(step: number, extra = 0) {
  return {
    delay: REVEAL_BASE_DELAY + step * REVEAL_STEP + extra,
    duration: 0.65,
    ease: EASE_REVEAL,
  };
}
