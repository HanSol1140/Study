// point obs
// X : 0.36
// Y : 4.53

// Point robot
// X : 2.30
// Y : -0.39
// Theta : 90.78

// 이렇게 되어있을때,

var aaa = Math.atan2(4.53 - (-0.39), 0.36-2.3);
console.log(aaa);
const theta = aaa * 180 / Math.PI ;
console.log(theta);

console.log(-45 -theta);