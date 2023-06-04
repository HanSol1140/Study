/**
    생성자에서 다른 생성자를 호출할때의 규칙
    생성자의 이름으로 클래스명 대신 this를 사용한다.
    한 생성자에서 다른 생성자를 호출할 때는 반드시 첫줄에서만 호출이 가능하다.

    다른 생성자를 첫줄에서만 호출이 가능한 이유는
    생성자 내에서 초기화 작업도중 다른생성자를 호출하게 되면
    호출된 다른 생성자 내의 멤버변수 값을 초기화 할 수 있기 때문입니다.(사실잘모름)

    생성자를 호출할 때는 this(매개변수)가 들어가게 되는데
    클래스명이아닌 매개변수를 통해 그와 똑같은 생성자를 찾습니다.

**/

class Car{
    String color;       // 색상
    String gearType;    // 변속기의 종류 auto(자동), manual(수동)
    int door;           // 문의 개수

    Car(){
        this("white", "auto", 4);
    }

    Car(String color){
        this(color, "auto", 4);
    }
    Car(String c, String g, int d){
        this.color = c;
        this.gearType = g;
        this.door = d;
    }
}
public class Main {
    public static void main(String[] args) {
        Car c1 = new Car();
        Car c2 = new Car("blue");
                System.out.println(
                "c1의 color = " + c1.color + ", gearType = " + c1.gearType + ", door의 개수 = " + c1.door
        );
        System.out.println(
                "c1의 color = " + c2.color + ", gearType = " + c2.gearType + ", door의 개수 = " + c2.door
        );
    }
}
/**
    이 방식은 마치 실생활에서 자동차(Car인스턴스)를 생성할 때, 아무런 옵션을 주지 않으면
    기본적으로 흰색(white), 자동변속기어(auto), 문의 개수(4개)인 자동차를 생산하는 것에 비유할 수 있습니다.
 **/