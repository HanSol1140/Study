/**
    super는 자손 클래스에서 조상 클래스로부터 상속받은 멤버를 참조하는데 사용되는 참조변수입니다.

**/
class Parent1{
    int x = 10;
}
class Child1 extends  Parent1{
    int x = 20;

    void method(){
        System.out.println("x = " + x);
        System.out.println("this.x = " + this.x);
        System.out.println("super.x = " + super.x);
    }
}
public class Main {
    public static void main(String[] args) {
        Child1 a = new Child1();
        a.method();
        /**
            x = 20
            this.x = 20     => 자식의 x
            super.x = 10    => 조상의 x

            이와 같이 자식과 조상이 같은 x값을 가지고 있을때, super를 사용하면 구분할 수 있습니다.

            만약 Child1에 x변수가 없다면 this.x나 super.x둘다 Parent1의 x를 따라갑니다.
        **/

        Point3D b = new Point3D(1, 2, 3);
        System.out.println("x = " + b.x + ", y = " + b.y + ", z = " + b.z);

    }
}



class Point{
    int x, y;
    Point(int x, int y){
        this.x = x;
        this.y = y;
    }
}

class Point3D extends Point{
    int z;
    Point3D(int x, int y, int z){
        super(x, y); // Point(int x, int y)를 호출
        this.z = z;
    }
}