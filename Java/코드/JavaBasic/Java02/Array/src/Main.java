import java.util.Arrays;

public class Main {
    public static void main(String[] args){

        int[] Arr1 = new int[10];
        int[] Arr2 = new int[10];
        // int[] Arr3 = new int[]{100, 95, 80, 70, 5};
        int[] Arr3 = {100, 95, 80, 70, 5};
        char[] chArr = {'a', 'b', 'c', 'd'};

        for(int i=0; i < Arr1.length; i++){
            Arr1[i] = i + 1; // 1~10의 숫자를 차례대로 배열에 넣는다.
        }
        for(int i = 0; i < Arr2.length; i++){
            Arr2[i] = (int)(Math.random() * 10) + 1; // 1 ~10의 값을 배열에 저장
        }

        // 배열에 저장된 값들을 출력
        for(int i = 0; i < Arr1.length; i++){
            System.out.println(Arr1[i]+",");
        }
        System.out.println();

        System.out.println(Arrays.toString(Arr2));
        System.out.println(Arrays.toString(Arr3));
        System.out.println(Arrays.toString(chArr));
        System.out.println(Arr3);
        System.out.println(chArr);

        // [2, 2, 10, 9, 4, 9, 5, 2, 3, 9]
        // [100, 95, 80, 70, 5]
        // [a, b, c, d]
        // [I@6d03e736
        // abcd

        System.out.println("============");

        // 최대값과 최소값
        int[] score = {79, 88, 91, 33, 100, 55, 95};

        int min = score[0];
        int max = score[0];

        for(int i = 1; i < score.length; i++){
            if(score[i] > max){
                max = score[i];
                System.out.println(score[i]);
            }else if(score[i] < min){
                min = score[i];
                System.out.println(score[i]);
            }
        }
        System.out.println("최대값 : " + max);
        System.out.println("최소값 : " + min);

        // 랜덤 로또번호 만들기;
        int[] ball = new int[45]; // 1 ~ 45의 정수값을 저장할배열생성

        // 생성한 배열에 1-45 숫자 담기
        for(int i = 0; i< ball.length; i++){
            ball[i] = i+1;
        }

        System.out.println("============");

        // 값 두개를 변경할때 사용할 임시 변수
        int temp = 0;
        int j = 0;


        for(int i = 0; i < 6; i++){
            j = (int)(Math.random() * 45); // 0 ~ 44 범위의 임의의 값을 얻는다
            temp = ball[i]; // 임시변수는 ball[i]다
            ball[i] = ball[j]; // ball[i]는 ball[j]다
            ball[j] = temp; // 랜덤수는 temp가되고 다시 반복문으로 돌아가서 랜덤수 = ball[i]가 된다
        }
            // 배열 ball의 앞에서부터 6개의 요소를 출력
            for(int i = 0; i < 6; i++){
                System.out.printf("ball[%d] = %d\n", i, ball[i]);
            }
    }
}
            // 이 코드를 풀어서 설명하기
            // 앞의 숫자 6가지가 [12, 15, 11, 40, 46, 97]이라고 했을때
            // 1.
                // 임시변수(0)는 0번 배열이다이다,
                // 0번 배열은 12다
                // 12는 임시변수다.
            // 2.
                // 임시변수(12)는 1번 배열이다
                // 1번 배열은 15다
                // 15는 임시변수다
            // 3.
                // 임시변수(15)는 2번 배열이다
                // 2번 배열은 11이다
                // 11은 임시변수다.
            // ...
            // 이런식으로 하여금 앞자리 6개를 랜덤한 1~45의 숫자로 출력할 수 있습니다.
            // 7번째 반복이 이루어지지 않으면 6번째 숫자가 랜덤이 아닌점도 맘에 안듬

            // ※ 별로 효율적인 방법은 아닌거같음
            // System.out.println("============");
            // for(i = 0; i < 6; i++){
            //  System.out.println("ball["+i+"] = " + (int)((Math.random() * 45)+1));
            // }



