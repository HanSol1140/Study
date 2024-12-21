/*
    # 서브쿼리
    
        - 하나의 SELECT 문에 포함된 또 하나의 SELECT문
        - 메인 쿼리 아래에 포함된 쿼리임
        - 서브쿼리가 먼저 실행되어 그 결과를 메인쿼리에 전달함
        
    # 단일행 서브쿼리 주로 사용
    
        - 서브 쿼리의 실행 결과가 하나인 서브쿼리     
*/

SELECT * FROM employees;
SELECT * FROM board_board;

drop table board_board; --혹시 테이블이 이미 생성되어잇으면 제거하고 다시만들기

CREATE TABLE board_board (
    seq NUMBER(4) primary key,
    title VARCHAR2(200) not null,
    nickname VARCHAR2(20) not null,
    content VARCHAR2(30) not null
);

INSERT INTO board_board(seq,title,nickname,content)
VALUES(
    (SELECT nvl(MAX(seq),0)+1 FROM board_board), '타이틀', '닉네임', '콘텐츠'
);

-- 다중행 서브쿼리
SELECT * FROM employees;
SELECT * FROM JOBS;
SELECT * FROM jobs WHERE job_id In(SELECT job_id FROM employees WHERE first_name = 'Peter');


