public class Game {
    private final Car[] cars;

    public Game(String[] carNames) {
        cars = new Car[carNames.length];
        for (int i = 0; i < carNames.length; i++) {
            cars[i] = new Car(carNames[i]);
        }
    }
    public void CarMoving() {
        for (Car car : cars) {
            car.move();
        }
    }
    public void getPoint() {
        for (Car car : cars) {
            car.getMovePoint();
        }
    }
    public void getCarNames() {
        for (Car car : cars) {
            System.out.println(car.getCarName());
        }
    }

    public String getWinner(){
        String Winner = "";
        int a = 0;
        for (Car car : cars) {
            if(a < car.getMovePoint()){
                a = car.getMovePoint();
                Winner = car.getCarName();
            };
        }
        return Winner;
    }

}
