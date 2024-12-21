/*
    # SELECT �÷��� FROM ���̺�� WHERE ������;
    - ���? => �÷���
    - Ư�� �÷��� ��ɹ��� �ְ� ������ ���
    
        -SELECT���� WHERE���� �߰��Ͽ� �ش������� �����ϴ� �÷��� ��ȸ�� �� ����
        - ����Ŭ�� �񱳿����ڵ��� Ȱ��
        
    # �񱳿����� : true/false
    
        = : ������ true
        �� : <,> <= ,>=
        !=, <>, ^= : �ٸ��� true
*/
select * from employees;
SELECT
    first_name,
    last_name,
    job_id,
    salary
FROM
    employees
WHERE
    salary >= 10000;
-- salary�� 10000�̻��� ����鸸 ��ȸ

--�ǽ�. ��� �������� ������ 10000�� ���� ��θ� �˻�
SELECT
    first_name,
    last_name,
    job_id,
    salary
FROM
    employees
WHERE
    salary = 10000;
-- salary�� 10000�� ����鸸 ��ȸ


-- ���� Ÿ�� ��
select * from employees where first_name > 'P';
select * from employees where first_name > 'V';

-- �ǽ�1 ���� Vance �� ������ ��� ������ ���
select * from employees where first_name = 'Vance';

-- ��¥ Ÿ�� ��
select * from employees where hire_date < '2006/01/01';

-- AND, OR, NOT
SELECT * FROM employees WHERE hire_date >= '2006/05/01' AND hire_date < '2008/09/01';

--�ǽ�2 JOB_ID�� IT_PROG �Ǵ� SH_CLERK�� ���� ��θ� ��ȸ�ϼ���
select * from employees;
SELECT * FROM employees WHERE job_id = 'IT_PROG' or job_id = 'SH_CLERK';

--�ǽ�3. JOB_ID�� IT_PROG�� �ƴ� ���� ��θ� ��ȸ�ϼ���
SELECT * FROM employees WHERE job_id != 'IT_PROG';

/*
    ����1 : 2000���� 3000������ ������ �޴� ������� ��� ������ ��ȸ�غ�����
    ����2 : 30, 60, 90�� �μ��� ���� ������� �̸�/��å ��ȭ��ȣ/ �μ���ȣ�� ��ȸ�غ�����
*/


-- ����1
select * from employees where salary >= 2000 AND salary <= 3000;
-- ����2
select
    first_name,
    job_id,
    phone_number,
    department_id
from
    employees
where
    department_id = 30 
    OR department_id = 60
    OR department_id = 90;
    
    
-- MOD(value1, value2)
select * from employees where MOD(employee_id,2) = 0;

-- �÷��� BETWEEN A AND B : �ش��÷��� ���� A�̻� B������ ��� True
SELECT * FROM employees WHERE salary BETWEEN 2000 AND 3000;

-- �÷��� IN(A,B,C...) : ()�ȿ� ���뿡 ���� ������ True
SELECT * FROM employees WHERE department_id in (30,60,90);

-- NULL�� ũ��񱳰� �Ұ����ϱ� ������ �񱳿����ڸ� ��� ����
select * from employees where commission_pct < 0.2;
select * from employees where commission_pct > 0.2;
select * from employees where commission_pct = null; -- �񱳿����� ��� �Ұ�
select * from employees where commission_pct is null; -- IS NULL ���

-- NOT �������� ��ġ : ���� �����Ӵ�
select * from employees where commission_pct IS NOT NULL;
select * from employees where NOT commission_pct IS NULL;

select * from employees where salary NOT BETWEEN 2000 AND 3000;
select * from employees where NOT salary BETWEEN 2000 AND 3000;



/*
    # LIKE
        - �������� �Ϻκ����� ���ϴ� ������ �˻��� �� ����
        - ���� Ÿ�԰� ��¥ Ÿ�Կ� ����� �� ����
            % : ���� ���� ���� �ƹ� ���ڳ� �͵� ������� ���ϵ� ī��
            _ : �ݵ�� �ϳ��� ���ڰ�  �;��ϴ� ���ϵ� ī��
*/
SELECT * FROM employees WHERE first_name LIKE 'D%';
-- employees���� FIRST_NAME�� ù���� D�� �����ϴ� �����͸� �����Ͷ�

SELECT * FROM employees WHERE first_name LIKE '_e%';
-- �ι�° ���ڿ� e�� ������ �����͸� �����Ͷ�
SELECT * FROM employees WHERE first_name LIKE '__e%';
-- ����° ���ڿ� e�� ������ �����͸� �����Ͷ�
SELECT * FROM employees WHERE first_name LIKE '_ea%';
--�ι�° ���ڿ� ea�� ������ �����͸� �����Ͷ�
SELECT * FROM employees WHERE first_name LIKE '%t%';
-- ���ڿ� �߰��� t�� �� �����͸� �����Ͷ�
SELECT * FROM employees WHERE first_name LIKE '%a__';
-- �ڿ��� ����° ���ڿ� ���ڰ� a�� ������� ��� ������ ��ȸ
SELECT * FROM employees WHERE first_name LIKE '%e%e%';
-- �̸� �߰��� e�� �� �� �̻� ���Ե� ������� ��� ������ ��ȸ
/*
    ����1 : �̸��� �ڿ��� ����° ���ڰ� a�� ������� ��� ��������ȸ
    ����2 : �̸��� e�� �� �� �̻� ���Ե� ������� ��� ������ ��ȸ
    ����3 : �̸��� �ټ������̸鼭 r�� ������ ������� ������+������ ��ȸ
    ����4 : ������� 5���� ������� ��� ������ ��ȸ
    ����5 : ������� 5���� ������� ��� ������ ��ȸ
*/
SELECT * FROM employees;
-- ����1
SELECT * FROM employees WHERE first_name LIKE '%a__';
-- ����2
SELECT * FROM employees WHERE first_name LIKE '%e%e%';
-- ����3
SELECT first_name, salary * (1+NVL(commission_pct,0)) FROM employees WHERE first_name like '____r';
-- ����4
SELECT * FROM employees WHERE hire_date LIKE '___05___';
SELECT * FROM employees WHERE hire_date LIKE '%/05/%';
-- ����5
SELECT * FROM employees WHERE hire_date LIKE '%__/__/_5%';
SELECT * FROM employees WHERE hire_date LIKE '%_5';
