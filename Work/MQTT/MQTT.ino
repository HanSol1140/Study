  #include <WiFi.h>
  #include <PubSubClient.h>

  const char* ssid = "NNX-2.4G";
  const char* password = "$@43skshslrtm";
  const char* mqtt_server = "192.168.0.10"; // 브로커 주소

  WiFiClient espClient;
  PubSubClient client(espClient);

  void setup() {
      pinMode(0, OUTPUT); // 0번 포트를 출력으로 설정
      pinMode(1, OUTPUT); // 0번 포트를 출력으로 설정
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

  void callback(char* topic, byte* payload, unsigned int length) {
      Serial.println("=================");
      Serial.println("콜백함수 시작");

      Serial.print("Message arrived [");
      Serial.print(topic);
      Serial.print("] \n");
      for (int i = 0; i < length; i++) {
          Serial.println((char)payload[i]);
      }

      if ((char)payload[0] == '1') { // 수신된 메시지가 '1'이면 1번 포트(LED)를 LOW(켜기)로 설정
          digitalWrite(0, HIGH);
          Serial.println(topic);
      }else if((char)payload[0] == '3'){
          Serial.println("페이로드 체크");
      }

      Serial.println("콜백함수 완료");

      

  }

  void setupWiFi() {
      delay(10);
      Serial.println();
      Serial.print("Connecting to ");
      Serial.println(ssid);

      WiFi.begin(ssid, password);

      while (WiFi.status() != WL_CONNECTED) { // 연결시도 반복
          delay(1000);
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

              if(client.subscribe("ledControl")){
                Serial.println("토픽 구독 완료");
              }else{
                Serial.println("토픽 구독 실패");
              }; // 'ledControl' 토픽을 수신


              // client.publish() 함수는 메시지가 성공적으로 전송되었는지를 나타내는 boolean 값을 반환합니다.
              // 이 값을 확인하여 메시지가 성공적으로 전송되었는지 확인할 수 있습니다.
              if(client.publish("ledControl", "33")) { 
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