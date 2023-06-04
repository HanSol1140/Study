# 튜플 타입
user = ("Spencer", 7, 202.2, 10000) # 이름 나이 키 연봉
# => []인 리스트와 다르게()로 감싸고 있음

# indexing
print(user[0])
print(user[1])
print(user[2])
print(user[-1])

#  slicing
print(user[0:2])
print(user[2:4])

# 대표적으로는 색깔
# RGB
redhat_color = (255, 0, 0)

# redhat_color[0] = 254 을 입력하면
# TypeError: 'tuple' object does not support item assignment라는 오류메세지가 뜸

# str => tuple
greeting_str = "Hello"
greeting_tuple = tuple(greeting_str)
print(greeting_str, greeting_tuple)

user_list = list(user)
user_tuple = tuple(user_list)
print(user_list, user_tuple)