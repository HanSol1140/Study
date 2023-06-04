/*

    #그룹함수
    
        - 테이블의 행들을 특정 컬럼을 기준으로 그룹화하여 계산하는 함수들
        - 특정 그룹의 총합, 갯수 평균등을 구하는 함수들
        - 그룹의 기준이 되는 컬럼은 GROUP BY 절을 통해 [선택]함
        - 그룹 함수의 결과는 일반 컬럼과 함께 출력될 수 없음
*/

select * from employees;
select salary from employees;
select sum(salary) from employees;
--salary의 합
--salary가 뭔지 모를 수 있으니 아이디값을 줄것
SELECT job_id, SUM(salary) FROM employees GROUP BY job_id;
-- job_id를 선택, salary를합친다 employees의 job_id그룹에서

/*
    SUM(column) : 총합
    AVG(column) : 평균
    MAX(column) : 최댓값
    MIN(column) : 최소값
    COUNT(column) : 갯수
*/

--각 job_id(직종)의 평균급여avg()를 출력
SELECT job_id, AVG(salary) FROM employees GROUP BY job_id;


--부서별(department_id)로 커미션 받는 직원들의 총 인원수를 출력
select * from employees;
SELECT department_id, COUNT(commission_pct) FROM employees GROUP BY department_id;
SELECT * FROM employees WHERE department_id = 80;
--INTERSECT : 교집합


/*
    연습1 : 각 부서별로 가장 최근에 입사한 날짜와, 가장 오래전 입사한 날짜를 출력해주세요.
*/
select * from employees;
SELECT department_id, MAX(hire_date) AS "최근", MAX(hire_date) AS "오래전" FROM employees GROUP BY department_id;


/*
    연습2 : 각 직책별 평균 연봉을 구한 후 조회하세요.
*/
select * from employees;
select  job_id, SUM(salary) FROM employees GROUP BY job_id; --월급
select  job_id, SUM(salary*12) FROM employees GROUP BY job_id; --연봉

SELECT
    job_id,
    AVG(salary*(1+NVL(commission_pct,0))*12) AS "평균연봉"
FROM
    employees
GROUP BY
    job_id;
        
        
SELECT
    job_id,
    AVG(salary*(1+NVL(commission_pct,0))*12) as 평균연봉
FROM
    employees
GROUP BY
    job_id;
        
--그룹함수 결과에 대한 조건을 주고 싶을때는 HAVING 절을 사용
SELECT job_id, AVG(salary) AS avg_sal FROM employees GROUP BY job_id HAVING AVG(salary) >= 10000;

--5명 이하로 구성된 부서의 최고 급여자의 총인원수를 그룹화하여 부서명을 조회

-- 내가한거 / 실패
SELECT job_id AS "업종", COUNT(department_id) AS "인원수", AVG(salary) "평균임금" FROM employees GROUP BY job_id HAVING COUNT(department_id) <= 5;

--견본
SELECT department_id, MAX(salary), count(*) FROM employees GROUP BY department_id HAVING count(*) <= 5;

--WHERE절과 GROUP BY과 함께 사용되면 WHERE의 조건을 모든 행에 적용한 결과를 통해 GROUP BY 그룹이 생성됨
SELECT department_id, MIN(salary) FROM employees WHERE salary >= 5000 GROUP BY department_id;

