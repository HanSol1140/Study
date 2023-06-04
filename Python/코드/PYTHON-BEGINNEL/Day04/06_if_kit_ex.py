# 전자 키트에서의 예제
# A, B, C => LEDS
press_btn = "btn_A"
if press_btn == "btn_A":
    print("LEDs : ", ['ON', 'OFF', 'OFF'])
elif press_btn == 'btn_B':
    print("LEDs : ", ['OFF', 'ON', 'OFF'])
elif press_btn == 'btn_C':
    print("LEDs : ", ['OFF', 'OFF', 'ON'])
else:
    print("LEDs : ", ['OFF', 'OFF', 'OFF'])