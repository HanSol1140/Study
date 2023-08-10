package com.example._member.controller;

import com.example._member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class HelloController {
    private final MemberService memberService;
    @Autowired
    public HelloController(MemberService memberService) {
        this.memberService = memberService;
    }
}
