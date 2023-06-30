#include <WiFi.h>      // 와이파이를 사용하기 위해
#include <WebServer.h> // 웹서버를 사용하기 위해
#include <PubSubClient.h>

// SSID & Password
const char *ssid = "NNX-2.4G";
const char *password = "$@43skshslrtm";
const char *mqttServer = "192.168.0.2";
const int mqttPort = 1884;


// 고정 IP 설정
IPAddress ip(192, 168, 0, 3);
IPAddress gateway(192, 168, 0, 1);
IPAddress subnet(255, 255, 255, 0);

WebServer server(8083); // Object of WebServer(HTTP port, 80 is defult)

WiFiClient espClient;
PubSubClient client(espClient);

void handle_root();

// HTML 페이지
#if 1
const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html>
  <head>
  <script>
    function sendRequest(action) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/" + action, true);
        xhr.send();
    }
    function setTimerTime(num){
      var min = document.getElementById("min").value;
      var sec = document.getElementById("sec").value;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/settimer?sec=" + sec + "&num=" + num, true);
      xhr.send();
    }
  </script>
  </head>
  <body>
    <section>
        <h2>함수 실행해보기</h2>
        <p><button onclick="sendRequest('on')">ON버튼</button> </p>
        <p><button onclick="sendRequest('off')">OFF버튼</button> </p>
    </section>
  </body>
</html>
)rawliteral";
#endif

//---------------------------------------------------------------
// 페이지 요청이 들어 오면 처리 하는 함수
void handle_root()
{
    server.send(200, "text/html", index_html);
}
//---------------------------------------------------------------
// 함수
void SetLedStatusOn()
{
    return
}
void setLedStatusOff()
{
    return
}
//---------------------------------------------------------------
void InitWebServer()
{
    // 페이지 요청 처리 함수 등록
    server.on("/", handle_root);
    server.on("/on", HTTP_GET, SetLedStatusOn);
    server.on("/off", HTTP_GET, SetLedStatusOff);
    server.begin();
}

//---------------------------------------------------------------

void setup()
{               
    
    // 고정 IP 설정 부분
    if (!WiFi.config(ip, gateway, subnet)) {
        Serial.println("STA Failed to configure");
    }
    Serial.begin(9600); // 시리얼 통신 초기화(실행), 전송속도 설정
    setup_wifi();

    // MQTT 브로커 접속
    client.setServer(mqttServer, mqttPort);
    client.setCallback(callback);

    InitWebServer();

    Serial.println("HTTP server started");
    delay(100);
}

// unsigned long previousTime = 0;  // 이전 시간을 저장하는 변수a
// unsigned long interval = 3000;   // 출력 간격(3초)
// unsigned long currentTime = millis();  // 현재 시간

void loop()
{
    connectLoopMQTT();
    client.loop();
    server.handleClient();
    client.publish("outTopic", "hello world");
    client.subscribe("outTopic");
}

// 와이파이 접속
void setup_wifi()
{
    // 먼저 WiFi 네트워크에 연결합니다.
    Serial.println();
    Serial.print("Connecting to ");
    Serial.println(ssid);

    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print("연결 시도중!");
    }

    Serial.println("");
    Serial.println("WiFi connected");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());
}
// MQTT 수신 콜백 함수
void callback(char *topic, byte *payload, unsigned int length)
{
    Serial.print("메시지 도착 [");
    Serial.print(topic);
    Serial.print("] ");
    for (int i = 0; i < length; i++)
    {
        Serial.print((char)payload[i]);
    }
    Serial.println();
}
// MQTT 재접속
void connectLoopMQTT()
{
    while (!client.connected())
    {
        if (client.connect("ESP32MQTTBrokerClient"))
        {
            Serial.println("MQTT 브로커에 연결됨");
            client.publish("outTopic", "hello world");
            client.subscribe("outTopic");
        }
        else
        {
            Serial.print("MQTT 브로커 연결 실패, 상태코드: rc =  ");
            Serial.print(client.state());
            Serial.println(" 3초 후 재시도...");
            delay(3000);
        }
    }
}



