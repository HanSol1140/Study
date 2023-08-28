package com.example._spring_helloworld.controller2;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloWorldController {
    @GetMapping("hello")
    public String hello(Model model){
        model.addAttribute("data", "hello!!");
        return "hello"; // templates의 hello.html을 실행시켜라
        // 뷰 리졸버(viewResolver)가 리턴값에 해당하는 화면을 찾아서 처리

        // 즉 해당 코드는
        // @GetMapping("hello") => localhost:8080/hello에 접속하면
        // model.addAttribute("data", "hello!!");값을 설정한다 어디에?
        // return "hello" 에 설정한다.
        // 라는 코드로 볼 수 있습니다.
    }
    @GetMapping("hello-mvc")
    public String helloMvc(@RequestParam(value = "name") String name, Model model) { // => Ctrl + P : 파라미터 정보보기
        model.addAttribute("name", name);
        return "hello-templates";
        // <p th:text="'hello. ' + ${name}">hello! empty</p>의 값에 따라
        // 'http://localhost:8080/hello-mvc?name=hansol!!'로 접속하면 'hello.hansol!!'이 출력됨
    }

    @GetMapping("hello-string")
    @ResponseBody
    public String helloString(@RequestParam("name") String name){
        return "hello " + name; // hello spring
    }

    @GetMapping("hello-api")
    @ResponseBody
    public Hello helloApi(@RequestParam("name") String name){
        Hello hello = new Hello();
        hello.setName(name);
        return hello;
        // http://localhost:8080/hello-api?name=hansol!!@
    }

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
