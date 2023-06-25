import socket

# 서버 소켓 생성
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_address = ('localhost', 8080)
server_socket.bind(server_address)
server_socket.listen(1)

print('서버가 시작되었습니다.')

while True:
    print('클라이언트의 연결을 기다리는 중...')
    client_socket, client_address = server_socket.accept()
    print(f'클라이언트가 접속했습니다: {client_address}')

    try:
        while True:
            # 클라이언트로부터 데이터 수신
            data = client_socket.recv(1024)
            if data:
                # 수신한 데이터 출력
                print(f'수신한 데이터: {data.decode()}')
                # 클라이언트에게 응답 전송
                response = '서버에서 보낸 응답'
                client_socket.sendall(response.encode())
            else:
                # 클라이언트와의 연결이 끊어짐
                break

    finally:
        # 클라이언트 소켓 닫기
        client_socket.close()


# 위의 예시는 Python을 사용하여 TCP/IP 통신을 구현한 간단한 서버 코드입니다.

# 서버는 지정된 포트에서 클라이언트의 연결을 기다리고, 클라이언트가 접속하면 클라이언트로부터 데이터를 수신하고 응답을 전송합니다.
# 클라이언트와의 연결이 끊어지면 다음 클라이언트의 연결을 기다리는 상태로 돌아갑니다.

# 이를 통해 TCP/IP 통신을 사용하여 클라이언트와 서버 간 데이터를 주고받을 수 있습니다.