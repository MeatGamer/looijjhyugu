// 1.
let x = calc(1, 2, '+');

function calc(a, b, c){
  return eval(a + c + b);
}

console.log(x);

// 2.
function check(a, b) {
  return a % b === 0;
}

console.log(check(6,3));
  
// 3.

let array = [1, 2, 3];
let b = array.map(x => x * 5); 
console.log(b);

// 4.

function countVowels(text) {
  const vowels = "aeiouAEIOU";
  return text.split("").filter(letter => vowels.includes(letter)).length;
}

console.log(countVowels("I make my own yogurt"));

// 5.

function shortestWord(text) {
  let words = text.split(" ");
  let shortest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortest.length) {
      shortest = words[i];
    }
  }

  return shortest;
}

console.log(shortestWord("I make my own yogurt"));











let arr = [10, 10, 10, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum)




let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = array.filter(x => x % 2 == 0); 
console.log(b);





function longestword(text) {
  let words = text.split(" ");
  let longest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

console.log(longestword("I make my own yogurt"));
