/**
 * Description
Your task is to take arrays of numbers and compress them into ranges.

The numbers in the array are mostly consecutive. If you convert them as ranges, it will save a lot of space. You should write a function that will convert an array of numbers into a string. A range, or series of consecutive numbers, will be represented as two numbers separated by an underscore, a range of one just by the number its self and multiple ranges separated by commas.

For example,
The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
The number 6 would just be "6"
The numbers 3,4,5,6,9 would be "3_6,9"

Using the above system, you should write two functions:
toRange - convert an array of numbers to a range string
toArray - convert a range string back to an array

Warnings
The numbers could arrive all jumbled up so you'll need to sort them Sometimes the same number may appear more than once, duplicates should be discarded.

Edge cases
An empty array should become an empty string if passed to toRange and vise versa for the toArray function. Also, ranges of 2 digits will take the same space whether they are represented as a sequence or a range. I.e. "5,6,8,9".length === "5_6,8_9".length so there will be no compression, but represent them as a range anyway for consistency.

Good luck!

If you're finding this Kata a little hard, then maybe try my other one first


 */
export function toRange(arr: number[]): any {
  let arrNoDup = [...new Set(arr)].sort((a,b)=>a-b);
    if(arrNoDup.length==1) return arrNoDup.join('');

    let lowLimit = arrNoDup[0];
    let ans:string[] = [];
    
    for (let i = 0; i < arrNoDup.length; i++) {
      if(arrNoDup[i]+1 == arrNoDup[i+1]) {
        continue;
      }
     lowLimit == arr[i]?ans.push(arr[i]+''):ans.push([lowLimit,arr[i]].join('_'));
     lowLimit = arr[i+1];
      
    }
    return ans;
  }
  
  console.log(toRange([1,2,3,2,6,7,3,46,3,4,0,8,1,2,3,5]))
  
  export function toArray(str: string): number[] {
    return []
  }
    