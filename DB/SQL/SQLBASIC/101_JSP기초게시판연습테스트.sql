drop table test_member;
drop table test_board;

-- ���� ���̺� ����
CREATE TABLE test_member(
    id  VARCHAR2(20) PRIMARY KEY,
    password VARCHAR2(20) NOT NULL,
    name VARCHAR2(10),
    email VARCHAR2(50)
    );
-- test_member �׽�Ʈ
insert into test_member values('song','song123','���Ѽ�','skycriper@naver.com');
insert into test_member values('123','123','123','123');

select * from test_member;
desc test_member;

-- �Խ��� ���̺� ����
CREATE TABLE test_board(
    seq NUMBER(10) PRIMARY KEY,
    title VARCHAR2(200) NOT NULL,
    NICKNAME VARCHAR2(20) NOT NULL,
    content VARCHAR2(1000) NOT NULL,
    regdate DATE DEFAULT sysdate,
    cnt NUMBER(10) default 0
);
-- test_board �۵��
insert into test_board(seq, title, nickname, content, regdate) 
values(1, 'ù ��° �Խù�', '���Ѽ�', 'ù ��° �Խù� ����.', '2022-11-10');

select * from test_board;
desc test_board;



-- DB ���̺� Ȯ��
select * from test_board;
select * from test_member;
commit;
select * from test_board;

--�Խñ� �߰� sql
insert into test_board(seq,title,nickname,content) VALUES((select NVL(MAX(seq),0)+1 from test_board), 'title', 'name', 'content');
delete from test_board where seq=5;

--�Խñ� ���� sql
update test_board set title='asfd', content='asdfff' where seq=4;

--�Խñ� ���� sql
delete from test_board where seq=4;
rollback;
commit;


--�Խñ� ����[��ȸ��(cnt)���� SQL]
select * from board_board;
--String sql = "update board_board set cnt = (cnt+1) where seq=?";
update board_board set cnt = (cnt+1) where seq=3;
update board_board set cnt = (select cnt+1 from board_board where seq = 3) where seq=3;

--�Խñ� ����(�ش� �� ����)
select * from board_board where seq=3;

--�Խñ� ����
delete from board_board where seq=8;