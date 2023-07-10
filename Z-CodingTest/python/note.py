myString = "AABBAA"
pat = "AABB"


def solution(myString, pat):
    answer = 0
    myString2 = ""  # 전역 변수 선언
    for i in myString:
        if i == "A":
            i = "B"
            myString2 += i
        else:
            i = "A"
            myString2 += i
    answer = myString2.count(pat)
    return answer

result = solution(myString, pat)
print(result)
