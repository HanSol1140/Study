print("="*30)
user_dict = {
    "name" : "송한솔",
    "age" : 30,
    "height" : 170,
    "salary" : 10000
}

# key만, value만 모아서 보기
print("="*30)
print(user_dict.keys())
print(user_dict.values())
print(user_dict.items())

# list형식으로 바꿔서 받기
print("="*30)
print(list(user_dict.keys()))
print(list(user_dict.values()))
print(list(user_dict.items()))

# items()를 for문을 이용해서 받기
print("="*30)
for item1, item2 in user_dict.items():
    print(item1, item2)
    # name 송한솔
    # age 30
    # height 170
    # salary 10000

# 이것을 응용하면
for item1, item2 in user_dict.items():
    print("Key'{}'의 값은 '{}'입니다.".format(item1,item2))
    # Key'name'의 값은 '송한솔'입니다.
    # Key'age'의 값은 '30'입니다.
    # Key'height'의 값은 '170'입니다.
    # Key'salary'의 값은 '10000'입니다.