# 변수의 이름 규칙
# 숫자가 먼저 나올 수 없다.

# 1major = "computer"
# 2major = "science"

"""
파이썬의 규칙
"로 시작하면 문자 데이터
숫자로 시작하면 숫자 데이터
알파벳으로 시작하면 변수 데이터로 인식합니다
"""

major1 = "computer"
major2 = "science"
# 띄어쓰기는 X 특수문자_는 O
major_1 = "computer"
major_2 = "science"
_gravity = 9.8


# 자주 사용하는 함수는 변수이름으로 쓰면 안됨
print(_gravity)
print = "변수뺏기"
print(_gravity)

# 권장사항 snake_case 방식으로 변수 이름 짓기
# 비슷한 유형으로 CapWord 방식
GravityEarth = 9.8
gravity_earth = 9.8 # 파이썬 권장 방식(단, 클래스 제외)

