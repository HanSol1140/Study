# WD 변경
import os
os.chdir(os.path.dirname(__file__))

# 학생 성적
load_data = [
    ("학생1,", 100),
    ("학생2,", 90),
    ("학생3,", 80)
]

# 템플릿
message = """{}님 안녕하십니까.
담당자 송한솔입니다.
국가시험 OOO의 결과를 알려드립니다.
감사합니다.
점수 : {}
"""

# 성적표 파일 생성
for name, score in load_data:
    print(name, score)
    filename = "./{} 결과표.txt".format(name)
    
    # 메세지 생성
    new_message = message.format(name, score)
    print(new_message)

    # 파일 생성
    with open(filename, 'w', encoding="utf-8") as file:
        file.write(new_message)