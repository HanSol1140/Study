import RPi.GPIO as GPIO
import time

# GPIO 핀 번호 설정
DATA0 = 4  # 데이터 비트
DATA1 = 17  # 클럭 비트

# GPIO 설정
GPIO.setmode(GPIO.BCM)
GPIO.setup(DATA0, GPIO.IN)
GPIO.setup(DATA1, GPIO.IN)

def read_bit():
    # DATA1 핀이 HIGH로 바뀔 때까지 대기
    while not GPIO.input(DATA1):
        time.sleep(0.0001)
    # DATA1 핀이 LOW로 바뀔 때까지 대기하면서 DATA0 핀의 값을 읽음
    while GPIO.input(DATA1):
        time.sleep(0.0001)
    return GPIO.input(DATA0)

def read_card():
    # 비트열 초기화
    bits = []
    # 26비트 읽기 (WG26 포맷)
    for _ in range(26):
        bits.append(read_bit())
    # 비트열을 번호로 변환
    number = int(''.join(map(str, bits)), 2)
    return number

try:
    while True:
        print(read_card())
except KeyboardInterrupt:
    GPIO.cleanup()