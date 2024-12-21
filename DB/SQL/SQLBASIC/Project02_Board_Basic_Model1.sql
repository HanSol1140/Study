drop table mc_board;
--Project02_Board_Basic_Model1
-- 게시판 테이블 생성
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

-- 시퀀스 만들기
CREATE SEQUENCE mc_board_seq INCREMENT by 1 START with 1;
commit;
rollback;
drop SEQUENCE mc_board_seq;
-- a. 가장 큰 ref 값을 읽어오는 쿼리
SELECT max(ref) from mc_board;

-- 레코드 삽입(글쓰기)
insert into mc_board values(mc_board_seq.nextval,'송한솔','skycriper@naver.com','글제목2','1111',sysdate,1,2,3,0,'콘텐츠내용2');
commit;
rollback;
select * from mc_board;

-- 게시판 내림차순 정렬(새로운글이 위로올라오게 정렬)
-- select * from mc_board order by num desc;

-- 계층형 게시판
select * from mc_board;
update mc_board set passward='1234';
update mc_board set ref='1';
update mc_board set re_step='0';
update mc_board set re_level='0';
commit;
-- 시퀀스 내리고 올리기
select * from mc_board;
ALTER SEQUENCE mc_board_seq INCREMENT BY -1;

--계층형 쿼리
select * from mc_board;
select * from mc_board order by ref desc, re_step asc;

--게시판 글 상세보기
select * from mc_board;
select * from mc_board where num=1;

--글 조회수 증가
select * from mc_board;
update mc_board set readcount = (readcount+1) where num = 3;

--비밀번호 체크
select * from mc_board;
select password from mc_board where num = 3;

--게시글 수정(업데이트)
select * from mc_board;
update mc_board set subject='123', content='123' where num = 6;

--게시글 삭제
select * from mc_board;
select * from mc_board order by num desc;
delete mc_board where num =11;
commit;

-- 게시글 답글 sql문
select * from mc_board;
insert into mc_board values(mc_board_seq,'1234','1234','1234','1234',sysdate,ref,(re_step+1),(re_step+1)+1,0,'1234';