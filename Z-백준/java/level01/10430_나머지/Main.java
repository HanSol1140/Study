import java.io.FileInputStream;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) throws IOException {
        System.setIn(new FileInputStream("../input.txt"));
        BufferedReader backjunProblem = new BufferedReader(new InputStreamReader(System.in));
        // 방법 1

        String[] strInput = backjunProblem.readLine().split(" ");
        int[] intInput = new int[strInput.length];

        for(int i = 0; i < strInput.length; i++){
            intInput1[i] = Integer.parseInt(strInput[i]);
        }

        System.out.println("==============================================");
        // 방법 2
        int[] intInput = Stream.of(backjunProblem.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        

        // 풀이
        int A = intInput2[0];
        int B = intInput2[1];
        int C = intInput2[2];
        System.out.println((A+B)%C);
        System.out.println(((A%C) + (B%C))%C);
        System.out.println((A*B)%C);
        System.out.println(((A%C) * (B%C))%C);


    }

}