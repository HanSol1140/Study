// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/data')  // 포트 번호를 5000으로 변경
        .then((response) => {
            setData(response.data.message);
        });
    }, []);

    return (
        <div>
            <h1>{data}</h1>
            <h2>테스트</h2>
        </div>
    );
}

export default App;