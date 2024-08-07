//합
//    시간제한  메모리 제한	제출	    정답	맞힌 사람	정답     비율
//    1 초     128 MB	    258317	165445	    140231	64.304%
//
//    문제
//        n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
//
//    입력
//        첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.
//
//    출력
//        1부터 n까지 합을 출력한다.
//
//    예제 입력 1
//    3
//    예제 출력 1
//    6

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader bj = new BufferedReader(new InputStreamReader(System.in));
        int j = Integer.parseInt(bj.readLine());
        int number = 0;
        for(int i = 1; i <= j; i++){
            number += i;
        }
        System.out.println(number);
    }
}