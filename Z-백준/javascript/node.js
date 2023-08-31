var aaa = "abcde";
var bbb = ["a", "b", "c", "d", "e"];
console.log(aaa); // abcde
console.log(aaa.split('').reverse().join()); // e,d,c,b,a
console.log(aaa); // abcde

console.log("=================");

console.log(bbb); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log(bbb.reverse().join(',')); // e,d,c,b,a
console.log(bbb); // [ 'e', 'd', 'c', 'b', 'a' ]