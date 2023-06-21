import serial

            # 시리얼 장치 연결
            # 보레이트 9600, 장치 위치 ttyUSB0
            ser = serial.Serial('/dev/ttyUSB0', 9600, timeout=5)
            
            def run():
                # 시리얼 쓰기
                ser.write(bytes(bytearray([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15])))
                while True:
                    # 시리얼 읽기 (5바이트씩 읽음)
                    line = ser.read(15)
                    if len(line) == 0:
                        break
                    # 헥사 코드로 출력
                    hex_list = ["{:02x}".format(c) for c in line]
                    print(' '.join(hex_list))
                    # 10진수로 출력
                    decimal_list = [str(c) for c in line]
                    print(' '.join(decimal_list))
                    # 아스키 코드로 출력
                    ascii_list = [chr(c) for c in line]
                    print(' '.join(ascii_list))
            
            while True:
                run()