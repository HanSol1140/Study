public class Main {
    public static void main(String[] args) {
        int n = 2;
        int t = 10;
        System.out.println(solution(n, t));
    }

    public static int solution(int n, int t) {
        return n * (int)Math.pow(2, t);
    }
}
