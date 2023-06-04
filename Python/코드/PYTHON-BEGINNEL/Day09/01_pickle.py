# WD 리셋
import os, pickle
os.chdir(os.path.dirname(__file__))
print(os.getcwd()) #현재 WD확인

# 데이터
classNumber = 5
member = ["사과", "바나나", "딸기"]
teacher = {
    "name" : "한솔",
    "lang" : "Python"
}

# pickle로 저장
save_data = [classNumber, member, teacher]
print(save_data)
# 텍스트형 데이터가 아닌 데이터들은 바이너리(b)로 기입해야 합니다.
with open("school_data.pickle", "wb") as fp:
    #pickle(모듈에서).dump(덮어씌우겠다)
    pickle.dump(save_data, fp)

# 코드를 실행하면 school_data.pickle가 생성되는것을 볼 수 있습니다.