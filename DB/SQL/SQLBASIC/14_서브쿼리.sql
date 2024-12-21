/*
    # ��������
    
        - �ϳ��� SELECT ���� ���Ե� �� �ϳ��� SELECT��
        - ���� ���� �Ʒ��� ���Ե� ������
        - ���������� ���� ����Ǿ� �� ����� ���������� ������
        
    # ������ �������� �ַ� ���
    
        - ���� ������ ���� ����� �ϳ��� ��������     
*/

SELECT * FROM employees;
SELECT * FROM board_board;

drop table board_board; --Ȥ�� ���̺��� �̹� �����Ǿ������� �����ϰ� �ٽø����

CREATE TABLE board_board (
    seq NUMBER(4) primary key,
    title VARCHAR2(200) not null,
    nickname VARCHAR2(20) not null,
    content VARCHAR2(30) not null
);

INSERT INTO board_board(seq,title,nickname,content)
VALUES(
    (SELECT nvl(MAX(seq),0)+1 FROM board_board), 'Ÿ��Ʋ', '�г���', '������'
);

-- ������ ��������
SELECT * FROM employees;
SELECT * FROM JOBS;
SELECT * FROM jobs WHERE job_id In(SELECT job_id FROM employees WHERE first_name = 'Peter');


