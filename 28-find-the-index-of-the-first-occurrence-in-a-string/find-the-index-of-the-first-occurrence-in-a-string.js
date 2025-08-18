/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  // Edge case: empty needle always found at 0
  if (needle.length === 0) return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    // check substring from i to i+needle.length
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
}
