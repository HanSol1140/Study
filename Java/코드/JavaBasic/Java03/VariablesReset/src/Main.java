public class Main {
    static {
        System.out.println("static { }"); // 클래스 초기화 블럭
    }

    {
        System.out.println("{ }"); // 인스턴스 초기화 블럭
    }
    public Main(){
        System.out.println("생성자");
    }
    public static void main(String[] args) {
        System.out.println("Main bt = new Main(); ");
        Main bt = new Main();

        System.out.println("Main bt = new Main(); ");
        Main bt2 = new Main();
    }
}
/**
    예제가 실행되면서 Main이 메모리에 로딩될 때
    클래스 초기화 블럭이 가장 먼저 수행되어 static { }이 화면에 출력된다.
    그 다음에 main 메서드가 수행되어 Main의 인스턴스가 생성되면서
    인스턴스 초기화 블럭이 먼저 수행되고, 끝으로 생성자가 수행된다.

    이 결과에서 알 수 있듯이 클래스 초기화 블럭은 처음 메모리에 로딩될 때 한번만 수행되었지만,
    인스턴스 초기화블럭은 인스턴스가 생성될 때 마다 수행되었다.
**/


/** ============================================================================ **/
class InitTest{
    int x;      // 인스턴스 변수
    int y = x;  // 인스턴스 변수

    void method(){
        int i;          // 지역변수
        // int i = 0;   // => 이렇게 초기화를 해서 값을 줄 시 아래에 에러가 사라집니다.
        // int j = i;   // 지역변수를 초기화 하지 않고 사용했기때문에 에러가 나타남
    }
}
/**


 변수를 선언하고 처음으로 값을 저장하는 것을 '변수의 초기화'라고 합니다.
 멤버변수는 초기화를 하지 않아도 자동적으로 변수의 자료형에 맞는 기본값으로 초기화가 되기에 그냥 사용해도 되지만
 지역변수는 자동으로 초기화가 이루어지지 않아 사용하기전 반드시 초기화를 해주어야 합니다.

 각 타입의 기본값(default value)은 다음과 같습니다

    boolean          => false
    char             => '\u0000'
    byte, short, int => 0
    long             => 0L
    float            => 0.0f
    double           => 0.0d 또는 0.0
    참조형            => null
 **/