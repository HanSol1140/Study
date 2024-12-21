/*
    # SELECT �÷��� FROM ���̺��;
        - ���ϴ� ���̺��� ��ȸ�ϴ� ������
        - �÷��� �ڸ��� *�� ��� �÷��� �ǹ�
        - �÷���� ���̺���� ��ҹ��ڸ� �������� ����
        - �������� ��ҹ��ڸ� �������� ����
        - ��, �����ʹ� ��ҹ��ڸ� ����
*/
select * from employees;


SELECT * FROM tab;
/*
    # ������ ���̺�
        - EMPLOYEES : ��� ��� ������ ������ ���̺�
        - DEPARTMENTS : ��� �μ� ������ ������ ���̺�
        - JOBS : ��� ���� ������ ������ ���̺�
        - LOCATIONS : ���� ������ ������ ���̺�
        - REGIONS : ��� ������ ������ ���̺�
*/
--select * from employees;
--select * from departments;
--select * from jobs;
--select * from locations;
--select * from regions;
/*
    # SQL DATATYPE
    
    # NUMBER(n), NUMBER(n,m)
        
        - ���� �����͸� ������ �� �ִ� �÷�
        - ���ڰ� �ϳ��� ���� ������ ������ �����ϴ� �÷���
        - ���ڰ� �ΰ� ���� ������ �Ǽ��� �����ϴ� �÷���
            (��) NUMBER(8) => ���� 8�ڸ�
                 NUMBER(8,2) => ���� 6�ڸ�, �Ҽ� 2�ڸ�
                 
    # CHAR(n)
    
        - ���� ���� ���� �����͸� �����ϴ� �÷� Ÿ��
        - �����ϴ� �������� ũ�⿡ ���� ������ ������ ���
        - �����͸� ������ �� ���������� ũ�� ����� �ʿ�
        
    # VARCHAR2(n)
    
        - ���� ���� ���� �����͸� �����ϴ� �÷� Ÿ��
        - �����ϴ� �������� ũ�⸦ �ڵ����� �Ҵ�
        - ���� ���� ����ϴ� ������Ÿ��
    # DATE
        - ��¥ �� �ð��� �����ϴ� �÷� Ÿ��
*/

-- �ǽ�1 : ��� ����� ���/�̸�/����/�μ���ȣ�� ��ȸ
select * from employees;
select employee_id, first_name, last_name, salary, department_id from employees;
-- AS�� �̿��� �ش� �÷��� ���ϴ� �̸����� ��ȸ�� �� ����
select
    employee_id AS a,
    first_name AS b,
    salary AS c,
    department_id AS d
FROM
    employees;
    
-- ��� �����ڸ� �̿��� �� ����
SELECT last_name, salary FROM employees;
SELECT last_name, salary * 12 AS "�� ����� ����" FROM employees;
SELECT last_name, salary *0.8 AS "�谨�� ����" FROM employees;

/*
    #NVL(column, value)
    
        - ��꿡 ���Ǵ� �÷��� ���� NULL�� �ִ°��
        - NULL�� ��ü�� ���� �����ϴ� �Լ�
*/
select * from employees;
select last_name, salary, commission_pct, job_id, salary from employees;

SELECT
    last_name
    salary,
    commission_pct,
    job_id,
    salary * (1 + NVL(commission_pct,0)) AS "Ŀ�̼� ���� �޿�"
    -- commission_pct,0 => 0 = null(���̾�����) �⺻��
FROM
    employees;
    
    
-- �ǽ�2. ��� ������� ���/�̸�/��åID/  ���ʽ��� ����� '����'�� ���

select * from employees;
select employee_id, first_name, department_id, salary * (1 + NVL(commission_pct,0)) *12 AS "Ŀ�̼� ���뿬��" from employees;

-- SELECT DISTINCT : �ߺ��Ǵ� ������ �ѹ����� ���
SELECT DISTINCT job_id FROM employees; -- �����ϴ� ��� ��å�� �ѹ��� ��ȸ
-- �����ϴ� ��� �μ��� �ѹ��� ��ȸ
select distinct department_id from employees;