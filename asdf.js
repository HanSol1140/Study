var a = 123.456;
console.time('toFixed');
var b = a.toFixed(2);
console.log(b);
console.timeEnd('toFixed');

console.time('Math.round');
var c = Math.round(a * 100) / 100;
console.log(c);
console.timeEnd('Math.round');


console.log((2.5/3.3)*255);
