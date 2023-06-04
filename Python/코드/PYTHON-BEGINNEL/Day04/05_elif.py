# 조건문 case2
name = "Song"
name = "John"
age = 18
salary = 10000

# 조건문 if 작성
if name == "Song":
    print("안녕하세요?")
else:
    print("누구세요?")

# 조건문 elif 작성
# name
if name == "Song":
    print("안녕하세요 송")
elif name == "John":
    print("존 반가워!")
else:
    print("누구세요?") 

# 연봉

# 연봉
if salary < 1500:
    print("세금 납부 대상자입니다.")
elif salary >= 1500 and salary < 5000:
    print("세금 납부 대상자 유형 A입니다.")
else:
    print("세금 납부 대상자 유형 B입니다.")



