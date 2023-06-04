# 조건문 case 1
name = "Song"
# name = "John"
age = 18
salary = 10000

# 조건문 if 작성
if name == "Song":
    print("안녕하세요?")

else:
    print("누구세요?")

# 나이
if age >= 18:
    print("원동기 면허를 취득할 수 있는 나이입니다.")
else:
    pass # 다른경우가 필요하지 않을때 else: pass를 적지않고 그냥 if문만 작성해도 됩니다.

# 연봉
if salary > 1500:
    print("세금 납부 대상자입니다.")