#include "esp_sleep.h"

#define PIN32 (gpio_num_t)32
#define PIN33 (gpio_num_t)33

unsigned long lastSleepTime = 0; // 마지막 슬립 시간을 저장하는 변수
const unsigned long sleepInterval = 10000; // 10초

void setup() {
  Serial.begin(115200); // 시리얼 통신을 시작합니다.
  delay(1000); // 시리얼 통신이 시작되기를 기다립니다.

  pinMode(PIN32, INPUT_PULLUP);
  pinMode(PIN33, INPUT_PULLUP);

  esp_sleep_enable_ext0_wakeup(PIN32, 0); // PIN32가 LOW가 되면 깨어납니다.

  Serial.println("Starting...");
  lastSleepTime = millis(); // 초기 슬립 시간 설정
}

void goToSleep() {
  Serial.println("Going to sleep now");
  Serial.flush(); // 시리얼 버퍼를 비웁니다.
  esp_light_sleep_start(); // 라이트 슬립 모드로 진입합니다.
  lastSleepTime = millis(); // 슬립에서 깨어난 후의 시간을 업데이트합니다.
}

void loop() {
  unsigned long currentTime = millis();

  if (digitalRead(PIN32) == LOW) {
    Serial.println("Button 32 pressed");
    delay(200); // 버튼 바운싱 방지
  }

  if (digitalRead(PIN33) == LOW) {
    Serial.println("Button 33 pressed");
    delay(200); // 버튼 바운싱 방지
  }

  // 10초마다 라이트 슬립 모드로 전환
  if (currentTime - lastSleepTime >= sleepInterval) {
    goToSleep();
  }
}
