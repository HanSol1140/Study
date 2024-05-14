// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice' // 추가

const store = configureStore({
  reducer: {
    counter: counterReducer // 추가
  }
});

// RootState 타입을 추가합니다. (타입스크립트)
export type RootState = ReturnType<typeof store.getState> // 추가

export default store;