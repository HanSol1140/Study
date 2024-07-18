var a = 191;
console.log(a.padStart(8, '0')); // 10111111
function printPinStates(value) {
    for (var i = 0; i < 8; i++) {
      console.log("PIN" + i + ": " + ((value & (1 << i)) ? "HIGH" : "LOW"));
    }
  }
  
  printPinStates(a);

  value & (1 << i) // 1 << i는 2의 i승을 의미하며, value와 AND 연산을 수행함
  // 즉, value의 i번째 비트가 1인지 0인지를 확인함
  // 아두이노에서 사용가능한 연산방식