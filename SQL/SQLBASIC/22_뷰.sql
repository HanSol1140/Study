/*
    # 뷰(VIEW)
    
        - 데이터베이스에서 제공하는 가상의 테이블
        - 뷰를 사용하면 복잡한 쿼리문을 대신할 수 있음
        - 뷰는 뷰를 만들때 사욯안 쿼리문을 저장하는 것이며, 뷰를 조회할때는 뷰를 만들어 사용한 쿼리문이 동작함
        - 주로 SELECT문으로 사용함
*/
drop table a1;
drop table a2;
-- 연습용 테이블 복사 a1 a2
create table a1
as
select * from employees;

create table a2
as
select * from departments;


select * from a1;
select * from a2;

/*
    # 뷰 만들기
        일반 계정으로는 view 생성권한이 없으므로 관리자 계정으로 접속 후 해당 계정에 권한을 부여해야 함
        => 개발자가 하는게 아니라 DB관련 업종의 일???
        cmd 실행
        sqlplus
        system
        manager
        하면
        SQL>   가뜸
        SQL > grant create view to hr;   <= 명령문
        - hr에 view를 만들 권한을 부여
*/
-- 현재 내가 사용하고 있는 계정 확인
show user;

-- 사원의 사원번호, 이름, 급여, 근무부서이름, 근무지역을 가지고 있는 뷰 생성하기
CREATE VIEW emp_dept_view
AS 
SELECT a1.employee_id, a1.first_name, a1.salary, a2.department_id, a2.location_id
FROM
employees a1, departments a2
WHERE
a1.department_id = a2.department_id;


--뷰 조회 = 저장된 뷰 쿼리문이 실행됨

select * from emp_dept_view;



--뷰 실습

create table emp02
as
select * from emp01;

select * from emp02;

-- 뷰이름 emp02_view, 기능 emp02 조회, 뷰이용 조회
--소스 붙여넣기,넘버링
CREATE VIEW emp02_view
AS 
SELECT *
FROM
emp02;

select * from emp02_view;
