# 딕셔너리 타입
# 리스트 데이터의 단점
# - 각각의 데이터가 무엇을 의미하는지 알 수가 없다.

user_list = ("Spencer", 7, 202.2, 10000) # 이름 나이 키 연봉
user_dict = {
    "name" : "Spencer",
    "age": 7,
    "height" : 202.2,
    "salary" : 10000
}
print(user_dict, "의 타입은", type(user_dict))
# {'name': 'Spencer', 'age': 7, 'height': 202.2, 'salary': 10000} 의 타입은 <class 'dict'>

# keying
print(user_dict["name"])
print(user_dict["salary"])

# update
user_dict["salary"] += 5000
print(user_dict)

# del
del user_dict["salary"]
print(user_dict)