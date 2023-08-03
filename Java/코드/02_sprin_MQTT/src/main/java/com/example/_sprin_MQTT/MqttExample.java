package com.example._sprin_MQTT;

import org.eclipse.paho.client.mqttv3.*;
import org.springframework.stereotype.Component;
import javax.annotation.PostConstruct;

@Component // 해당 클래스를 Bean으로 설정
public class MqttExample {

    @PostConstruct // 컴포넌트가 어플리케이션이 시작될때 자동으로 실행
    public void initialize() throws MqttException {
        String broker = "tcp://192.168.0.137:1883";
        String clientId = "JavaSample";
        MqttClient client = new MqttClient(broker, clientId);

        MqttConnectOptions connOpts = new MqttConnectOptions();
        connOpts.setCleanSession(true);

        client.connect(connOpts);
        System.out.println("Connected to MQTT broker");

        client.subscribe("mainserver", new IMqttMessageListener() {
            @Override
            public void messageArrived(String topic, MqttMessage message) {
                System.out.println("Message received: " + message.toString());
            }
        });

        String payload = "{\"cMarksNames\":\"nnx10\",\"planName\":\"image advert 006\",\"marqueName\":\"test0\"}";
        MqttMessage message = new MqttMessage(payload.getBytes());
        client.publish("mainserver", message);
        System.out.println("Message published");
    }
}
