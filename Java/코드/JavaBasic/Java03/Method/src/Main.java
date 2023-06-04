public class Main {
    public static void main(String[] args) {
        MyMath mm = new MyMath(); // 인스턴스 생성
        long result1 = mm.add(5, 3);
        long result2 = mm.subStract(5, 3);
        long result3 = mm.multiply(5, 3);
        double result4 = mm.divide(5, 3); // long타입은 소수점을 출력할 수 없기 때문에 double로 선언

        System.out.println("add(5, 3) = " + result1);
        System.out.println("subStract(5, 3) = " + result2);
        System.out.println("multiply(5, 3) = " + result3);
        System.out.println("divide(5, 3) = " + result4);

        // 이런식으로 바로 호출해서 사용할 수도 있습니다.
        System.out.println(mm.add(5,3));


    }
}
// 사칙연산을 위한 4개의 메서드 MyMath
class MyMath{
    int c = 0;
    long add(long a, long b){ // 더하기
        long result = a + b;
        return result;
        // return a + b; 위의 두줄을 이와 같이 한 줄로 간단히 할 수 있다.
    }
    long subStract(long a, long b){ // 빼기
        return a - b;
    }
    long multiply(long a, long b){ // 곱하기
        return a * b;
    }
    double divide(double a, double b){ // 나누기
        return a / b;
    }
}