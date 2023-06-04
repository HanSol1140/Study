/**
 이 예제는 TV클래스로부터 인스턴스를 생성하고, 인스턴스의 속성과 메서드를 사용하는 방법을 보여줍니다.

 Tv t;
 Tv클래스 타입의 참조변수 t를 선언합니다.
 메모리에 참조변수 t를 위한 공간이 마련됩니다.
 아직 인스턴스가 생성되지 않았으므로, 이 참조변수로 할수 있는것은 아무것도 없습니다

 t = new Tv();
 연산자 new에 의해 Tv클래스의 인스턴스가 메모리의 빈 공간에 생성된다.
 주소가 0x100인 곳에 생성되었다고 가정한다면, 이 때 멤버변수는 각 자료형에 해당하는 기본값으로 초기화된다.
 color는 참조형이므로 null,
 power는 boolean이므로 false,
 channel은 int이므로 0으로 초기화된다.

 t.channel = 7;
 참조변수 t에 저장된 주소에 있는 인스턴스의 멤버변수 channel에 7을 저장한다.
 여기서 알 수 있는것처럼, 인스턴스의 멤버변수(속성)를 사용하려면 '참조변수.멤버변수'와 같이 사용할 수 있다.

 t.channelDown();
 참조변수 t가 참조하고 있는 Tv인스턴스의 channelDown메서드를 호출하여
 멤버변수 channel에 저장되어있는 값을 1 감소시킨다.
 **/
public class Main {
    public static void main(String[] args) {

// 2. 인스턴스를 생성
        Tv t;             // Tv 객체를 참조하기 위한 변수 t 선언
        t = new Tv();     // Tv인스턴스를 생성한다.

// 3. 사용
        t.channel = 7;    // Tv인스턴스의 멤버변수 channel의 값을 7로 한다.
        t.channelDown();  // Tv인스턴스의 메서드 channelDown()을 호출한다.
        System.out.println("현재 채널은" + t.channel + " 입니다.");

// 4. 멤버변수 직접 수정
        t.channel = 111;
        System.out.println("t의 channel값을 111로 변경하였습니다.");

    }
}

// 1. Tv 클래스를 선언한다
class Tv{

    // Tv의 속성(멤버변수)
    String color;       // 색상
    boolean power;      // 전원상태(on/off)
    int channel;        // 채널

    // Tv의 기능(메서드)
    void power() { power = !power; }    // Tv를 켜거나 끄는 기능을 하는 메서드
    void channelUp() { ++channel; }     // Tv의 채널을 높이는 기능을 하는 메서드
    void channelDown() { --channel; }   // Tv의 채널을 낮추는 기능을 하는 메서드
}