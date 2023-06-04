public class Main {
    public static void main(String[] args){
        System.out.printf("Age:%d", 14);
        // System.out.println("Age:%d", 14); <= println은 불가능

        // %d를 사용하여 변수의 값을 지정된 형식으로 변환해서 사용가능하다,
        // 이때 출력될 값과 지시자의 순서는 일치해야 한다.
    }
}

// 지시자의 종류
// %d
//     10진(decimal) 정수의 형식으로 출력
// %x
//     16진(hexa-decimal) 정수의 형식으로 출력
// %f
//     부동 소수점(floating- point)의 형식으로 출력
// %c
//     문자(character)로 출력
// %s
//     문자열(string)로 출력
// 그 외 다른 지시자는 검색으로 알아볼것