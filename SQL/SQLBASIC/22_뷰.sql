/*
    # ��(VIEW)
    
        - �����ͺ��̽����� �����ϴ� ������ ���̺�
        - �並 ����ϸ� ������ �������� ����� �� ����
        - ��� �並 ���鶧 ��G�� �������� �����ϴ� ���̸�, �並 ��ȸ�Ҷ��� �並 ����� ����� �������� ������
        - �ַ� SELECT������ �����
*/
drop table a1;
drop table a2;
-- ������ ���̺� ���� a1 a2
create table a1
as
select * from employees;

create table a2
as
select * from departments;


select * from a1;
select * from a2;

/*
    # �� �����
        �Ϲ� �������δ� view ���������� �����Ƿ� ������ �������� ���� �� �ش� ������ ������ �ο��ؾ� ��
        => �����ڰ� �ϴ°� �ƴ϶� DB���� ������ ��???
        cmd ����
        sqlplus
        system
        manager
        �ϸ�
        SQL>   ����
        SQL > grant create view to hr;   <= ��ɹ�
        - hr�� view�� ���� ������ �ο�
*/
-- ���� ���� ����ϰ� �ִ� ���� Ȯ��
show user;

-- ����� �����ȣ, �̸�, �޿�, �ٹ��μ��̸�, �ٹ������� ������ �ִ� �� �����ϱ�
CREATE VIEW emp_dept_view
AS 
SELECT a1.employee_id, a1.first_name, a1.salary, a2.department_id, a2.location_id
FROM
employees a1, departments a2
WHERE
a1.department_id = a2.department_id;


--�� ��ȸ = ����� �� �������� �����

select * from emp_dept_view;



--�� �ǽ�

create table emp02
as
select * from emp01;

select * from emp02;

-- ���̸� emp02_view, ��� emp02 ��ȸ, ���̿� ��ȸ
--�ҽ� �ٿ��ֱ�,�ѹ���
CREATE VIEW emp02_view
AS 
SELECT *
FROM
emp02;

select * from emp02_view;
