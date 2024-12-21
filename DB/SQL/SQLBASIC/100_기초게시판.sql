/*
    ���� ��� TABLE ���� ����
    1.
    ȸ�� ���� ���̺� �� : board_user
    �÷��� : id, password, name, role
    ������ �� : ��� ���ڿ�
    ������ ���� : 28, 8, 30, 5
    ������� : pk, not null, not null, default 'User'
    2.
    ȸ�� ���� ���̺� �� : board_board
    �÷��� : seq, title, contents, regdate, cnt, userid
    ������ �� : ����, ���ڿ�, ���ڿ�, ���ڿ�, date, ������
    ������ ���� : 4, 200, 30, 2000, date, 5, 8
    ������� : pk, not null, not null, not null, default sysdate, default 0, 8
    
    �� ���̺� ��� ������ ������ 5���� insert
    seq = 1,2,3,4,5
    sysdate = ���ڿ��� �־��� '2020-02-06'
*/
--1.
CREATE TABLE board_user (
    id VARCHAR2(28) primary key,
    password VARCHAR2(8) not null,
    name VARCHAR2(30) not null,
    role VARCHAR2(5) default 'User'
);

insert into board_user values('borard_user1','12341','��������1','User');
insert into board_user values('borard_user2','12342','��������2','User');
insert into board_user values('borard_user3','12343','��������3','User');
insert into board_user values('borard_user4','12344','��������4','User');
insert into board_user values('borard_user5','12345','��������5','User');

SELECT * FROM board_user;



--2.
CREATE TABLE board_board (
    seq NUMBER(4) primary key,
    title VARCHAR2(200) not null,
    content VARCHAR2(30) not null,
    regdate VARCHAR2(2000) not null,
    cnt DATE default sysdate,
    userid NUMBER(8) default '8'
);

insert into board_board values('1', 'Ÿ��Ʋ1', '������1', 2022-11-21, '');
insert into board_board values('2', 'Ÿ��Ʋ2', '������2', '��ϳ�¥2', '', '1002');
insert into board_board values('3', 'Ÿ��Ʋ3', '������3', '��ϳ�¥3', '', '1003');
insert into board_board values('4', 'Ÿ��Ʋ4', '������4', '��ϳ�¥4', '', '1004');
insert into board_board values('5', 'Ÿ��Ʋ5', '������5', '��ϳ�¥5', '', '1005');

update board_board set regdate='��ϳ�¥1' where seq='1';

SELECT * FROM board_board;


--3.
rollback;
commit;


--4
drop table board_board;
drop table board_user;