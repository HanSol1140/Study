import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        InputView inputView = new InputView();
        OutputView outputView = new OutputView();
        CarController carController = new CarController(inputView, outputView);
        carController.game();
    }
}
