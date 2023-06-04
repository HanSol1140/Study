# 문자 타입은 str.이다. 파이썬에선 '글자'보단 '문자열'이라고 부른다.
name = "Spencer"
lang = "Python"
profile_comment = """안녕하세요. 스펜서입니다
저는 파이썬에 관심이 있습니다.
읽어주셔서 감사합니다.
 """

print(name, "의 타입은", type(name))
print(lang, "의 타입은", type(lang))
print(profile_comment, "의 타입은", type(profile_comment))
# Spencer 의 타입은 <class 'str'>
# Python 의 타입은 <class 'str'>
# 안녕하세요. 스펜서입니다
# 저는 파이썬에 관심이 있습니다.
# 읽어주셔서 감사합니다.
#   의 타입은 <class 'str'>

# 함수로 변환
birth_year = 2002
birth_day = 1225
print(birth_year + birth_day) # 3227

birth_year = str(2002)
birth_day = str(1225)
print(birth_year + birth_day) # 20021225

# index, value
greeting_message = "Heelo Python! Hello Icbanq!" # 총 27자 [0]~[26]
# indexing
print("index번호로 순차적으로 접근")
print(greeting_message[0]) # H
print(greeting_message[1]) # e
print(greeting_message[2]) # e
print(greeting_message[26]) # !

print("index번호로 뒤에서 부터 접근하기")
print(greeting_message[-1]) # !
print(greeting_message[-2]) # q
print(greeting_message[-3]) # n

# slice, slicing
print("특정 부분부터 출력하기")
print(greeting_message[0:2]) # He // Hee가 반환되야할 것 같은데, slice할때 기준index의 '이전'부분을 잘라냅니다.
print(greeting_message[20:23]) # Icb
# "Hello Icbanq!"
print(greeting_message[14:27]) 
print(greeting_message[14:]) # 두번째 숫자를 입력하지 않으면 남은 부분을 전체 반환합니다
print(greeting_message[:14]) # 반대로 첫번째 숫자를 입력하지 않으면 입력한 부분까지 전체를 반환합니다

# Step을 줄 수도 있다. [start:end:step]
text = "a1Ab2Bc3Cd4D"
print(text[0:12:3]) # a(세글자생략)b(세글자생략)c(세글자생략)d(세글자생략)
print(text[1:12:3]) # 1234
print(text[2:12:3]) # ABCD
print(text[::3]) # print(text[0:12:3])와 같습니다. 0에서시작:문자열의 끝까지:Step의 수