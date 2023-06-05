import threading
import paho.mqtt.client as mqtt
from dobot_api import DobotApiDashboard, DobotApi, DobotApiMove, MyType
from time import sleep
import numpy as np
import keyboard

# 전역변수(현재 좌표)
current_actual = None
def on_message(client, userdata, message):
    print("message received", str(message.payload.decode("utf-8")))
    print("message topic = ", message.topic)
    print("message qos = ", message.qos)
    print("message retain flag = ", message.retain)

    recevData = str(message.payload.decode("utf-8"))
    print("received message = ", recevData)
    if (message.topic == "Dobot"):
        splitData = recevData.split('/')
        if (splitData[0] == "Power_ON"):
            dashboard.PowerOn()
        elif (splitData[0] == "Enabe"):
            dashboard.EnableRobot()
        elif (splitData[0] == "Disable"):
            dashboard.DisableRobot()
        elif (splitData[0] == "ERROR_CLEAR"):
            dashboard.ClearError()
        elif (splitData[0] == "Play_Script"):
            dashboard.RunScript(splitData[1])
        elif (splitData[0] == "Pause_Script"):
            dashboard.PauseScript()
        elif (splitData[0] == "Continue_Script"):
            dashboard.ContinueScript()
        elif (splitData[0] == "Stop_Script"):
            dashboard.StopScript()
        elif (splitData[0] == "Set_Speed"):
            dashboard.SpeedJ(float(splitData[1]))
            dashboard.SpeedL(float(splitData[1]))
            dashboard.SpeedFactor(float(splitData[1]))

def connect_robot():
    try:
        ip = "192.168.0.50"
        dashboard_p = 29999
        move_p = 30003
        feed_p = 30004
        print("연결 설정중...")
        dashboard = DobotApiDashboard(ip, dashboard_p)
        move = DobotApiMove(ip, move_p)
        feed = DobotApi(ip, feed_p)
        print("연결 성공")
        return dashboard, move, feed
    except Exception as e:
        print("연결 실패")
        raise e

def run_point(move: DobotApiMove, point_list: list):
    move.MovJ(point_list[0], point_list[1], point_list[2], point_list[3], point_list[4], point_list[5])

def get_feed(feed: DobotApi):
    global current_actual
    hasRead = 0
    while True:
        data = bytes()
        while hasRead < 1440:
            temp = feed.socket_dobot.recv(1440 - hasRead)
            if len(temp) > 0:
                hasRead += len(temp)
                data += temp
        hasRead = 0

        a = np.frombuffer(data, dtype=MyType)
        if hex((a['test_value'][0])) == '0x123456789abcdef':

            # Refresh Properties
            current_actual = a["tool_vector_actual"][0]
            print("tool_vector_actual:", current_actual)

        sleep(0.001)

def wait_arrive(point_list):
    global current_actual
    while True:
        is_arrive = True

        if current_actual is not None:
            for index in range(len(current_actual)):
                if (abs(current_actual[index] - point_list[index]) > 1):
                    is_arrive = False
            if is_arrive:
                return
        sleep(0.001)

if __name__ == '__main__':
    """
       broker_address = "192.168.0.83"
       client = mqtt.Client
       client.on_message = on_message
       client.connect(broker_address,1883)
       client.loop_start()
       client.subscribe("asdf")
       """
    dashboard, move, feed = connect_robot()

    while True:
        print("wait")
        # client.on_message = on_message()