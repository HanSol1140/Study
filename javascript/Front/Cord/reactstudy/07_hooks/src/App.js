import { useState, useEffect } from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";
import MyComponent1 from "./MyComponent1";
import MyComponent2 from "./MyComponent2";


function App() {
  
  const [visible, setvisible] = useState(true);
  
  return (
    <div>
      <button onClick={()=>setvisible(!visible)}>
        {visible ? '보이는 상태' : '숨겨진 상태'}
      </button>
      {visible && <Counter/>}
      <p>---------------------------------------</p>
      {visible && <Info/>}
      <p>---------------------------------------</p>
      {visible && <Average/>}
      <p>---------------------------------------</p>
      {visible && <MyComponent1/>}
      <p>---------------------------------------</p>
      {visible && <MyComponent2/>}
    </div>
  );
}

export default App;
