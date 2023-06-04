/*
    # 인덱스 (INDEX)
    
        - DB 검색속도를 빠르게 하기위해 사용하는 기능
        - PK를 만들면 자동으로 인덱스 기능이 시작됨
        -- 인덱스 장점 = 검색속도 빨라짐, 시스템 부하를 줄여 성능 향상
        -- 인덱스 단점 = 추가적인 기억공간 필요, 인덱스 생성시간이 오래걸림
            => insert, delete, update등 변경 작업이 자주 일어나면 오히려 성능이 저하됨
        
*/

--인덱스 테스트 테이블
create table test_table100(
    date1 number constraint TEST_TABLE primary key,
    date2 number not null
    );
    
SELECT * FROM test_table100;

-- 인덱스 조회 = 인덱스 설정 안해도 자동으로 인덱스키가 등록되어 있음
--                = 오라클은 테이블 생성시 pk를 설정하면 자동으로 인덱스 등록
select * from user_ind_columns;

-- 인덱스 테스트 해보기

create table fruits10 (
    name VARCHAR2(20),
    qty number(5),
    price number(5)
    );
    
select * from fruits10;

insert into fruits10 values('송한솔', 32, 10000);

drop table emp01;
drop table fruits10;
-- emp01 테이블 명으로 fruit10 테이블 복사하여 테이블 만들기(서브쿼리)
CREATE TABLE emp01 AS (select * from fruits10);
select * from fruits10;
select * from emp01;

insert into emp01 select * from emp01;

select * from emp01 where name='송한솔';
-- 특정 컬럼 index만들기
-- 많이 사용하는 컬럼만 만들어서 사용하면 효용성이 높아짐, 의미없는 컬럼을 만들어서 사용하면 비효율적임
CREATE INDEX emp01_idx on emp01(name);

--해당 유저 인덱스조회
select * from user_ind_columns where table_name='EMP01';
-- 인덱스 생성후 조회해보면 검색시간이 빨라짐
select * from emp01 where name='송한솔';
        
--인덱스 삭제
drop index emp01_idx;