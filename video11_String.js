// read more about on MDN web docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
const name = 'sudip';
const repoCount = 10;
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('  sudi-0p   ');
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('p'));
// console.log(gameName.substring(0,4));
// console.log(gameName.slice(-5,4));
// console.log(gameName.trim());

// const url = 'https://hitesh.com/hitesh%20choudhary';
// console.log(url.replace("%20","--"));

// const a = "a";
// const b = "b";
// if (a < b) {
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }
// const sentence='The quick brown fox jumps over the lazy dog.';
// const word = 'fox';
// console.log(`The word "${word}" ${
//   sentence.includes(word) ? 'is' : 'is not'
// } in the sentence`,
// );

// const chars = sentence.split('');
// console.log(chars[8]);  // Expected output: "k"

// const arr = [1,2,3,4,5,'what will print'];
// const arr1 = [11,22,33,'some']
// const store = arr.concat(arr1);
// console.log(store);

// console.log(new Date('July 07, 2024 07:28:00'));//constructor
// console.log(sentence.endsWith('dog.'));
// // fixed
// const contentString = "Hello, world";
// console.log(contentString.fixed());
// console.log(Object.values(arr),(arr1));

// valuesof
function MyNumberType(n) {
  this.number = n;
}
MyNumberType.prototype.valueOf = function () {
  return this.number;
};
const object1 = new MyNumberType(4);
// console.log(object1 + 3);

// const obj = { foo: 1 };
// console.log(obj.valueOf() === obj); // true
// console.log(Object.prototype.valueOf.call("primitive"));




