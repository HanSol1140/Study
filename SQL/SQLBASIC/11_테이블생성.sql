/*
    # DML (Data Manipulation Language = 데이터 조작어)
    
        - SELECT : 데이터 조회
        - INSERT : 데이터 추가
        - UPDATE : 데이터 수정
        - DELETE : 데이터 삭제
    
    # DDL (Data Definition Language = 데이터 정의어)
    
        - 테이블, 시퀸스 등 DB에서 사용하는 객체 구조를 생성할때 사용하는 명령어
        - CREATE : 객체만들기
        - DROP : 객체 삭제
        - ALTER : 객체 수정
        - TRUNCATE : 객체 완전 삭제
        
    # DCL (Data Control Language = 데이터 제어어)
    
        - GRANT : 권한 부여
        - REVOKE : 권한 회수
*/

-- 테이블 생성 : CREATE TABLE 만들 테이블명 (컬럼명1 :  컬럼데이터타입1,  컬럼명2 컬럼데이터타입2, ....);
-- 이클립스 VO에서 멤버변수를 만들때 테이블 데이터 컬럼명과 멤버변수명은 똑같아야함

--테이블 생성 1
CREATE TABLE goods (
    name VARCHAR2(20),
    qty NUMBER(4),
    price NUMBER(5)
);

-- 테이블 구조 조회
DESC goods;
-- 유저명 조회
show user;

--데이터 삽입
insert into goods values('굿즈1','5','50000');

--테이블 조회
select * from goods;

--테이블 삭제
DROP TABLE goods;








-- 테이블 생성 2
create table test_member (
    id VARCHAR2(10) primary key,
    pw VARCHAR2(10) not null,
    name VARCHAR2(20),
    email VARCHAR2(30)
);
--생성된 테이블 확인
select * from test_member;

-- 데이터 삽입
insert into test_member values('ezen','1234','이젠','ezen@co.kr');




/*
    #데이터 딕셔너리 (Data Dictionary)
    
        - 현재 DB 상황을 DB가 알아서 정리하고 관리하는 데이터
*/

SELECT * FROM all_tables;
SELECT * FROM user_tables;