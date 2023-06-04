public class Main {
    public static void main(String[] args) {
        System.out.println("***********");
        // ***********

        System.out.println("====================");

        for(var i = 0; i <= 10; i++){
            System.out.print("*");
        }
        // ***********

        System.out.println("\n====================");

        System.out.println("시작");
        for(var i = 1; i <= 5; i++){
            for(var j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        // *
        // **
        // ***
        // ****
        // *****

    }
}