# 리스트 타입
user = ["Spencer", 7, 202.2, 10000] # 이름 나이 키 연봉
print(user, "의 타입은", type(user)) # ['Spencer', 7, 202.2, 10000] 의 타입은 <class 'list'>

# indexing
print(user[0])
print(user[1])
print(user[2])
print(user[-1])

#  slicing
print(user[0:2])
print(user[2:4])

# update
user[0] = "Dispencer"
user[3] += 5000
print(user)

# del 명령어
del user[3]
print(user)

# str -> list
greeting_str = "Hello"
greeting_list = list(greeting_str)
print(greeting_str, greeting_list)
print(type(greeting_str), type(greeting_list)) # str list

# list -> str 테스트
greeting_list = ['H', 'e', 'l', 'l', 'o']
greeting_str = str(greeting_list)
print(greeting_str, greeting_list) # ['H', 'e', 'l', 'l', 'o'] ['H', 'e', 'l', 'l', 'o'] => 안되는걸 확인할 수 있습니다.
print(type(greeting_str), type(greeting_list)) # str list => ['H', 'e', 'l', 'l', 'o'] 라는 글자로 인식해서 str로 표시됨, list가 아님

# list -> str 방법
greeting_str = "".join(greeting_list)
print(greeting_str) # Hello
