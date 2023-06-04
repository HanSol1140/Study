text = """icbanq여러분, 안녕하세요. 스펜서입니다.
파이썬 입문을 하고 있어요.
벌써 8번째 수업이네요.
"""

#파일 객체 - open() => 파일생성 => 파이썬이 실행되는 위치

# 파일 생성 - WD의 위치에 따라 어디에 생성될지 모름
fp = open('./01.txt', 'w')
fp.write(text)
# fp.close()

import time
while True:
    time.sleep(1)

# close 테스트
# fp.close()를 입력하지않고 실행해보세요.
# while문이 무한반복되어 터미널을 종료하기전에는
# 저장이 되지 않는 것을 볼 수 있습니다.
