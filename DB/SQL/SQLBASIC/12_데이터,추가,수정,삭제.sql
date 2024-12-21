/*
    # DML (Data Manipulation Language = 데이터 조작어),
    가장 많이 사용
        - SELECT
        - INSERT
        - UPDATE
        - DELETE     
*/
/*
    # 테이블 데이터 생성
    
        - INSERT INTO 테이블명
        
        - INSERT INTO 테이블명 (컬럼명1, 컬럼명2 ....) VALUES(데이터형 맞춰서 값1, 데이터형 맞춰서 값2, ...)
        - 테이블명만 넣엇을경우, 순서대로 데이터값을 넣어줘야 함
        - 테이블명(컬러명1, 컬럼명2, ....) 일 경우, 컬럼명 순서대로 데이터값 넣어줘야 함
*/

--테이블 생성 | 테이블명 = ezen / 컬럼명 = subject(문) / name(문) / count(숫)

create table ezen(
    subject VARCHAR2(20),
    name VARCHAR2(20),
    count NUMBER(10)
);
select * from ezen;
desc ezen;





--테이블 생성
CREATE TABLE fruits(
    name VARCHAR2(20),
    qty NUMBER(5),
    price NUMBER(5)
);
select *from fruits;
desc fruits;
--데이터 삽입
insert into fruits values('오렌지', 10, 3000);
INSERT INTO fruits(name,qty,price)  VALUES('사과',20,5000);
INSERT INTO fruits(name,qty) VALUES('참외',5);

-- 서브쿼리(테이블복사) 사용
CREATE TABLE fruits2 AS (select * from fruits);
select * from fruits2;
INSERT INTO fruits2 (select * from fruits);
select * from fruits2;

/*
   - UPDATE 테이블명 SET 컬럼명 = 값 WHERE 조건들...;
*/

commit;

UPDATE fruits SET name='메론';
select * from fruits;


--롤백
rollback;

--※commit; 당시 상태로 되돌려줌

update fruits set name='메론' where name='오렌지';
select * from fruits;

--가격이 3000원 이상인 과일의 qty를 100으로 변경
update  fruits set qty=100 where price >= 3000;

/*
    # 테이블 데이터 삭제
        -DELETE FROM 테이블명 WHERE 조건들;
*/
DELETE FROM fruits WHERE name='참외';