# 문제 설명
    # 정수 n과 k가 주어졌을 때,
    # 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을
    # return 하는 solution 함수를 완성해 주세요.

# 제한사항
    # 1 ≤ n ≤ 1,000,000
    # 1 ≤ k ≤ min(1,000, n)

# 입출력 예
    # n	k	result
    # 10	3	[3, 6, 9]
    # 15	5	[5, 10, 15]

# 입출력 예 설명
    # 입출력 예 #1

    # 1 이상 10 이하의 3의 배수는 3, 6, 9 이므로 [3, 6, 9]를 return 합니다.
    # 입출력 예 #2

    # 1 이상 15 이하의 5의 배수는 5, 10, 15 이므로 [5, 10, 15]를 return 합니다.
# 주어진 함수
def solution(n, k):
    answer = []
    return answer

# 풀이
def solution(n, k):
    answer = []
    for item in range(1, n+1):
        if item % k == 0:
            answer.append(item)
    return answer

# 개선된 풀이방식(list comprehension)
def solution(n, k):
    return [item for item in range(k, n+1, k)]
# k부터시작해서(k의 배수를 확인하기 때문에)
# n+1까지 (만약 n이 15라면 14까지만 계산하기때문에 +1해줘야함)
# k의 배수로 []반환
