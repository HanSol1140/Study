/**
 클래스나 멤버, 주로 멤버에 접근 제어자를 사용하는 이유는,
 클래스의 내부에 선언된 데이터를 보호하기 위함입니다.
 데이터가 유효한 값을 유지하도록, 또는 비밀번호와 같은 데이터를 외부에서 함부로 변경하지 못하도록 하기 위해서는 외부로부터의 접근을 제한하는 것이 필요합니다.

 이것을 데이터 감추기(data hiding)이라고 하며, 객체지향개념의 캡슐화(Encapsulation)에 해당하는 내용입니다.
 
 또 다른 이유는 클래스 내에서만 사용되는
 내부 작업을 위해 임시로 사용되는 멤버변수나
 부분작업을 처리하기 위한 메서드 등의 멤버들을 클래스 내부에 감추기 위해서입니다.
 
 외부에서 접근할 필요가 없는 멤버들을 private로 지정하여 외부에 노출하지 않음으로써 복잡성을 줄일 수 있습니다.
 이것 역시 캡슐화에 해당합니다.
 
 접근 제어자를 사용하는 이유
 
    외부로부터 데이터를 보호하기 위해서
    외부에는 불필요한, 내부적으로만 사용되는 부분을 감추기 위해서
 
    getter / setter 단축키
    private int hour;
    private int minute;
    private int second;

    이렇게 변수를 선언한 후
    코딩할 부분에 커서를 놓고 Alt + Insert키를 누르면 됩니다.
**/

public class Main {
    public static void main(String[] args) {

    }

    public class Time{
        private int hour;
        private int minute;
        private int second;

        public int getHour() {
            return hour;
        }
        public void setHour(int hour) {
            if(hour < 0 || hour > 23) return;
            this.hour = hour;
        }

        public int getMinute() {
            return minute;
        }
        public void setMinute(int minute) {
            if(minute < 0 || minute > 59){
                return;
            }
            this.minute = minute;
        }

        public int getSecond() {
            return second;
        }
        public void setSecond(int second) {
            if(minute < 0 || minute > 59) return;
            this.second = second;
        }
    }
    /**
     get으로 시작하는 메서드(getter)는 단순히 멤버변수의 값을 반환하는 일을 하고,
     set으로 시작하는 메서드(setter)는 매개변수에 지정된 값을 검사하여
     조건에 맞는 값일 때만 멤버변수의 값을 변경하도록 작성되었습니다.
     
     만약 상속을 통해 확장이 예상되는 클래스라면 멤버에 접근 제한을 주되,
     자손클래스에서 접근하는 것이 가능하도록 private대신 protected를 사용합니다.
     private가 붙은 멤버는 자손 클래스에서도 접근이 불가능하기 때문입니다.
    **/
}
