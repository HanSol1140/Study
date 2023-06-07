import './reset.css';
import { useState, useCallback, useRef } from 'react';
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from './components/TodoList';



function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링해 보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정관리 앱 시작하기",
      checked: false,
    },
  ]);

  return (
    <div>
      <TodoTemplate>
        <TodoInsert/>
        <TodoList todos ={todos}/>
      </TodoTemplate>
      
    </div>
  );
}

export default App;