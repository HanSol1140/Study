# 입력 함수 input()
# 기본 사용 방법
name = input("이름을 입력해주세요 : ") # 사용자의 입력 대기 => 엔터를 누른 순간 값 반환
print("내 이름은", name, type(name))
# 내 이름은 (입력한 이름) <class 'str'>


# 숫자를 입력 -> 형 변환
age = int(input("나이를 입력 : "))
print(age, type(age)) # str -> int
# 11 <class 'int'>

# 여러 개를 입력 -> 문자열 함수 .split()
basket = input("구매한 물품 목록 : ")
print(basket, type(basket))
# '바나나 사과 복숭아 코코넛 우유' <class 'str'>
# 여러개를 입력해도 받아들일 수 없음

basket = input("구매한 물품 목록 : ").split()
print(basket, type(basket))
# '바나나 사과'를 입력한다면
# ['바나나', '사과'] <class 'list'>

basket = input("구매한 물품 목록 : ").split(',')
print(basket, type(basket))
# '바나나,사과'를 입력한다면
# ['바나나', '사과'] <class 'list'>
# 이를 통해 .split()의 기본 값은 ' '(공백한칸)임을 알 수 있습니다.


# [팀] 여러 숫자를 입력 -> 문자열 함수 .split() -> 리스트 각 value에 대해서 형변환 map(int, 리스트) ->
score = input("국가시험 점수는 : ").split()
print(score)
# ['90', '100', '80']

# map 사용
score = list(map(int, input("국가시험 점수는 : ").split()))
print(score)