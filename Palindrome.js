/**
 * Check if a given string is a palindrome.
 *
 * @param {string} str - The input string to check for palindrome.
 * @returns {boolean} Returns true if the input string is a palindrome, otherwise false.
 *
 * @example
 * palindrome("eye"); // Output: true
 * palindrome("hello"); // Output: false
 * palindrome("A man, a plan, a canal, Panama"); // Output: true
 */
function palindrome(str) {
    // Regular expression to remove non-alphanumeric characters and underscores
    var regex = /[\W_]/g;
  
    // Convert the string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(regex, "").replace(/\s/g, "");
  
    // Reverse the string
    var reversed = str.split("").reverse().join("");
  
    // Check if the reversed string is equal to the original string
    return reversed === str;
  }
  
  // Example usage
  console.log(palindrome("eye")); // Output: true

  module.exports = palindrome;