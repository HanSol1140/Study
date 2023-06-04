# 비교 연산자 값을 비교
print(3==3) # True
print(3 != 3) # False
print(3 > 3) # False
print(3 >= 3) #True
print(3 < 3) # False
print(3 <= 3) # True


# 논리 연산자 and or not
# and : 둘 모두 참일경우에만 참, 나머지는 거짓
print("="*20)
print(True and True) # True
print(True and False) # False
print(False and True) # False
print(False and False) # False
age = 7
print(age > 3 and age < 10) # True

# 파이썬에서만 가능한 코드
print(10 > age > 3) # True

# or : 또는, 하나라도 참이라면 참, 모두 틀렸을 경우에만 거짓
print("="*20)
print(True or True) # True
print(True or False) # True
print(False or True) # True
print(False or False) # False

# not 연산자(!=) 코드가 틀렸을 경우에 True를 반환, 맞을경우엔 false // 반전시킨다고 볼 수 있음
print("="*20)
print(not True) # False
print(not False) # True
# 예를들어 3 == 3 = True이지만
print(3 == 3) # True
print(3 != 3) # False
print(3 != 1) # True - 틀린 경우에 True 반환함

