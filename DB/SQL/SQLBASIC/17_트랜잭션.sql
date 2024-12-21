/*
    # 트랜잭션 (Transaction)
        
        - 데이터 처리의 한 단위
        - 하나의 논리적인 작업이 완전하게 처리되는 단위
        - ALL or Nothing = 트랜잭션의 모든 과정이 정상적으로 완료되는 경우에만 변경사항을 확정 해야함
        - 트랜잭션 명령어  = COMMIT, ROLLBACK, SAVEPOINT등이 있다.
        - 하나의 트랜잭션의 단위 = 마지막 커밋부터 새로운 커밋 시작 전까지
*/

select * from employees;

-- 테이블명 cafe_menu, 컬럼명 coffee 정수형 4자리 제약사항 PK
DROP TABLE cafe_menu;
/*
CREATE TABLE cafe_menu (
    coffee NUMBER(4) PRIMARY KEY
);
*/



CREATE TABLE cafe_menu (
    coffee NUMBER(4) CONSTRAINT cafe_menu_coffee_pk PRIMARY KEY
);
desc cafe_menu;

-- 테이블 수정
-- 컬럼 추가 name 문자형 uq,nn
ALTER TABLE cafe_menu ADD(
    name VARCHAR2(30)
        CONSTRAINT cafe_menu_name_uk UNIQUE
        CONSTRAINT cafe_menu_name_nn NOT NULL
);
        
-- check : check(체크) 안에 데이터 종류를 지정할 수 있음
ALTER TABLE cafe_menu ADD(
    price NUMBER(5)
        CONSTRAINT cafe_menu_price_chk CHECK(price >= 0) -- 0 이상의 숫자만 받는다.
        CONSTRAINT cafe_menu_price_nn NOT NULL
);
-- 컬럼 2개 추가
-- 컬럼명 min_size / max_size | 제약사항 컬럼값 = S M L가 포함된 문자만 가능, nn

ALTER TABLE cafe_menu ADD(
    min_size VARCHAR2(1)
        CONSTRAINT cafe_menu_min_size_chk CHECK (min_size IN('S','M','L'))
        CONSTRAINT cafe_menu_min_size_nn NOT NULL,
    max_size VARCHAR2(1)
        CONSTRAINT cafe_menu_max_size_chk CHECK (max_size IN('S','M','L'))
        CONSTRAINT cafe_menu_max_size_nn NOT NULL
);
SELECT * FROM cafe_menu;

--cafe_menu에 데이터 5개 넣으세요
INSERT INTO cafe_menu VALUES(
    '1001', '아메리카노', '3000', 'S', 'L'
    );
INSERT INTO cafe_menu VALUES(
    '1002', '카페라떼', '4000', 'S', 'L'
    );
INSERT INTO cafe_menu VALUES(
    '1003', '카페모카', '4000', 'S', 'L'
    );
INSERT INTO cafe_menu VALUES(
    '1004', '바닐라라떼', '4000', 'S', 'M'
    );
INSERT INTO cafe_menu VALUES(
    '1005', '아이스티', '3000', 'S', 'M'
    );
COMMIT;
INSERT INTO cafe_menu VALUES(
    '202', '아이스커피', '4500', 'M', 'L'
    );
    
--롤백(ROLLBACK)
ROLLBACK;
SAVEPOINT s01;
ROLLBACK TO s01;