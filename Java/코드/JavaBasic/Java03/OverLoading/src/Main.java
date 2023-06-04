/**
    메서드도 변수와 마찬가지로 같은 클래스 내에서 서로 구별될 수 있어야 합니다.

    그러나 자바에서는 한클래스 내에 이미 사용하려는 이름과 같은 메서드가 있더라도
    매개변수의 개수, 또는 타입이 다르면 같은 이름을 사용해서 메서드를 정의할 수 있습니다.

    이처럼, 한 클래스 내에 같은 이름의 메서드를 여러 개 정의하는 것을
    메서드 오버로딩(Method OverLoading)이라고 합니다.

    오버로딩이 성립하기 위해서는 다음과 같은 조건을 만족해야 합니다.

        1. 메서드의 이름이 같아야 한다.
        2. 매개변수의 개수 또는 타입이 달라야 한다. (같다면 이미 있는 메서드라고 에러를 출력)
        3. 반환 타입은 관계 없다.

    ※ 부모클래스의 메서드를 자식클래스에서 재정의하는 Override개념과 혼동하지 않도록 주의
**/
public class Main {
    public static void main(String[] args) {
        MyMath mm = new MyMath();
        System.out.println("mm.add(3, 3) 결과 : " + mm.add(3,3));
        System.out.println("mm.add(3L, 3) 결과 : " + mm.add(3L,3));
        System.out.println("mm.add(3, 3L) 결과 : " + mm.add(3,3L));
        System.out.println("mm.add(3L, 3L) 결과 : " + mm.add(3L,3L));

        int[] a = {100, 200, 300};
        System.out.println("mm.add(a) 결과 : " + mm.add(a));
    }
}
class MyMath{
    int add(int a, int b){
        System.out.print("int add(int a, int b) - ");
        return a + b;
    }

    long add(int a, long b){
        System.out.print("int add(int a, int b) - ");
        return a + b;
    }

    long add(long a, int b){
        System.out.print("long add(long a, int b) - ");
        return a + b;
    }

    long add(long a, long b){
        System.out.print("long add(long a, int b) - ");
        return a + b;
    }

    int add(int[] a){ // 배열의 모든 요소의 합을 결과로 돌려준다
        System.out.print("int adD(int[] a) - ");
        int result = 0;
        for(int i = 0; i < a.length; i++){
            result += a[i];
        }
        return result;

    }
}