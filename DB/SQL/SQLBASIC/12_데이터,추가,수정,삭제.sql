/*
    # DML (Data Manipulation Language = ������ ���۾�),
    ���� ���� ���
        - SELECT
        - INSERT
        - UPDATE
        - DELETE     
*/
/*
    # ���̺� ������ ����
    
        - INSERT INTO ���̺��
        
        - INSERT INTO ���̺�� (�÷���1, �÷���2 ....) VALUES(�������� ���缭 ��1, �������� ���缭 ��2, ...)
        - ���̺�� �־������, ������� �����Ͱ��� �־���� ��
        - ���̺��(�÷���1, �÷���2, ....) �� ���, �÷��� ������� �����Ͱ� �־���� ��
*/

--���̺� ���� | ���̺�� = ezen / �÷��� = subject(��) / name(��) / count(��)

create table ezen(
    subject VARCHAR2(20),
    name VARCHAR2(20),
    count NUMBER(10)
);
select * from ezen;
desc ezen;





--���̺� ����
CREATE TABLE fruits(
    name VARCHAR2(20),
    qty NUMBER(5),
    price NUMBER(5)
);
select *from fruits;
desc fruits;
--������ ����
insert into fruits values('������', 10, 3000);
INSERT INTO fruits(name,qty,price)  VALUES('���',20,5000);
INSERT INTO fruits(name,qty) VALUES('����',5);

-- ��������(���̺���) ���
CREATE TABLE fruits2 AS (select * from fruits);
select * from fruits2;
INSERT INTO fruits2 (select * from fruits);
select * from fruits2;

/*
   - UPDATE ���̺�� SET �÷��� = �� WHERE ���ǵ�...;
*/

commit;

UPDATE fruits SET name='�޷�';
select * from fruits;


--�ѹ�
rollback;

--��commit; ��� ���·� �ǵ�����

update fruits set name='�޷�' where name='������';
select * from fruits;

--������ 3000�� �̻��� ������ qty�� 100���� ����
update  fruits set qty=100 where price >= 3000;

/*
    # ���̺� ������ ����
        -DELETE FROM ���̺�� WHERE ���ǵ�;
*/
DELETE FROM fruits WHERE name='����';