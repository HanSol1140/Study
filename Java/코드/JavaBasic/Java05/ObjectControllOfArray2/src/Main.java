class Product{
    int price;          // 제품의 가격
    int bonusPoint;     // 제품 구매시 제공하는 보너스 점수

    Product(int price){
        this.price = price;
        bonusPoint = (int)(price/10);
    }
}
class Tv extends Product{
    Tv(){ // 생성자 오버라이드
        super(100);
    }
    @Override
    public String toString(){
        return "Tv";
    }
}
class Computer extends Product{
    Computer(){ // 생성자 오버라이드
        super(200);
    }
    @Override
    public String toString() {
        return "Computer";
    }
}
class Audio extends Product{
    Audio(){ // 생성자 오버라이드
        super(50);
    }
    
    public String toString(){
        return "Audio";
    }
    
}


class Buyer{
    int money = 1000;
    int bonusPoint = 0;
    Product[] cart = new Product[10];
    int i = 0;
    void buy(Product p){
        if(money < p.price){
            System.out.println("잔액이 부족합니다");
            return;
        }
        money -= p.price;
        bonusPoint += p.bonusPoint;
        cart[i++] = p;
        System.out.println(p + "를 구입하셨습니다.");
    }

    void summary(){ // 구매정보 요약
        int sum = 0;
        String itemList = "";
        for(int i=0; i<cart.length; i++){
            if(cart[i] == null) break;
            sum += cart[i].price;
            itemList += cart[i]+ ", ";
        }
        System.out.println("구입하신 물품의 총액은 " + sum + "만원입니다.");
        System.out.println("구입하신 제품은 " + itemList + "입니다." );
    }

}
public class Main {
    public static void main(String[] args) {
        Buyer hansol = new Buyer();
        hansol.buy(new Tv());
        hansol.buy(new Computer());
        hansol.buy(new Audio());
        hansol.summary();
        
    }
}