/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  // Split the string by spaces to get individual words
  const splitS = s.split(" ");
  // Create a stack to store the words in reverse order
  const stack = [];

  // Push each word from the split string into the stack
  for (let i of splitS) {
    stack.push(i);
  }

  // Initialize an empty string to store the final reversed string
  let finalS = "";

  // Pop words from the stack and append them to the final string
  while (stack.length) {
    // Pop the top word from the stack
    const current = stack.pop();

    // If the popped word is not empty, append it to the final string
    if (current) {
      finalS += " " + current;
    }
  }

  // Trim any leading or trailing spaces from the final string and return it
  return finalS.trim();
};