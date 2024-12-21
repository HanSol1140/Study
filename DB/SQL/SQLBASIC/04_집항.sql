select * from employees;
select * from employees order by first_name;
-- order by : �������
select * from employees where first_name like 'J%' and (first_name like '%s' or first_name like '%n');



-- UNION : ������
SELECT * FROM employees WHERE first_name LIKE 'J%n'-- J�� �����ؼ� N���� ������ first_name�� �˻��϶�
UNION
SELECT * FROM employees WHERE first_name LIKE 'J%s'; -- J�� �����ؼ� S���� ������ first_name�� �˻��϶�

-- �μ����� 30�̰�, 10���� 30 ������ �÷��� ���������� ��ȸ�ϼ���.��

-- UNION ALL : ������(�ߺ����� ����)
SELECT * FROM employees WHERE department_id = 30
UNION ALL
SELECT * FROM employees WHERE department_id BETWEEN 10 AND 30;

--MINUS : ������
SELECT * FROM employees WHERE department_id BETWEEN 10 AND 30
MINUS
SELECT * FROM employees WHERE department_id = 30;

--INTERSECT : ������
SELECT * FROM employees WHERE department_id = 30
INTERSECT
SELECT * FROM employees WHERE department_id BETWEEN 10 AND 30;