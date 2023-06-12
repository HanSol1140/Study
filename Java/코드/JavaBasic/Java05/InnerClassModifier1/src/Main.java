public class Main {
    public static void main(String[] args) {
        class InstanceInner{
            int iv = 100;
            //**<!-- static int cv = 100; 내부 클래스중에서 static 클래스만 static 멤버를 가질 수 있다. -->**/
            final static int CONST = 100;
        }

        static class StaticInner{
            int iv = 200;
            static int cv = 200;
        }
        void myMethod(){
            class LocalInner{}
        }
    }
}