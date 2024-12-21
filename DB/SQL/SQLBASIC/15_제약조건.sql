/*
    # �������� (RDBMS) = ���� ���� �н�
    
    # ������ ���Ἲ
    
        - ��Ȯ��, �ϰ���, ��ȿ��
    
    ## ������ ���Ἲ
    
        - NOT NULL  : NULL ������
        - UNIQUE : �ߺ��Ǵ� �� ������
        - PRIMARY KEY ; ���̺��� �⺻ Ű�� ���(NOT NULL, UNIQUE��)
        - FOREIGN KEY : �ش� �÷��� �ܷ�Ű�� ����. �����÷��� �ݵ�� ����
        - CHECK
        
        
    # ��ü ���Ἲ
        
        - ���̺���  �����ʹ� �ݵ�� �÷��� ������ �� �־����
        - ������ ��ü ���Ἲ�� ��Ű������ ������������ PK�� ���
        
    # ���� ���Ἲ
    
        - ���� ���迡 �ִ� �����ʹ� �׻� �ϰ��� ���� ��������
        - �������� FK�� ���
        
    # ������ ���Ἲ
        - �ϳ��� �����ʹ� �ݵ�� �÷��� ������ �� �־�� ��
        - ������ ��ü 
    
*/
-- ������ ��ųʸ� => �������

SELECT *  FROM all_constraints;
SELECT * FROM user_constraints;

-- ���̺� ������ ���ÿ� �������� �����

create table fruits3(
    name varchar2(20) primary key,
    price number(5) not null
);

insert into fruits3 values('banana',100);
select * from fruits3;


--���������� Ȯ�� �� �� �ִ� ��ɾ� // ������� ������ ��ųʸ� �˻��� ���̺� �빮�ڷ� ǥ��
SELECT * FROM user_constraints where table_name ='FRUITS3';

select * from user_constraints; -- ���� ���� FRUITS3�� ����

/*
    # �̹� ������ ���̺� �������� �߰�
*/


-- ���̺� �߰�
create table fruits4 (
    fid number(4),
    fname varchar2(20),
    grade varchar2(2),
    fsize number(2)
);
desc fruits4;

ALTER TABLE fruits4 ADD CONSTRAINT f4_fid_pk PRIMARY KEY(fid); -- f4_fid_pk ��Ī
desc fruits4; -- NOT NULL �߰� Ȯ��

ALTER TABLE fruits4 ADD CONSTRAINT f4_fname_uk UNIQUE(fname); -- �ȵǴ� ��ɾ�, UNIQUE�� PRIMARY KEY�� ��ħ
-- MODIFY : ����
ALTER TABLE fruits4 MODIFY (fname varchar2(20) CONSTRAINT f4_fname_nn NOT NULL);
desc fruits4;

desc fruits4;