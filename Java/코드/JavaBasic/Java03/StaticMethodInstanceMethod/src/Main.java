/**
    클래스(static) 메서드는 인스턴스 생성 없이 호출가능하다.

    이번에는 같은 기능을 가진 더하기, 빼기, 곱하기, 나누기를
    인스턴스 메서드와 클래스 메서드로 하나씩 설정한 후 사용하는 것으로 알아보겠습니다.
 **/
class MyMath2{
    long a, b;
    long add()      { return a + b; }
    long subtract() { return a - b; }
    long multiply() { return a * b; }
    double divide() { return a / b; }

    static long add(long a, long b){ // 더하기
        return a + b;
    }
    static long subStract(long a, long b){ // 빼기
        return a - b;
    }
    static long multiply(long a, long b){ // 곱하기
        return a * b;
    }
    static double divide(double a, double b){ // 나누기
        return a / (double)b;
    }
}
public class Main {
    public static void main(String[] args) {
        System.out.println(MyMath2.add(200, 100));
        System.out.println(MyMath2.subStract(200, 100));
        System.out.println(MyMath2.multiply(200, 100));
        System.out.println(MyMath2.divide(200, 100));

        MyMath2 mm = new MyMath2(); // 인스턴스를 생성
        mm.a = 200;
        mm.b = 100;
        System.out.println(mm.add());
        System.out.println(mm.subtract());
        System.out.println(mm.multiply());
        System.out.println(mm.divide());
    }
}

/**
    이와 같이 static으로 선언한 메서드는 클래스를 생성한순간 클래스명.메서드명으로 사용이 가능하지만
    인스턴스로 선언한 메서드는 인스턴스를 생성하기 전에는 사용할 수 없는것을 볼 수 있습니다.
**/