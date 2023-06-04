text = """icbanq여러분, 안녕하세요. 스펜서입니다.
파이썬 입문을 하고 있어요.
벌써 8번째 수업이네요.
"""

#파일 객체 - open() => 파일생성 => 파이썬이 실행되는 위치

# close()를 하지않아도 with문이 종료되면서 자동으로 close()해줍니다.
with open('./01.txt', 'a') as fp:
    fp.write(text)

# import time
# while True:
#     time.sleep(1)
