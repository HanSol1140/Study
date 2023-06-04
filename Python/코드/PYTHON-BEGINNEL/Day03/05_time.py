# 시간 제어 모듈 time
import time

# 현재 시간 정보 확인하기
print(time.localtime())
print(time.localtime().tm_year, time.localtime().tm_mon, time.localtime().tm_mday)

# 일시정지, 자바스크립트의 settimeout과 유사한 기능
print('Stop 1s')
time.sleep(1)
print('Go')

print('Stop 0.5s')
time.sleep(.5)
print('Go')

# [팁] 시간 차이 계산하기
print(time.time()) # 1970년 1월 1일 00:00(UTC) 부터 지난 시간(초)

# 이걸 활용하면

start = time.time()
time.sleep(.3)
end = time.time()
print(end-start)

# 이런식으로 시간이 얼마나 걸렸는지 확인할 수 있다