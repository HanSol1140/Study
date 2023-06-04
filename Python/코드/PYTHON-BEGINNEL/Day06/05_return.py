def func1():
    return 1
    return 2
    return 3
print(func1()) # 1
# return이 시작된 순간 그 함수는 종료됩니다.

def func2():
    for i in range(1, 10):
        if i % 3 == 0:
            # 3의 배수일때 중지 시키고싶다.
            return # 해당함수에서 break로 반복문을 종료시키는 것과
                   # return시켜서 none을 반환하면서 함수를 종료시키는 것은 기능상 같다.
    print(i)