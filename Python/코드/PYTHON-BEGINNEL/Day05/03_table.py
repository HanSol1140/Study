# 구구단
for i in range(1, 10):
    print("{} x {} = {}".format(3, i, 3 * i))
print("="*20)

# 전체 구구단
for i in range(1, 10):
    print("="*20, i, "구구단")
    for j in range(1, 10):
        print("{} x {} = {}".format(i, j, i * j))