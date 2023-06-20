import requests

# ESP32의 IP 주소
esp32_ip = '192.168.0.9'

# ESP32에 GET 요청 보내기
response = requests.get(f'http://{esp32_ip}/control?pin=19&state=1')

if response.status_code == 200:
    print('요청이 성공적으로 전달되었습니다.')
else:
    print('요청 전달 실패')