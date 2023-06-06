class MyPoint{
    int x;
    int y;
    MyPoint(int x, int y){
        this.x = x;
        this.y = y;
    }
    double getDistance(int x1, int y1){
        int dx = x1 - x;
        int dy = y1 - y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
public class Main {
    // 거리 구하기
    // 두 점(x, y)와 (x1, y1) 간의 거리를 구한다.
    public static void main(String[] args) {
        MyPoint p = new MyPoint(1, 1);
        // p와 (2,2)의 거리를 구한다
        System.out.println(p.getDistance(2, 2));

    }
}