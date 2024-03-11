/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
     const charCount ={};
     for( const char of order){
         charCount[char]=0;
     }
     for( const char of s){
         if(charCount[char] !== undefined){
             charCount[char]++;
         }
     }
     let sortedString = "";
     for( const char of order){
         sortedString += char.repeat(charCount[char]);
     }
      for (const char of s) {
          if(!order.includes(char)){
              sortedString+= char;
          }
      }
      return sortedString;
}