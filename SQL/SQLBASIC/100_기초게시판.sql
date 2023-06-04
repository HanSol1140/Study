/*
    실제 사용 TABLE 설계 연습
    1.
    회원 정보 테이블 명 : board_user
    컬럼명 : id, password, name, role
    데이터 형 : 모두 문자열
    데이터 길이 : 28, 8, 30, 5
    제약사항 : pk, not null, not null, default 'User'
    2.
    회원 정보 테이블 명 : board_board
    컬럼명 : seq, title, contents, regdate, cnt, userid
    데이터 형 : 숫자, 문자열, 문자열, 문자열, date, 숫자형
    데이터 길이 : 4, 200, 30, 2000, date, 5, 8
    제약사항 : pk, not null, not null, not null, default sysdate, default 0, 8
    
    두 테이블 모두 임의의 데이터 5개씩 insert
    seq = 1,2,3,4,5
    sysdate = 문자열로 넣어줌 '2020-02-06'
*/
--1.
CREATE TABLE board_user (
    id VARCHAR2(28) primary key,
    password VARCHAR2(8) not null,
    name VARCHAR2(30) not null,
    role VARCHAR2(5) default 'User'
);

insert into board_user values('borard_user1','12341','보더유저1','User');
insert into board_user values('borard_user2','12342','보더유저2','User');
insert into board_user values('borard_user3','12343','보더유저3','User');
insert into board_user values('borard_user4','12344','보더유저4','User');
insert into board_user values('borard_user5','12345','보더유저5','User');

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

insert into board_board values('1', '타이틀1', '컨텐츠1', 2022-11-21, '');
insert into board_board values('2', '타이틀2', '컨텐츠2', '등록날짜2', '', '1002');
insert into board_board values('3', '타이틀3', '컨텐츠3', '등록날짜3', '', '1003');
insert into board_board values('4', '타이틀4', '컨텐츠4', '등록날짜4', '', '1004');
insert into board_board values('5', '타이틀5', '컨텐츠5', '등록날짜5', '', '1005');

update board_board set regdate='등록날짜1' where seq='1';

SELECT * FROM board_board;


--3.
rollback;
commit;


--4
drop table board_board;
drop table board_user;