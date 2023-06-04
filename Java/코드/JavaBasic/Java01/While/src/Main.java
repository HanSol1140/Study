import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // while(조건식){
        //     실행할코드
        // }
        int num = 0, sum = 0;
        System.out.println("숫자를 입력하세요(예:12345)");
        Scanner scanner = new Scanner(System.in);
        String tmp = scanner.nextLine();
        num = Integer.parseInt(tmp);
        while(num != 0){
            // num을 10으로 나눈 나머지를 sum에 더함
            sum += num % 10;
            System.out.printf("sum=%d num=%d\n", sum, num);
            num /= 10; // int형이기 때문에 0.1이되면 0을 반환함
        }

        // do-while문
        // ~의 결과가 조건식을 벗어날때까지 반복
        // 결과를 먼저 내고 조건식에 맞추기때문에 최소한 한번의 실행을 보장함

        int input = 0, answer = 0;
        answer = (int)(Math.random() * 100) + 1; // 1과 100사이의 임의의 숫자
        do{
            System.out.println("1과 100사이의 정수를 입력하세요");
            input = scanner.nextInt();

            if(input > answer){
                System.out.println(answer);
                System.out.println("더 적은 수로 다시 시도해보세요");
            }else if(input < answer){
                System.out.println(answer);
                System.out.println("더 큰수로 다시 시도해보세요");
            }
        }while(input != answer); // input과 answer값이 같아지면 반복문 종료

    }
}