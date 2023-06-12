/**
 <!--
 참조변수의 다형적인 특징은 메서드의 매개변수에도 적용됩니다.
 아래와 같이 product, Tv, Computer, Buyer클래스가 정의되어 있다고 가정해봅시다.
 -->
 **/
class Product{
    int price;                  // 제품의 가격
    int bonusPoint;          // 제품을 구매 시 제공하는 포인트

    Product(int price){
        this.price = price;
        bonusPoint = (int)(price/10);
    }
}

class Tv extends Product{
    Tv(){
        super(100);
    }
}
class Computer extends Product{
    Computer(){
        super(200);
    }
}

class Buyer{                    // 고객, 물건을 사는 사람
    int money = 1000;           // 소유 금액
    double bonusPoint = 0;      // 보너스 점수
}
/**
 <!--
 Product클래스는 Tv와 Computer클래스의 조상이며,
 Buyer클래스는 제품(Product)을 구입하는 사람을 클래스로 표현한 것입니다.
 Buyer클래스에 물건을 구입하는 기능의 메서드를 추가해봅시다.
 구입할 대상이 필요하므로 매개변수로 구입할 제품을 넘겨받아야합니다.
 Tv를 살 수 있또록 매개변수를 Tv타입으로 하였습니다.

 이제 Buyer클래스에 물건을 구입하는 기능의 메서드를 추가해봅시다.
 -->
 **/
class Buyer2 extends Buyer{                    // 고객, 물건을 사는 사람
// Buyer가 가진돈(money)에서 제품의 가격(t.price)를 뺍니다.
//    void buy(Tv t){
//        money = money - t.price;
//        // Buyer의 보너스점수(bonusPoint)에 제품의 보너스 점수(t.bonusPoint)를 더합니다.
//        bonusPoint = bonusPoint + t.bonusPoint;
//    }
    /**
     그러나 buy(Tv t)는 Tv밖에 살 수 없기 때문에, 아래와 같이 다른 제품도 구입할 수 있는 메서드가 필요합니다.
     오버로딩(overloading)
     **/
//    void buy(Computer c){
//        money = money - c.price;
//        // Buyer의 보너스점수(bonusPoint)에 제품의 보너스 점수(t.bonusPoint)를 더합니다.
//        bonusPoint = bonusPoint + c.bonusPoint;
//    }
    /**
     <!--
     하지만, 이렇게하면 제품의 종류가 늘어날 때마다 Buyer클래스에서 새로운 buy메서드를 추가해주어야 할것입니다.
     이럴 때 문제를 해결하기 위한 방법이 바로 다형성입니다.
     다형성을 적용한다면 아래와 같이 하나의 메서드로 처리할 수 있습니다.
     -->
     **/
    void buy(Product p){
        money -= p.price;
        bonusPoint += p.bonusPoint;
        System.out.println("남은 돈은" + money);
        System.out.println("적립된 보너스 포인트는" + bonusPoint );
    }



}
public class Main {
    public static void main(String[] args) {
        Tv t = new Tv();
        Computer c = new Computer();
        Buyer2 sol = new Buyer2();
        sol.buy(t);
        
    }
}