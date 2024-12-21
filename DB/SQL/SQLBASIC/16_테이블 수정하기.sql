/*
    # 테이블 수정하기
    
    # 테이블 복사
    
        -   CREATE TABLE 테이블명 AS (서브쿼리)
*/

-- employees 테이블을 employees2 테이블로 테이블 복사
-- employeess2 유저 제약사항 확인


--서브쿼리(테이블 복사)
CREATE TABLE employees2 AS (select * from employees);
--제약사항(딕셔너리) 확인
SELECT * FROM user_constraints WHERE table_name ='EMPLOYEES2'; 


/*
    테이블에 새 컬럼 추가
        - ALTER TABLE 테이블명 ADD (컬럼명 컬럼타입1, 컬럼명 컬럼타입2, ....);
*/
create table Jelly (
    color varchar2(20) not null
);
desc jelly;
drop table jelly;
--  풀어쓰면
create table Jelly (
    color varchar2(20)
        constraint jelly_color_nn NOT NULL
);
-- 컬럼추가 // 추가하면서 제약사항 확인
ALTER TABLE Jelly ADD (
    brand varchar2(30)
        constraint jelly_brand_uk UNIQUE
        constraint jelly_brand_nn NOT NULL,
    code char(2)
        COnstraint jelly_code_nn NOT NULL
);
desc jelly;
drop table jelly;
/*

    # 테이블의 컬럼 이름 변경
        - ALTER TABLE 테이블명 RENAME COLUMN 현재이름 TO 바꿀이름;
*/
SELECT * FROM jelly;
ALTER TABLE jelly RENAME COLUMN code TO record;

/*
    # 테이블 이름 변경 
    
        - RENAME 현재 테이블명 TO 바꿀 테이블명;
*/
RENAME jelly TO zelly;
SELECT * FROM zelly;

/*
    # 컬럼 구조 수정하기
    
        - ALTER TABLE 테이블명 MODIFY (컬럼명 컬럼데이터타입1, 컬럼명 컬럼데이터타입2, ...);
*/
desc zelly;
ALTER TABLE zelly MODIFY (
    record  varchar2(10)
);
desc zelly;


/*
    # 컬럼 삭제하기
    
        - ALTER TABLE 테이블명 DROP COLUMN 컬럼명;
*/
ALTER TABLE zelly DROP COLUMN record;
SELECT * FROM zelly;


/*
    # 테이블 제약조건 삭제
        - ALTER TABLE 테이블명 DROP CONSTRAINT 제약조건명;
    
*/
ALTER TABLE zelly DROP CONSTRAINT jelly_color_nn;
SELECT * FROM user_constraints;

SELECT * FROM user_constraints WHERE table_name = 'ZELLY';

desc zelly;