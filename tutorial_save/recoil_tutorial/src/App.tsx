
import { RecoilRoot } from 'recoil';
import TextInput from './components/TextInput';
import TextInput2 from './components/TextInput2';

function App() {
  return (
    <RecoilRoot>
      <div>
        <h1>Recoil 기본 예제</h1>
        <TextInput />
        <TextInput2 />
      </div>
    </RecoilRoot>
  );
}

export default App;
