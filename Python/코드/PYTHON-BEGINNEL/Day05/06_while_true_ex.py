# while True 응용
basket = [] # 장바구니

while True:
    # if user_input == "0":
    #     break
    basket.append(user_input)
    print("추가 : {}".format(basket))
    user_input = input("0을 입력할 때까지 반복 :")
print("최종 : {}".format(basket))


# 종료조건을 장바구니의 상품 갯수로 바꾸면?
while True:
    user_input = input("0을 입력할 때까지 반복 :")
    basket.append(user_input)
    print("추가 : {}".format(basket))
    if len(basket) >= 3: # 3개 이상이 되면 기입종료
        break

print("최종 : {}".format(basket))
