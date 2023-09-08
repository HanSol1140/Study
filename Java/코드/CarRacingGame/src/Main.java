import java.io.IOException;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {

        String[] carNames = Input.getCarNames();
        int rounds = Input.getRounds();

        Game aaa = new Game(carNames);
        for(var i = 0; i <= rounds; i++){
            aaa.CarMoving();
        }
        List<String> winners = aaa.getWinners();
        System.out.println("우승자 : " + String.join(", ", winners));






    }
}