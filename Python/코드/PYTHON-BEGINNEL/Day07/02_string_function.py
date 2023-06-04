text = "Hello Spencer"
print(len(text))

print(text.find('A')) # -1(없음)
print(text.count('e')) # 3(e가 3개 있다.)
print(text.find("Spencer")) # 6번 인덱스부터 Spencer가 시작한다
print(text.count("Spencer")) # 'Spencer'라는 단어가 1개 있다.

# ====================
print("="*20)
# 20글자 내에서 정렬
print(text.center(20))
print(text.ljust(20))
print(text.rjust(20))
# 전자키트(아두이노,라즈베리파이)를 코딩할 때 사용
# LCD 또는 화면에 나올수 있는 부분이 제한적일때.
# 글자수 제한(20)같은 부분을 조절해서 사용

# ====================
print("="*20)
text = "Hello Spencer"
#비 파괴적인 처리
text.upper() # upper => 대문자로 수정
# 원본 데이터를 수정하지않음
print(text) # Hello Spencer

# 따라서, text를 수정하려면
text = text.upper()
print(text) # HELLO SPENCER
text = text.split()
print(text) # ['HELLO', 'SPENCER']

# ====================
print("="*20)
#한글자씩 분리하기
text = "Hello 한솔"
print(list(text))
# ['H', 'e', 'l', 'l', 'o', ' ', '한', '솔']

# ====================
print("="*20)
# 구분자로 분리하기
text = "안녕하 세 요?"
text = text.split(" ") # " " = 공백(띄어쓰기)으로 구분
print(text) # ['안녕하', '세', '요?']

text = "안녕, 하 세, 요?"
text = text.split(",") # ,으로 구분
print(text) # ['안녕', ' 하 세', ' 요?']