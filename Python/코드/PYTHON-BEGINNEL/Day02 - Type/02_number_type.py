# 숫자 데이터 타입은 int, float, complex

age = 7
print(age, "의 타입은", type(age)) # int

score = 88.8
print(score, "의 타입은", type(score)) ## float

polar_coordinate = 1-2j # +-를 띄어쓰지 않도록 주의  
print(polar_coordinate, "의 타입은", type(polar_coordinate )) # complex

# 함수를 통한 생성
age = int(7)
score = float(88.8)
polar_coordinate = complex(1, -2)
print("데이터 타입",type(age), type(score), type(polar_coordinate))

# 함수를 통해 데이터 변환
age = int(7.0) # 7
score = float(88) # 88.0
polar_coordinate = complex(age, 1)
print(age, score, polar_coordinate)

# 함수를 통해 데이터 변환 (글자 -> 숫자)
age = int("7") # 문자형 "7"을 int형으로 감싸면
print(age, type(age)) #7로 표현이됩니다

# age = int("7.0") # 7.0은 int형이 될 수 없으므로 ValueError가 출력됩니다.
age = float("7.0") # 7.0은 float형이기 때문에 형태 변환이 가능합니다.
print(age, type(age))

score = int(88)
print(float(88)) # 88을 88.0이라는 소수로 변환할 수 있습니다.