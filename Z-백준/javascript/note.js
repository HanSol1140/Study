for (let j = 0; j < 5; j++) {
    let stars = "";
    // 빈 공간 출력
    for (let k = 0; k < j + 1; k++) {
        stars += " ";
    }
    // 별표 출력
    for (let i = 0; i < 5 - j; i++) { 
        stars += "*";
    }
    console.log(stars);
}