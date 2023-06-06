/**
    Overide : 재정의
    조상클래스로부터 상속받은 메서드의 내용을 변경하는것을 오버라이딩이라고 합니다.
    상속받은 그대로 메서드를 사용하는 경우도 하지만, 자손클래스에서 자신에 맞게 변경해야될 때가 있습니다.
    이때 메서드를 변경하는것을 오버라이딩이라고합니다.
 
    오버로딩과 비슷하게 보이지만 다른 개념이므로 단어 혼동에 주의

    오버라이딩의 조건

    1. 접근 제어자는 조상 클래스의 메서드보다 좁은 범위로 변경할 수 없다.

        접근 제어자의 접근범위를 넓은것에서 좁은 것 순으로 나열하면
        public -> proected -> (default) -> private 순으로 정렬됩니다.

    2. 조상 클래스의 메서드보다 많은 수의 예외를 선언할 수 없다.

        class Parent {
            void parentMethod() throws IOException, SQLException{
                ...
            }
        }
        class Child extends Parent{
            void parentMethod() throws IOException{
                ...
            }
        }
        이와 같이 조상클래스보다 같거나 적은수의 예외를 선언할 수 있습니다.

    3. 선언부가 조상 클래스의 메서드와 일치해야 한다.(너무 당연한것)

**/
class Point{
    int x;
    int y;
    String getLocation() {
        return "x : " + x + ", y : "+ y;
    }
}

class  Point3D extends Point{
    int z;
    String getLocation(){
        return "x : " + x + ", y : " + y + ", z : " + z;
    }
}
public class Main {
    public static void main(String[] args) {
        Point3D aaa = new Point3D();
        aaa.x = 1;
        aaa.y = 1;
        aaa.z = 1;
        System.out.println(aaa.getLocation());
    }
}