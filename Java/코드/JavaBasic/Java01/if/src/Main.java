import java.util.Scanner;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        int score = 0; // 학점을 저장하기 위한 변수
        char grade = ' '; // 학점을 저장하기 위한 변수, 공백으로 초기화 된다.
        System.out.print("학점을 입력하세요");
        Scanner scanner = new Scanner(System.in);
        score = scanner.nextInt(); // 화면을 통해 입력받은 숫자를 score에 저장
        if(score >= 90){ // score가 90점보다 같거나 크면 A학점
            grade = 'A';
        }else if(score >= 80){ // score가 80점 보다 같거나 크면 B학점
            grade = 'B'; 
        }else if(score >= 70){ // score가 70점보다 같거나 크면 C학점
            grade = 'C';
        }else{ // 나머지는 D학점
            grade = 'D';
        }
        System.out.println("당신의 학점은 " + grade + "입니다");
    }

}