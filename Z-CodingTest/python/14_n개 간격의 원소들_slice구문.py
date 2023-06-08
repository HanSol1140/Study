# 문제 설명
# 정수 리스트 num_list와 정수 n이 주어질 때,
# num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을
# 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

# 제한사항
# 5 ≤ num_list의 길이 ≤ 20
# 1 ≤ num_list의 원소 ≤ 9
# 1 ≤ n ≤ 4

# 입출력 예
# num_list	            n	result
# [4, 2, 6, 1, 7, 6]	2	[4, 6, 7]
# [4, 2, 6, 1, 7, 6]	4	[4, 7]

# 입출력 예 설명
# 입출력 예 #1

# [4, 2, 6, 1, 7, 6]에서 2개 간격으로 저장되어 있는 원소들은 [4, 6, 7]입니다.
# 입출력 예 #2

# [4, 2, 6, 1, 7, 6]에서 4개 간격으로 저장되어 있는 원소들은 [4, 7]입니다.

# 주어진 함수
def solution(num_list, n):
    answer = []
    return answer

# 풀이
def solution(num_list, n):
    answer = []
    
    for i in range(len(num_list)):
        if(i % n == 0):
            answer.append(num_list[i])

    return answer

# 리스트 slice
def solution(num_list, n):
    return num_list[::n]

# num_list[::n] 부분이 리스트 슬라이싱 구문입니다.
# 슬라이싱은 [시작:끝:간격]의 형태로 사용되며, 각 부분은 생략 가능합니다.
# 따라서 num_list[::n]은 num_list에서 처음부터 끝까지 n 간격으로 요소를 추출하는 것을 의미합니다.

# list comprehension
def solution(num_list, n):
    return [num_list[i] for i in range(0,len(num_list),n)]