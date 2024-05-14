import React from 'react';
import { useCustomState } from '../case/useCustomState';
import { textState } from '../case/textState';

const TextInput = () => {
  const [text, setText] = useCustomState(textState);

  const onChange = (event:any) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <p>입력된 텍스트 길이: {text.length}</p>
    </div>
  );
};

export default TextInput;
// recoil, useState없이 직접 코드를 만든 경우의 예시