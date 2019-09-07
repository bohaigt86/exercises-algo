// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution #1
// function anagrams(stringA, stringB) {
//   const mapA = buildCharMap(stringA);
//   const mapB = buildCharMap(stringB);

//   if (Object.keys(mapA).length !== Object.keys(mapB).length) {
//     return false;
//   }

//   for (let char in mapA) {
//     if (mapA[char] !== mapB[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function buildCharMap(string) {
//   const charMap = {};
//   for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// Solution #2
function anagrams(stringA, stringB) {
  const newStrA = stringA
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  const newStrB = stringB
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  if (newStrA === newStrB) {
    return true;
  }
  return false;
}

module.exports = anagrams;
