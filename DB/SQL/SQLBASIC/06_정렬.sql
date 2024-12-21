/*

    #�׷��Լ�
    
        - ���ϴ� �÷� �������� �����Ͽ� ��ȸ�� �� ����
        - ORDER BY �÷��� [ASC | DESC]
        - ASC : ��������, Ascending(�⺻�� = �����ϸ� �������� // A -> Z // 9 -> 1)
        - DESC : �������� , Descending ( �⺻�� = �����ϸ� �������� // Z -> A // 1 -> 9)
*/
select * from departments;

SELECT * FROM departments ORDER BY department_name;
--departments�� department_name���� ����
SELECT * FROM departments ORDER BY department_id ASC;
SELECT * FROM departments ORDER BY department_id DESC;

--null�� ���Ǹ������ϸ� ���� ���߿� ����, �������� �ϸ� ���� ���� ����

SELECT * FROM employees ORDER BY commission_pct;
SELECT * FROM employees ORDER BY commission_pct DESC;

--�÷��� ����

SELECT * FROM employees ORDER BY job_id ASC, hire_date ASC;


/*
    ����
*/
SELECT * FROM employees;
-- ����1. ��� ������� �ֱ� �Ի��� ������� �����Ͽ� ��ȸ
SELECT * FROM employees ORDER BY hire_date DESC;

-- ����2. �̸��� i�� ���ԵǾ� �ִ� ������� �޿��� ���� �޴� ������� ��ȸ
SELECT * FROM employees WHERE first_name like '%i%' ORDER BY salary DESC;
