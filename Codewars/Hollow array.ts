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
export function isHollow(x:number[]): boolean {
    if(x.length == 0) return false;
    if(x.every(d=>d==0)) return true;
    let firstIndex = x.indexOf(0);
    let lastIndex = x.lastIndexOf(0);
    if(firstIndex-((x.length+1)-lastIndex)!=0) return false
    let left:[] = [];
    let right:[] = [];
    if(x.length%2==0){
        left = x.slice(0,(x.length/2)-1);
        right = x.slice((x.length/2),x.length-1)
    }else{
        left = x.slice(0,((x.lenght-1)/2)-1);
        right =x.slice((x.length+1)/2,x.length-1)
    }
}
console.log(isHollow([2, 3, 0, 0, 0, 5, 6] ))