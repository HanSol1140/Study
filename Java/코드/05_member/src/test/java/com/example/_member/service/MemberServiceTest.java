package com.example._member.service;

import com.example._member.domain.Member;
import com.example._member.repository.MemberRepository;
import com.example._member.repository.MemoryMemberRepository;
import com.example._member.repository.MemoryMemberRepositoryTest;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class MemberServiceTest {

    MemberService memberService;
    MemoryMemberRepository memberRepository;

    @BeforeEach
    public void beforeEach(){
        memberRepository = new MemoryMemberRepository();
        memberService = new MemberService(memberRepository);
    }

    @AfterEach // 함수가 끝날때마다 동작하는 함수
    public void afterEach(){
        memberRepository.clearStore();
    }

    @Test
    void 회원가입() {
        // given
            Member member = new Member();
            member.setName("spring");

        // when
            Long saveId = memberService.join(member);

        // then
            Member findMember = memberService.findOne(saveId).get();
            Assertions.assertEquals(member.getName(),findMember.getName());
    }
    @Test
    public void 중복회원예외처리(){
        // given
            Member member1 = new Member();
            member1.setName("spring");

            Member member2 = new Member();
            member2.setName("spring");

        // when
            memberService.join(member1);

            // try{
            //    memberService.join(member2);
            //    fail(); // member1과 2가 같을때 catch로 안넘어가고 try가 작동되면 실패
            // }catch(IllegalStateException e){
            //     Assertions.assertEquals(e.getMessage(),"이미 존재하는 회원입니다.");
            // }
            //
            // ▲ assertThrows를 사용해서 코드 압축

            IllegalStateException e = assertThrows(IllegalStateException.class, () -> memberService.join(member2));
            assertEquals(e.getMessage(), "이미 존재하는 회원입니다.");
            // memberService.join(member2)를 실행하면 => IllegalStateException.class(예외처리)가 출력되어야한다.


        // then
    }


    @Test
    void findMembers() {
    }

    @Test
    void findOne() {
    }
}