#include <WiFi.h>
#include <WebServer.h>
#include <EEPROM.h> // 비휘발성 데이터를 저장하기위한 라이브러리 => 타이머 시간 저장

#define cleanSign 18
#define cleanStart 19

// Timer #1
int min1 = 0;
int sec1 = 3;
int min2 = 0;
int sec2 = 3;
int min3 = 0;
int sec3 = 3;
int timerSet1 = 3000;
int timerSet2 = 3000;
int timerSet3 = 3000;

int count = 0;

const char* ssid = "NNX-2.4G";
const char *password = "$@43skshslrtm";

WebServer server(80);

void handle_root();

//---------------------------------------------------------------
//---------------------------------------------------------------

void setup() {
  pinMode(cleanStart, INPUT_PULLUP);
  pinMode(cleanSign, INPUT_PULLUP); 

  Serial.begin(9600);

  EEPROM.begin(12); // EEPROM에 12바이트 할당

  // Timer 기록값
  min1 = EEPROM.read(0);
  sec1 = EEPROM.read(1);
  min2 = EEPROM.read(2);
  sec2 = EEPROM.read(3);
  min3 = EEPROM.read(4);
  sec3 = EEPROM.read(5);
  timerSet1 = ((min1 * 60) + sec1) * 1000;
  timerSet2 = ((min2 * 60) + sec2) * 1000;
  timerSet3 = ((min3 * 60) + sec3) * 1000;

  Serial.print("Timer1 = ");
  Serial.println(timerSet1);
  Serial.print("Timer2 = ");
  Serial.println(timerSet2);
  Serial.print("Timer3 = ");
  Serial.println(timerSet3);

  Serial.println("ESP32 WEB Start");
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.println("접속시도중");
    delay(1000);
  }
  Serial.print("Wifi IP: ");
  Serial.println(WiFi.localIP());

  InitWebServer(); 
  
  Serial.println("HTTP server started");
  delay(100); 
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

    function setTimerTime(num){
      var min = document.getElementById("min").value;
      var sec = document.getElementById("sec").value;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/settimer?min=" + min + "&sec=" + sec + "&num=" + num, true);
      xhr.send();
    }

    function inputLimit(number) {
      if (number.value < 0) {
        number.value = 0;
      }
      if (number.value > 60) {
        number.value = 60;
      }
    }
  </script>
  
  <section>
    <h2>input값 시리얼 모니터에 전송하기</h2>
    <input type="text" id="inputValue" placeholder="전송할 값 입력">
    <button onclick="sendInputValue()">전송</button>
  </section>

  <section>
    <h2>타이머 입력해서 변수에 할당</h2>
    <input type="number" id="min" value="0" min="0" max="60" placeholder="MIN" oninput="inputLimit(this)"/>
    <input type="number" id="sec" value="0" min="0" max="60" placeholder="SEC" oninput="inputLimit(this)"/>
    <button onclick="setTimerTime(1)">1번 타이머 설정</button>
    <button onclick="setTimerTime(2)">2번 타이머 설정</button>
    <button onclick="setTimerTime(3)">3번 타이머 설정</button>
  </section>

</body>
</html>
)rawliteral";
#endif
//---------------------------------------------------------------
//---------------------------------------------------------------

void handle_root(){
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


void setTimerTime() {
  String minStr = server.arg("min");
  String secStr = server.arg("sec");
  String numStr = server.arg("num");
  int num = numStr.toInt();
  switch(num){
    case 1:
      min1 = minStr.toInt();
      sec1 = secStr.toInt();
      timerSet1 = ((min1 * 60) + sec1) * 1000;
      Serial.println("타이머 시간설정 1 - " + minStr + "분 " + secStr + "초");
      EEPROM.write(0, min1);
      EEPROM.write(1, sec1);
      EEPROM.commit();
      break;
    case 2:
      timerSet2 = ((min2 * 60) + sec2) * 1000;
      Serial.println("타이머 시간설정 2 - " + minStr + "분 " + secStr + "초");
      EEPROM.write(2, min2);
      EEPROM.write(3, sec2);
      EEPROM.commit();
      break;
    case 3:
      timerSet3 = ((min3 * 60) + sec3) * 1000;
      Serial.println("타이머 시간설정 3 - " + minStr + "분 " + secStr + "초");
      EEPROM.write(4, min3);
      EEPROM.write(5, sec3);
      EEPROM.commit();
      break;
  }
  server.send(200, "text/html", index_html);
}


void onCheckTime(int time){
  for(int i = 0; i < time/100; i++){
    if(digitalRead(cleanStart)){
      break;
    }else{
      delay(100);
    }
  }
}


void offCheckTime(int time){
  for(int i = 0; i < time/100; i++){
    if(!digitalRead(cleanStart)){
      break;
    }else{
      delay(100);
    }
  }
}


void cleaningTryCount(){
  count++;
  if(count == 3){
    Serial.println("청소 재시도 실패 작동을 멈춥니다.");
    count = 0;
    return;
  }
}


void InitWebServer(){
  server.on("/", handle_root);
  server.on("/input", HTTP_GET, handleInput);
  server.on("/settimer", HTTP_GET, setTimerTime);
  server.begin();
}



//---------------------------------------------------------------
//---------------------------------------------------------------
void loop() {
  server.handleClient();      
// 신호 감지
  if(!digitalRead(cleanSign)){
    Serial.println("청소 시작신호 발생");
    /**
      청소시작 IR 신호 발생
    **/
    cleaningTryCount();

    onCheckTime(timerSet1);
// 청소 시작
    if(digitalRead(cleanStart)){
      Serial.println("청소 중입니다");
    }else{
      Serial.println("오류 발생, 처음부터 다시 시작");
      delay(1000);
      return;
    }
    /**
      청소 중
    **/
    offCheckTime(timerSet2);
// 청소 종료  
    if(!digitalRead(cleanStart)){
      Serial.println("청소가 끝났습니다.");
    }else{
      /**
        HOME IR 신호 발생
      **/
      offCheckTime(timerSet3);

      if(!digitalRead(cleanStart)){
        Serial.println("청소가 끝났습니다.");
      }else{
        Serial.println("오류 발생, 처음부터 다시 시작");
        return;
      }
    }

  }
  count = 0;

  // Serial.print("타이머 1 시간은");
  // Serial.print(timerSet1);
  // Serial.println("초 입니다.");
  // Serial.print("타이머 2 시간은");
  // Serial.print(timerSet2);
  // Serial.println("초 입니다.");
  // Serial.print("타이머 3 시간은");
  // Serial.print(timerSet3);
  // Serial.println("초 입니다.");
  // delay(1000);
}
