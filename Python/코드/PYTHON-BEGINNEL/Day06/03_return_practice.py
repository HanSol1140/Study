
def count_negative(n_list):
    """음수가 몇개인지 카운트하는 함수"""
    count = 0
    for n in n_list:
        if n < 0:
            count += 1
    return count

# main
n_list = [-3, -2, -1, 0, 1 , 2, 3, 4] #range(-3, 5)
count = count_negative(n_list)
print("{}의 음수 개수는 {}개다.".format(n_list, count))

# count_negative의 로컬 메모리내에서 사용된 count 변수는 함수가 종료되면서 사라집니다.