/*
    # Ʈ����� (Transaction)
        
        - ������ ó���� �� ����
        - �ϳ��� ������ �۾��� �����ϰ� ó���Ǵ� ����
        - ALL or Nothing = Ʈ������� ��� ������ ���������� �Ϸ�Ǵ� ��쿡�� ��������� Ȯ�� �ؾ���
        - Ʈ����� ��ɾ�  = COMMIT, ROLLBACK, SAVEPOINT���� �ִ�.
        - �ϳ��� Ʈ������� ���� = ������ Ŀ�Ժ��� ���ο� Ŀ�� ���� ������
*/

select * from employees;

-- ���̺�� cafe_menu, �÷��� coffee ������ 4�ڸ� ������� PK
DROP TABLE cafe_menu;
/*
CREATE TABLE cafe_menu (
    coffee NUMBER(4) PRIMARY KEY
);
*/



CREATE TABLE cafe_menu (
    coffee NUMBER(4) CONSTRAINT cafe_menu_coffee_pk PRIMARY KEY
);
desc cafe_menu;

-- ���̺� ����
-- �÷� �߰� name ������ uq,nn
ALTER TABLE cafe_menu ADD(
    name VARCHAR2(30)
        CONSTRAINT cafe_menu_name_uk UNIQUE
        CONSTRAINT cafe_menu_name_nn NOT NULL
);
        
-- check : check(üũ) �ȿ� ������ ������ ������ �� ����
ALTER TABLE cafe_menu ADD(
    price NUMBER(5)
        CONSTRAINT cafe_menu_price_chk CHECK(price >= 0) -- 0 �̻��� ���ڸ� �޴´�.
        CONSTRAINT cafe_menu_price_nn NOT NULL
);
-- �÷� 2�� �߰�
-- �÷��� min_size / max_size | ������� �÷��� = S M L�� ���Ե� ���ڸ� ����, nn

ALTER TABLE cafe_menu ADD(
    min_size VARCHAR2(1)
        CONSTRAINT cafe_menu_min_size_chk CHECK (min_size IN('S','M','L'))
        CONSTRAINT cafe_menu_min_size_nn NOT NULL,
    max_size VARCHAR2(1)
        CONSTRAINT cafe_menu_max_size_chk CHECK (max_size IN('S','M','L'))
        CONSTRAINT cafe_menu_max_size_nn NOT NULL
);
SELECT * FROM cafe_menu;

--cafe_menu�� ������ 5�� ��������
INSERT INTO cafe_menu VALUES(
    '1001', '�Ƹ޸�ī��', '3000', 'S', 'L'
    );
INSERT INTO cafe_menu VALUES(
    '1002', 'ī���', '4000', 'S', 'L'
    );
INSERT INTO cafe_menu VALUES(
    '1003', 'ī���ī', '4000', 'S', 'L'
    );
INSERT INTO cafe_menu VALUES(
    '1004', '�ٴҶ��', '4000', 'S', 'M'
    );
INSERT INTO cafe_menu VALUES(
    '1005', '���̽�Ƽ', '3000', 'S', 'M'
    );
COMMIT;
INSERT INTO cafe_menu VALUES(
    '202', '���̽�Ŀ��', '4500', 'M', 'L'
    );
    
--�ѹ�(ROLLBACK)
ROLLBACK;
SAVEPOINT s01;
ROLLBACK TO s01;