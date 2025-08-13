/**
 * An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded and followed by the same number of non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.

Write a function that accepts an integer array and returns true if it is a hollow array, else false.

Examples
[2, 3, 0, 0, 0, 5, 6] --> true
[2, 0, 0, 0, 5, 6] --> false // 1 nonzero to the left but 2 to the right
[2, 3, 0, 0, 5, 6] --> false // less than 3 zeroes in the middle
[0, 2, 0, 0, 0, 5, 6] --> false // 1 zero not in the middle
[0, 0, 0, 0, 0] --> true // 0 nonzero elements at both ends
[] --> false
 */
export function isHollow(arr: number[]): boolean {
    const firstZero = arr.indexOf(0);
    const lastZero = arr.lastIndexOf(0);

    if (lastZero - firstZero + 1 < 3) return false;

    const left = arr.slice(0, firstZero);
 
    const middle = arr.slice(firstZero, lastZero + 1);
 
    const right = arr.slice(lastZero + 1);

    if (!middle.every(n => n === 0)) return false;

    return left.length === right.length 
        && left.every(n => n !== 0) 
        && right.every(n => n !== 0);
}

console.log(isHollow([2, 3, 0, 0, 0, 5, 6]))