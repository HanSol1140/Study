#include <WiFi.h>      // 와이파이를 사용하기 위해
#include <WebServer.h> // 웹서버를 사용하기 위해
#include <PubSubClient.h>
const char *mqtt_server = "라즈베리파이의 IP를 입력 하세요";

// SSID & Password
const char *ssid = "NNX-2.4G";
const char *password = "$@43skshslrtm";
const char* mqttServer = "192.168.0.2";
const int mqttPort = 1883;

WebServer server(80); // Object of WebServer(HTTP port, 80 is defult)

WiFiClient espClient;
PubSubClient client(espClient);

void handle_root();

// HTML 페이지
#if 1
const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
)rawliteral";
#endif

// 페이지 요청이 들어 오면 처리 하는 함수
void handle_root()
{
    server.send(200, "text/html", index_html);
}

void InitWebServer()
{
    // 페이지 요청 처리 함수 등록
    server.on("/", handle_root);
    server.begin();
}

//---------------------------------------------------------------
//---------------------------------------------------------------

void setup()
{                       // 실행시
    Serial.begin(9600); // 시리얼 통신 초기화(실행), 전송속도 설정
    Serial.println("ESP32 WEB Start");
    Serial.println(ssid);

    // WiFi 접속
    WiFi.begin(ssid, password);
    // 접속 완료 할때까지 재시도
    while (WiFi.status() != WL_CONNECTED)
    {
        Serial.println("접속시도중");
        delay(1000);
    }
    // WIFI에 접속이 된다면 IP번호 출력
    Serial.print("Wifi IP: ");
    Serial.println(WiFi.localIP());

    // MQTT 브로커 접속
    client.setServer(mqttServer, mqttPort);
    client.setCallback(callback);
    while (!client.connected())
    {
        if (client.connect("ESP32 MQTT Broker Client"))
        {
            Serial.println("MQTT 브로커에 연결됨");
        }
        else
        {
            Serial.print("MQTT 브로커 연결 실패, 상태코드: ");
            Serial.print(client.state());
            Serial.println(" 5초 후 재시도...");
            delay(5000);
        }
    }

    InitWebServer();

    Serial.println("HTTP server started");
    delay(100);
}

// unsigned long previousTime = 0;  // 이전 시간을 저장하는 변수a
// unsigned long interval = 3000;   // 출력 간격(3초)
// unsigned long currentTime = millis();  // 현재 시간

void loop()
{

    server.handleClient();
}


// ─────────────────────────────────────────────────────────
void setup_wifi() {

    delay(10);
    // 먼저 WiFi 네트워크에 연결합니다.
    Serial.println();
    Serial.print("Connecting to ");
    Serial.println(ssid);

    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print("연결 시도중!");
    }

    Serial.println("");
    Serial.println("WiFi connected");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());
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