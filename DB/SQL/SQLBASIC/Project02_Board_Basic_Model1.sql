drop table mc_board;
--Project02_Board_Basic_Model1
-- �Խ��� ���̺� ����
CREATE TABLE mc_board(
    num number primary key,
    writer varchar2(20),
    email varchar2(20),
    subject varchar2(30),
    password varchar2(20),
    reg_date varchar2(20),
    ref number,
    re_step number,
    re_level number,
    readcount number,
    content varchar2(500)
);
select * from mc_board;
desc mc_board;
commit;
rollback;

-- ������ �����
CREATE SEQUENCE mc_board_seq INCREMENT by 1 START with 1;
commit;
rollback;
drop SEQUENCE mc_board_seq;
-- a. ���� ū ref ���� �о���� ����
SELECT max(ref) from mc_board;

-- ���ڵ� ����(�۾���)
insert into mc_board values(mc_board_seq.nextval,'���Ѽ�','skycriper@naver.com','������2','1111',sysdate,1,2,3,0,'����������2');
commit;
rollback;
select * from mc_board;

-- �Խ��� �������� ����(���ο���� ���οö���� ����)
-- select * from mc_board order by num desc;

-- ������ �Խ���
select * from mc_board;
update mc_board set passward='1234';
update mc_board set ref='1';
update mc_board set re_step='0';
update mc_board set re_level='0';
commit;
-- ������ ������ �ø���
select * from mc_board;
ALTER SEQUENCE mc_board_seq INCREMENT BY -1;

--������ ����
select * from mc_board;
select * from mc_board order by ref desc, re_step asc;

--�Խ��� �� �󼼺���
select * from mc_board;
select * from mc_board where num=1;

--�� ��ȸ�� ����
select * from mc_board;
update mc_board set readcount = (readcount+1) where num = 3;

--��й�ȣ üũ
select * from mc_board;
select password from mc_board where num = 3;

--�Խñ� ����(������Ʈ)
select * from mc_board;
update mc_board set subject='123', content='123' where num = 6;

--�Խñ� ����
select * from mc_board;
select * from mc_board order by num desc;
delete mc_board where num =11;
commit;

-- �Խñ� ��� sql��
select * from mc_board;
insert into mc_board values(mc_board_seq,'1234','1234','1234','1234',sysdate,ref,(re_step+1),(re_step+1)+1,0,'1234';