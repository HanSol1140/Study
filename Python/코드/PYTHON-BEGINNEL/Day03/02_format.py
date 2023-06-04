# format을 통해 변수 값을 문자열에 넣기
# => 문자열의 전용 함수
student = "김OO"
school = "아이씨뱅큐"
principal = " 스펜서"

# 기본 사용방법
text = "{}{}{}"
text = text.format(student, school, principal)
print(text) # 김OO아이씨뱅큐 스펜서
# => text = "{}{}{}".format(student, school, principal)과 같은 상황

text = "안녕하십니까 {} 학부모님 저는 {} 교장 {}입니다."
text = text.format(student, school, principal)
print(text) # 안녕하십니까 김OO 학부모님 저는 아이씨뱅큐 교장  스펜서입니다.

# => 그러나 보통 이런식으로 사용하지 않음


# 변수의 기본 사용 방법 => 주로 사용하는방법
print("안녕하십니까 {} 학부모님 저는 {} 교장 {}입니다.".format(student, school, principal))
# 안녕하십니까 김OO 학부모님 저는 아이씨뱅큐 교장  스펜서입니다.


# (예습) 나중에 배울 반복문과 학생 리스트를 함께
print('=' * 20)
students = ["김OO", "이OO", "박OO", "곽OO"]
school = "아이씨뱅큐"
principal = "스펜서"
text = "안녕하십니까 {} 학부모님 저는 {} 교장 {}입니다."

for student in students:
    print("안녕하십니까 {} 학부모님 저는 {} 교장 {}입니다.".format(student, school, principal))
# 반복문이 실행됩니다.
# ▼    
# 안녕하십니까 김OO 학부모님 저는 아이씨뱅큐 교장 스펜서입니다.
# 안녕하십니까 이OO 학부모님 저는 아이씨뱅큐 교장 스펜서입니다.
# 안녕하십니까 박OO 학부모님 저는 아이씨뱅큐 교장 스펜서입니다.
# 안녕하십니까 곽OO 학부모님 저는 아이씨뱅큐 교장 스펜서입니다.


# {0} {1}과 {변수명1} {변수명2}를 활용
student = "김OO"
school = "아이씨뱅큐"
principal = " 스펜서"

text = "안녕하십니까 {0} 학부모님 저는 {1} 교장 {2}입니다. {0}이가 우수한 성적을 거두었습니다."
print(text.format(student, school, principal))
# 안녕하십니까 김OO 학부모님 저는 아이씨뱅큐 교장  스펜서입니다. 김OO이가 우수한 성적을 거두었습니다.
# 보면서 알 수 있듯이 자바스크립트의 배열과는 비슷하지만 조금 다른 개념입니다.
# 배열의 인덱스 번호보다는 넣을 데이터의 순서번호에 가깝게 보입니다.

# 매개 변수 할당해서 사용하기
student = "김OO"
school = "아이씨뱅큐"
principal = " 스펜서"

text = "안녕하십니까 {name} 학부모님 저는 {b} 교장 {c}입니다. {name}이가 우수한 성적을 거두었습니다."
# print(text.format(student, school, principal)) 이러면 에러가 발생하는것을 볼 수 있습니다
print(text.format(name = student, b = school, c = principal))
# 안녕하십니까 김OO 학부모님 저는 아이씨뱅큐 교장  스펜서입니다. 김OO이가 우수한 성적을 거두었습니다.

student = "김OO"
school = "아이씨뱅큐"
principal = " 스펜서"

text = "안녕하십니까 {name} 학부모님 저는 {school1} 교장 {teacher}입니다. {name}이가 우수한 성적을 거두었습니다."
print(text.format(name = student, school1 = school, teacher = principal))
# 안녕하십니까 김OO 학부모님 저는 아이씨뱅큐 교장  스펜서입니다. 김OO이가 우수한 성적을 거두었습니다.