export const TICK = 350;
export const LENGTH = 25;

export function gaussian(i) {
  const variance = 0.6;
  const mean = 0.36;
  const shift = 2;
  const x = shift * 2 * i / (LENGTH - 1) - shift;
  return (
    Math.exp(-Math.pow(x, 2) / (2 * variance)) /
    Math.sqrt(2 * Math.PI * variance)
  );
}
