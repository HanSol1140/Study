#include <WiFi.h> // 인터넷 접속
#include <WebServer.h> // 웹페이지에서 설정 수정
#include <PubSubClient.h> // MQTT
#include <ArduinoJson.h> // MQTT JSON

// MQTT
const char* mqttName = "aaaaa";
const char* mqttTopic = "mainserver";
const char* mqttServer = "192.168.0.137";
const int mqttPort = 1883;
WiFiClient espClient;
PubSubClient client(espClient);

// WIFI SSID & Password
const char *ssid = "NNX2-2.4G";
const char *password = "$@43skshslrtm";
uint16_t webPort = 80;
WebServer server(webPort);


// MQTT 접속
void setup_mqtt(){
    while (!client.connected()){
        if (client.connect(mqttName)){
            Serial.println("MQTT 브로커에 연결됨");
            client.subscribe(mqttTopic); // 구독할 토픽
        }else{
            Serial.print("MQTT 브로커 연결 실패, 상태코드: rc =  ");
            Serial.print(client.state());
            Serial.println(" 3초 후 재시도...");
            delay(3000);
        }
    }
}

void reconnectMQTT() {
  // 클라이언트가 연결되지 않은 경우 재연결을 시도
  while (!client.connected()) {
    Serial.print("MQTT 서버에 연결 시도...");
    // MQTT 서버에 연결을 시도합니다.
    if (client.connect(mqttName)) {
      Serial.println("MQTT 서버에 연결되었습니다!");
      // 여기서 구독 재설정을 수행할 수 있습니다.
      client.subscribe(mqttTopic);
    } else {
      Serial.print("연결 실패, rc=");
      Serial.print(client.state());
      Serial.println(" 다시 시도...");
      delay(3000);
    }
  }
}

// JSON파싱을 위한 MQTT 콜백함수
// MQTT JSON 받기
void mqttCallback(char *topic, byte *payload, unsigned int length){
  // Serial.print("Topic Name [");
  // Serial.print(topic);
  // Serial.println("] ");

  char json[length + 1];
  for (int i = 0; i < length; i++){
      json[i] = (char)payload[i];
  }
  json[length] = '\0';
  Serial.println(json);
  
  // Parse JSON
  StaticJsonDocument<200> doc;
  DeserializationError error = deserializeJson(doc, json);
  
  // json형식이 아닐때를 위한 에러 핸들링
  if (error) {
      Serial.print(F("deserializeJson() failed: "));
      Serial.println(error.f_str());
      return;
  }

  // 보내는 경우 예시(자바스크립트)
  // var message = {
  //   robotname : "cleaningbot_01",
  //   robotstate : true
  // }
  // client.publish('cleaningbot_in', JSON.stringify(message));

}
// ==========
// 고정 IP 설정 => setup_wifi부분에 고정 IP 설정부분을 같이 주석해제하면 됨
// IPAddress ip(192, 168, 0, 2); // 고정하고 싶은 IP(사용중인 IP는 안됨)
// IPAddress gateway(192, 168, 0, 1);  // 1 고정
// IPAddress subnet(255, 255, 255, 0); // 고정

void setup_wifi(){
    // 고정 IP 설정
    // if (!WiFi.config(ip, gateway, subnet)){
    //     Serial.prindtln("STA Failed to configure");
    // }

    // 먼저 WiFi 네트워크에 연결합니다.
    Serial.println();
    Serial.print("Connecting to ");
    Serial.println(ssid);

    WiFi.begin(ssid, password);

    // 와이파이가 접속이 됬는지 확인
    while (WiFi.status() != WL_CONNECTED){
        delay(500);
        Serial.println("연결 시도중!");
    }
    Serial.println("WiFi Connected");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
    Serial.print("PORT address: ");
    Serial.println(webPort);
}

void reconnectWiFi() {
  // 연결이 끊어지면 재연결을 시도
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print("WiFi 연결 시도...");
    // WiFi 연결을 시도합니다.
    WiFi.begin(ssid, password);
    delay(3000);
  }
  Serial.println("WiFi에 연결되었습니다!");
}
// ==========
void handle_root();
// HTML 페이지
#if 1
const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8"><!-- 한글을 출력하기 위한 인코딩설정 -->
  <style>
    
  </style>
</head>

<body>
  <section class="title">
    <h2>ESP32 Web Server</h1>
  </section>
</body>
</html>
)rawliteral";
#endif

void handle_root(){
  server.send(200, "text/html", index_html);
}

void InitWebServer(){
  server.on("/", handle_root);
  server.begin();
}

// ==========



void sendMqttJson(bool state){
  StaticJsonDocument<200> doc;
  // JSON 오브젝트에 cleaningbotState 값을 추가
  doc["robotName"] = mqttName;
  doc["robotState"] = state;
  // JSON 형식의 문자열로 변환
  char json[200];
  serializeJson(doc, json);
  // MQTT 브로커에 데이터 전송
  client.publish("mainserver", json);
}

// ==========
void setup() {
  // 통신속도 초기화
  Serial.begin(115200);

  // 와이파이 접속
  setup_wifi();
  // 웹서버 초기화
  InitWebServer();
  // MQTT 브로커 접속
  client.setServer(mqttServer, mqttPort);
  client.setCallback(mqttCallback);
  setup_mqtt();


}
void loop(){
    server.handleClient();
    client.loop();
    // WiFi 연결 상태 확인
    if (WiFi.status() != WL_CONNECTED) {
      Serial.println("WIFI 연결 끊김, 재연결 시도");
      reconnectWiFi();
    }

    // MQTT 클라이언트 연결 상태 확인
    if (!client.connected()) {
      Serial.println("MQTT 연결 끊김, 재연결 시도");
      reconnectMQTT();
    }

}