# pass 아무것도 안함, 구조를 지키기 위해서 일단 기입
a = 3
if a > 3:
    # 무언가를 하겠다.
    pass

    # for문 예시
for i in range(1, 10):
    if i % 3 == 0:
        pass # 3의 배수일 때의 어떤 처리 => 영역확보
        

# continue
print("="*20)
for i in range(1, 10):
    if i % 3 == 0:
        continue # 3의 배수일때 해당 반복문을 종료하고 다음 반복문으로 넘어감
    print(i)


# break
print("="*20)
for i in range(1, 10):
    if i % 3 == 0:
        break # 3의 배수 일때 반복문을 중지
    print(i)