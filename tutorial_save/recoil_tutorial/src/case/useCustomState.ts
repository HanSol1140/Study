// useCustomState.js
import { useEffect, useState } from 'react';

export const useCustomState = (state:any) => {
  const [value, setValue] = useState(state.getState());

  useEffect(() => {
    const unsubscribe = state.subscribe(() => {
      setValue(state.getState());
    });

    return unsubscribe;
  }, [state]);

  return [value, state.setState];
};


// useCustomState.js
// 커스텀 훅: useCustomState는 React 커스텀 훅으로, createState를 통해 생성된 상태를 React 컴포넌트에서 사용할 수 있게 해줍니다.
// 상태 및 리렌더링 관리: 내부적으로 useState를 사용하여 상태의 현재 값을 관리합니다. setValue는 상태가 변경될 때 컴포넌트를 리렌더링하도록 합니다.
// 상태 구독: useEffect를 사용하여 상태의 변화를 구독합니다. 상태가 변화할 때마다 setValue가 호출되어 컴포넌트가 새로운 상태값으로 리렌더링됩니다.
// 구독 해제: 컴포넌트가 언마운트될 때 unsubscribe 함수가 호출되어, 리스너 구독을 해제합니다.