#include <WiFi.h>
#include <WebServer.h>

// 청소로봇 호출(17) / 호출취소(18) /
//(input)

#define callCleanBot 17
#define callCleanBotCancel 18

// 키오스크상승(19) / 키오스크 하강(21) / 키오스크 정지(23) 
// (input) 
#define kioskUp 19  
#define kioskDown 21
#define kioskStop 23

// Lift 키오스크 정지(12) / Lift 키오스크 하강(13) / Lift 키오스크 상승(14)
// (output)
#define liftKioskUp 14
#define liftKioskDown 13
#define liftKioskStop 12

// Timer
int min1 = 0;
int sec1 = 3;
int timerSet1 = 3000;

const char* ssid = "NNX-2.4G";
const char *password = "$@43skshslrtm";

WebServer server(80);

void handle_root();

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

    function changePort(num){
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/changeport?num=" + num, true);
      xhr.send();
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
    <button onclick="setTimerTime(1)">타이머 설정</button>
  </section>

  <section>
      <h2>n번포트 출력 토글(HIGH/LOW) onclick()의 인자(핀번호)를 바꿔주세요</h2>
      <button onclick="changePort(12)">12번포트</button>
  </section>

</body>
</html>
)rawliteral";
#endif

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
      break;
  server.send(200, "text/html", index_html);
  }
}

void changePort(){
  String numStr = server.arg("num");
  int num = numStr.toInt();
  Serial.print("포트 출력");
  if(digitalRead(num)){
    digitalWrite(num, LOW);
    Serial.println("OFF");
  }else{
    digitalWrite(num, HIGH);
    Serial.println("ON");
  }
}
void InitWebServer(){
  server.on("/", handle_root);
  server.on("/input", HTTP_GET, handleInput);
  server.on("/settimer", HTTP_GET, setTimerTime);
  server.on("/changeport", HTTP_GET, changePort);
  server.begin();
}

//---------------------------------------------------------------
//---------------------------------------------------------------

void setup() {
  pinMode(callCleanBot, INPUT);
  pinMode(callCleanBot, INPUT);

  pinMode(kioskUp, INPUT);
  pinMode(kioskDown, INPUT);
  pinMode(kioskStop, INPUT);

  // OUTPUT
  pinMode(liftKioskUp, OUTPUT);
  digitalWrite(liftKioskUp, HIGH);
  pinMode(liftKioskDown, OUTPUT);
  digitalWrite(liftKioskDown, HIGH);
  pinMode(liftKioskStop, OUTPUT);
  digitalWrite(liftKioskStop, HIGH);
  
  Serial.begin(115200);
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


void loop() {
  server.handleClient();
  // callCleaeningBot();
  // callCleaeningBotCancel();
  // kioskOnOffButton();
  // kioskUpButton();
  // kioskDownButton();
}

//---------------------------------------------------------------
//---------------------------------------------------------------


// 청소봇 호출 / 호출취소
bool CleaningBotRunning = false;
void callCleaeningBot(){
  if(CleaningBotRunning) { // 상태 확인
    Serial.println("이미 호출중 입니다.");
    return;
  }
  if(!digitalRead(callCleanBot)){
    // 3초간 input이 눌려있다면 시작
    for(int i = 0; i < 30; i++){
      if(!digitalRead(callCleanBot)){
        delay(100);
      }else{
        Serial.println("3초간 버튼이 눌리지 않았습니다.");
        return;
      }
    }
    Serial.println("호출 완료 청소봇을 불러옵니다.");
    CleaningBotRunning = true; // 상태 변경

    // 로봇 호출 명령(서버)

    CleaningBotRunning = false; // 상태 변경
  }
}

void callCleaeningBotCancel(){
  if(!digitalRead(callCleanBotCancel)){
    Serial.println("청소봇 호출을 취소합니다.");

    // 호출중인 로봇 정지

    Serial.println("청소봇 호출이 취소되었습니다.");
  }
}


// 버튼 입력시간 체크 함수
long pressDuration(int button, unsigned long duration) {
    long startTime = millis();

    while (digitalRead(button) == LOW) { // 2초뒤에 버튼 상태가 LOW라면
        if (millis() - startTime >= duration) {
            return 1;
        }
        delay(100);
    }   
    while (digitalRead(button) == HIGH) { // 2초뒤에 버튼 상태가 HIGH라면
        if (millis() - startTime >= duration) {
            return 0;
        } 
        delay(100);
    }
}

// 키오스크 정지 버튼 입력
void kioskOnOffButton(){
  if(!digitalRead(kioskStop)){    
    if(!digitalRead(liftKioskStop)){ // 키오스크가 정지되있으면 실행
      Serial.println("키오스크를 실행합니다");
      digitalWrite(liftKioskStop, HIGH);
    }else{                           // 동작중이면 정지
      Serial.println("키오스크를 정지합니다.");
      digitalWrite(liftKioskStop, LOW);
    }
  }
}


// 키오스크 상승 버튼 입력
void kioskUpButton(){
  if(!digitalRead(kioskUp)){
    // 2초간 버튼이 눌릴 때까지 대기
    long pressTime = pressDuration(kioskUp, 2000);
    if (pressTime == 0) {
      Serial.println("버튼이 눌리지 않았습니다.");
      return;
    }
    Serial.println(pressTime);
    Serial.println("키오스크가 상승합니다.");

    // 경고음성 출력
    
    delay(timerSet1);

    digitalWrite(liftKioskUp, LOW);
    delay(1000);
    digitalWrite(liftKioskUp, HIGH);
    Serial.println("키오스크 상승완료");
  }
}


// 키오스크 하강 버튼 입력
void kioskDownButton(){
  if(!digitalRead(kioskDown)){
    // 2초간 버튼이 눌릴 때까지 대기
    long pressTime = pressDuration(kioskDown, 2000);
    if (pressTime == 0) {
      Serial.println("버튼이 눌리지 않았습니다.");
      return;
    }
    Serial.println(pressTime);
    Serial.println("키오스크가 하강합니다.");

    // 경고음성 출력
    
    delay(timerSet1);

    digitalWrite(liftKioskDown, LOW);
    delay(1000);
    digitalWrite(liftKioskDown, HIGH);
    Serial.println("키오스크 하강완료");
  }
}