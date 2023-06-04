class Car{
    String color;       // 색상
    String gearType;    // 변속기의 종류 auto(자동), manual(수동)
    int door;           // 문의 개수

    Car(){}

    Car(String c, String g, int d){
        color = c;
        gearType = g;
        door = d;
    }
}
public class Main {
    public static void main(String[] args) {
        Car c1 = new Car();
        c1.color = "white";
        c1.gearType = "auto";
        c1.door = 4;

        Car c2 = new Car("white", "auto", 4);
        System.out.println(
                "c1의 color = " + c1.color + ", gearType = " + c1.gearType + ", door의 개수 = " + c1.door
        );
        System.out.println(
                "c1의 color = " + c2.color + ", gearType = " + c2.gearType + ", door의 개수 = " + c2.door
        );
    }
}
/**
    c1, c2 두개의 생성방식이 있지만
    c1보다 c2의 생성방식이 조금 더 간결하고 직관적으로 보이는걸 확인할 수 있습니다.

    여기서 만약 Car(){}의 코드를 없앤다면
    Car(String c, String g, int d) 생성자가 있기때문에
    Car(){}라는 기본 생성자가 생성되지 않아
    Car c1 = new Car();의 인스턴스 생성이 불가능해집니다.
**/