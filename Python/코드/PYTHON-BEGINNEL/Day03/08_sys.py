# 시스템 관련 모듈
import sys

# 터미널에서 입력한 인자 값 사용하기
# 실행 시 명령어 python(리눅스나 맥은python3) 08_sys.py spencer 7 202.2
# =>
# Day03 터미널로 이동해서(파이썬이 아니라 터미널)
# python 08_sys.py spencer 7 202.2
# ['08_sys.py', 'spencer', '7', '2022']
print(sys.argv[0]) # 파일 경로만 나옴
print(sys.argv[1])
print(sys.argv[2])
print(sys.argv[3])

# 이렇게하면 1,2,3에 spencer, 7,2002가 할당이 되야되는데 뭐가 문제인지 할당이 안되는 상황
# 일단 진도를 위해 넘어감