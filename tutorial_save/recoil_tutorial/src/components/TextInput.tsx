import { ChangeEvent } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState } from '../atoms/textState';
import { textLengthState } from '../selectors/textLengthState';

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  const textLength = useRecoilValue(textLengthState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <p>입력된 텍스트 길이: {textLength}</p>
    </div>
  );
}

export default TextInput;