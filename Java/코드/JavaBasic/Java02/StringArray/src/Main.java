public class Main {
    public static void main(String[] args) {
        String[] name1 = new String[3];
        name1[0] = "Kim";
        name1[1] = "Park";
        name1[2] = "Yi";

        String[] name2 = new String[] {"Kim", "Park", "Yi"};
        String[] name3 = {"Kim", "Park", "Yi"};

        // 원래 클래스는 new 연산자를 통해 객체를 생성해야하지만
        // String은 특별히 생략이 가능함

        // => 원래는 이런 방식으로 생성해야 합니다.
        String[] name4 = new String[3];
        name4[0] = new String("Kim");
        name4[1] = new String("Park");
        name4[2] = new String("Yi");


    }
}