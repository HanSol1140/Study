# 연속된 숫자 데이터를 만드는 range([start], end[, step])
print(list(range(6)))
print(list(range(1, 6)))
print(list(range(1, 6, 2)))
print("="*20)


# list-for 예제
numbers = [0,1,2,3,4,5]
for n in numbers:
    print(n)
print("="*20)

for n in range(0, 6):
    print(n)
print("="*20)

# list-for 예제2
numbers = [1, 3, 5, 7, 9]
for n in numbers:
    print(n)

for n in range(1, 10, 2):
    print(n)