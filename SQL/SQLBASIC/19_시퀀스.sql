/*
   # 시퀀스(SEQUENCE)
   
   - 기본키로 사용하기 편하도록 설계된 자동 번호 생성기
   - 호출할때마다 자동으로 번호를 증가시켜주는 DB오브젝트
   
    CREATE SEQUENCE 시퀸스명
        [START WITH n]              - 시퀸스의 시작 번호를 설정
        [INCREMENT BY n]           - 시퀸스 증가값 설정
        [MAXVALUE n]                - 최댓값 설정
        [MINVALUE n]                 - 최솟값 설정
*/

-- 시퀀스 조회
SELECT * FROM user_sequences;
SELECT * FROM all_sequences;
-- 시퀀스 연습 테이블 생성 
-- 테이블명 fruit6 컬럼명 fid 숫자형 fname 문자형 grade 문자형 fsize숫자형
CREATE TABLE fruits6(
    fid NUMBER(20),
    fname VARCHAR2(20),
    grade VARCHAR2(20),
    fsize NUMBER(20)
    );
SELECT * FROM fruits6;

insert into fruits6 values(1,'2','3',4);

insert into fruits6 values(1,'수박','A',4);


-- 시퀸스 생성
CREATE SEQUENCE f6_fid_seq START WITH 3001;

-- 시퀸스 수정
-- ALTER SEQUENCE 이용
commit;
rollback;
SELECT * FROM fruits6;
INSERT INTO fruits6 VALUES(f6_fid_seq.nextval, '참외', 'B', 20);
INSERT INTO fruits6 VALUES(f6_fid_seq.nextval, '사과', 'B', 50);

--시퀀스 삭제 (대문자로 해야함)
DROP SEQUENCE F6_FID_SEQ;

--연습
--테이블명 origins 컬럼명 code 숫자형 kor_name 문자형 eng_name 문자형 weather 숫자형
-- 시퀸스 조건 시작 400번, 100씩 최대 증가 9900
-- 데이터 3개 삽입후 시퀀스 자동증가 되도록 하기
-- 테이블 캡쳐 넘버링

/*
    CREATE SEQUENCE 시퀸스명
        [START WITH n]              - 시퀸스의 시작 번호를 설정
        [INCREMENT BY n]           - 시퀸스 증가값 설정
        [MAXVALUE n]                - 최댓값 설정
        [MINVALUE n]                 - 최솟값 설정
        CREATE SEQUENCE f6_fid_seq START WITH 3001
        INSERT INTO fruits6 VALUES(f6_fid_seq.nextval, '사과', 'B', 50);
*/
CREATE TABLE origins(
    code NUMBER(20),
    kor_name VARCHAR2(20),
    eng_name VARCHAR2(20),
    weather NUMBER(20)
    );
    SELECT * FROM origins;
    DROP SEQUENCE ORIGINS_SEQ;
    CREATE SEQUENCE origins_seq START WITH 400 INCREMENT BY 100 MAXVALUE 9900;
    INSERT INTO origins VALUES(origins_seq.nextval, '참외', 'B', 20);
    
