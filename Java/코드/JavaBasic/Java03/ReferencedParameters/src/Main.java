class Data2 { int x; }
public class Main {
    public static void main(String[] args) {
        Data2 d = new Data2();
        d.x = 10;
        System.out.println("main() : x = " + d.x);
        change(d); /** 이 부분이 다릅니다. d.x => d **/
        System.out.println("After change(d)");

        System.out.println("main() : x = " + d.x);
        /**
            이전과 달리 change메서드를 호출한 후에 d.x의 값이 변경되었습니다.
            1. change메서드가 호출되면서 참조변수 d의 값(주소)이 매개변수 d에 복사됨.
               이제 매개변수 d에 저장된 주소값으로 x에 접근이 가능해집니다.

                 │ change        │
                 │   d(0x100)    │
                 ├────── ▲ ──────┤
                 │       ↑       │
                 │ main  │       │      0x100
                 │   d(0x100)    │ ───▶ x(10)
                 └───────────────┘

            2. change메서드에서 매개변수 d로 x의 값을 1000으로 변경.

                 │ change        │
                 │   d(0x100)    │ ───────┐
                 ├───────────────┤        ↓
                 │ main          │      0x100
                 │   d(0x100)    │ ───▶ x(1000)
                 └───────────────┘

            3. change메서드가 종료되면서 매개변수 d는 스택에서 제거됨.

                 ┌───────────────┐
                 │ main          │      0x100
                 │   d(0x100)    │ ───▶ x(1000)
                 └───────────────┘
            이전 예제와 달리 change메서드의 매개변수를 참조형으로 선언햇기 때문에
            x의 값이 아닌 변수 d의 주소가 매개변수 d에 복사되었습니다.
            이제 main메서드의 참조변수 d와 change메서드의 참조변수d는 같은 객체를 가리키게 됩니다.
            따라서 매개변수 d로 x의 값을 읽는 것과, 변경이 가능한 것입니다.
        **/
    }
    static void change(Data2 d){
        d.x = 1000;
        System.out.println("change() : x = " + d.x);
    }
}