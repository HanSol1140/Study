numbers = {2, 4, 6, 2, 4, 6}
print(numbers) # {2, 4, 6}

# 삽입 add
numbers.add(7)
print(numbers)

# 다른 것 찾기. 빼기와 같은 개념

numbers1 = {1, 2, 3, 4, 5}
numbers2 = {1, 2, 3, 4, 5, 6, 7}

print(numbers1 - numbers2) # set()
print(numbers1.difference(numbers2)) # set() => 비어있는 set 배열만 남음

print(numbers2 - numbers1) # {6, 7}
print(numbers2.difference(numbers1)) # {6, 7}