// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [text, setText] = useState('');

    const sendTTSRequest = async () => {
        try {
            const response = await axios.post('http://localhost:5000/synthesize', { text }, {
                responseType: 'arraybuffer',  // This is needed because the server returns binary data
            });
            const audioBlob = new Blob([response.data], { type: 'audio/mp3' });
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={sendTTSRequest}>Speak</button>
        </div>
    );


}

export default App;