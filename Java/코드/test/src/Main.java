public class Main {
    public static void main(String[] args) {

        String[] my_strings = {"progressive", "hamburger", "hammer", "ahocorasick"};
        int[][] parts = {{0, 4}, {1, 2}, {3, 5}, {7, 7}};
        StringBuilder answer = new StringBuilder();
        for(int i = 0; i < my_strings.length; i++){
            answer.append(my_strings[i].substring(parts[i][0], parts[i][1]+1));
        }
        System.out.println(answer.toString());
    }
}
