public class Main {
    class InstanceInner{
            int iv = 100;
            // static int cv = 100; 에러! 내부 클래스중에서 static 클래스만 static 멤버를 가질 수 있다.
            final static int CONST = 100;
    }

    static class StaticInner{
        int iv = 200;
        static int cv = 200; // static 클래스만 tatic 멤버를 정의할 수 있습니다.
    }
    void myMethod(){
        class LocalInner{
            int iv = 300;
            // static int cv = 300; 에러! static 변수를 선언할 수 없다.
            final static int CONST = 300;
        }
    }

    public static void main(String[] args) {
        System.out.println(InstanceInner.CONST);    
        System.out.println(StaticInner.cv);
    }
}