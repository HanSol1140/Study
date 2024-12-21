/*
    # 제약조건 (RDBMS) = 개념 위주 학습
    
    # 데이터 무결성
    
        - 정확성, 일관성, 유효성
    
    ## 데이터 무결성
    
        - NOT NULL  : NULL 허용안함
        - UNIQUE : 중복되는 값 허용안함
        - PRIMARY KEY ; 테이블의 기본 키로 사용(NOT NULL, UNIQUE임)
        - FOREIGN KEY : 해당 컬럼을 외래키로 설정. 참조컬럼을 반드시 지정
        - CHECK
        
        
    # 개체 무결성
        
        - 테이블의  데이터는 반드시 컬럼을 구분할 수 있어야함
        - 데이터 개체 무결성을 지키기위해 제약조건으로 PK를 사용
        
    # 참조 무결성
    
        - 참조 관계에 있는 데이터는 항상 일관된 값을 가져야함
        - 제약조건 FK를 사용
        
    # 도메인 무결성
        - 하나의 데이터는 반드시 컬럼을 구분할 수 있어야 함
        - 데이터 개체 
    
*/
-- 데이터 딕셔너리 => 제약사항

SELECT *  FROM all_constraints;
SELECT * FROM user_constraints;

-- 테이블 생성과 동시에 제약조건 만들기

create table fruits3(
    name varchar2(20) primary key,
    price number(5) not null
);

insert into fruits3 values('banana',100);
select * from fruits3;


--제약조건을 확인 할 수 있는 명령어 // 제약사항 데이터 딕셔너리 검색시 테이블 대문자로 표기
SELECT * FROM user_constraints where table_name ='FRUITS3';

select * from user_constraints; -- 밑을 보면 FRUITS3이 있음

/*
    # 이미 생성된 테이블에 제약조건 추가
*/


-- 테이블 추가
create table fruits4 (
    fid number(4),
    fname varchar2(20),
    grade varchar2(2),
    fsize number(2)
);
desc fruits4;

ALTER TABLE fruits4 ADD CONSTRAINT f4_fid_pk PRIMARY KEY(fid); -- f4_fid_pk 별칭
desc fruits4; -- NOT NULL 추가 확인

ALTER TABLE fruits4 ADD CONSTRAINT f4_fname_uk UNIQUE(fname); -- 안되는 명령어, UNIQUE는 PRIMARY KEY와 겹침
-- MODIFY : 수정
ALTER TABLE fruits4 MODIFY (fname varchar2(20) CONSTRAINT f4_fname_nn NOT NULL);
desc fruits4;

desc fruits4;