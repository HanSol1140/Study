#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "NNX-2.4G";
const char* password = "$@43skshslrtm";
const char* mqtt_server = "192.168.0.10";

WiFiClient espClient;
PubSubClient client(espClient);

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);  // ledControl
  Serial.print("] ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  if ((char)payload[0] == "0") {  // 수신된 메시지가 '1'이면 1번 포트(LED)를 LOW(켜기)로 설정
    digitalWrite(0, LOW);
    Serial.println(topic);
  } else {  // 수신된 메시지가 '0'이면 0번 포트(LED)를 LOW(켜기)로 설정
    digitalWrite(0, LOW);
    Serial.println(topic);
  }
  Serial.println("콜백함수 실행");
}

void setup() {
  pinMode(0, OUTPUT);  // 0번 포트를 출력으로 설정
  pinMode(1, OUTPUT);  // 0번 포트를 출력으로 설정
  Serial.begin(115200);

  setupWiFi();
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  delay(1000);
}

void setupWiFi() {
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {  // 연결시도 반복
    delay(5000);
    Serial.println("연결을 시도합니다.");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
  Serial.println("와이파이 연결 완료");
}


void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    if (client.connect("ArduinoClient")) {
      Serial.println("connected");

      if (client.subscribe("ledControl")) {  // 'ledControl' 토픽을 수신준비 -> 수신하는게 아닌 수신준비를 하는것
        Serial.println("토픽 수신준비 완료");
      } else {
        Serial.println("토픽 수신준비 실패");
      }

      if (client.publish("ledControl", "0")) {  // 'ledcontrol' 토픽을 발신
        Serial.println("토픽 발행 성공");
      } else {
        Serial.println("토픽 발행 실패");
      }


    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}