/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  let slow = 0, fast = s.length - 1;

  const isAlnum = ch => {
    const code = ch.charCodeAt(0);
    return (code >= 48 && code <= 57)  // 0-9
        || (code >= 65 && code <= 90)  // A-Z
        || (code >= 97 && code <= 122); // a-z
  };

  while (slow < fast) {
    // move slow forward to next alnum
    while (slow < fast && !isAlnum(s[slow])) slow++;
    // move fast backward to previous alnum
    while (slow < fast && !isAlnum(s[fast])) fast--;

    if (slow < fast) {
      if (s[slow].toLowerCase() !== s[fast].toLowerCase()) return false;
      slow++;
      fast--;
    }
  }
  return true;
}
