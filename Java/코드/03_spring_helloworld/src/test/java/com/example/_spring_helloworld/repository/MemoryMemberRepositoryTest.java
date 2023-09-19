package com.example._spring_helloworld.repository;

import com.example._spring_helloworld.domain.Member;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

public class MemoryMemberRepositoryTest {
    MemoryMemberRepository repository = new MemoryMemberRepository();
    @AfterEach // 메서드가 끝날때마다 동작하는 함수 (콜백 메서드)
    public void afterEach(){
        repository.clearStore();
    }

    @Test
    public void save() {
        Member member = new Member();
        member.setName("한솔");

        repository.save(member);
        System.out.println(member.getId());
        System.out.println(member.getName());
        System.out.println("============================");
        Member result = repository.findById(member.getId()).get();
        System.out.println(member); // com.example._spring_helloworld.domain.Member@568bf312
        System.out.println(result); // com.example._spring_helloworld.domain.Member@568bf312
        System.out.println("============================");
        System.out.println("result = " + (result == member)); // Java에서 == 연산자는 참조값을 비교함
        System.out.println("result = " + result.equals(member)); //true
        System.out.println("============================");
        /*
            ※ 헷갈리는 사항
            Member result = repository.findById(member.getId()).get();
            이것은 member.getId()의 값을 get하는게 아니라
            repository의 FindById(member.getId())와 일치하는 객체를 get()해서 result에 할당한다는 의미
            즉 member.getId()의 Id를 가진 객체를 get()하는 것 이라서
            result == member / result.equals(member) 모두 true를 반환합니다.
        */
        Assertions.assertThat(member).isEqualTo(result); // 아무것도 반환하지않지만, 컴파일 되는것 자체가 문제없다는의미
        // Assertions.assertThat(member).isEqualTo(null); // 이렇게 틀린 값이 들어갈경우 Run이 동작하지않음
    }

    @Test
    public void findByName(){
        // 테스트할 Name 생성
        Member member1 = new Member();
        member1.setName("한솔1");
        repository.save(member1);
        // 바꿀 단어를 더블클릭하고 Shift + F6 => 한번에 바꾸기 / 한번에바꾸기 / 일괄변경
        Member member2 = new Member();
        member2.setName("한솔2");
        repository.save(member2);
        //테스트
        Member result = repository.findByName("한솔1").get();
        Assertions.assertThat(result).isEqualTo(member1);
        // Assertions.assertThat(result).isEqualTo(member2); // result에 "한솔1"이 들어갔기 때문에 오류
    }

    @Test
    public void findAll() {
        Member member1 = new Member();
        member1.setName("한솔1");
        repository.save(member1);

        Member member2 = new Member();
        member2.setName("한솔2");
        repository.save(member2);

        List<Member> result = repository.findAll();

        Assertions.assertThat(result.size()).isEqualTo(2);
    }
}
