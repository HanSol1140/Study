// ESP32의 I2C 핀 설정 (변경 가능)
// ESP32와 PN7120의 배선 연결
// VCC: PN7120의 VCC 핀을 ESP32의 3.3V 핀에 연결합니다.
// GND: PN7120의 GND 핀을 ESP32의 GND 핀에 연결합니다.
// SDA: PN7120의 SDA 핀을 ESP32의 SDA 핀에 연결합니다 (보통 GPIO 21).
// SCL: PN7120의 SCL 핀을 ESP32의 SCL 핀에 연결합니다 (보통 GPIO 22).
// IRQ: PN7120의 IRQ 핀을 ESP32의 디지털 입출력 핀 중 하나에 연결합니다 (예: GPIO 4).
// RST: PN7120의 RST 핀을 ESP32의 또 다른 디지털 입출력 핀에 연결합니다 (예: GPIO 5).
#include <Wire.h>
#include <Adafruit_PN532.h>

// ESP32의 I2C 핀 설정
#define SDA_PIN 21
#define SCL_PIN 22
Adafruit_PN532 nfc(SDA_PIN, SCL_PIN);

void setup(void) {
  Serial.begin(115200);
  Serial.println("Hello!");

  nfc.begin();

  uint32_t versiondata = nfc.getFirmwareVersion();
  if (!versiondata) {
    Serial.print("Didn't find PN53x board");
    while (1); // halt
  }

  // NFC 모듈을 SAM (Secure Access Module) 모드로 설정
  nfc.SAMConfig();
  Serial.println("Waiting for an NFC card...");
}

void loop(void) {
  uint8_t success;
  uint8_t uid[] = { 0, 0, 0, 0, 0, 0, 0 };  
  uint8_t uidLength;                        
    
  success = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A, uid, &uidLength);

  if (success) {
    Serial.println("!!");
    // NDEF 메시지 작성 및 NFC 태그에 쓰기
    // 이 부분은 Adafruit PN532 라이브러리의 문서를 참고하여 구현해야 합니다.
    // 현재 Adafruit PN532 라이브러리에는 'writeNDEFURI' 함수가 없으므로,
    // NDEF 메시지를 만들고 쓰는 방법을 라이브러리의 문서나 다른 예시 코드에서 찾아야 합니다.
  }
}
