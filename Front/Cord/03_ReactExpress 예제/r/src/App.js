// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [inputValue, setInputValue] = useState([]);
    const [dynamicContent, setDynamicContent] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const sendDataToServer = () => {
        axios.post('http://localhost:5000/api/console', { message: inputValue })
            .then((response) => {
                setDynamicContent(inputValue); // 전달받은 값으로 동적 콘텐츠 업데이트
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={sendDataToServer}>Send</button>
        </div>
    );
}

export default App;