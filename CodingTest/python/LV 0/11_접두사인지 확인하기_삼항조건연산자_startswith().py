# 문제 설명
    # 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다.
    # 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
    # 문자열 my_string과 is_prefix가 주어질 때
    # is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

# 제한사항
    # 1 ≤ my_string의 길이 ≤ 100
    # 1 ≤ is_prefix의 길이 ≤ 100
    # my_string과 is_prefix는 영소문자로만 이루어져 있습니다.

# 입출력 예
    # my_string	    is_prefix	result
    # "banana"	    "ban"	    1
    # "banana"	    "nan"	    0
    # "banana"	    "abcd"	    0
    # "banana"	    "bananan"	0

# 입출력 예 설명
    # 입출력 예 #1

    # 예제 1번에서 is_prefix가 my_string의 접두사이기 때문에 1을 return 합니다.
    # 입출력 예 #2

    # 예제 2번에서 is_prefix가 my_string의 접두사가 아니기 때문에 0을 return 합니다.
    # 입출력 예 #3

    # 예제 3번에서 is_prefix가 my_string의 접두사가 아니기 때문에 0을 return 합니다.
    # 입출력 예 #4

    # 예제 4번에서 is_prefix가 my_string의 접두사가 아니기 때문에 0을 return 합니다.

# 주어진 함수
def solution(my_string, is_prefix):
    answer = 0
    return answer


# startswith() 메서드를 사용하여 접두사를 확인할 수 있습니다.
# 이 메서드는 주어진 문자열이 특정 문자열로 시작하는지 여부를 반환합니다.
# 풀이1
def solution(my_string, is_prefix):
    if my_string.startswith(is_prefix):
        return 1
    else:
        return 0

# 풀이2 삼항조건 연산자
def solution(my_string, is_prefix):
    return 1 if my_string.startswith(is_prefix) else 0


# 개선된 풀이방식
def solution(my_string, is_prefix):
    return int(my_string.startswith(is_prefix))

    # .startswith()는 true / false를 반환하기 때문에 int로 변환시키면 0 혹은 1을 반환합니다.

