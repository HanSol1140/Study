
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader bj = new BufferedReader(new InputStreamReader(System.in));
        String text  = bj.readLine().trim();
        if(text.isEmpty()){
            System.out.println(0);
        }else{
            String[] text2 = text.split(" ");
            System.out.println(text2.length);
        }
    }
}
