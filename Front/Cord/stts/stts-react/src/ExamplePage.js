import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ExamplePage = () => {

    const [audioSource, setAudioSource] = useState('');

    useEffect(() => {
        requestAudioFile();
    },[])

    const requestAudioFile = async () => {
        console.log("request Audio");
        
        const response = await axios.get('http://localhost:5000/exam1',{
            responseType : 'arraybuffer'
        })

        console.log("response : ",response);

        const audioContext = getAudioContext();

        
        const audioBuffer = await audioContext.decodeAudioData(response.data);

        //create audio source
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start();//자동으로 오디오 시작되게
        console.log("source : ", source);
        setAudioSource(source);
    }

    const getAudioContext = () => {
        AudioContext = window.AudioContext; /* || window.webkitAudioContext */
        const audioContent = new AudioContext();
        return audioContent;
    }


    return(
        <div>
            Example1
            <audio controls>
                <source type = "audio/mpeg" src={audioSource}/>
            </audio>
        </div>
    )

}

export default ExamplePage;