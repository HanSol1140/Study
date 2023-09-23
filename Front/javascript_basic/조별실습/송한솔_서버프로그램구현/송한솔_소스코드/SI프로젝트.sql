--테이블 삭제
drop table si_users;
drop table si_board;
-- 테이블 보기
select * from si_users;
select * from si_board;
commit;
/*
    회원정보 테이블 생성
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
    문의게시판 테이블생성
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

    -- 답변형 게시판 
    ref             number,
    re_step         number,
    re_level        number
);


-- 더미 데이터 추가

-- SQL 관리자 회원추가
insert into si_users(seq, id, password, name,tel,role) values((select nvl(max(seq),0)+1 from si_users),'admin','admin','admin',01012341234,'관리자');
-- 일반 회원추가
insert into si_users values((select nvl(max(seq),0)+1 from si_users),'skycriper@naver.com','kim','1234','김한솔','01031277711','94-03-15','중랑구','1',sysdate,'admin');
insert into si_users values((select nvl(max(seq),0)+1 from si_users),'skycriper@naver.com','song','1234','송한솔','01031277711','94-03-15','중랑구','1',sysdate,'admin');

-- 테이블 보기
select * from si_users;
select * from si_board;
commit;


-- 삭제할 회원 id/password 체크
select * from si_users where id = 'song' and password = '1234';

-- 회원 삭제
delete from si_users where seq = 3;

-- 문의게시판 추가 (1:1문의 글쓰기)
insert into si_board values((select nvl(max(seq),0)+1 from si_board),'louis@naver.com','louis','123123!','김찬양','01012341234','19900129','인천서구','동의','20221011',1,1,1,1);

--게시글 리스트 조회(나중에 쓴글이 위로오게 / 답글은 답글을 단 해당글 아래로)
select * from (select A.*,Rownum Rnum from (select * from si_board order by ref desc, re_step asc)A);

-- ▲ + 최신글 기준으로 글10개 가져오기
select * from (select A.*,Rownum Rnum from (select * from si_board order by ref desc, re_step asc)A) "
					+ "where Rnum >=1 and Rnum <=10;
-- 답글 달기
insert into si_board values((select nvl(max(seq),0)+1 from si_board),'louis@naver.com','louis','123123!','김찬양','01012341234','19900129','인천서구','동의','20221011',0,1,1+1,1+1);

-- 글 수정
update si_board set title = '제목수정', content = '콘텐츠수정' where seq = 4;

-- 글 삭제
delete from si_board where seq = 4;
-- 테이블 보기
select * from si_users;
select * from si_board;
commit;