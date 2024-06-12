let retryCount = 0;  // 재시도 횟수를 추적하기 위한 변수
const maxRetries = 3; // 최대 재시도 횟수

function sec1(number1: number): number {
    number1 -= 1;
    console.log(`Decrementing: ${number1}`);
    return number1;
}

function sec2(number2: number): number | undefined {
    let sexmaster: number = number2;
    try {
        if (sexmaster) {
            sexmaster = sec1(sexmaster);
            // 임의로 UNIQUE 제약 조건 위반을 시뮬레이션 하기 위해 에러를 발생시킴
            if (sexmaster % 2 !== 0) {
                throw new Error("Simulated UNIQUE constraint violation");
            }
            return sexmaster;
        } else {
            console.log("Reached zero without error");
            return sexmaster;
        }
    } catch (error) {
        console.error(`Error in sec2: ${error}`);
        retryCount++;
        if (retryCount < maxRetries) {
            console.log(`Retrying... Attempt ${retryCount}`);
            return sec2(number2);
        } else {
            console.log("Max retries reached. Stopping.");
            return undefined;
        }
    }
}
sec2(5);
