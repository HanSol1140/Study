// 방법 1
// var input = 75;

// switch (true) {
//     case (input >= 60 && input <= 69):
//         var input = 123 + ((150-123)/10*(input-60));
//         console.log(input);
//         break;
//     case (input >= 70 && input <= 79):
//         var input = 150 + ((175-150)/10*(input-70));
//         console.log(input);
//         break;
//     // 다른 조건들...
//     default:
//         console.log('Value is out of range');
// }

// 방법 2
var input = 85;

var ranges = [
    { min: 60, max: 69, startValue: 123, endValue: 150 },
    { min: 70, max: 79, startValue: 150, endValue: 175 },
    { min: 80, max: 89, startValue: 175, endValue: 104 },

];

var result;

for (let range of ranges) {
    if (input >= range.min && input <= range.max) {
        result =
            range.startValue + ((range.endValue - range.startValue)
            / (range.max - range.min + 1)
            * (input - range.min));
        break;
    }
}

if (result !== undefined) {
    console.log(result);
} else {
    console.log('Value is out of range');
}

console.log(ranges[0].min);