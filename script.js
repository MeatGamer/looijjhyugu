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
























// .map() keicia kiekvieno elemento reiksme
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6]


// .forEach() atlieka veiksma kiekvienam elementui
const numbers = [1, 2, 3];
numbers.forEach(x => console.log(x));






// Arrow Functions
const sayHello = name => {
  console.log(`Hello, ${name}!`);
};

sayHello("John");

// double number
const double = num => {
  console.log(num * 2);
};

double(5); // Output: 10

// add
const add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7





// for loop praeina per visus elementus
const arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// .filter() atrenka tik tai, kas atitinka salyga
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(x => x % 2 === 0);
console.log(even); // [2, 4]

// .includes() patikrina ar kas vidui
const fruits = ["apple", "banana", "pear"];
console.log(fruits.includes("banana")); // true

const text = "Hello world";
console.log(text.includes("world")); // true

// .match() randa teksta su RegEx/pagal sablona
const text = "My number is 860012345";
const result = text.match(/\d+/g);
console.log(result); // ['860012345']
