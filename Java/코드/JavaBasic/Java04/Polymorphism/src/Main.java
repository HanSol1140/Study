/**
 다형성(polymorphism)
    다형성이란 '한 요소가 여러 가지 형태나 타입을 가질 수 있는 능력'을 의미합니다.
    자바에서는 한 타입의 참조변수로 여러 타입의 객체를 참조할 수 있도록 함으로써 다형성을 프로그램적으로 구현하였습니다.

    이는 조상 클래스 타입의 참조변수로, 자손클래스의 인스턴스를 참조할 수 있도록 했다는 말입니다.

    TV와 SmartTV 클래스를 통해 알아봅시다.
**/

class Tv{
    boolean power;
    int channel;
    void power()        { power = !power; }
    void channelUp()    { ++channel; };
    void channelDown()  { --channel; }
}

class SmartTv extends Tv{
    String text;
    void caption(){}
}

public class Main {
    public static void main(String[] args) {
    /**
     Tv t = new Tv();
     SmartTv s = new SmartTv;
     => 참조변수 타입 변수명 = new 인스턴스타입
     이처럼 인스턴스의 타입과, 참조변수 타입이 일치하는 것이 보통이지만
     Tv와 SmartTv가 서로 상속관계에 있을경우
     다음과 같이 조상 클래스 타입의 참조변수로 자손 클래스의 인스턴스를 참조하도록 하는 것도 가능합니다.
    **/

        Tv      t = new SmartTv(); // 조상 클래스 타입 참조변수로 자손 타입 인스턴스 참조
        SmartTv s = new SmartTv(); // 참조변수와 인스턴스의 타입이 일치

        /**
         둘 다 같은 타입의 인스턴스를 생성했지만, 참조변수의 타입에 따라 사용할 수 잇는 멤버변수의 개수가 달라집니다.

         Tv타입의 참조변수 't'로는 SmartTv인스턴스 중에서 Tv클래스의 멤버들(상속받은 멤버포함)만 사용할 수 있습니다.
             따라서 생성된 't'는 SmartTv의 멤버 중에서
             Tv클래스에 정의되지 않은 멤버 text와 caption()은 사용할 수 없습니다.
        **/


        /**
         반대로 자손타입의 참조변수로 조상타입의 인스턴스를 사용할 수 있을까?
         // SmartTv c = new Tv();
         정답은 불가능합니다. 이유는 인스턴스로 사용된 Tv의 멤버 개수보다
         SmartTv의 'c'가 사용할 수 있는 멤버개수가 더 많기 때문입니다.

         따라서 자바에서는 자손 타입의 참조변수로 조상 타입의 인스턴스를 생성하는 것을 허용하지 않습니다.
        **/
    }

}