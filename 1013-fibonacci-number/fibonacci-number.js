/**
 * @param {number} n
 * @return {number}
 */

//  solution 1
var fib = function(n) {
    const arr = [0,1];
    for( let i =2; i<=n; i++){
        arr.push(arr[i-1] +arr[i-2])
    }
    return arr[n];
};
//  solution 2
// var fib = function(n) {
//     if( n<=1) return n;
//     return fib(n-1)+ fib(n-2);
// };