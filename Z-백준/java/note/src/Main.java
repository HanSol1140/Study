import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader bj = new BufferedReader(new InputStreamReader(System.in));
        String text = bj.readLine().toUpperCase();
        System.out.println(text);

    }
}
