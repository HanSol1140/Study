/*

    #�׷��Լ�
    
        - ���̺��� ����� Ư�� �÷��� �������� �׷�ȭ�Ͽ� ����ϴ� �Լ���
        - Ư�� �׷��� ����, ���� ��յ��� ���ϴ� �Լ���
        - �׷��� ������ �Ǵ� �÷��� GROUP BY ���� ���� [����]��
        - �׷� �Լ��� ����� �Ϲ� �÷��� �Բ� ��µ� �� ����
*/

select * from employees;
select salary from employees;
select sum(salary) from employees;
--salary�� ��
--salary�� ���� �� �� ������ ���̵��� �ٰ�
SELECT job_id, SUM(salary) FROM employees GROUP BY job_id;
-- job_id�� ����, salary����ģ�� employees�� job_id�׷쿡��

/*
    SUM(column) : ����
    AVG(column) : ���
    MAX(column) : �ִ�
    MIN(column) : �ּҰ�
    COUNT(column) : ����
*/

--�� job_id(����)�� ��ձ޿�avg()�� ���
SELECT job_id, AVG(salary) FROM employees GROUP BY job_id;


--�μ���(department_id)�� Ŀ�̼� �޴� �������� �� �ο����� ���
select * from employees;
SELECT department_id, COUNT(commission_pct) FROM employees GROUP BY department_id;
SELECT * FROM employees WHERE department_id = 80;
--INTERSECT : ������


/*
    ����1 : �� �μ����� ���� �ֱٿ� �Ի��� ��¥��, ���� ������ �Ի��� ��¥�� ������ּ���.
*/
select * from employees;
SELECT department_id, MAX(hire_date) AS "�ֱ�", MAX(hire_date) AS "������" FROM employees GROUP BY department_id;


/*
    ����2 : �� ��å�� ��� ������ ���� �� ��ȸ�ϼ���.
*/
select * from employees;
select  job_id, SUM(salary) FROM employees GROUP BY job_id; --����
select  job_id, SUM(salary*12) FROM employees GROUP BY job_id; --����

SELECT
    job_id,
    AVG(salary*(1+NVL(commission_pct,0))*12) AS "��տ���"
FROM
    employees
GROUP BY
    job_id;
        
        
SELECT
    job_id,
    AVG(salary*(1+NVL(commission_pct,0))*12) as ��տ���
FROM
    employees
GROUP BY
    job_id;
        
--�׷��Լ� ����� ���� ������ �ְ� �������� HAVING ���� ���
SELECT job_id, AVG(salary) AS avg_sal FROM employees GROUP BY job_id HAVING AVG(salary) >= 10000;

--5�� ���Ϸ� ������ �μ��� �ְ� �޿����� ���ο����� �׷�ȭ�Ͽ� �μ����� ��ȸ

-- �����Ѱ� / ����
SELECT job_id AS "����", COUNT(department_id) AS "�ο���", AVG(salary) "����ӱ�" FROM employees GROUP BY job_id HAVING COUNT(department_id) <= 5;

--�ߺ�
SELECT department_id, MAX(salary), count(*) FROM employees GROUP BY department_id HAVING count(*) <= 5;

--WHERE���� GROUP BY�� �Բ� ���Ǹ� WHERE�� ������ ��� �࿡ ������ ����� ���� GROUP BY �׷��� ������
SELECT department_id, MIN(salary) FROM employees WHERE salary >= 5000 GROUP BY department_id;

