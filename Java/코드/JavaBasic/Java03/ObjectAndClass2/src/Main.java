public class Main {

    public static void main(String[] args) {

        System.out.println("Card.width = " + Card.width);
        System.out.println("Card.width = " + Card.height);


        Card c1 = new Card();
        c1.kind = "Heart";
        c1.number = 7;


        Card c2 = new Card();
        c2.kind = "spade";
        c2.number = 4;


        System.out.println(
                "c1은" + c1.kind + ", " + c1.number + "이며, 크기는 (" + c1.width + ", " + c1.height + ")"
        ); /** c1은Heart, 7이며, 크기는 (100, 250) **/

        System.out.println(
                "c2은" + c1.kind + ", " + c2.number + "이며, 크기는 (" + c2.width + ", " + c2.height + ")"
        ); /** c2은Heart, 4이며, 크기는 (100, 250) **/

        /** 중요!! **/
        /** 클래스 변수의 값을 변경합니다 **/
        c1.width = 50;
        c1.height = 80;

        System.out.println(
                "c1은" + c1.kind + ", " + c1.number + "이며, 크기는 (" + c1.width + ", " + c1.height + ")"
        ); /** c1은Heart, 7이며, 크기는 (50, 80) **/

        System.out.println(
                "c2은" + c1.kind + ", " + c2.number + "이며, 크기는 (" + c2.width + ", " + c2.height + ")"
        ); /** c2은Heart, 4이며, 크기는 (50, 80) **/

        /**
            c1의 width값을 바꿧지만 c2의 width값까지 바뀌는 이유는
            width,height가 Card클래스의 변수이기 때문입니다.
            Card의 인스턴스인 c1과 c2는 클래스 변수(static)인 width와 height를 공유하기 때문에
            c1의 width(height)를 변경하면 c2의 width(height)도 바뀐 것과 같은 결과를 얻습니다.

            이러한 이유때문에 클래스 변수를 사용할 때는 클래스명.클래스변수의 형태로 사용하는 것이 좋습니다.

        **/


    }
}

class Card {
    String kind;
    int number;
    static int width = 100;
    static int height = 250;
}
// 이 함수를
// public static void main(String[] args) {
// 위에 올려서 Main 위로 올린뒤로 가독성을 높이려고 시도했는데 안되는것을 발견
// 이는 static클래스를 선언할 시 인스턴스를 생성할 수 없기때문이라고 합니다.
// static?
// static int width = 100; / static int height = 250; <= static이므로
// Card c1 = new Card(); <= 이것과 같이 인스턴스를 생성할 수 없음
// 그 대신, static선언한 변수는 인스턴스를 생성하지 않아도 Card.weight처럼 사용할 수 잇습니다.