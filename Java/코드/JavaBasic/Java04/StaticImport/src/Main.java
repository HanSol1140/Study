/**
 import문을 사용해서 클래스의 패키지명을 생략이 가능한것과 같이
 static import문을 사용하면 static멤버를 호출할 때 클래스 이름을 생략할 수 있습니다.
 특정 클래스의 static 멤버를 자주사용할 때 편리하고, 코드도 간결해집니다.
 **/
import static java.lang.Math.random;    // Math.random()만
import static java.lang.Math.*;         // 위의 Integer와 독같이 Math클래스의 모든 static 메서드를 뜻합니다.
import static java.lang.System.out;     // System.out을 out만으로 참조 가능
public class Main {
    public static void main(String[] args) {
// static import
    // System.out.println(Math.random()); => System.out을 줄입니다.
    out.println(random());

    // System.out.println("Math.PI :" + Math.PI); => Math를 줄입니다.
    out.println("Math.PI :" + PI);
    }
}