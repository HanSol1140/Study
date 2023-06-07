/**
    코드를 작성할 때 다른 패키지의 클래스를 사용하려면 클래스 이름을 사용해야 합니다.
    하지만 매번 패키지명을 붙여서 사용하기는 불편합니다.
    이때 클래스 코드를 작성하기 전에 import문으로 사용하고자 하는 클래스의 패키지를 미리 명시할 수 있습니다.

    import문 선언 방법

        import 패키지명.클래스명;
        import 패키지명.*;

**/
import java.util.Date; // import문을 사용해서 패키지명을 생략할 수 있습니다.

public class Main {
    public static void main(String[] args) {
        // java.util.Date today = new java.util.Date(); // => 너무길다
        Date today = new Date();
    }
}