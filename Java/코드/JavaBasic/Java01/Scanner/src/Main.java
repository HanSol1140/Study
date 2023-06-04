import java.util.Scanner;
// 스캐너 클래스를 사용하기 위해 추가

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.print("두자리 정수를 하나 입력해주세요");
        String input = scanner.nextLine();
        int num = Integer.parseInt(input);
        System.out.println("입력내용 : " + input);
        System.out.printf("num = %d%n", num);

//      형변환을 하지 않고 그대로 숫자받기
        Scanner scanner2 = new Scanner(System.in);
        System.out.print("두자리 정수를 하나 입력해주세요 ");
        Integer input2 = scanner2.nextInt(); // 바로 int형으로 받기
        System.out.println("입력내용 : " + input2);
        System.out.printf("num = %d%n", input2);



    }
}
