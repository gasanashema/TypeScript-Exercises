/**
 * Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
 */
// turn vowels into numbers
export function encode(string: string): string {
  let str = string.split("");
  for (let i = 0; i < str.length; i++) {
    const check: boolean = /^[aeiou]+$/.test(str[i]);
    if (!check) continue;
    switch (check) {
      case str[i] === "a":
        str[i] = "1";
        break;
      case str[i] === "e":
        str[i] = "2";
        break;
      case str[i] === "i":
        str[i] = "3";
        break;
      case str[i] === "o":
        str[i] = "4";
        break;
      case str[i] === "u":
        str[i] = "5";
        break;
    }
  }
  return str.join("");
}

// turn numbers back into vowels
export function decode(string: string): string {
  let str = string.split("");
  for (let i = 0; i < str.length; i++) {
    const check: boolean = /^[12345]+$/.test(str[i]);
    if (!check) continue;
    switch (check) {
      case str[i] === "1":
        str[i] = "a";
        break;
      case str[i] === "2":
        str[i] = "e";
        break;
      case str[i] === "3":
        str[i] = "i";
        break;
      case str[i] === "4":
        str[i] = "o";
        break;
      case str[i] === "5":
        str[i] = "u";
        break;
    }
  }
  return str.join("");
}

console.log(encode("hello"), decode("h2ll4")); 