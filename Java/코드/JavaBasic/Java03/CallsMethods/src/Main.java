

public class Main {
    static class TestClass1{
        void instanceMethod(){}      // 인스턴스 메서드
        static void staticMethod(){} // static메서드

        void instanceMethod2(){      // 인스턴스 메서드
            instanceMethod();        // 다른 인스턴스 메서드를 호출한다.
            staticMethod();          // 다른 statice메서드를 호출한다.
        }

        static void staticMethod2(){ // static메서드
            // instanceMethod();        // Error! 클래스 메서드는 인스턴스 메서드를 호출할 수 없다
            staticMethod();          // statice메서드는 호출할 수 있다.
        }
    }
/**
 같은 클래스에 속한 멤버들 간에는 별도의 인스턴스를 생성하지 않더라도 서로 참조 또는 호출이 가능합니다.
 그러나, 클래스멤버가 인스턴스 멤버를 호출하는 경우에는 인스턴스를 생성해야합니다.

 그 이유는 인스턴스 멤버가 존재하는 시점에서 클래스 멤버는 항상 존재하지만,
 클래스 멤버가 존재한다고해서 인스턴스 멤버가 존재하지 않을 수도 있기 때문입니다.
 **/
/**============================================================**/

    // 이번에는 변수와 메서드간의 호출에 대해서 확인해봅시다.
    class TestClass2{
        int iv;         // 인스턴스 변수
        static int cv;  // 클래스 변수

        void instanceMethod(){      // 인스턴스메서드
            System.out.println(iv); // 인스턴스 변수를 사용할 수 있다
            System.out.println(cv); // 클래스 변수를 사용할 수 있다.
        }

        static void staticMethod(){ // static메서드
            // System.out.println(iv); // Error! 인스턴스 변수를 사용할 수 없다
            System.out.println(cv); // 클래스 변수를 사용할 수 있다.
        }
    }

    public static void main(String[] args) {
        TestClass2.staticMethod(); // 같은 Main 클래스 내의 static메서드는 사용이 가능합니다.

        // TestClass2.instanceMethod(); // 같은 클래스 내부라도 static 클래스 내부에서 다른 클래스의 인스턴스에 접근할 수 없습니다.
        // 접근방법
        Main mainInstance = new Main();
        TestClass2 aaa = mainInstance.new TestClass2();
        aaa.instanceMethod();
        /**
            1. 먼저 기본이되는 Main 메서드를 생성합니다.
            2. Main 인스턴스 안의 TestClass2 클래스를 참조하는 aaa 인스턴스를 생성합니다.
            3. 생성한 인스턴스를 참조하여 메서드를 실행합니다.

            이러한 방법은 스태틱만 사용하는 방법에 비해 호출속도가 느리니
            복잡하지 않은 간단한 메서드는 static을 사용하는것을 권장합니다.
        **/

    }
}
