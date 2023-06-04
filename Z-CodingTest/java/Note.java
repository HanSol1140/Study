import java.util.ArrayList;

public class note {
    public static void main(String[] args){
        int[] num_list = {1,2,3,4,5};

        int answer = 0;
        
        StringBuilder odd = new StringBuilder();
        StringBuilder even = new StringBuilder();

        for(int i = 0; i < num_list.length; i++){
            if(num_list[i] % 2 != 0){ // 홀수라면
                odd.append(num_list[i]);
            }else{ // 짝수라면
                even.append(num_list[i]);
            }
        }

        int sumOdd = Integer.parseInt(odd.toString());
        int sumEven = Integer.parseInt(even.toString());

        answer = sumOdd + sumEven;
        System.out.println(answer);
        System.out.println(sumOdd);
        System.out.println(sumEven);


        
    
    }
}
