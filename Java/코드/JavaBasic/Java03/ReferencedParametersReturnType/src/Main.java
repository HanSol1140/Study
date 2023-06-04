class Data3 { int x; }
public class Main {
    public static void main(String[] args) {
        Data3 d = new Data3();
        d.x = 10;
        Data3 d2 = copy(d);

        System.out.println("d.x = " + d.x);
        System.out.println("d.x = " + d2.x);
    }

    static Data3 copy(Data3 d){
        Data3 tmp = new Data3();
        tmp.x = d.x;
        return tmp;
    }
}
/**
 매개변수 뿐만이 아니라, 반환타입도 참조형이 될 수 있습니다.
 반환타입이 참조형이라는 것은, 반환하는 값의 타입이 참조형이라는 말입니다.
 모든 참조형 타입의 값은 '객체의 주소'입니다.

**/