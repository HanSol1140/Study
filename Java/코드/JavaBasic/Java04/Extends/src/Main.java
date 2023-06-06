// 상속 예제
class TV{
    boolean power; // 전원상태(on/off)
    int channel;   // 채널

    void power(){
        power = !power;
    }
    void channelUp(){
        ++channel;
    }
    void channelDown(){
        --channel;
    }
}
class SmartTv extends TV{ // 상속
    boolean caption; // 캡션상태(on/off)
    void displayCaption(String text){
        if(caption){ // 캡션상태가 on(true)일 때만 text를 보여준다.
            System.out.println(text);
        }
    }
}
public class Main {
    public static void main(String[] args) {
        SmartTv stv = new SmartTv();
        stv.channel = 10;
        stv.channelUp();
        System.out.println(stv.channel);
        stv.displayCaption("Hello World");
        stv.caption = true;
        stv.displayCaption("Hello World");
    }
}

// 이 코드는 caption값이 true가되야 displayCaption의 sout이 작동하는 코드입니다.