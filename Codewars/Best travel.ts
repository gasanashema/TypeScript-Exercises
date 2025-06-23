export function chooseBestSum(t: number, k: number, ls: number[]): number | null {
  function combinations(arr: number[], k: number): number[][] {
    if (k === 0) return [[]];
    if (arr.length < k) return [];
    return arr.flatMap((v, i) =>
      combinations(arr.slice(i + 1), k - 1).map(c => [v, ...c])
    );
  }

  const sums = combinations(ls, k)
    .map(c => c.reduce((a, b) => a + b, 0))
    .filter(s => s <= t);

  return sums.length ? Math.max(...sums) : null;
}
