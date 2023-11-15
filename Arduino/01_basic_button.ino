const uint16_t btn1 = 0; // btn1이 연결된 GPIO 핀 번호
const uint16_t btn2 = 2; // btn2가 연결된 GPIO 핀 번호

void setup() {
  Serial.begin(115200);
  pinMode(btn1, INPUT_PULLUP); // btn1을 입력으로 설정
  pinMode(btn2, INPUT_PULLUP); // btn2를 입력으로 설정
}

void loop() {
  if (digitalRead(btn1) == LOW) { // btn1이 눌렸는지 확인
    Serial.println("btn1"); // 시리얼 모니터에 btn1 출력
    delay(300); // 디바운싱을 위한 지연
  }

  if (digitalRead(btn2) == LOW) { // btn2가 눌렸는지 확인
    Serial.println("btn2"); // 시리얼 모니터에 btn2 출력
    delay(300); // 디바운싱을 위한 지연
  }
}
