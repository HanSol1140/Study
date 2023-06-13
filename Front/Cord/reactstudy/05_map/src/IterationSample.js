import { useState } from 'react';

const IterationSample = () => {
// 1. 데이터배열
    const  [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' }
    ]);

// 2. input의 state
    const [inputText, setInputText] = useState('');

// 3. 새로운 항목을 추가할 때 사용할 id
    const [nextId, setNextId] = useState(5);

// 4. input에 기입한 text에 따라 inputText값을 변경 
    const onChange = e => {
        setInputText(e.target.value);
        console.log(e.target.value);
    };

// 5. 클릭하여 input값을 추가해줄 함수 생성
    const onClick= () => {
        const nextNames = names.concat({
            id: nextId, // nextId값을 id로 설정하고
            text: inputText
        });
        setNextId(nextId + 1); //nextID값에 1을 더해준다
        setNames(nextNames); // names 값을 업데이트 한다.
        setInputText(''); // inputText를 비운다.
    };
    
// 6. 삭제하는 함수
    const onRemove = id => {
        const nextNames = names.filter(name =>name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map(item =>
    <li key={item.id} onDoubleClick={() => onRemove(item.id)}>
        {item.text}
    </li>);

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>
                {nameList}
            </ul>
        </>
    );
};

export default IterationSample;