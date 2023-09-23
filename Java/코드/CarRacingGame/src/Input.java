import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Input {
    private static final BufferedReader inputValue = new BufferedReader(new InputStreamReader(System.in));

    public static String[] getCarNames() throws IOException {
        System.out.println("자동차 이름 입력");
        String input = inputValue.readLine();
        return input.split(",");
    }

    public static int getRounds() throws IOException {
        System.out.println("라운드 수 입력");
        return Integer.parseInt(inputValue.readLine());
    }
}