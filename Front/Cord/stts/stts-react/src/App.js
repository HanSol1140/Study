// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState(''); // 사용자 입력을 저장할 state

  const handleChange = (event) => {
    setText(event.target.value); // 사용자 입력을 state에 저장 => 저장해야 보낼 수 있음 안하면 ''(공백)보내짐
  }

  const handleSubmit = async () => {
    try{
      const response = await axios.post('http://localhost:5000/synthesize', { text }, { responseType: 'arraybuffer' });
      const audioBlob = new Blob([response.data], {type: 'audio/mp3'});
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error){
      console.error('error with text-to-speech conversion! :', error);
    }
  }
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;