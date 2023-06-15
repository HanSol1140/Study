public class Main {
    class InstanceInner{}
    static class StaticInner{};
    
    // 인스턴스 멤버 간에는 서로 직접 접근이 가능하다.
    InstanceInner iv = new InstanceInner();

    // static 멤버 간에는 서로 직접 접근이 가능하다
    static StaticInner cv = new StaticInner();

    static void staticMethod(){
        // static멤버는 인스턴스 멤버에 직접 접근할 수 없다.
        // InstatnceInner obj1 = new InstanceInner()
        StaticInner obj2 = new StaticInner();
        // 굳이 접근하려면 아래와 같이 객체를 생성해야한다.
        Main outer = new Main();
        InstanceInner obj1 = outer.new InstanceInner();
    }

    void instanceMethod(){
        // 인스턴스 메서드에서는 인스턴스 멤버와 static멤버 모두 접근이 가능하다.
        InstanceInner obj1 = new InstanceInner();
        StaticInner obj2 = new StaticInner();
    }
    void myMethod(){
        class LocalInner{}
        LocalInner lv = new LocalInner();
    }
    public static void main(String[] args) {
    }
}
/**
    인스턴스 멤버는 같은 클래스에 있는 인스턴스 멤버와 static 멤버는 모두 직접 호출 가능하지만
    static 멤버는 인스턴스 멤버를 직접 호출할 수 없는 것처럼
    인스턴스 클래스는 외부 클래스의 인스턴스 멤버를 바로 사용할 수 있지만
    스태틱 클래스는 외부 클래스의 인스턴스 맴버를 객체 생성없이 사용할 수 없다
    마찬가지로 스태틱 클래스에서는 인스턴스 클래스의 멤버들을 객체 생성없이 사용할 수 없다.
**/