/**
    지금까지 배운 클래스, 함수 사용방법 실습해보기
**/


public class Main {
    public static void main(String[] args) {
        Student s = new Student("홍길동", 1, 1, 100, 60, 76);
        String str = s.info();
        System.out.println(str);

        int total = s.getTotal();
        float average = s.getAverage();
        System.out.println("이름은 : " + s.name);
        System.out.println("총점은 : " + total);
        System.out.println("평균점수는 : " + average);

    }
}
class Student{
    String name;
    int ban;
    int no;
    int kor;
    int eng;
    int math;
    Student(String name, int ban, int no, int kor, int eng, int math){
        this.name = name;
        this.ban = ban;
        this.no = no;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
    String info(){
        return name + ", " + ban + ", " + no + ", " + kor + ", " + eng + ", " + math;
    }

    int getTotal(){
        return kor + eng + math;
    }

    float getAverage(){
        // return Math.round(((kor + eng + math)/(float)3)*100)/100f;
        float average = (kor + eng + math)/3f;
        average = Math.round(average * 100) / 100f;
        return average;
    }

}