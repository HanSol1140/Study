// src/features/counter/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 인터페이스 데이터 타입 설정
interface CounterState {
  value: number;
};
// 초기값 선언
const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter', // state 명칭
  initialState,    // 초기값
  reducers: {      // 상태관리 함수(리듀서)
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // 페이로드액션 타입을 사용하여 `action.payload`의 내용을 선언합니다.
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;