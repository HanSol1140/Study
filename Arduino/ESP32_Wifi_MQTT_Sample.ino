#include <WiFi.h>
#include <WebServer.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>

const char* mqttName = "원하는 이름";
const char* mqttTopic = "원하는 토픽";
const char* mqttServer = "192.168.0.137"; // 접속할 mqtt서버 ip주소
const int mqttPort = 1883;

WiFiClient espClient;
PubSubClient client(espClient);

// SSID & Password
const char* ssid = "NNX-2.4G";
const char* password = "$@43skshslrtm";

int webPort = 80;
WebServer server(webPort); // Object of WebServer(HTTP port, 80 is defult)

// ============================================================
// MQTT 접속
void setup_mqtt(){
    while (!client.connected()){
        if (client.connect(mqttName)){
            Serial.println("MQTT 브로커에 연결됨");
            // client.subscribe(mqttTopic); // 구독할 토픽명, 없을시 mqtt연결만함(publish만 할 수 잇음)
        }else{
            Serial.print("MQTT 브로커 연결 실패, 상태코드: rc =  ");
            Serial.print(client.state());
            Serial.println(" 3초 후 재시도...");
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
}
// ============================================================
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

    Serial.println("");
    Serial.println("WiFi connected");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
    Serial.print("PORT address: ");
    Serial.println(webPort);
}
// ============================================================

void handle_root();
// HTML 페이지
#if 1
const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8"><!-- 한글을 출력하기 위한 인코딩설정 -->
    <style>
        *{
            margin:0 auto;
            padding:0;
        }
        
    </style>

    <script>

    </script>

</head>

<body>
  html 입력

</body>
</html>
)rawliteral";
#endif

//---------------------------------------------------------------
// 페이지 요청이 들어 오면 처리 하는 함수
void handle_root(){
    server.send(200, "text/html", index_html);
}
//---------------------------------------------------------------


void InitWebServer(){
    server.on("/", handle_root);

    server.begin();
}

long pressDuration(int button, unsigned long duration){
    long startTime = millis();
    while (digitalRead(button) == LOW){ // duration뒤에 버튼 상태가 LOW라면
        if (millis() - startTime >= duration){
            return 1;
        }
    }
    return 0;
}

// MQTT JSON 포맷으로 데이터 전송하기
void sendMqttJson(bool call, int tablenumber){
    StaticJsonDocument<200> doc;
    // JSON 오브젝트에 cleaningRobotState 값을 추가
    doc["cleaningRobotState"] = call;
    doc["tableNumber"] = tablenumber;
    // JSON 형식의 문자열로 변환
    char json[200];
    serializeJson(doc, json);
    // MQTT 브로커에 데이터 전송
    client.publish("mainserver", json);
}
//---------------------------------------------------------------

void setup(){
    // 시리얼 통신 초기화(실행), 전송속도 설정
    Serial.begin(115200);
    // WIFI 초기화
    setup_wifi();
    // WEB서버 초기화
    InitWebServer();

    // MQTT 브로커 초기화
    client.setServer(mqttServer, mqttPort);
    client.setCallback(mqttCallback);
    setup_mqtt();
}

// ────────────────────────────────────────────────────────────────────────────────
//  cleaningRobotState = false = 기본상태 - 미호출중
void loop(){
    // WiFi 연결 상태 확인
    if (WiFi.status() != WL_CONNECTED) {
      Serial.println("WIFI 연결 끊김, 재연결 시도");
      setup_wifi();
    }

    // MQTT 클라이언트 연결 상태 확인
    if (!client.connected()) {
      Serial.println("MQTT 연결 끊김, 재연결 시도");
      setup_mqtt();
    }
    // 연결 유지
    server.handleClient();
    client.loop();
}