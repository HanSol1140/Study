let age = 51;
let answer = String(age).split('');
let result = [];

for (let i of answer) {
    result.push((Number(i) + 64));
    console.log(String.fromCodeAt(result[i]));
}

