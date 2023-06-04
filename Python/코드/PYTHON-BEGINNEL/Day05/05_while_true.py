# while condition
number = int(input("0을 입력할 때까지 반복 : "))
while number != 0:
    number = int(input("0을 입력할 때까지 반복 : "))
    
print("종료")

# 0을 반환해야 false가 반환되고 반복문이 종료됨

# 같은 동작 다른 방식
number = int(input("0을 입력할 때까지 반복 : "))
while True:
    if number == 0:
        break
    number = int(input("0을 입력할 때까지 반복 : "))
print("종료")