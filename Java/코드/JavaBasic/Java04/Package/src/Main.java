import com.codechobo.book.chobo;
/**
패키지란 클래스의 묶음입니다.

    패키지에는 클래스 또는 인터페이스를 포함시킬 수 있으며,
    서로 관련된 클래스들 끼리 그룹단위로 묶어 놓음으로써 클래스를 효율적으로 관리할 수 있습니다

    지금까지는 클래스 이름으로만 클래스를 구분했지만, 사실 클래스의 실제 이름은 패키지명을 포함한 것입니다.

 예를 들면

    String의 실제 클래스 이름은 java.lang.String입니다.
    java.lang패키지에 속한 String클래스라는 의미입니다.
    따라서 같은 이름의 클래스일지라도 서로 다른 패키지에 속하면 패키지명으로 구별이 가능합니다.

    클래스가 물리적으로 하나의 클래스파일(.class)인 것과 같이 패키지는 물리적으로 하나의 디렉토리(폴더)입니다.

    디렉토리(폴더)가 하위의 디렉토리를 가질 수 있는 것처럼
    패키지도 다른 패키지를 포함할 수 있으며 .으로 구분합니다

    ex)java.lang
    lang 패키지는 java 패키지의 하위 패키지입니다.

**/
public class Main {
    public static void main(String[] args) { // public을 설정해주지 않으면 Main에서 사용불가능함
        chobo a = new chobo();
        a.aaa(); // chobo 클래스의 aaa 함수 호출
    }

}
