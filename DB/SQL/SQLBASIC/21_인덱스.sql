/*
    # �ε��� (INDEX)
    
        - DB �˻��ӵ��� ������ �ϱ����� ����ϴ� ���
        - PK�� ����� �ڵ����� �ε��� ����� ���۵�
        -- �ε��� ���� = �˻��ӵ� ������, �ý��� ���ϸ� �ٿ� ���� ���
        -- �ε��� ���� = �߰����� ������ �ʿ�, �ε��� �����ð��� �����ɸ�
            => insert, delete, update�� ���� �۾��� ���� �Ͼ�� ������ ������ ���ϵ�
        
*/

--�ε��� �׽�Ʈ ���̺�
create table test_table100(
    date1 number constraint TEST_TABLE primary key,
    date2 number not null
    );
    
SELECT * FROM test_table100;

-- �ε��� ��ȸ = �ε��� ���� ���ص� �ڵ����� �ε���Ű�� ��ϵǾ� ����
--                = ����Ŭ�� ���̺� ������ pk�� �����ϸ� �ڵ����� �ε��� ���
select * from user_ind_columns;

-- �ε��� �׽�Ʈ �غ���

create table fruits10 (
    name VARCHAR2(20),
    qty number(5),
    price number(5)
    );
    
select * from fruits10;

insert into fruits10 values('���Ѽ�', 32, 10000);

drop table emp01;
drop table fruits10;
-- emp01 ���̺� ������ fruit10 ���̺� �����Ͽ� ���̺� �����(��������)
CREATE TABLE emp01 AS (select * from fruits10);
select * from fruits10;
select * from emp01;

insert into emp01 select * from emp01;

select * from emp01 where name='���Ѽ�';
-- Ư�� �÷� index�����
-- ���� ����ϴ� �÷��� ���� ����ϸ� ȿ�뼺�� ������, �ǹ̾��� �÷��� ���� ����ϸ� ��ȿ������
CREATE INDEX emp01_idx on emp01(name);

--�ش� ���� �ε�����ȸ
select * from user_ind_columns where table_name='EMP01';
-- �ε��� ������ ��ȸ�غ��� �˻��ð��� ������
select * from emp01 where name='���Ѽ�';
        
--�ε��� ����
drop index emp01_idx;