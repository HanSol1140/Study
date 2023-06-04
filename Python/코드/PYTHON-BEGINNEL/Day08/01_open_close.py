text = """icbanq여러분, 안녕하세요. 스펜서입니다.
파이썬 입문을 하고 있어요.
벌써 8번째 수업이네요.
"""

#파일 객체 - open() => 파일생성 => 파이썬이 실행되는 위치

# 파일 생성 - WD의 위치에 따라 어디에 생성될지 모름

# fp = open('01.txt', 'w')


# 절대 경로로 파일 생성
# fp = open('c:/hansol/alldata/python/PythonStudy/PYTHON-BEGINNEL/Day08/01.txt', 'w')

#=======================================
# 상대 경로로 파일 생성하기

# fp = open('./01.txt', 'w')
# 이렇게하면 파일이 생성될 것 같지만
# WD(Warking Directory - 작업공간)가 고정되어 있지않기때문에
# 원하는곳에 파일이 생성되지 않습니다.

# 따라서 다음과 같이 해보세요

#현재 WD확인
import os
print("현재WD : ", os.getcwd())

# WD 변경
import os
print(__file__)
# 현재 파일명을 포함한 파일경로를 출력해줌
print(os.path.dirname(__file__))
# 현재 파일을 제외한 파일경로(해당 파일이 있는 폴더까지)

# 요약
import os
os.chdir(os.path.dirname(__file__))
# os.chdir("원하는폴더경로") = WD변경

# 따라서, 현재 경로로 WD를 옮겨서 파일을 생성하려면
# 1. os.chdir(os.path.dirname(__file__))을 한뒤
# 2. 상대경로로 파일을 생성

fp = open('./01.txt', 'w')
fp.write(text)
fp.close() # 쓰면 꼭 닫아야 합니다.