/*
    # 테이블 JOIN
    
        - PK(기본키), FK(외래키) 관계
        - INNER JOIN(=EQUI JOIN)을 주로 사용
        - 두 테이블에서 서로 동일한 값을 가진 컬럼을 이용(PK,FK)데이터
        - 두 테이블을 실제 사용시 이름이 같은 컬럼이 있으면, 컬럼명 앞에 테이블 명을 반드시 표기해야함(.연산자 이용)
*/

select * from employees;
select * from departments;

SELECT
    employees.first_name,
    department_name
FROM
    employees,
    departments
WHERE
    employees.department_id = departments.department_id;
    
--연습1 : 조인을 이용하여 모든 사원들의 사원번호/이름/부서이름을 조회 사용테이블은 위와 동일
select * from employees;
select * from departments;
SELECT
    employee_id,
    first_name,
    department_name
FROM
    employees,
    departments
WHERE
    employees.department_id = departments.department_id;
    