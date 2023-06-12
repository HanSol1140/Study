class Product{ /** 제품의 가격, 제품 구매시 보너스 포인트 **/
int price;
    int bonusPoint;

    Product(int price){ /** 보너스 포인트 설정 **/
        this.price = price;
        bonusPoint = (int)(price/100);
    }
}
class Tv extends Product{
    Tv(){
        // 조상 클래스의 생성자 Product(int price)를 호출한다.
        super(100);
    }
    // Object클래스의 toString()을 오버라이딩합니다.
    public String toString() { return "Tv";}
}

class Computer extends Product{
    Computer() {
        super(200);
    }
    public String toString() { return "Computer";}
}
class Audio extends Product{
    Audio() {
        super(200);
    }
    public String toString() { return "Audio";}
}

/**
    toString()은 Java의 Object 클래스에 정의된 메서드입니다.
    모든 클래스는 Object 클래스를 상속받기 때문에 toString() 메서드를 사용할 수 있습니다.
    이 메서드는 객체의 문자열 표현을 반환하는 역할을 합니다.

    일반적으로 toString() 메서드는 객체를 문자열로 표현할 때 사용됩니다.
    예를 들어, 객체를 출력하거나 문자열과 연결할 때 자동으로 toString() 메서드가 호출되어 객체의 문자열 표현을 반환합니다.

    Computer 클래스에서 toString() 메서드를 오버라이딩하면, 해당 클래스의 객체를 문자열로 표현할 때 "Computer"가 반환됩니다.
    따라서 System.out.println() 등으로 Computer 객체를 출력하면 "Computer"라는 문자열이 표시됩니다.

    자바에서 toString() 메서드를 직접 호출하지 않아도, 일부 상황에서는 자동으로 호출되어 기본 문자열 표현을 제공합니다.
**/
class Buyer {
    int money = 1000;
    int bonusPoint = 0;
;
}

public class Main {
    public static void main(String[] args) {
        Product p1 = new Tv();
        Product p2 = new Computer();
        Product p3 = new Audio();
        // 위의 코드를 Product타입 참조변수 배열로 처리하면 아래와 같습니다.
        Product[] pp = new Product[3];
        pp[0] = new Tv();
        pp[1] = new Computer();
        pp[2] = new Audio();
        /**
         이처럼 조상타입의 참조변수 배열을 사용하면
         공통의 조상을 가진 다른 종류의 객체를 배열로 묶어서 다룰 수 있습니다.
        **/


    }
}