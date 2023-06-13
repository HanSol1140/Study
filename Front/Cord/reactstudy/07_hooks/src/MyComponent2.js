import { useState, useRef } from "react";

const MyComponent2 = () => {
  const [count, setCount] = useState(0);
  const timerId = useRef(null); // 로컬 변수

  const startTimer = () => {
    if (timerId.current) return; // 이미 타이머가 실행 중인 경우 무시합니다.

    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
};

export default MyComponent2;