import java.util.ArrayList;
import java.util.List;

public class Game {
    private final Car[] cars;

    public Game(String[] carNames) {
        cars = new Car[carNames.length];
        for (int i = 0; i < carNames.length; i++) {
            cars[i] = new Car(carNames[i]);
        }
    }
    public void CarMoving(int rounds) {
        for (int i = 0; i < rounds; i++) {
            for (Car car : cars) {
                car.move();
            }
            Message.lineWrite();
        }
    }

    public List<String> getWinners(){
        List<String> winners = new ArrayList<>();
        int highScore = 0;

        for (Car car : cars) {
            if(highScore < car.getMovePoint()){
                highScore = car.getMovePoint();
            }
        }

        for (Car car : cars) {
            if(car.getMovePoint() == highScore) {
                winners.add(car.getCarName());
            }
        }

        return winners;
    }
}
