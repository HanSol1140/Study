# WD 리셋
import os, pickle
os.chdir(os.path.dirname(__file__))
print(os.getcwd()) #현재 WD확인

# pickle 가져오기
with open("school_data.pickle", "rb") as fp:
    load_date = pickle.load(fp)

print("해당 코드 실행 됨")
print(load_date)