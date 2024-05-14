// textLengthState.ts
import { selector } from 'recoil';
import { textState } from '../atoms/textState';

export const textLengthState = selector({
  key: 'textLengthState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});
