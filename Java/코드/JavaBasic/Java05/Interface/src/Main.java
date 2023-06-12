/**
    인터페이스란 일종의 추상클래스입니다.
    추상 클래스처럼 추상 메서드를 갖지만, 추상 클래스보다 추상화 정도가 높아서
    추상 클래스와 달리 몸통을 갖춘 일반 메서드 또는 멤버 변수를 구성원으로 가질 수 없습니다.
    오직 추상메서드와 상수만을 멤버로 가질 수 있으며, 그외에 다른 어떠한 요소도 허용하지 않습니다.

    추상 클래스를 부분적으로만 완성된 '미완성 설계도'라고 한다면
    인터페이스는 구현된 것은 아무것도 없는, 밑그림만 그려져 있는 '기본 설계도'라 할 수 있습니다.

    인터페이스를 작성하는 것은 클래스를 작성하는 것과 같습니다.
    다만 키워드로 class 대신 interFace를 사용합니다.

    일반적인 클래스와 달리 인터페이스의 멤버들은 다음과 같은 제약사항이 있습니다.

        - 모든 멤버 변수는 public, static, final 이어야 하며, 이를 생략할 수 있습니다.
        - 모든 메서드는 public abstract 이어야 하며, 이를 생략할 수 있습니다.
          단, static 메서드와 디폴트 메서드는 예외입니다.
**/

/**
    인터페이스의 상속
        인터페이스는 인터페이스로부터만 상속받을 수 있으며, 클래스와는 달리 다중 상속이 가능합니다.
        interface Movable{
            void move(inx x, int y);
        }
        interface Attackable{
            void attack(Unit u);
        }
        interface Fightable extends Movable, Attackable{}
        
**/

/**
    인터페이스의 구현
        인터페이스도 추상클래스처럼 그 자체로는 인스턴스를 생성할 수 없으며
        추상클래스가 상속을 통해서 추상메서드를 완성하는 것처럼,
        인터페이스도 자신에 정의된 추상메서드의 몸통을 만들어주는 클래스를 작성해야하는데,
        그 방법은 추상 클래스와 똑같지만 extends(확장)라는 키워드를 사용하는 추상 클래스와 다르게
        인터페이스는 구현한다는 implements(구현)을 사용합니다.

    
        class 클래스이름 implements 인터페이스이름{
            // 인터페이스에 정의된 추상 메서드를 모두 구현해야 합니다.
        }

        ex)
        class Fighter implements Fightable{
            public void move(int x, int y){ 생략 }
            public void attack(Unit u){ 생략 }
        }


        이때, 인터페이스의 메서드 중 일부만 구현한다면, abstract을 붙여 추상클래스로 선언해야합니다.
        abstract class Fighter implements Fightable{
            public void move(int x, int y){ 생략 }
        }

        그리고 다음과 같이 상속과 구현을 동시에 할 수 있습니다.
        class FIghter extends Unit implements Fightable{
            public void move(int x, int y){ 생략 }
            public void attack(Unit u) { 생략 } 
        }
**/
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
}