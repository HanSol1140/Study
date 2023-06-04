select * from employees;
select * from employees order by first_name;
-- order by : 순서대로
select * from employees where first_name like 'J%' and (first_name like '%s' or first_name like '%n');



-- UNION : 합집합
SELECT * FROM employees WHERE first_name LIKE 'J%n'-- J로 시작해서 N으로 끝나는 first_name을 검색하라
UNION
SELECT * FROM employees WHERE first_name LIKE 'J%s'; -- J로 시작해서 S으로 끝나는 first_name을 검색하라

-- 부서명이 30이고, 10에서 30 사이인 컬럼을 합집합으로 조회하세요.ㅁ

-- UNION ALL : 합집합(중복제거 안함)
SELECT * FROM employees WHERE department_id = 30
UNION ALL
SELECT * FROM employees WHERE department_id BETWEEN 10 AND 30;

--MINUS : 차집합
SELECT * FROM employees WHERE department_id BETWEEN 10 AND 30
MINUS
SELECT * FROM employees WHERE department_id = 30;

--INTERSECT : 교집합
SELECT * FROM employees WHERE department_id = 30
INTERSECT
SELECT * FROM employees WHERE department_id BETWEEN 10 AND 30;