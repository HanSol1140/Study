import datetime
# 현재시간 표시
now = datetime.datetime.now()
print(now)

from datetime import datetime, timedelta, timezone
# 현재시간 표시
now = datetime.now()
print(now)

# 세계별 시간 : 독일 UTC+1, 한국 UTC+9
de_tz = timezone(timedelta(hours=1))
kr_tz = timezone(timedelta(hours=9))
print(de_tz) # UTC+01:00
print(kr_tz) # UTC+09:00
de_now = datetime.now(tz=de_tz) # 독일 시각
kr_now = datetime.now(tz=kr_tz) # 한국 시각
print(de_now)
print(kr_now)
print(de_now - kr_now) # 0
print(kr_now - de_now) # 0


# 특정 시간 - 특정시간 = 시간차(timedelta)
# 특정시간 + 특정시간은 불가능함
# 2100년 1월 1일 14시 30분
future = datetime(2100, 1, 1, 14, 30)
print(future)
print(future - now)
print(type(future - now))

# 시간차 데이터 만들기 - 특정시간 +- 시간차 = 특정시간
pray_period = timedelta(days = 1000, hours = 2)
finish_day = now + pray_period
print(finish_day, type(finish_day))

# 시간차 +- 시간차(timedelta)
t1 = timedelta(days=100)
t2 = timedelta(weeks=4)
print(t1 - t2)
print(type(t1 - t2))

# 시간을 원하는 포맷(문자열)으로 변환 datetime.strftime()
# 대소소대대대 => YmdHMS
print('{}:{}'.format(now.hour, now.minute))
date1 = now.strftime("%Y %m %d %H %M %S")
print(date1) # 2023 05 26 07 30 18
date2 = now.strftime("%Y-%m-%d %H:%M:%S")
print(date2) # 2023-05-26 07:30:18

# Hour를 12시간 기준으로 표현하기
date3 = now.strftime("%Y-%m-%d %p %I:%M:%S") # %p(AM,PM) %I(12시간 기준)
print(date3) # 2023-05-26 AM 07:32:04

# 무슨 요일인지 확인하기
date4 = now.strftime("%Y-%m-%d %p %I:%M:%S %A") # %a로 적으면 요일이 축약어로 표기됨
print(date4) # 2023-05-26 AM 07:33:56 Friday

date5 = now.strftime("%Y-%m-%d %p %I:%M:%S %B %a") # % %B or %b => 몇달인지 체크
print(date5) # 2023-05-26 AM 07:33:56 2023-05-26 AM 07:35:09 May Fri