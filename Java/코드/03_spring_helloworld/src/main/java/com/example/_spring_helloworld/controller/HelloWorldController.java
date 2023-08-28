package com.example._spring_helloworld.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloWorldController {
    @GetMapping("hello")
    public String hello(Model model){
        model.addAttribute("dataa", "hello!~!"); // dataa에 "hello!~!" 할당
        return "hello"; // return hello => templates의 hello.html을 실행시켜라
                        // @GetMapping => localhost:8080/hello에 접속하면 return "hello"
                        // => 리소스의 template에서 hello.html을 찾아서 접속해라
        // 뷰 리졸버(viewResolver)가 템플릿에서 리턴값에 해당하는 화면을 찾아서 처리

        // 즉 해당 코드는
        // @GetMapping("hello") => localhost:8080/hello에 접속하면
        // model.addAttribute("data", "hello!!");값을 설정한다 => "hello"에서 "data"에 "hello"라는 값을 설정
        // 어디에? => return "hello" 에 설정한다.
        // 라는 코드로 볼 수 있습니다.
    }
    @GetMapping("hello-mvc")
    // @RequestParam => 주소창에 파라미터를 넘겨줘야함 =>localhost:8080/hello-mvc?name=원하는string
    public String helloMvc(@RequestParam(value = "name") String name, Model model) { // => Ctrl + P : 파라미터 정보보기
        model.addAttribute("name", name);
        return "hello-templates";
        // <p th:text="'hello. ' + ${name}">hello! empty</p>의 값에 따라
        // 'http://localhost:8080/hello-mvc?name=hansol!!'로 접속하면 'hello.hansol!!'이 출력됨
    }

    @GetMapping("hello-string")
    @ResponseBody // 웹페이지의 body에 데이터를 넣는다.(html에 직접 내용을 넣겠다)
    public String helloString(@RequestParam("name") String name){// <!-- 주소창에 파라미터 받기 -->
        return "hello " + name; // hello spring
    }
    // html파일이 resources에 없더라도 해당 주소로 기입시 설정된 파라미터를 받아 화면에 출력함
    // 실제로 출력된 페이지의 소스를 보면소스를 보면 html소스 하나도없이 "hello " + name;가 출력됨

    @GetMapping("hello-api")
    @ResponseBody // 바디로 들어감(html페이지 없어도 출력)
    public Hello helloApi(@RequestParam("name") String name) {
        Hello hello = new Hello(); // 객체생성
        hello.setName(name); // 생성한 setter로 값 할당
        return hello; // json으로 반환함
    }
        // http://localhost:8080/hello-api?name=hansol!!@
        // ▲ 주소로 접속시 {"name":"hansol!!@"}가 출력됨(json방식)
        // hello라는 오브젝트(객체)에 "name"(키):"hansol!!@"(값)이 들어감


    static class Hello{
        private String name;
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
    }
}
