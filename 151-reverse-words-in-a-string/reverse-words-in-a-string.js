/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  const splitS = s.split(" ");
  const stack = [];

  for (let i of splitS) {
    stack.push(i);
  }

  let finalS = "";

  while (stack.length) {
    const current = stack.pop();

    if (current) {
      finalS += " " + current;
    }
  }

  return finalS.trim();
};