/*
    #����Ŭ �Լ� �̿� ���̺��� �����͸� ó���ϰ� ��ȸ ����
        
        - dual ���̺� �̿�
        - ����Ŭ���� �����ϴ� ��ü���̺�
        - ������ �Լ��� �̿� ��� �ᱣ���� Ȯ���� �� ����ϴ� ���̺���
*/

SELECT * FROM dual;


-- floo(n) ����
SELECT floor(342.322) FROM dual;

-- ceil(n) �ø�
SELECT ceil(123.456) FROM dual;

--round(n) �ݿø�
SELECT round(123.456) FROM dual;

-- MOD(n, m) ������ ����
SELECT mod(15, 10) FROM dual;

-- TRIM() ��������
SELECT trim('          hello') FROM dual;

-- LPAD(����, ����, ä�﹮��) ���ʿ� ���ϴ� ���ڸ� ä��
SELECT lpad('COFFEE',  10, '#') FROM dual;
-- RPAD(����, ����, ä�﹮��) �����ʿ� ���ϴ� ���ڸ� ä��
SELECT rpad('COFFEE',  10, '#') FROM dual;

-- TO_CHAR() �����͸� ���� Ÿ������ ����
SELECT to_char(123) FROM dual;
SELECT to_char(sysdate, 'YYYY/MM/DD HH:MI:SS') FROM dual; -- ��¥ Ÿ���� ���� Ÿ������ ����

-- TO_DATE() �����͸� ��¥ Ÿ������ ����
SELECT to_date('[2022-11-09]','[YYYY-MM-DD]') FROM dual;



