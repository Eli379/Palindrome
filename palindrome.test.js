const palindrome = require('./palindrome');

describe('palindrome function', () => {
  test('should return true for a valid palindrome string', () => {
    expect(palindrome('eye')).toBe(true);
    expect(palindrome('level')).toBe(true);
    expect(palindrome('A man, a plan, a canal, Panama')).toBe(true);
    expect(palindrome('Was it a car or a cat I saw?')).toBe(true);
    expect(palindrome('never odd or even')).toBe(true);
  });

  test('should return true for a single character', () => {
    expect(palindrome('a')).toBe(true);
    expect(palindrome('X')).toBe(true);
  });

  test('should return true for an empty string', () => {
    expect(palindrome('')).toBe(true);
  });

  test('should return false for a non-palindrome string', () => {
    expect(palindrome('hello')).toBe(false);
    expect(palindrome('palindrome')).toBe(false);
    expect(palindrome('not a palindrome')).toBe(false);
    expect(palindrome('test123')).toBe(false);
    expect(palindrome('1234567')).toBe(false); // Corrected - "1234567" is not a palindrome
  });

  test('should handle edge cases with spaces and special characters', () => {
    expect(palindrome('racecar')).toBe(true); // Palindrome with no spaces or special characters
    expect(palindrome('rats live on no evil star')).toBe(true); // Multi-word palindrome
    expect(palindrome('Madam In Eden, I\'m Adam')).toBe(true); // Palindrome with apostrophe
    expect(palindrome('A car, a man, a maraca')).toBe(true); // Palindrome with spaces
    expect(palindrome('A man, a plan, a canal, Panama')).toBe(true); // Palindrome with spaces and special characters
    expect(palindrome('race car')).toBe(true); // Palindrome with spaces
    expect(palindrome('not a palindrome')).toBe(false); // Non-palindrome with spaces
    expect(palindrome('1a2a3a2a1')).toBe(true); // Palindrome with numbers and letters
  });
});