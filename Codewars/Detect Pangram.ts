export const isPangram = (phrase: string) => phrase.split(' ').join('').split('').filter(a=>/^[a-zA-Z]+$/.test(a)).reduce((acc,val)=>acc[val]=((acc[val]+1)||0),{})
console.log(isPangram('Hello2'));