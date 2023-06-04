try:
    print("시도 코드")
    n1 = int('3')
    n2 = int('3.0') # 오류
except ValueError:
    print("값 에러 발생시 실행되는 영역")
except TypeError:
    print("타입 에러 발생시 실행되는 영역")
except:
    print("그 외 에러 발생시 실행되는 영역")
finally:
    print("성공/실패 상관없이 무조건 실행되는 영역입니다.")

print(n1)