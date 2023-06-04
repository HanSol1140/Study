drop table test_member;
drop table test_board;

-- 계정 테이블 생성
CREATE TABLE test_member(
    id  VARCHAR2(20) PRIMARY KEY,
    password VARCHAR2(20) NOT NULL,
    name VARCHAR2(10),
    email VARCHAR2(50)
    );
-- test_member 테스트
insert into test_member values('song','song123','송한솔','skycriper@naver.com');
insert into test_member values('123','123','123','123');

select * from test_member;
desc test_member;

-- 게시판 테이블 생성
CREATE TABLE test_board(
    seq NUMBER(10) PRIMARY KEY,
    title VARCHAR2(200) NOT NULL,
    NICKNAME VARCHAR2(20) NOT NULL,
    content VARCHAR2(1000) NOT NULL,
    regdate DATE DEFAULT sysdate,
    cnt NUMBER(10) default 0
);
-- test_board 글등록
insert into test_board(seq, title, nickname, content, regdate) 
values(1, '첫 번째 게시물', '송한솔', '첫 번째 게시물 내용.', '2022-11-10');

select * from test_board;
desc test_board;



-- DB 테이블 확인
select * from test_board;
select * from test_member;
commit;
select * from test_board;

--게시글 추가 sql
insert into test_board(seq,title,nickname,content) VALUES((select NVL(MAX(seq),0)+1 from test_board), 'title', 'name', 'content');
delete from test_board where seq=5;

--게시글 수정 sql
update test_board set title='asfd', content='asdfff' where seq=4;

--게시글 삭제 sql
delete from test_board where seq=4;
rollback;
commit;


--게시글 보기[조회수(cnt)증가 SQL]
select * from board_board;
--String sql = "update board_board set cnt = (cnt+1) where seq=?";
update board_board set cnt = (cnt+1) where seq=3;
update board_board set cnt = (select cnt+1 from board_board where seq = 3) where seq=3;

--게시글 보기(해당 글 보기)
select * from board_board where seq=3;

--게시글 삭제
delete from board_board where seq=8;