#include <IRremoteESP8266.h>
#include <IRsend.h>
// #include <IRrecv.h>
// #include <IRutils.h>
const uint16_t btn1 = 9;
const uint16_t btn2 = 10;
// => 모듈을 보면 2, 0 처럼 되어 있으나 핀번호가 양옆으로 뒤집혀 있음,
const uint16_t IR_TX = 4; // TX
// const uint16_t IR_RX = 14; // RX

IRsend irsend(IR_TX);
// IRrecv irrecv(IR_RX);

// 수신 버퍼
// decode_results results;

// 전원On/Off
const uint16_t PowerIR[44] = {
  3000, 2450, 550, 450,  550, 1400, 550, 450,
  550,  1450, 550, 400,  550, 1450, 550, 1450,
  500,  450,  550, 450,  550, 450,  550, 450,
  550,  450,  500, 450,  550, 450,  550, 1450,
  500,  1450, 550, 1450, 550, 1400,  550, 1450,
  550,  1400, 550
};
void sendPowerIR(){
    Serial.println("전원 ON/OFF");
    irsend.sendRaw(PowerIR, 44, 38);  // Send a raw data capture at 38kHz.
}


// 충전(HomeIR)
const uint16_t HomeIR[44] = {
  3050, 2400, 550, 450,  550, 1400, 600, 450,
  500,  1450, 550, 450,  550, 1400, 550, 450,
  550,  1450, 550, 450,  550, 400,  550, 450,
  550,  450,  550, 400,  600, 1400, 550, 450,
  550,  1450, 550, 1400, 550, 1450, 550, 1400,
  550,  1450, 550
};
void sendHomeIR(){
    Serial.println("홈 IR신호 발생");
    irsend.sendRaw(HomeIR, 44, 38);  // Send a raw data capture at 38kHz.
}


// 청소 시작/정지
const uint16_t PauseWorkIR[44] = {
  3050, 2450, 550, 400,  550, 1450, 550, 450,
  550,  1400, 550, 450,  550, 1450, 550, 1400,
  550,  450,  550, 1450, 550, 450,  500, 1450,
  550,  450,  550, 450,  550, 400,  550, 1450,
  550,  450,  550, 1400, 550, 450,  550, 1450,
  550,  1400, 550
};
void sendPauseWorkIR(){
    Serial.println("시작/정지 IR신호 발생");
    irsend.sendRaw(PauseWorkIR, 44, 38);  // Send a raw data capture at 38kHz.
}




void setup() {
  Serial.begin(115200);
  irsend.begin();
  // irrecv.enableIRIn();  // Start the receiver
  pinMode(btn1, INPUT_PULLUP); // btn1을 입력으로 설정
  pinMode(btn2, INPUT_PULLUP); // btn2를 입력으로 설정
}

void loop() {
  if (digitalRead(btn1) == LOW) { // btn1이 눌렸는지 확인
    sendPauseWorkIR();
    Serial.println("btn1"); // 시리얼 모니터에 btn1 출력
    delay(2000); // 디바운싱을 위한 지연
  }

  if (digitalRead(btn2) == LOW) { // btn2가 눌렸는지 확인
    sendHomeIR();
    Serial.println("btn2"); // 시리얼 모니터에 btn2 출력
    delay(2000); // 디바운싱을 위한 지연
  }
  // 수신 로직
  if (irrecv.decode(&results)) {
    // 수신된 데이터와 checkData를 비교
    for (int i = 0; i < 44; i++) {
      if(i % 10 == 0){
        Serial.println("");
      }
      Serial.print(results.rawbuf[i]);
      Serial.print(" ");
    }
    irrecv.resume();  // 다음 값 수신 준비
  }
}
