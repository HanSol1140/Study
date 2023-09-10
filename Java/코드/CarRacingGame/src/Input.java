import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Input {
    private static final BufferedReader inputValue = new BufferedReader(new InputStreamReader(System.in));
    public static String[] getCarNames() throws IOException {
        String input = inputValue.readLine();
        return input.split(",");
    }

    public static int getRounds() throws IOException {
        return Integer.parseInt(inputValue.readLine());
    }

    public static String ask() throws  IOException{
        String answer = inputValue.readLine();
        return  answer;
    }
}