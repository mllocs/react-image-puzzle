/**
 * Shuffles the passed array and returns a new one
 *
 * @param  {Array} a
 * @return {Array}
 */
export function shuffle(a) {
  const b = a.slice();

  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }

  return b;
}
