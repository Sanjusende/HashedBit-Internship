// Q.1...............................................................................................

// let states = ["Andhra Pradesh", "Bihar", "Uttar Pradesh", "Odisha", "Kerala", "Punjab", "Assam", "Maharashtra", "Rajasthan", "Tamil Nadu"];

// // Function to check if a state starts with a vowel
// function startsWithVowel(state) {
//   return !/^[AEIOUaeiou]/.test(state);  // Returns true if the state does NOT start with a vowel//this is a regular expression .
// }

// let filteredStates = states.filter(startsWithVowel);

// console.log(filteredStates);




// Q.2...............................................................................................

// let str = 'I love my India';

// let reversedStr = str.split(' ').reverse().join(' ');

// console.log(reversedStr);

// Q:3....................................................................................................
// let Str= "INDIA";
// let arr=Str.split('');
// console.log(arr);
// arr.splice(3,2, 'O', 'N', 'E', 'S', 'I', 'A')// index no.3 deleted 2-items [I,A]
// let newStr=arr.join("");
// console.log(newStr);





// Q:4.............................................................................................................
// function correctfn(string, wrong, correct) {
//   // replace method ko use karke wrong word ko correct word se replace karenge
//   return string.replace(wrong, correct);
// }
// let sentence = "I love my contry";
// let wrongWord = "contry";
// let correctWord = "country";

// let correctedSentence = correctfn(sentence, wrongWord, correctWord);

// console.log(correctedSentence);
//  // Output: "I love my country"








// Q:5.............................................................................................
// let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

// // filter() method use karke 5 se bade numbers ko filter karenge
// let result = inputArr.filter((number) => number > 5);

// console.log(result); // Output: [9, 10, 7]









// Q:6...............................................................................................................

// const students = [
//   { name: "Ram", scores: [80, 70, 60] },
//   { name: "Mohan", scores: [80, 70, 90] },
//   { name: "Sai", scores: [60, 70, 80] },
//   { name: "Hemang", scores: [90, 90, 80, 80] },
// ];

// // map() ka use karke ek naya array banate hain jo average scores rakhega
// const result = students.map(student => {
//   // reduce() ka use karke total score calculate karte hain
//   const totalScore = student.scores.reduce((acc, score) => acc + score, 0);

//   // Total score ko scores ki length se divide karke average nikaalte hain
//   const average = totalScore / student.scores.length;

//   // Har student ka naam aur average score ka naya object return karte hain
//   return { name: student.name, average: average };
// });

// console.log(result);





// Q:7...........................................................................................................
function repeatedDigitSum(num) {
  const sumOfDigits = (n) => {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  };

  while (num >= 10) {
    num = sumOfDigits(num);
  }

  return num;
}

let result = repeatedDigitSum(456);
console.log(result);
