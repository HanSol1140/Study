#include <WiFi.h>
#include <WebServer.h>

// 테이블 청소
// (input) 
#define cleanSign 10
#define cleanStart 9

// 청소로보 호출(17) / 호출취소(18) /
//(input)

#define callCleanBot 17
#define callCleanBotCancel 18

// 키오스크(kiosk)
// 키오스크상승(19) / 키오스크 하강(21) / 키오스크 정지(23) 
// (input) 
#define kioskUp 19 
#define kioskDown 21
#define kioskStop 23

// Lift 키오스크 정지(12) / Lift 키오스크 하강(13) / Lift 키오스크 상승(14)
// (output)
#define liftKioskUp 14
#define liftKioskDown 13
#define liftKioskStop 12

// Timer #1
int min1 = 0;
int sec1 = 3;
int timerSet1 = 3000;

// Timer #2
int min2 = 0;
int sec2 = 3;
int timerSet2 = 3000;
// Timer #3
int min3 = 0;
int sec3 = 3;
int timerSet3 = 3000;

int count = 0;

const char* ssid = "NNX-2.4G";
const char *password = "$@43skshslrtm";

WebServer server(80);

void handle_root();

// 키오스크 정지 버튼 입력
void kioskOnOffButton() {
  if (!digitalRead(kioskStop)) {
    if (!digitalRead(liftKioskStop)) { // 키오스크가 정지되어 있으면 실행
      Serial.println("키오스크를 실행합니다");
      digitalWrite(liftKioskStop, 1);
    } else { // 동작 중이면 정지
      Serial.println("키오스크를 정지합니다.");
      digitalWrite(liftKioskStop, 0);
    }
  }
}

// 키오스크 상승 버튼 입력
void kioskUpButton() {
  if (!digitalRead(kioskUp)) {
    // 2초간 버튼이 눌릴 때까지 대기
    unsigned long pressTime = buttonPressDuration(kioskUp, 2000);
    if (pressTime == 0) {
      Serial.println("버튼이 눌리지 않았습니다.");
      return;
    }
    Serial.println("키오스크 상승");

    // 경고음성 출력

    delay(timerSet1);

    digitalWrite(liftKioskUp, 1);
    delay(1000);
    digitalWrite(liftKioskUp, 0);
  }
}

// 키오스크 하강 버튼 입력
void kioskDownButton() {
  if (!digitalRead(kioskDown)) {
    // 2초간 버튼이 눌릴 때까지 대기
    unsigned long pressTime = buttonPressDuration(kioskDown, 2000);
    if (pressTime == 0) {
      Serial.println("버튼이 눌리지 않았습니다.");
      return;
    }
    Serial.println("키오스크 하강");

    // 경고음성 출력

    delay(timerSet1);

    digitalWrite(liftKioskDown, 1);
    delay(1000);
    digitalWrite(liftKioskDown, 0);
  }
}

// 버튼이 지정된 시간 동안 눌린 상태를 감지하는 함수
// 매개변수로 핀번호와, 눌러야되는 필요시간을 지정
// startTime에 millis(현재시간) - 을 지정하고
// while문으로 핀번의 출력상태를 읽고(HIGH/LOW인지에 따라 !기호를 붙이고 빼야할듯합니다.)
// if millis(현재시간) - startTime(누르기전에 측정한 당시의 시간)이
// duration 지정한시간 보다 크거나같다는것은 duration 시간동안 눌려있으면 return한다는 의미입니다.
unsigned long buttonPressDuration(int buttonPin, unsigned long duration) {
  unsigned long startTime = millis();
  while (digitalRead(buttonPin)) {
    if (millis() - startTime >= duration) {
      return // (millis() - startTime;) 몇초동안 눌렸는지확인 / 필요없다면 원하는 동작을 수행
    }
    delay(100);
  }
  return 0;
}


// ----------------------------------------------------------------
// 현재 시간 가져오기
unsigned long currentTime = millis();
// 경과한 시간 계산
unsigned long elapsedTime = currentTime - startTime;

// ----------------------------------------------------------------
long pressDuration(int button, unsigned long duration) {
    long startTime = millis();
    long endTime = 0;
    bool pressed = false;

    while (digitalRead(button) == LOW) { // 버튼 상태가 LOW라면
        if (millis() - startTime >= duration) {
            return 1;
        }
        delay(100);
    }   
    while (digitalRead(button) == HIGH) { // 버튼 상태가 HIGH라면
        if (millis() - startTime >= duration) {
            return 0;
        } 
        delay(100);
    }
}

// 키오스크 하강 버튼 입력
void kioskDownButton(){
  if(!digitalRead(kioskDown)){
    // 2초간 버튼이 눌릴 때까지 대기
    long pressTime = pressDuration(kioskDown, 2000);
    if (pressTime == 0) {
      Serial.println("버튼이 눌리지 않았습니다.");
      return;
    }else{
      Serial.println("키오스크 하강");

      // 경고음성 출력

      // delay(timerSet1);

      digitalWrite(liftKioskDown, LOW); // 키오스크 하강 신호를 LOW로 출력
      delayMicroseconds(1000000);
      digitalWrite(liftKioskDown, HIGH); // 키오스크 하강 신호를 HIGH로 복귀
    }
  }
}



long pressDuration(int button, unsigned long duration) {
  long startTime = millis();
  long endTime = 0;
  bool pressed = false;

while (millis() - startTime < duration) { // duration 동안 반복
  if (digitalRead(button) == LOW && !pressed) { // 버튼 상태가 LOW이고 pressed가 false라면
    pressed = true; // pressed를 true로 바꾸고
    endTime = millis(); // endTime에 현재 시간 저장
  }
  if (digitalRead(button) == HIGH && pressed) { // 버튼 상태가 HIGH이고 pressed가 true라면
    pressed = false;
    return endTime - startTime; // endTime과 startTime의 차이를 반환
  }
  }
    return 1; 
}