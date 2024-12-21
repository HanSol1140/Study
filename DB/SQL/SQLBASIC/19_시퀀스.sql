/*
   # ������(SEQUENCE)
   
   - �⺻Ű�� ����ϱ� ���ϵ��� ����� �ڵ� ��ȣ ������
   - ȣ���Ҷ����� �ڵ����� ��ȣ�� ���������ִ� DB������Ʈ
   
    CREATE SEQUENCE ��������
        [START WITH n]              - �������� ���� ��ȣ�� ����
        [INCREMENT BY n]           - ������ ������ ����
        [MAXVALUE n]                - �ִ� ����
        [MINVALUE n]                 - �ּڰ� ����
*/

-- ������ ��ȸ
SELECT * FROM user_sequences;
SELECT * FROM all_sequences;
-- ������ ���� ���̺� ���� 
-- ���̺�� fruit6 �÷��� fid ������ fname ������ grade ������ fsize������
CREATE TABLE fruits6(
    fid NUMBER(20),
    fname VARCHAR2(20),
    grade VARCHAR2(20),
    fsize NUMBER(20)
    );
SELECT * FROM fruits6;

insert into fruits6 values(1,'2','3',4);

insert into fruits6 values(1,'����','A',4);


-- ������ ����
CREATE SEQUENCE f6_fid_seq START WITH 3001;

-- ������ ����
-- ALTER SEQUENCE �̿�
commit;
rollback;
SELECT * FROM fruits6;
INSERT INTO fruits6 VALUES(f6_fid_seq.nextval, '����', 'B', 20);
INSERT INTO fruits6 VALUES(f6_fid_seq.nextval, '���', 'B', 50);

--������ ���� (�빮�ڷ� �ؾ���)
DROP SEQUENCE F6_FID_SEQ;

--����
--���̺�� origins �÷��� code ������ kor_name ������ eng_name ������ weather ������
-- ������ ���� ���� 400��, 100�� �ִ� ���� 9900
-- ������ 3�� ������ ������ �ڵ����� �ǵ��� �ϱ�
-- ���̺� ĸ�� �ѹ���

/*
    CREATE SEQUENCE ��������
        [START WITH n]              - �������� ���� ��ȣ�� ����
        [INCREMENT BY n]           - ������ ������ ����
        [MAXVALUE n]                - �ִ� ����
        [MINVALUE n]                 - �ּڰ� ����
        CREATE SEQUENCE f6_fid_seq START WITH 3001
        INSERT INTO fruits6 VALUES(f6_fid_seq.nextval, '���', 'B', 50);
*/
CREATE TABLE origins(
    code NUMBER(20),
    kor_name VARCHAR2(20),
    eng_name VARCHAR2(20),
    weather NUMBER(20)
    );
    SELECT * FROM origins;
    DROP SEQUENCE ORIGINS_SEQ;
    CREATE SEQUENCE origins_seq START WITH 400 INCREMENT BY 100 MAXVALUE 9900;
    INSERT INTO origins VALUES(origins_seq.nextval, '����', 'B', 20);
    
