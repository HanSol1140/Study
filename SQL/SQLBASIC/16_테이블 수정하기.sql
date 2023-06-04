/*
    # ���̺� �����ϱ�
    
    # ���̺� ����
    
        -   CREATE TABLE ���̺�� AS (��������)
*/

-- employees ���̺��� employees2 ���̺�� ���̺� ����
-- employeess2 ���� ������� Ȯ��


--��������(���̺� ����)
CREATE TABLE employees2 AS (select * from employees);
--�������(��ųʸ�) Ȯ��
SELECT * FROM user_constraints WHERE table_name ='EMPLOYEES2'; 


/*
    ���̺� �� �÷� �߰�
        - ALTER TABLE ���̺�� ADD (�÷��� �÷�Ÿ��1, �÷��� �÷�Ÿ��2, ....);
*/
create table Jelly (
    color varchar2(20) not null
);
desc jelly;
drop table jelly;
--  Ǯ���
create table Jelly (
    color varchar2(20)
        constraint jelly_color_nn NOT NULL
);
-- �÷��߰� // �߰��ϸ鼭 ������� Ȯ��
ALTER TABLE Jelly ADD (
    brand varchar2(30)
        constraint jelly_brand_uk UNIQUE
        constraint jelly_brand_nn NOT NULL,
    code char(2)
        COnstraint jelly_code_nn NOT NULL
);
desc jelly;
drop table jelly;
/*

    # ���̺��� �÷� �̸� ����
        - ALTER TABLE ���̺�� RENAME COLUMN �����̸� TO �ٲ��̸�;
*/
SELECT * FROM jelly;
ALTER TABLE jelly RENAME COLUMN code TO record;

/*
    # ���̺� �̸� ���� 
    
        - RENAME ���� ���̺�� TO �ٲ� ���̺��;
*/
RENAME jelly TO zelly;
SELECT * FROM zelly;

/*
    # �÷� ���� �����ϱ�
    
        - ALTER TABLE ���̺�� MODIFY (�÷��� �÷�������Ÿ��1, �÷��� �÷�������Ÿ��2, ...);
*/
desc zelly;
ALTER TABLE zelly MODIFY (
    record  varchar2(10)
);
desc zelly;


/*
    # �÷� �����ϱ�
    
        - ALTER TABLE ���̺�� DROP COLUMN �÷���;
*/
ALTER TABLE zelly DROP COLUMN record;
SELECT * FROM zelly;


/*
    # ���̺� �������� ����
        - ALTER TABLE ���̺�� DROP CONSTRAINT �������Ǹ�;
    
*/
ALTER TABLE zelly DROP CONSTRAINT jelly_color_nn;
SELECT * FROM user_constraints;

SELECT * FROM user_constraints WHERE table_name = 'ZELLY';

desc zelly;