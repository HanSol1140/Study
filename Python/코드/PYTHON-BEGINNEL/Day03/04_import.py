# 모듈 참조 import module_name
import random
import math, time

print(math.pi) # 3.141592653589793 => 원주율 출력
print(random.random()) # 0~1의 랜덤한 숫자 출력


# 모듈 참조 from module_name
from random import random as rd # as ~~ => 별칭 만들기
from math import pi, cos, log2
# => from ... import ...의 장점 예시처럼 math없이 바로 호출할 수 있음
print(pi) 
print(rd())