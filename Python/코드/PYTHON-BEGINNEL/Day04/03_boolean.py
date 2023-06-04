#bool(boolean) True와 False밖에 없는 타입

# True / False
# 1, 0
# 데이터가 있다, 없다.
int1 = bool(1) # True
int2 = bool(0) # False
int3 = bool(-1) # True
print(int1, int2, int3) # True / False / True
# 오직 0만이 False를 반환합니다.
# -1도 값이 있다 라고 판정하기때문에 True를 반환

str1 = bool("song")
str2 = bool("") #문자값이 없습니다.
str3 = bool(" ") # 공백이 존재함
print(str1, str2, str3) # True / False / True

list1 = bool([1, 2, 3]) # True
list2 = bool([]) # False
print(list1, list2) # True / False