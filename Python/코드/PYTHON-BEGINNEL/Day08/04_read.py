# 파일 읽기

# WD를 상대경로로 변경
import os
os.chdir(os.path.dirname(__file__))

fp1 = open("./04.txt", 'r', encoding='utf-8')

# read(), readline(), readlines()
print(fp1.read())
fp1.seek(0) # 커서 위치 조정,
print(fp1.tell(), "커서 위치 확인") # 커서 위치 확인
print(fp1.read())
fp1.close()



# readline - 한 줄씩 가져옵니다.
print("="*40)
with open("./04.txt", "r", encoding="utf-8") as fp2:
    # repr(\n 확인) / '{!r}'.format() => repr과 같음
    print(repr(fp2.readline()))
    print('{!r}'.format(fp2.readline()))
    print(fp2.readline())



# readlines - 여러줄을 가져옵니다
# 현재 커서 위치부터 끝까지 여러줄을 가져옵니다.
# 리스트 반환, 새행(엔터 기준)으로 나눠서 가져옵니다.
print("="*40)
with open("./04.txt", "r", encoding="utf-8") as fp3:
    print(fp3.readlines())
    fp3.seek(0)
    print(repr(fp3.readlines()))