package com.example._member.service;

import com.example._member.domain.Member;
import com.example._member.repository.MemberRepository;
import com.example._member.repository.MemoryMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    @Autowired
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    /**
     * 회원가입
     */
    public Long join(Member member){
        // 같은 이름이 있는 중복 회원 X
        // Optional<Member> result = memberRepository.findByName(member.getName())
        // result.ifPresent(m -> {
        //     throw new IllegalStateException("이미 존재하는 회원입니다.");
        // });
        // ▲ 압축
        // memberRepository.findByName(member.getName())
        //      .ifPresent(m -> {
        //          throw new IllegalStateException("이미 존재하는 회원입니다.");
        //      });
        // ▲ 메서드화해서 압축
        // Ctrl + Alt + Shift + T => Extract Method
        validateDuplicateMember(member); // 중복회원 검증
        memberRepository.save(member);
        return member.getId();

    }

    private void validateDuplicateMember(Member member) {
        memberRepository.findByName(member.getName())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }
    /**
     * 전체 회원 조회
     */
    public List<Member> findMembers(){
        return memberRepository.findAll();
    }

    public Optional<Member> findOne(Long memberId){
        return memberRepository.findById(memberId);
    }
}
