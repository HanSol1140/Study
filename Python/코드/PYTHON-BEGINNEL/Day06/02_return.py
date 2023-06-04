# 리턴값 예시
def func1():
    pass

def func2():
    print("hello world")

def func3():
    return "hello world"

f1 = func1()
f2 = func2()
f3 = func3()

print(f1, f2, f3)

# 실행 결과
# hello world => f2 = func2()의 결과
# None None hello world => print(f1, f2, f3)의 결과

# 여기서 f2 = func2()의 결과로 print("hello world")가 출력되는 이유는
# f2 = func2()라고 선언하는 것이 아니라
# func2()의 결과(return)를 f2에 할당하는 것이기 때문입니다.
# 따라서, f2에 값을 할당하기위해 func2()함수를 한번 실행하고, 
# 그때 print("hello world")가 실행되어 출력됩니다.