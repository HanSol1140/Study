/**
<!--
    제어자(Modefier)는 클래스, 변수 또는 메서드와 선언부와 함께 사용되어 추가적인 의미를 부여합니다.
    제어자의 종류는 크게 접근 제어자와 그 외의 제어자로 나눌 수 있습니다

        접근 제어자 : public, protected, (default), private
        그     외  : static, final, abstract, native, tranient, synchronized, volatile, strictfp

        제어자는 클래스나 멤버변수, 메서드에 주로 사용되며,
        하나의 대상에 대해서 여러 제어자를 조합하여 사용하는 것이 가능합니다.
        그러나, 접근 제어자는 한 번에 네 가지 중 하나만 선택해서 사용할 수 없습니다.

        즉, 하나의 대상에 대해서 public과 private를 함께 사용할 수 없습니다.
-->
**/

public class Main {
    public static void main(String[] args) {


    }
/**
 static - 클래스의, 공통적인

 인스턴스 변수는 하나의 클래스로 부터 생성되었더라도, 각기 다른 값을 유지하지만,
 클래스 변수(static변수)는 인스턴스에 관계없이 같은 값을 가집니다.
 그 이유는 하나의 변수를 모든 인스턴스가 공유하기 때문입니다.
 static이 붙은 멤버변수와 메서드, 그리고 초기화 블럭은 인스턴스가 아닌 클래스와 관계됬기 때문에
 인스턴스를 생성하지 않더라도 사욯알 수 있습니다.

     즉, 인스턴스 메서드와 static 메서드의 근본적인 차이는
     메서드내에서 인스턴스 멤버를 사용하는가, 사용하지 않는가 여부에 있다
 **/
    class StaticTest{
        static int width = 200;
        static int height = 120;
        static { /** 클래스 초기화 블럭 **/
            // static변수의 복잡한 초기화 수행
        }
        static int max(int a, int b){
            return a > b ? a: b;
        }
    }
/**
 final - 마지막의, 변경될 수 없는

 final은 '마지막의'또는 '변경될 수 없는'의 의미를 가지고 있고, 거의 모든 대상에 사용될 수 있습니다.

    변수에 사용하면 값을 변경할 수 없는 상수가 되고
    메서드에 사용되면 오버라이딩을 할 수 없게되고
    클래스에 사용되면 상속(extends)이 불가능해집니다.

    자바스크립트의 const개념과 유사합니다.
**/
    final class FinalTest{              // 조상이 될 수 없는 클래스(상속불가)
        final int MAX_SIZE = 10;        // 값을 변경할 수 없는 멤버변수(상수)
        final int getMaxSize(){         // 오버라이딩할 수 없는 메서드(변경불가)
            final int LV = MAX_SIZE;    // 값을 변경할 수 없는 지역변수(상수)
            return MAX_SIZE;
        }
    }
/**
 abstarct - 추상의, 미완성의\

 메서드의 선언문만 작성하고 실제 수행내용은 구현하지 않는 추상 메서드를 선언하는데 사용됩니다.
 클래스에 사용되어 클래스 내에 추상 메서드가 존재한다는 것을 쉽게 알 수 있게 합니다.
**/
    abstract class AbstractTest{        // 추상 클래스(추상 메서드를 포함한 클래스)
        abstract void move();           // 추상클래스(구현부가 없는 메서드)
    }
/**<!--
     * 추상 클래스는 아직 완성되지 않은 메서드가 존재하는
     * '미완성 클래스'이므로 인스턴스를 생성할 수 없습니다.

        AbstractTest a = new AbstractTest() => 인스턴스 생성이 불가능합니다.
--> **/






}