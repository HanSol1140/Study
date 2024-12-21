-- 주석문
select * from tab;
select * from emp;
select * from employees;
/*
    # 데이터베이스 (Database)
    
      - 데이터 창고
      - 데이터를 효율적으로 저장하기 위한 데이터 저장 전문 프로그램
      - 파일 시스템의 많은 문제점과 한계를 극복하기 위한 프로그램
      
    # 파일 시스템의 문제점
    
      - 데이터 불일치가 발생할수 있음
      - 다수 사용자를 위한 동시 제공이 불가능
      - 중복 데이터를 필요 이상으로 많이 저장
      - 파일 복구 기능이 없음
      
    # DBMS (Database Management System)
    
      - 데이터베이스를 관리하기 위한 프로그램
      - 데이터베이스는 데이터를 보관하는 장소이고, 데이터를 다루는 작업은 DBMS가 함
      
    # RDBMS (Relational Database Management System)
    
      - 데이터들 간의 관계를 이용 데이터의 중복을 최소화하는 방식
      - 관계형 데이터베이스는 데이터를 표 형태로 저장
      - 필드(속성, 컬럼) : 한열에 저장될 데이터들의 이름
      - 레코드(튜플, 행) : 한 행에 저장되는 하나의 개체에 대한 데이터들의 묶음
      - 쿼리문을 이용하여 명령 함
      - 쿼리는 국제표준을 따른다.
    
    # SQL (Sturucted Query Language)
    
      - RDBMS에 명령을 내리기 위한 언어  
*/
-- 현재 접속 계정을 확인하는 명령어
show user;
-- 현재 접속한 계정이 가지고 있는 모든 테이블을 확인하는 명령어
select * from tab;
-- 테이블 구조 조회
desc employees;
-- 테이블의 모든 내용을 확인하는 명령어
select * from employees;
select * from countries;
select * from departments;