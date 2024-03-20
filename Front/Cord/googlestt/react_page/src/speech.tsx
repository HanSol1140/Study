// speech.ts

let mediaRecorder: MediaRecorder;
let socket: WebSocket;

export const startRecording = () => {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();

      const audioChunks: Blob[] = [];
      mediaRecorder.ondataavailable = event => {
        audioChunks.push(event.data);
        if (socket && socket.readyState === WebSocket.OPEN) {
          socket.send(event.data);
        }
      };

      socket = new WebSocket('ws://localhost:8000');
      socket.onopen = () => {
        console.log('WebSocket connected');
      };
    })
    .catch(error => console.error('getUserMedia error:', error));
};

export const stopRecording = () => {
  mediaRecorder.stop();
  mediaRecorder.stream.getTracks().forEach(track => track.stop());
  if (socket) {
    socket.close();
  }
};
