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

  /// 고유값으로 사용할 id => ref를 사용하여 변수 담기
  const nextId = useRef(4);
  
  // 항목을 추가할 onIsert 함수 생성
  const onInsert = useCallback(text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos]
  );// 의존성 배열 ▼
  // todos가 변경될 때마다 새로운 함수가 생성됩니다.
  // 따라서, onInsert 함수는 항상 최신의 todos 배열을 참조하게 됩니다.

  // 항목 제거기능 구현
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  // 항목 토글 기능 구현
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => todo.id === id? {...todo, checked: !todo.checked} : todo)
      );
    },
    [todos],
  );
    


  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/> {/* 생성한 onInsert를 TodoInsert의 props로 설정 */}
        <TodoList todos = {todos} onRemove = {onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
}

export default App;