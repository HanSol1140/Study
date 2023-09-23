public class Car {
    private String carName;
    private int movePoint = 0;

    // 생성자
    public Car(String carName){
        this.carName = carName;
    }

    public String getCarName() {
        return carName;
    }

    public void move(){
        if((Math.random() * 10) >= 4){
            movePoint++;
        }
    }
    public int getMovePoint(){
        return movePoint;
    }
}
