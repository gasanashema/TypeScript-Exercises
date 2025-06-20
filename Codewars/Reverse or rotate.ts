export function revRot(s: string, sz: number): string {
  if (sz <= 0 || s === "" || sz > s.length) return "";

  const chunks: string[] = [];
  for (let i = 0; i + sz <= s.length; i += sz) {
    const chunk = s.slice(i, i + sz);
    const sum = chunk.split('').reduce((acc, digit) => acc + Number(digit), 0);
    const transformed = sum % 2 === 0
      ? chunk.split('').reverse().join('')
      : chunk.slice(1) + chunk[0];
    chunks.push(transformed);
  }

  return chunks.join('');
}
