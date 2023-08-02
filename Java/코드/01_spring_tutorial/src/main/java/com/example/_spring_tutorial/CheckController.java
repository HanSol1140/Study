package com.example._spring_tutorial;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CheckController {

    @GetMapping("/sendcheck")
    public String sendCheck() {
        System.out.println("check");
        return "check";
    }
}
