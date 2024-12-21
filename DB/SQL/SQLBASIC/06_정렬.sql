/*

    #그룹함수
    
        - 원하는 컬럼 기준으로 정렬하여 조회할 수 있음
        - ORDER BY 컬럼명 [ASC | DESC]
        - ASC : 오름차순, Ascending(기본값 = 생략하면 오름차순 // A -> Z // 9 -> 1)
        - DESC : 내림차순 , Descending ( 기본값 = 생략하면 내림차순 // Z -> A // 1 -> 9)
*/
select * from departments;

SELECT * FROM departments ORDER BY department_name;
--departments을 department_name으로 정렬
SELECT * FROM departments ORDER BY department_id ASC;
SELECT * FROM departments ORDER BY department_id DESC;

--null은 오ㅗ름차순하면 가장 나중에 등장, 내림차순 하면 가장 먼저 등장

SELECT * FROM employees ORDER BY commission_pct;
SELECT * FROM employees ORDER BY commission_pct DESC;

--컬럼별 정렬

SELECT * FROM employees ORDER BY job_id ASC, hire_date ASC;


/*
    연습
*/
SELECT * FROM employees;
-- 연습1. 모든 사원들을 최근 입사한 순서대로 정렬하여 조회
SELECT * FROM employees ORDER BY hire_date DESC;

-- 연습2. 이름에 i가 포함되어 있는 사원들의 급여를 많이 받는 순서대로 조회
SELECT * FROM employees WHERE first_name like '%i%' ORDER BY salary DESC;
