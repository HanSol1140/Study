/*
    # SELECT 컬럼명 FROM 테이블명;
        - 원하는 테이블을 조회하는 쿼리문
        - 컬럼명 자리에 *은 모든 컬럼을 의미
        - 컬럼명과 테이블명은 대소문자를 구분하지 않음
        - 쿼리문도 대소문자를 구분하지 않음
        - 단, 데이터는 대소문자를 구분
*/
select * from employees;


SELECT * FROM tab;
/*
    # 연습용 테이블
        - EMPLOYEES : 모든 사원 정보를 저장한 테이블
        - DEPARTMENTS : 모든 부서 정보를 저장한 테이블
        - JOBS : 모든 직급 정보를 저장한 테이블
        - LOCATIONS : 지역 정보를 저장한 테이블
        - REGIONS : 대륙 정보를 저장한 테이블
*/
--select * from employees;
--select * from departments;
--select * from jobs;
--select * from locations;
--select * from regions;
/*
    # SQL DATATYPE
    
    # NUMBER(n), NUMBER(n,m)
        
        - 숫자 데이터만 저장할 수 있는 컬럼
        - 숫자가 하나만 적혀 있으면 정수를 저장하는 컬럼임
        - 숫자가 두개 적혀 있으면 실수를 저장하는 컬럼임
            (예) NUMBER(8) => 정수 8자리
                 NUMBER(8,2) => 정수 6자리, 소수 2자리
                 
    # CHAR(n)
    
        - 고정 길이 문자 데이터를 저장하는 컬럼 타입
        - 저장하는 데이터의 크기에 따라 고정된 공간만 사용
        - 데이터를 저장할 때 설정이전에 크기 계산이 필요
        
    # VARCHAR2(n)
    
        - 가변 길이 문자 데이터를 저장하는 컬럼 타입
        - 저장하는 데이터의 크기를 자동으로 할당
        - 가장 많이 사용하는 데이터타입
    # DATE
        - 날짜 및 시간을 저장하는 컬럼 타입
*/

-- 실습1 : 모든 사원의 사번/이름/월급/부서번호를 조회
select * from employees;
select employee_id, first_name, last_name, salary, department_id from employees;
-- AS를 이용해 해당 컬럼을 원하는 이름으로 조회할 수 있음
select
    employee_id AS a,
    first_name AS b,
    salary AS c,
    department_id AS d
FROM
    employees;
    
-- 산술 연산자를 이용할 수 있음
SELECT last_name, salary FROM employees;
SELECT last_name, salary * 12 AS "이 사람의 연봉" FROM employees;
SELECT last_name, salary *0.8 AS "삭감된 연봉" FROM employees;

/*
    #NVL(column, value)
    
        - 계산에 사용되는 컬럼의 값에 NULL이 있는경우
        - NULL을 대체할 값을 지정하는 함수
*/
select * from employees;
select last_name, salary, commission_pct, job_id, salary from employees;

SELECT
    last_name
    salary,
    commission_pct,
    job_id,
    salary * (1 + NVL(commission_pct,0)) AS "커미션 적용 급여"
    -- commission_pct,0 => 0 = null(값이없을때) 기본값
FROM
    employees;
    
    
-- 실습2. 모든 사원들의 사번/이름/직책ID/  보너스가 적용된 '연봉'을 출력

select * from employees;
select employee_id, first_name, department_id, salary * (1 + NVL(commission_pct,0)) *12 AS "커미션 적용연봉" from employees;

-- SELECT DISTINCT : 중복되는 내용은 한번씩만 출력
SELECT DISTINCT job_id FROM employees; -- 존재하는 모든 직책을 한번씩 조회
-- 존재하는 모든 부서를 한번씩 조회
select distinct department_id from employees;