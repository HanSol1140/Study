import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        while (true) {
            Message.getCarsMessage();
            String[] carNames = Input.getCarNames();

            Message.getRoundMessage();
            int rounds = Input.getRounds();

            Game aaa = new Game(carNames);
            aaa.CarMoving(rounds);

            Message.getWinners(aaa);

            Message.askMessage();
            String answer = Input.ask();

            if(answer.equals("Y") && answer.equals("y")){
                break;
            }
        }
        System.out.println("게임종료");
    }
}