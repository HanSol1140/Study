#include <Arduino.h>
#include <driver/gpio.h>

#define DATA_PIN 14  // 데이터 비트

volatile bool dataState = false;
volatile bool bitReady = false;
volatile uint8_t bitCount = 0;
volatile uint8_t bits[8];

void IRAM_ATTR handleDataInterrupt() {
  dataState = gpio_get_level(DATA_PIN);
  bitReady = true;
}

void setup() {
  Serial.begin(9600);

  // GPIO 설정
  gpio_pad_select_gpio(DATA_PIN);
  gpio_set_direction(DATA_PIN, GPIO_MODE_INPUT);
  gpio_set_intr_type(DATA_PIN, GPIO_INTR_ANYEDGE);
  gpio_install_isr_service(0);
  gpio_isr_handler_add(DATA_PIN, handleDataInterrupt, NULL);

  // 인터럽트 활성화
  gpio_intr_enable(DATA_PIN);
}

void loop() {
  if (bitReady) {
    bits[bitCount++] = dataState;
    if (bitCount == 8) {
      // 번호를 ASCII 코드로 변환하여 출력
      for (uint8_t i = 0; i < 8; i++) {
        Serial.print(char(bits[i]));
      }
      Serial.println();

      // 변수 초기화
      bitCount = 0;
      bitReady = false;
    }
  }
}
