# WD 리셋
import os, pickle
os.chdir(os.path.dirname(__file__))
print(os.getcwd()) #현재 WD확인

# pickle 가져오기
try:
    with open("school_data.pickle", "rb") as fp:
        load_date = pickle.load(fp)
except:
    load_date = [] # 오류가 출력되지 않도록 대체할 데이터를 넣음
finally:
    print("값 가져오기 실행 완료")

print("해당 코드 실행 됨")
print(load_date)