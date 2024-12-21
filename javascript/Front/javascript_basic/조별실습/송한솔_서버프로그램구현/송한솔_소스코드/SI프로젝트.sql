--���̺� ����
drop table si_users;
drop table si_board;
-- ���̺� ����
select * from si_users;
select * from si_board;
commit;
/*
    ȸ������ ���̺� ����
*/
create table si_users (
    seq         number primary key,
    email       varchar2(50),
    id          varchar2(30),
    password    varchar2(30),                                  
    name        varchar2(20),
    tel         varchar2(30),
    bday        varchar2(50),
    address     varchar2(50),
    agree       varchar2(80),
    joinDate    Date            DEFAULT sysdate,
    role        varchar2(10)     default 'guest'
);

/*
    ���ǰԽ��� ���̺����
*/
create table si_board(
    seq             number                primary key,
    type            varchar2(20),
    choice          varchar2(20),
    title           varchar2(200),
    content         varchar2(2000),
    user_name       varchar2(30),
    user_email      varchar2(30),
    first_tel       varchar2(30),
    second_tel      varchar2(30),

    regdate         date            default sysdate,
    cnt             number          default 0,

    -- �亯�� �Խ��� 
    ref             number,
    re_step         number,
    re_level        number
);


-- ���� ������ �߰�

-- SQL ������ ȸ���߰�
insert into si_users(seq, id, password, name,tel,role) values((select nvl(max(seq),0)+1 from si_users),'admin','admin','admin',01012341234,'������');
-- �Ϲ� ȸ���߰�
insert into si_users values((select nvl(max(seq),0)+1 from si_users),'skycriper@naver.com','kim','1234','���Ѽ�','01031277711','94-03-15','�߶���','1',sysdate,'admin');
insert into si_users values((select nvl(max(seq),0)+1 from si_users),'skycriper@naver.com','song','1234','���Ѽ�','01031277711','94-03-15','�߶���','1',sysdate,'admin');

-- ���̺� ����
select * from si_users;
select * from si_board;
commit;


-- ������ ȸ�� id/password üũ
select * from si_users where id = 'song' and password = '1234';

-- ȸ�� ����
delete from si_users where seq = 3;

-- ���ǰԽ��� �߰� (1:1���� �۾���)
insert into si_board values((select nvl(max(seq),0)+1 from si_board),'louis@naver.com','louis','123123!','������','01012341234','19900129','��õ����','����','20221011',1,1,1,1);

--�Խñ� ����Ʈ ��ȸ(���߿� ������ ���ο��� / ����� ����� �� �ش�� �Ʒ���)
select * from (select A.*,Rownum Rnum from (select * from si_board order by ref desc, re_step asc)A);

-- �� + �ֽű� �������� ��10�� ��������
select * from (select A.*,Rownum Rnum from (select * from si_board order by ref desc, re_step asc)A) "
					+ "where Rnum >=1 and Rnum <=10;
-- ��� �ޱ�
insert into si_board values((select nvl(max(seq),0)+1 from si_board),'louis@naver.com','louis','123123!','������','01012341234','19900129','��õ����','����','20221011',0,1,1+1,1+1);

-- �� ����
update si_board set title = '�������', content = '����������' where seq = 4;

-- �� ����
delete from si_board where seq = 4;
-- ���̺� ����
select * from si_users;
select * from si_board;
commit;