export function foldArray(array: number[], runs: number): number[] {
  if (array.length === 1 || array.length === 0) return array;

  let res = array;
  for (let i = 0; i < runs; i++) {
    const temp = res;
    if (res.length % 2 === 0) {
      for (let x = 0; x < res.length / 2; x++) {
        res[x] = temp[x] + temp.reverse()[x];
      }
    } else {
      for (let x = 0; x < (res.length - 1) / 2; x++) {
        res[x] = temp[x] + temp.reverse()[x];
      }
    }
  }
  return res;
}