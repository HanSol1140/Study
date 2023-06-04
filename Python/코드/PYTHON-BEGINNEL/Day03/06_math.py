# 수학 관련 모듈
import math

# 수학 관련 값(변수)
print(math.pi) # 원주율
print(math.e) # 자연수

# 삼각함수
print(math.sin(30)) # 기대한 값 1/2, 0.5

deg_30 = math.pi / 6
print(math.sin(deg_30))
print(round(math.sin(deg_30), 1))
# round(반올림)의 두번째 인자 값으로 들어간 1은 몇번째 소수까지 반올림 할지 결정

deg_30 = math.radians(30)
print(math.sin(deg_30))
print(round(math.sin(deg_30), 1))

# 로그함수
print(math.log(math.e)) # 1.0
print(math.log10(100)) # 2.0
print(math.log2(8)) # 2.0