# 튜플은 리스트와 유사하나, 데이터의 변경을 허용하지 않는다
# 때문에 리스트 활용에서 파괴적인 함수를 전부 제거 = 튜플 함수라고 볼 수 있습니다.

numbers = (2, 4, 6, 2, 4, 6)
print(numbers.count(2))
print(numbers.index(6))
