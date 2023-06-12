import javax.sound.sampled.SourceDataLine;

/**
 메서드는 선언부와 구현부로 구성되어 있습니다.
 이때 선언부만 작성하고 구현부는 작성하지 않은 채로 남겨둔 것이 추상메서드입니다.
 즉, 설계만 해놓고 실제 수행될 내용은 작성하지 않은 미완성 메서드입니다.

 이와 같이 메서드를 미완성 상태로 남겨놓은 이유는
 상속받을 클래스에 따라 메서드의 내용이 달라질 수 있기 때문에
 조상클래스에서는 선언부만을 작성하고, 주석을 덧붙여 어떤 기능을 목적으로 작성되었는지 알려주고
 실제 내용은 상속받을 클래스에서 구현하도록 비워 두는 것입니다.

 따라서 추상 메서드를 상속받는 자식 클래스는 반드시 추상클래스를 완성해야합니다.

 다음은 스타크래프트의 유닛들의 공통된 부분을 뽑아내어 추상클래스로 정의하고,
 정의한 추상 클래스로 상속받아 유닛들을 작성해봅시다.
 **/

abstract class Unit{
    int x, y;
    abstract void move(int x, int y);
    void stop(){
        // System.out.println("현재 위치에 정지");
    }
}

class Marine extends Unit{ // 마린
    void move(int x, int y){
        System.out.println("Marine[x=" + x + ",y=" + y + "]");
    }
    void stimPack(){
        System.out.println("스팀팩을 사용합니다.");
    }
}

class Tank extends Unit{ // 탱크
    void move(int x, int y){
        System.out.println("Tank[x=" + x + ",y=" + y + "]");
    }
    void changeMode(){
        System.out.println("공격모드를 변환합니다.");
    }
}

class Dropship extends Unit{
    void move(int x, int y){
        System.out.println("Dropship[x=" + x + ",y=" + y + "]");
    }
    void load(){
        System.out.println("대상을 태웁니다");
    }
    void unload(){
        System.out.println("대상을 내립니다.");
    }
}
public class Main {
    public static void main(String[] args) {
        Unit[] group = { new Marine(), new Tank(), new Dropship() };

        for(int i = 0; i < group.length; i++){
            group[i].move(100, 200);
        }
    }
}