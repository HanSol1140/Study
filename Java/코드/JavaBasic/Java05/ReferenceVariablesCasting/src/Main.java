public class Main {
    public static void main(String[] args) {
        Car car = null;
        FireEngine fe = new FireEngine();
        FireEngine fe2 = null;

        fe.water();
        car = fe; // car = (Car)fe;에서 형변환이 생략됩니다.
        /**
            car.water();
            => 컴파일 에러! Car(조상)타입의 참조변수로는 water()(자식의 멤버)를 호출할 수 없습니다.
        **/
        fe2 = (FireEngine)car;
        fe2.water();

        /**
            이렇게 생성한 조상 타입의 인스턴스를 자식타입으로 형변환하면
            새로 형변환한 인스턴스에서는 자식 클래스의 멤버변수도 사용할 수 있습니다.
        **/


        // instanceof 연산자
        Car c = new Car();
        FireEngine c2 = new FireEngine();
        System.out.println(c2 instanceof Car);

    }

    static void doWork(Car c){
        if(c instanceof FireEngine){        // 형변환이 가능한지 확인
            System.out.println("형변환이 완료");
            FireEngine fe3 = (FireEngine)c; // 형변환
            fe3.water();
        }else{
            System.out.println("형변환이 불가능합니다.");
        }
    }

    /**

     자바에서 instanceof 연산자는 객체의 실제 타입을 확인하기 위해 사용됩니다.
     이 연산자는 객체가 특정 클래스 또는 해당 클래스의 하위 클래스의 인스턴스인지를 확인합니다.

     위의 예시에서 c 변수는 FireEngine 객체를 참조하고 있지만, 변수의 타입은 Car로 선언되었습니다.
     따라서 c instanceof FireEngine는 false를 반환합니다. 이는 c 변수가 Car 타입의 변수로 선언되었기 때문에
     해당 변수로는 FireEngine의 멤버에 직접 접근할 수 없기 때문입니다.

     즉, 조상 클래스인 Car로 선언된 c는 자식 클래스(c2)에 속해있지않습니다
     반대로 System.out.println(c2 instanceof Car);를 해보면 True를 반환합니다.
     FireEngine인 c2는 Car의 하위 클래스이기 때문입니다.

     만약 c 변수를 FireEngine 타입으로 선언하면 c instanceof FireEngine는 true를 반환할 것입니다.
    **/
}

class Car{
    String color;
    int door;
    void drive(){ // 운전기능
        System.out.println("drive, Brrrr~");
    }
    void stop(){ // 정지기능
        System.out.println("stop!");
    }
}

class FireEngine extends Car{ // 소방차
    void water(){ // 물을 뿌리는 기능
        System.out.println("water!!");

    }
}