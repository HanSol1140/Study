// Uduino settings
#include<Uduino.h>
#include <Uduino_Wifi.h>
#include <EEPROM.h>
#include <PubSubClient.h>
Uduino_Wifi uduino("Cleaning_robot"); // Declare and name your object


//추가해야할 것 : MQTT 
#define StartSignal 16
#define RobotInPlace 17

int timer1_min = 0;
int timer1_sec = 0;
int timer2_min = 0;
int timer2_sec = 0;
int timer3_min = 0;
int timer3_sec = 0;
IPAddress ip(192, 168, 0, 31);
IPAddress gateway(192, 168, 0, 1);
IPAddress subnet(255, 255, 255, 0);

// MQTT 브로커 정보
const char* mqttServer = "192.168.0.2";
const int mqttPort = 1883;

WiFiClient espClient;
PubSubClient client(espClient);

bool Stat = true;
void setup()
{
  Serial.begin(9600);
  EEPROM.begin(12);
  uduino.setStaticIP(ip, gateway , subnet ); // IPAddress ip, IPAddress gateway, IPAddress subnet
  uduino.connectWifi("NNX2-2.4G", "$@43skshslrtm");
  uduino.addCommand("get_timer_1",timer_1);
  uduino.addCommand("get_timer_2",timer_2);
  uduino.addCommand("get_timer_3",timer_3);

  // MQTT 브로커 연결
  client.setServer(mqttServer, mqttPort);
  client.setCallback(callback);
  while (!client.connected()) {
    if (client.connect("ESP32Client")) {
      Serial.println("MQTT 브로커에 연결됨");
    } else {
      Serial.print("MQTT 브로커 연결 실패, 상태코드: ");
      Serial.print(client.state());
      Serial.println(" 5초 후 재시도...");
      delay(5000);
    }
  }

  timer1_min = EEPROM.read(0);
  timer1_sec = EEPROM.read(1);
  timer2_min = EEPROM.read(2);
  timer2_sec = EEPROM.read(3);
  timer3_min = EEPROM.read(4);
  timer3_sec = EEPROM.read(5);

  pinMode(StartSignal, INPUT_PULLUP);
  pinMode(RobotInPlace, INPUT_PULLUP);

  Serial.print("start timer1 : ");
  Serial.print(timer1_min);
  Serial.print(" - ");
  Serial.println(timer1_sec  );

  Serial.print("start timer2 : ");
  Serial.print(timer2_min);
  Serial.print(" - ");
  Serial.println(timer2_sec  );

  Serial.print("start timer3 : ");
  Serial.print(timer3_min);
  Serial.print(" - ");
  Serial.println(timer3_sec);

}

// MQTT 수신 콜백 함수
void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("메시지 도착 [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();
}

void timer_1(){
  int numberOfParameters = uduino.getNumberOfParameters();
  if(numberOfParameters == 2){
    timer1_min = uduino.charToInt(uduino.getParameter(0));
    timer1_sec = uduino.charToInt(uduino.getParameter(1));
    uduino.println("125");
    Serial.print("timer1 : ");
    Serial.print(EEPROM.read(0));
    Serial.print(" - ");
    Serial.println(EEPROM.read(1));
    
    EEPROM.write(0, timer1_min);
    EEPROM.write(1, timer1_sec);
    EEPROM.commit();
    
  }
}

void timer_2(){
  int numberOfParameters = uduino.getNumberOfParameters();
  if(numberOfParameters == 2){
    timer2_min = uduino.charToInt(uduino.getParameter(0));
    timer2_sec = uduino.charToInt(uduino.getParameter(1));
    Serial.print("timer2 : ");
    Serial.print(timer2_min);
    Serial.print(" - ");
    Serial.println(timer2_sec  );
    EEPROM.write(2, timer2_min);
    EEPROM.write(3, timer2_sec);
    EEPROM.commit();
  }
}

void timer_3(){
  int numberOfParameters = uduino.getNumberOfParameters();
  if(numberOfParameters == 2){
    timer3_min = uduino.charToInt(uduino.getParameter(0));
    timer3_sec = uduino.charToInt(uduino.getParameter(1));
    Serial.print("timer3 : ");
    Serial.print(timer3_min);
    Serial.print(" - ");
    Serial.println(timer3_sec  );
    EEPROM.write(4, timer3_min);
    EEPROM.write(5, timer3_sec);
    EEPROM.commit();
  }
}

void loop()
{
  uduino.update();
  //uduino.println("Waiting...");
  //Serial.println("Waiting");
  delay(0.5);
  if(digitalRead(StartSignal) == LOW){
    Serial.println("시작신호 받음");
    Serial.println("IR 신호 발생");

    for(int j = 0; j<3;j++){
      for(int i = 0; i < ((timer1_min * 60000) + (timer1_sec * 1000)/100); i++){
        if(digitalRead(RobotInPlace) == LOW){
          Serial.println("청소기가 자리에서 벗어남");
          uduino.println("Cleaning Started");
          Stat = false;
          break;
        }
        delay(100);
      }
      if(Stat == true){
        Serial.println("IR 신호 재발생");
        Serial.print("청소기가 자리를 벗어나지 않음");
        Serial.println(j);
        if(j == 2){
          Serial.println("Error Occured!!");
          uduino.println("Cleaning Command Error");
        }
      }
    }
    Serial.println("청소중");

    for(int i = 0; i< ((timer2_min * 60000) + (timer2_sec * 1000)/100);i++){
      if(digitalRead(RobotInPlace) == HIGH){
        Serial.println("청소기가 자리로 돌아옴");
        Stat = true;
        break;
      }
      delay(100);
    }
    if(Stat == false){
      Serial.println("Home IR 신호 발생");
      for(int i = 0; i<((timer3_min * 60000) + (timer3_sec * 1000)/100);i++){
        if(digitalRead(RobotInPlace) == HIGH){
          Serial.println("청소기가 자리로 돌아옴");
          Stat = true;
          break;
        }
        delay(100);
      }
      if(Stat == false){
        Serial.println("Error occured!!");
        uduino.println("Returning Command Error");
      }
    }
    Serial.println("청소 끝!");
    uduino.println("Cleaning Finished!");
    Stat = true;
  }
  
  
}
