import { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
const App = () => {
    // 녹음 중인지 여부를 추적하는 상태. 녹음이 시작되면 true, 녹음이 중지되면 false가 됩니다.
    const [isRecording, setIsRecording] = useState(false);

    // 브라우저의 MediaRecorder 인스턴스를 저장하는 상태. 오디오 녹음을 제어하는 데 사용됩니다.
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);

    // 녹음된 오디오 데이터를 저장하는 Blob 객체를 추적하는 상태.
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

    // 오디오 데이터 조각들을 저장하는 ref. MediaRecorder에서 생성된 데이터 조각들이 여기에 추가됩니다.
    const audioChunksRef = useRef<BlobPart[]>([]);

    // 오디오 컨텍스트를 저장하는 상태. Web Audio API를 사용해 오디오 처리 및 분석에 사용됩니다.
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

    // 오디오 신호를 분석하는 AnalyserNode 인스턴스를 저장하는 상태. 볼륨 레벨이나 주파수 데이터를 얻는 데 사용됩니다.
    const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);

    // 침묵이 시작된 시간을 추적하는 상태. 침묵 감지 로직에서 사용됩니다.
    const [silenceStart, setSilenceStart] = useState<number | null>(null);

    // requestAnimationFrame의 ID를 저장하는 ref. 침묵 감지 로직의 반복 호출을 관리하기 위해 사용됩니다.
    const animationFrameId = useRef<number | null>(null);



    // 녹음을 시작하는 함수
    const startRecording = async () => {
        setIsRecording(true); // 녹음 시작 상태로 설정

        // 마이크 사용 권한 요청
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); // 오디오 입력 스트림을 가져옴


        const options = { mimeType: 'audio/webm' }; // 녹음 설정 (WebM 포맷)        
        // 생성된 stream을 MediaRecorder타입의 MediaRecorder 인스턴스 recorder에 저장
        const recorder = new MediaRecorder(stream, options);

        // 녹음을 시작할 때 오디오 컨텍스트와 애널라이저 노드 설정
        const newAudioContext = new AudioContext();
        setAudioContext(newAudioContext);
        const newAnalyser = newAudioContext.createAnalyser();
        setAnalyser(newAnalyser);

        // 오디오 스트림을 오디오 컨텍스트에 연결
        const source = newAudioContext.createMediaStreamSource(stream);
        source.connect(newAnalyser);

        setMediaRecorder(recorder); // MediaRecorder 상태 설정
        audioChunksRef.current = []; // 오디오 조각 배열 초기화

        // 녹음 데이터가 사용 가능할 때마다 호출될 이벤트 핸들러
        recorder.ondataavailable = (event) => {
            audioChunksRef.current.push(event.data); // 데이터 조각을 audioChunksRef에 추가
        };

        // 녹음이 중지되었을 때 호출될 이벤트 핸들러
        recorder.onstop = () => {
            setIsRecording(false); // 녹음 상태를 중지 상태로 변경
            const newAudioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
            setAudioBlob(newAudioBlob); // 녹음된 오디오 데이터로 audioBlob 상태 업데이트
        };

        recorder.start(); // 녹음 시작
    };

    // 녹음을 중단하는 함수
    const stopRecording = useCallback(() => {
        setIsRecording(false); // 녹음 상태를 중지 상태로 변경
        if (mediaRecorder) {
            mediaRecorder.stop(); // 녹음 중지
            mediaRecorder.stream.getTracks().forEach(track => track.stop()); // 모든 미디어 트랙 중지
        }
    }, [mediaRecorder]); // mediaRecorder가 변경될 때마다 함수 재정의


    const sendUserVoice = async (audioBlob: Blob) => {
        const formData = new FormData();
        formData.append('file', audioBlob, 'UserVoice.webm');

        try {
            console.log("요청횟수 확인");
            const response = await axios.post('https://192.168.0.137:8000/transcribe', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Upload successful', response);
        } catch (error) {
            console.error('Upload failed', error);
        }
    }


    // 침묵 감지를 위한 useEffect
    useEffect(() => {
        if (!isRecording || !audioContext || !analyser) return;

        const dataArray = new Uint8Array(analyser.fftSize);// FFT 사이즈에 따른 데이터 배열 생성
        const VOLUME_THRESHOLD = 10; // 볼륨 임계값 설정

        const checkSilence = () => {
            // 녹음 중이 아니라면 함수 종료
            if (!isRecording) return;
            // 현재 주파수 데이터를 dataArray에 저장
            analyser.getByteFrequencyData(dataArray);
            // dataArray의 값들을 합산
            const sum = dataArray.reduce((acc, value) => acc + value, 0);
            // 평균 볼륨 계산
            const averageVolume = sum / dataArray.length;

            if (averageVolume > VOLUME_THRESHOLD) {
                // 볼륨이 임계값 이상이면 침묵 시작 시간을 초기화
                setSilenceStart(null);
            } else if (silenceStart === null) {
                // 볼륨이 임계값 이하이고, 침묵 시작 시간이 설정되지 않았다면 현재 시간을 침묵 시작 시간으로 설정
                setSilenceStart(performance.now());
            } else if (performance.now() - silenceStart > 2000) {
                // 침묵이 2초 이상 지속되면 녹음 중지
                setSilenceStart(null);
                stopRecording();
                if (audioBlob instanceof Blob) {
                    sendUserVoice(audioBlob);
                }
            }



            animationFrameId.current = requestAnimationFrame(checkSilence);
        };

        animationFrameId.current = requestAnimationFrame(checkSilence);

        return () => {
            if (animationFrameId.current) {
                // 컴포넌트가 언마운트되거나 useEffect가 재실행될 때 애니메이션 취소
                cancelAnimationFrame(animationFrameId.current);
            }
        };
        // 의존성 배열 - 포함된 변수들이 변경될 때마다 useEffect 재실행
    }, [isRecording, audioContext, analyser, silenceStart]);



    return (
        <div>
            <h1>Step 2</h1>
            <button onClick={startRecording} disabled={isRecording}>
                {isRecording ? 'Recording...' : 'Start Recording'}
            </button>
            <button onClick={stopRecording} disabled={!isRecording}>
                Stop Recording
            </button>
        </div>
    );
};

export default App;
