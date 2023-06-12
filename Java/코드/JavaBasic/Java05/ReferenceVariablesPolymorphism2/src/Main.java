class Product{ /** 제품의 가격, 제품 구매시 보너스 포인트 **/
    int price;
    int bonusPoint;

    Product(int price){ /** 보너스 포인트 설정 **/
        this.price = price;
        bonusPoint = (int)(price/100);
    }
}
class Tv1 extends Product{
    Tv1(){
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

class Buyer{ // 고객
    int money = 1000;
    int bonusPoint = 0;
    void buy(Product p){
        if(money < p.price){
            System.out.println("잔액이 부족하여 물건을 살 수 없습니다.");
            return;
        }
        money -= p.price;
        bonusPoint += p.bonusPoint;
        System.out.println(p + "를 구입하셨습니다.");
    }
}
public class Main {
    public static void main(String[] args) {
        Buyer b = new Buyer();
        b.buy(new Tv1());
        b.buy(new Computer());

        System.out.println("현재 남은 돈은" + b.money + "만원입니다.");
        System.out.println("현재 적립된 포인트는" + b.bonusPoint + "점입니다.");
    }
}