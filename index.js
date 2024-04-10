function isPalindrome(word) {
  // Iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // Compare the letter we're iterating over to the corresponding letter at the end of the string
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      // If the letters don't match, return false
      return false;
    }
  }

  // If we reach the middle, and all the letters match, return true
  return true;
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("mom")); // true
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("a")); // true
console.log(isPalindrome("hi")); // false
console.log(isPalindrome("robot")); // false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
