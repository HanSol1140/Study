/*
    # ���̺� JOIN
    
        - PK(�⺻Ű), FK(�ܷ�Ű) ����
        - INNER JOIN(=EQUI JOIN)�� �ַ� ���
        - �� ���̺��� ���� ������ ���� ���� �÷��� �̿�(PK,FK)������
        - �� ���̺��� ���� ���� �̸��� ���� �÷��� ������, �÷��� �տ� ���̺� ���� �ݵ�� ǥ���ؾ���(.������ �̿�)
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
    
--����1 : ������ �̿��Ͽ� ��� ������� �����ȣ/�̸�/�μ��̸��� ��ȸ ������̺��� ���� ����
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
    