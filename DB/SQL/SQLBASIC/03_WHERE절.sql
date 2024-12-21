/*
    # SELECT 컬럼명 FROM 테이블명 WHERE 조건절;
    - 어디에? => 컬럼에
    - 특정 컬럼에 명령문을 주고 싶을때 사용
    
        -SELECT문에 WHERE절을 추가하여 해당조건을 만족하는 컬럼만 조회할 수 있음
        - 오라클은 비교연산자들을 활용
        
    # 비교연산자 : true/false
    
        = : 같으면 true
        비교 : <,> <= ,>=
        !=, <>, ^= : 다르면 true
*/
select * from employees;
SELECT
    first_name,
    last_name,
    job_id,
    salary
FROM
    employees
WHERE
    salary >= 10000;
-- salary가 10000이상인 사람들만 조회

--실습. 모든 직원들의 월급이 10000인 직원 모두를 검색
SELECT
    first_name,
    last_name,
    job_id,
    salary
FROM
    employees
WHERE
    salary = 10000;
-- salary가 10000인 사람들만 조회


-- 문자 타입 비교
select * from employees where first_name > 'P';
select * from employees where first_name > 'V';

-- 실습1 성이 Vance 인 직원의 모든 정보를 출력
select * from employees where first_name = 'Vance';

-- 날짜 타입 비교
select * from employees where hire_date < '2006/01/01';

-- AND, OR, NOT
SELECT * FROM employees WHERE hire_date >= '2006/05/01' AND hire_date < '2008/09/01';

--실습2 JOB_ID가 IT_PROG 또는 SH_CLERK인 직원 모두를 조회하세요
select * from employees;
SELECT * FROM employees WHERE job_id = 'IT_PROG' or job_id = 'SH_CLERK';

--실습3. JOB_ID가 IT_PROG가 아닌 직원 모두를 조회하세요
SELECT * FROM employees WHERE job_id != 'IT_PROG';

/*
    연습1 : 2000에서 3000사이의 월급을 받는 사원들의 모든 정보를 조회해보세요
    연습2 : 30, 60, 90번 부서에 속한 사원들의 이름/직책 전화번호/ 부서번호를 조회해보세요
*/


-- 연습1
select * from employees where salary >= 2000 AND salary <= 3000;
-- 연습2
select
    first_name,
    job_id,
    phone_number,
    department_id
from
    employees
where
    department_id = 30 
    OR department_id = 60
    OR department_id = 90;
    
    
-- MOD(value1, value2)
select * from employees where MOD(employee_id,2) = 0;

-- 컬럼명 BETWEEN A AND B : 해당컬럼의 값이 A이상 B이하인 경우 True
SELECT * FROM employees WHERE salary BETWEEN 2000 AND 3000;

-- 컬럼명 IN(A,B,C...) : ()안에 내용에 값이 있으면 True
SELECT * FROM employees WHERE department_id in (30,60,90);

-- NULL은 크기비교가 불가능하기 때문에 비교연산자를 사용 못함
select * from employees where commission_pct < 0.2;
select * from employees where commission_pct > 0.2;
select * from employees where commission_pct = null; -- 비교연산자 사용 불가
select * from employees where commission_pct is null; -- IS NULL 사용

-- NOT 연산자의 위치 : 비교적 자유롭다
select * from employees where commission_pct IS NOT NULL;
select * from employees where NOT commission_pct IS NULL;

select * from employees where salary NOT BETWEEN 2000 AND 3000;
select * from employees where NOT salary BETWEEN 2000 AND 3000;



/*
    # LIKE
        - 데이터의 일부분으로 원하는 내용을 검색할 수 있음
        - 문자 타입과 날짜 타입에 사용할 수 있음
            % : 길이 제한 없이 아무 문자나 와도 상관없는 와일드 카드
            _ : 반드시 하나의 문자가  와야하는 와일드 카드
*/
SELECT * FROM employees WHERE first_name LIKE 'D%';
-- employees에서 FIRST_NAME이 첫문자 D로 시작하는 데이터를 가져와라

SELECT * FROM employees WHERE first_name LIKE '_e%';
-- 두번째 문자에 e가 나오는 데이터를 가져와라
SELECT * FROM employees WHERE first_name LIKE '__e%';
-- 세번째 문자에 e가 나오는 데이터를 가져와라
SELECT * FROM employees WHERE first_name LIKE '_ea%';
--두번째 문자에 ea가 나오는 데이터를 가져와라
SELECT * FROM employees WHERE first_name LIKE '%t%';
-- 문자열 중간에 t가 들어간 데이터를 가져와라
SELECT * FROM employees WHERE first_name LIKE '%a__';
-- 뒤에서 세번째 문자에 글자가 a인 사원들의 모든 정보를 조회
SELECT * FROM employees WHERE first_name LIKE '%e%e%';
-- 이름 중간에 e가 두 개 이상 포함된 사원들의 모든 정보를 조회
/*
    연습1 : 이름의 뒤에서 세번째 글자가 a인 사원들의 모든 정보를조회
    연습2 : 이름에 e가 두 개 이상 포함된 사원들의 모든 정보를 조회
    연습3 : 이름이 다섯글자이면서 r로 끝나는 사원들의 성과급+월급을 조회
    연습4 : 고용일이 5월인 사원들의 모든 정보를 조회
    연습5 : 고용일이 5일인 사원들의 모든 정보를 조회
*/
SELECT * FROM employees;
-- 연습1
SELECT * FROM employees WHERE first_name LIKE '%a__';
-- 연습2
SELECT * FROM employees WHERE first_name LIKE '%e%e%';
-- 연습3
SELECT first_name, salary * (1+NVL(commission_pct,0)) FROM employees WHERE first_name like '____r';
-- 연습4
SELECT * FROM employees WHERE hire_date LIKE '___05___';
SELECT * FROM employees WHERE hire_date LIKE '%/05/%';
-- 연습5
SELECT * FROM employees WHERE hire_date LIKE '%__/__/_5%';
SELECT * FROM employees WHERE hire_date LIKE '%_5';
