#include <WiFi.h>      // 와이파이를 사용하기 위해
  #include <WebServer.h> // 웹서버를 사용하기 위해
  
  int min1 = 0;
  int sec1 = 3;
  
  int min2 = 0;
  int sec2 = 3;
  
  int min3 = 0;
  int sec3 = 3;
  
  int count = 0;

  // SSID & Password
  const char* ssid = "NNX-2.4G";
  const char *password = "$@43skshslrtm";
  
  WebServer server(80);  // Object of WebServer(HTTP port, 80 is defult)
  /**
  <!--
      웹 서버 객체 server를 생성하는 코드입니다. 80은 웹 서버가 사용할 포트 번호를 나타냅니다.
      웹 서버는 클라이언트의 요청을 처리하고 응답을 반환하기 위해 네트워크 통신을 사용합니다.
      웹 서버가 동작하는 포트는 클라이언트가 접속할 수 있는 네트워크 포트를 지정하는 역할을 합니다.
      일반적으로 웹 서버는 HTTP 요청을 처리하기 위해 80 포트를 사용합니다.
  -->
  **/
  void handle_root();
  
  // HTML 페이지
  #if 1
  const char index_html[] PROGMEM = R"rawliteral(
  <!DOCTYPE html>
  <html>
  
  <head>
    <!-- 한글을 출력하기 위한 인코딩설정 -->
    <meta charset="UTF-8"> 
  
    <!-- 문자열 오류 테스트1 -->
    <style>
      *{  
          text-align: center;
          margin: 0 auto;
          padding: 0;
          margin-bottom: 10px;
      }
      h1 {
          font-size: 48px;
          color: red;
      }
      .main {
          color: blue;
      }
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
  <!-- 문자열 오류 테스트2 -->
    <section class="title">
      <h1>ESP32 Web Server</h1>
    </section>
  
    <script>
    // 주소를 변경하지 않고 보내기
    // 이 코드와 함께 밑의 sendRequest('')로 보내면
    // 함수가 실행되어도 주소가 변경되지 않습니다.
  
      // 함수 실행하기
      function sendRequest(action) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", "/" + action, true);
          xhr.send();
      }
  
      // input값 아두이노에 전송하기(시리얼 모니터에 전송하기)
      function sendInputValue(){
        var input = document.getElementById("inputValue").value;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/input?value=" + input, true);
        xhr.send();
      }
      
  
      // 입력시간(초) => min/sec으로 나눠서 변수할당하기
      function setTimerTime1(){
        var min = document.getElementById("min").value;
        var sec = document.getElementById("sec").value;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/settimer1?min=" + min + "&sec=" + sec, true);
        xhr.send();
      }
      function setTimerTime2(){
        var min = document.getElementById("min").value;
        var sec = document.getElementById("sec").value;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/settimer2?min=" + min + "&sec=" + sec, true);
        xhr.send();
      }
      function setTimerTime3(){
        var min = document.getElementById("min").value;
        var sec = document.getElementById("sec").value;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/settimer3?min=" + min + "&sec=" + sec, true);
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
      <h2>함수 실행해보기</h2>
    <!--
      <p><button onclick="location='on'">ON버튼</button> </p>
      <p><button onclick="location='off'">OFF버튼</button> </p>
    -->
      <!-- 주소를 변경하지 않고 보내기 (ajax 사용) -->
      <p><button onclick="sendRequest('on')">ON버튼</button> </p>
      <p><button onclick="sendRequest('off')">OFF버튼</button> </p>
    </section>
  
  
    <section>
    <h2>input값 아두이노에 전송하기(시리얼 모니터에 전송하기)</h2>
    <!--
      <form action="/input" method="get">
        <input type="text" name="value" placeholder="전송할 값 입력">
        <input type="submit" value="전송">
      </form>
    -->
      <!-- 주소를 변경하지 않고 보내기 (ajax 사용) -->
      <input type="text" id="inputValue" placeholder="전송할 값 입력">
      <button onclick="sendInputValue()">전송</button>
    </section>
  
    <section>
      <h2>타이머 입력해서 변수에 할당</h2>
      <input type="number" id="min" value="0" min="0" max="60" placeholder="MIN" oninput="inputLimit(this)"/>
      <input type="number" id="sec" value="0" min="0" max="60" placeholder="SEC" oninput="inputLimit(this)"/>
      <button onclick="setTimerTime1()">1번 타이머 설정</button>
      <button onclick="setTimerTime2()">2번 타이머 설정</button>
      <button onclick="setTimerTime3()">3번 타이머 설정</button>
    </section>

    <section>
        <h2>청소시작 신호 발생</h2>
        <button onclick="sendRequest('cleaningsign')">10번포트 LOW로 변경</button>
  </body>
  </html>
  )rawliteral";
  #endif
  
  
  //페이지 요청이 들어 오면 처리 하는 함수
  void handle_root(){
    server.send(200, "text/html", index_html);
  }
  
  //On 버튼 페이지 처리함수
  void SetLedStatusOn(){
      Serial.println("On버튼이 눌림");
      // digitalWrite(Led1Pin, 0);
      server.send(200, "text/html", index_html);
  }
  
  //Off 버튼 페이지 처리함수
  void SetLedStatusOff(){
      Serial.println("Off버튼이 눌림");
      // digitalWrite(Led1Pin, 1);
      server.send(200, "text/html", index_html);
  }
  
  // input값 시리얼모니터로 전송하기
  void handleInput() {
    if (server.hasArg("value")) {
      String value = server.arg("value");
      Serial.println("input값 출력");
      Serial.println(value);
      
    }
    server.send(200, "text/html", index_html);
  }
  
  // 시간입력받아서 min/sec에 할당하기
  void setTimerTime1() {
    if (server.hasArg("min") && server.hasArg("sec")) {
      String minStr = server.arg("min");
      String secStr = server.arg("sec");
      min1 = minStr.toInt();
      sec1 = secStr.toInt();
      
      Serial.print("타이머 실행 체크 1 - ");
      Serial.print(min1);
      Serial.print("분 ");
      Serial.print(sec1);
      Serial.println("초");
      // 여기에서 원하는 동작을 수행하면 됩니다.
    }
    server.send(200, "text/html", index_html);
  }
  void setTimerTime2() {
    if (server.hasArg("min") && server.hasArg("sec")) {
      String minStr = server.arg("min");
      String secStr = server.arg("sec");
      min2 = minStr.toInt();
      sec2 = secStr.toInt();
      
      Serial.print("타이머 실행 체크 1 - ");
      Serial.print(min2);
      Serial.print("분 ");
      Serial.print(sec2);
      Serial.println("초");
      // 여기에서 원하는 동작을 수행하면 됩니다.
    }
    server.send(200, "text/html", index_html);
  }
  void setTimerTime3() {
    if (server.hasArg("min") && server.hasArg("sec")) {
      String minStr = server.arg("min");
      String secStr = server.arg("sec");
      min3 = minStr.toInt();
      sec3 = secStr.toInt();
      
      Serial.print("타이머 실행 체크 1 - ");
      Serial.print(min3);
      Serial.print("분 ");
      Serial.print(sec3);
      Serial.println("초");
      // 여기에서 원하는 동작을 수행하면 됩니다.
    }
    server.send(200, "text/html", index_html);
  }
  
  // 10번포트를 LOW로 설정
  void cleaningSign() {
    
    if(count >= 3){
      Serial.println("청소 재시도 실패");
      return;
    }

    Serial.println("18번 포트를 LOW로 변경합니다.");
    Serial.println("청소 시작");
    digitalWrite(18, LOW); 
    
    while(count < 3){
      cleaningStart();
      count++;
    }

    
    server.send(200, "text/html", index_html);
  }


  // 10번 포트 LOW시 실행
  void cleaningStart(){

    if(!digitalRead(18)){
      Serial.println("18번 포트가 LOW입니다");
      int stopTime1 = min1*60 + sec1;
      digitalWrite(18, HIGH);
      delay(stopTime1*1000);
      Serial.println("청소시작");
      digitalWrite(19, HIGH);
      cleaningLoading();
    }else{
      Serial.println("18번 포트가 HIGH입니다(체크용)");
      delay(2000);
    }
  }


  void cleaningLoading(){
    Serial.println("청소중입니다");
    if(digitalRead(19)){
      int stopTime2 = min1*60 + sec1;
      delay(stopTime2*1000);
    }else{
      Serial.println("청소 시작 다시하기");
      cleaningSign();
    }
  }


  void InitWebServer(){
      //페이지 요청 처리 함수 등록
      server.on("/", handle_root);
      server.on("/on", HTTP_GET, SetLedStatusOn);
      server.on("/off", HTTP_GET, SetLedStatusOff);
      server.on("/input", HTTP_GET, handleInput);
      server.on("/settimer1", HTTP_GET, setTimerTime1);
      server.on("/settimer2", HTTP_GET, setTimerTime2);
      server.on("/settimer3", HTTP_GET, setTimerTime3);
      server.on("/cleaningsign", HTTP_GET, cleaningSign);
      server.begin();
  }
  
  void setup() { // 실행시

    // 핀 설정

    // 9번포트 대체 19번포트
    pinMode(19, OUTPUT);
    digitalWrite(19, LOW);

    // 10번포트 대체 18번 포트
    pinMode(18, OUTPUT); 
    digitalWrite(18, HIGH);
  
    Serial.begin(115200); // 시리얼 통신 초기화(실행), 전송속도 설정
    Serial.println("ESP32 WEB Start");
    Serial.println(ssid);
  
    //WiFi 접속
    WiFi.begin(ssid, password);
  
    //접속 완료 할때까지 재시도
    while (WiFi.status() != WL_CONNECTED) {
      Serial.println("접속시도중");
      delay(1000);
    }
  
    // WIFI에 접속이 된다면 IP번호 출력
        Serial.print("Wifi IP: ");
        Serial.println(WiFi.localIP());  //Show ESP32 IP on serial
  
        InitWebServer(); 
        
        Serial.println("HTTP server started");
        delay(100); 
  }
  
  
  // unsigned long previousTime = 0;  // 이전 시간을 저장하는 변수
  // unsigned long interval = 3000;   // 출력 간격(3초)
  // unsigned long currentTime = millis();  // 현재 시간

  void loop() {

    server.handleClient();    

    // if (currentTime - previousTime >= interval) {  // 일정 시간이 경과하면 코드 실행
    //   previousTime = currentTime;  // 이전 시간 업데이트
    //   // min1, min2, min3 출력
    //   Serial.println("min1 : " + String(min1) + " / sec1 : " + String(sec1));
    //   Serial.println("min2 : " + String(min2) + " / sec2 : " + String(sec2));
    //   Serial.println("min3 : " + String(min3) + " / sec3 : " + String(sec3));
    // }

    if(!digitalRead(18)){
      Serial.println("18번 포트가 LOW입니다");
    }else{
      Serial.println("18번 포트가 HIGH입니다(체크용)");
    }
    
    if(!digitalRead(19)){
      Serial.println("18번 포트가 LOW입니다");
    }else{
      Serial.println("18번 포트가 HIGH입니다(체크용)");
    }

    delay(2000);
  }