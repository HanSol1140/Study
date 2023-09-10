import java.util.List;

public class Message {

    public static void getCarsMessage(){
        System.out.println("참가할 자동차 수 입력 (,로 구분)");
    }
    public static void getRoundMessage(){
        System.out.println("라운드 수 입력");
    }

    public static void getWinners(Game aaa){
        List<String> winners = aaa.getWinners();
        System.out.println("우승자 : " + String.join(", ", winners));
    }

    public static void lineWrite(){
        System.out.println("=======================");
    }

    public static void askMessage(){
        System.out.println("게임을 다시 하시겠습니까?");
    }
}
