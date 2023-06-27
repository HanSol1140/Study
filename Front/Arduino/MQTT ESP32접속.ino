#include <WiFi.h>
#include <WebServer.h>
#include <PubSubClient.h>

// #define cleanSign 18
// #define cleanStart 19

// 와이파이
const char* ssid = "NNX-2.4G";
const char *password = "$@43skshslrtm";
// MQTT
const char* mqttServer = "192.168.0.137";
const int mqttPort = 1883;
WiFiClient espClient;
PubSubClient client(espClient); // MQTT프로토콜 클래스


WebServer server(80);

void handle_root();

//---------------------------------------------------------------
//---------------------------------------------------------------
// 와이파이 접속
void setWifi(){
  Serial.println("ESP32 WEB Start");
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.println("접속시도중");
    delay(1000);
  }
  Serial.print("Wifi IP: ");
  Serial.println(WiFi.localIP());

  
  Serial.println("HTTP server started");
  delay(100); 
}
// MQTT 브로커에 연결
void setMQTT(){
  client.setServer(mqttServer, mqttPort);
  // client.setCallback(callback);
  while (!client.connected()) {
    Serial.println("Connecting to MQTT Broker...");
    if (client.connect("ESP32MQTTClient")) {
      Serial.println("Connected to MQTT Broker!");
    }
    else {
      Serial.println("Connection to MQTT Broker failed...");
      delay(1000);
    }
  }
}
void setup() {
  // pinMode(cleanStart, INPUT_PULLUP);
  // pinMode(cleanSign, INPUT_PULLUP); 
  Serial.begin(9600);
  setWifi();
  setMQTT();
  InitWebServer();
}

//---------------------------------------------------------------
//---------------------------------------------------------------


// HTML 페이지
#if 1
const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8"><!-- 한글을 출력하기 위한 인코딩설정 -->
  <style>
    button{
        font-weight: bold;
        font-size: 24px;
        padding: 8px;
        border-radius: 12px;
        border: 2px solid #000;
    }
    input{
      font-size: 24px;
      padding: 8px;
      border-radius: 4px;
    }
  </style>
</head>

<body>
  <section class="title">
    <h2>ESP32 Web Server</h1>
  </section>

  <script>
    function sendRequest(action) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/" + action, true);
        xhr.send();
    }

    function sendInputValue(){
      var input = document.getElementById("inputValue").value;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/input?value=" + input, true);
      xhr.send();
    }    

  </script>
  
  <section>
    <h2>함수 실행해보기</h2>
    <p><button onclick="sendRequest('on')">ON버튼</button> </p>
    <p><button onclick="sendRequest('off')">OFF버튼</button> </p>
  </section>
  <section>
    <h2>input값 시리얼 모니터에 전송하기</h2>
    <input type="text" id="inputValue" placeholder="전송할 값 입력">
    <button onclick="sendInputValue()">전송</button>
  </section>

</body>
</html>
)rawliteral";
#endif
//---------------------------------------------------------------
//---------------------------------------------------------------

void SetLedStatusOn(){
  Serial.println("On버튼이 눌림");
  // digitalWrite(Led1Pin, 0);
  server.send(200, "text/html", index_html);
}
void SetLedStatusOff(){
  Serial.println("Off버튼이 눌림");
  // digitalWrite(Led1Pin, 1);
  server.send(200, "text/html", index_html);
}
void handleInput() {
  if (server.hasArg("value")) {
    String value = server.arg("value");
    Serial.println("input값 출력");
    Serial.println(value); 
  }
  server.send(200, "text/html", index_html);
}

void handle_root(){
  server.send(200, "text/html", index_html);
}

void InitWebServer(){
  server.on("/", handle_root);
  server.on("/on", HTTP_GET, SetLedStatusOn);
  server.on("/off", HTTP_GET, SetLedStatusOff);
  server.on("/input", HTTP_GET, handleInput);
  server.begin();
}
//---------------------------------------------------------------
//---------------------------------------------------------------
void loop() {
  server.handleClient();
  client.loop();
}
