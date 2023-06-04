/*
    #오라클 함수 이용 테이블의 데이터를 처리하고 조회 가능
        
        - dual 테이블 이용
        - 오라클에서 제공하는 자체테이블
        - 간단한 함수를 이용 계산 결괏값을 확인할 때 사용하는 테이블임
*/

SELECT * FROM dual;


-- floo(n) 내림
SELECT floor(342.322) FROM dual;

-- ceil(n) 올림
SELECT ceil(123.456) FROM dual;

--round(n) 반올림
SELECT round(123.456) FROM dual;

-- MOD(n, m) 나머지 연산
SELECT mod(15, 10) FROM dual;

-- TRIM() 공백제거
SELECT trim('          hello') FROM dual;

-- LPAD(원본, 길이, 채울문자) 왼쪽에 원하는 문자를 채움
SELECT lpad('COFFEE',  10, '#') FROM dual;
-- RPAD(원본, 길이, 채울문자) 오른쪽에 원하는 문자를 채움
SELECT rpad('COFFEE',  10, '#') FROM dual;

-- TO_CHAR() 데이터를 문자 타입으로 변경
SELECT to_char(123) FROM dual;
SELECT to_char(sysdate, 'YYYY/MM/DD HH:MI:SS') FROM dual; -- 날짜 타입을 문자 타입으로 변경

-- TO_DATE() 데이터를 날짜 타입으로 변경
SELECT to_date('[2022-11-09]','[YYYY-MM-DD]') FROM dual;



