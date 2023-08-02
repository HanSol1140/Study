package com.example._spring_tutorial;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}


// spring의 기본포트는 8080
// 만약 변경하고 싶다면 resources/application.properties로 들어가서
// server.port=9090
// 입력하면 포트가 9090으로 변함
