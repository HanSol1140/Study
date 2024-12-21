/*
    # DML (Data Manipulation Language = ������ ���۾�)
    
        - SELECT : ������ ��ȸ
        - INSERT : ������ �߰�
        - UPDATE : ������ ����
        - DELETE : ������ ����
    
    # DDL (Data Definition Language = ������ ���Ǿ�)
    
        - ���̺�, ������ �� DB���� ����ϴ� ��ü ������ �����Ҷ� ����ϴ� ��ɾ�
        - CREATE : ��ü�����
        - DROP : ��ü ����
        - ALTER : ��ü ����
        - TRUNCATE : ��ü ���� ����
        
    # DCL (Data Control Language = ������ �����)
    
        - GRANT : ���� �ο�
        - REVOKE : ���� ȸ��
*/

-- ���̺� ���� : CREATE TABLE ���� ���̺�� (�÷���1 :  �÷�������Ÿ��1,  �÷���2 �÷�������Ÿ��2, ....);
-- ��Ŭ���� VO���� ��������� ���鶧 ���̺� ������ �÷���� ����������� �Ȱ��ƾ���

--���̺� ���� 1
CREATE TABLE goods (
    name VARCHAR2(20),
    qty NUMBER(4),
    price NUMBER(5)
);

-- ���̺� ���� ��ȸ
DESC goods;
-- ������ ��ȸ
show user;

--������ ����
insert into goods values('����1','5','50000');

--���̺� ��ȸ
select * from goods;

--���̺� ����
DROP TABLE goods;








-- ���̺� ���� 2
create table test_member (
    id VARCHAR2(10) primary key,
    pw VARCHAR2(10) not null,
    name VARCHAR2(20),
    email VARCHAR2(30)
);
--������ ���̺� Ȯ��
select * from test_member;

-- ������ ����
insert into test_member values('ezen','1234','����','ezen@co.kr');




/*
    #������ ��ųʸ� (Data Dictionary)
    
        - ���� DB ��Ȳ�� DB�� �˾Ƽ� �����ϰ� �����ϴ� ������
*/

SELECT * FROM all_tables;
SELECT * FROM user_tables;