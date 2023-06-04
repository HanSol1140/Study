user = ["송한솔", 7, 200.2]
print("len(리스트명) = 리스트의 배열 개수 확인")
print(len(user)) # 3


# 원본 배열 수정 - 파괴적인 처리

# 새로운 데이터 요소 추가
print('='*20)
print(".append사용")
user = ["송한솔", 7, 200.2]
user.append(10000)
print(user) # ['송한솔', 7, 200.2, 10000]
user += [20000]
print(user) # ['송한솔', 7, 200.2, 10000, 20000]

# 삽입 insert(넣을 인덱스번호, 값)
print('='*20)
print(".insert사용")
user = ["송한솔", 7, 200.2]

print(user)
user.insert(3, 10000)
print(user)


# ====================
# index, count
print('='*20)

# index
print("리스트.index사용")
numbers = [100, 70, 30, 50, 60, 70, 100]
print(numbers.index(70)) # 1번 인덱스부터 있다
print(numbers.index(30)) # 2번 인덱스부터 있다
print(numbers.index(100)) # 0번 인덱스부터 있다
# print(numbers.index(1000))
# 리스트에 없으므로 오류를 반환함
# stirng의 find와 유사함
# 값이 없을경우 -1를 반환하는 find와 다르게 오류를 출력함

# count
print('='*20)
print("리스트.count사용")
print(numbers.count(70)) # 2개 있다
print(numbers.count(30)) # 1개 있다
print(numbers.count(100)) # 0개 있다(없다)

# 값 탐색 -> 삭제 remove
print('='*20)

numbers = [100, 70, 30, 50, 60, 70, 100]
numbers.remove(100)
numbers.remove(100)
print(numbers) # [70, 30, 50, 60, 70, 100]

# 리스트 합치기 확장 extend
print('='*20)

# 원본배열 수정하지 없이 사용하는 방법 - 비파괴적인 사용
score1 = [30, 50, 70]
score2 = [20, 40, 60]

score1.extend(score2)

print(score1) # [30, 50, 70, 20, 40, 60]
print(score2) # [20, 40, 60]


# 반전 .reverse(), reversed()
print('='*20)
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
numbers = list(reversed(numbers)) # 비파괴적
print(numbers) # [0, 9, 8, 7, 6, 5, 4, 3, 2, 1]
numbers.reverse() # 파괴적
print(numbers) # [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

# 정렬(오름차순) - .sort(), sorted()
print('='*20)

numbers = [5, 1, 3, 2, 4, 7, 6, 8, 0, 9]
print(list(sorted(numbers, reverse=True))) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.sort(reverse=True) 
print(numbers) # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]