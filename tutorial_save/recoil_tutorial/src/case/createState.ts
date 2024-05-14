// createState.ts
export const createState = (initialValue: any) => {
    let value = initialValue;
    const listeners = new Set<() => void>(); // listener의 타입을 () => void로 지정
  
    const getState = () => value;
  
    const setState = (newValue: any) => {
      value = newValue;
      listeners.forEach(listener => listener());
    };
  
    const subscribe = (listener: () => void) => { // 여기에서도 listener의 타입 지정
      listeners.add(listener);
      return () => listeners.delete(listener);
    };
  
    return { getState, setState, subscribe };
  };
  

// createState.ts
// 상태 초기화: createState 함수는 초기 상태값(initialValue)을 받아서, value 변수에 저장합니다.
// 리스너 관리: listeners라는 Set을 사용하여 상태를 구독하는 리스너들을 관리합니다. 이 리스너들은 상태가 변경될 때마다 호출됩니다.
// getState 함수: 현재 상태값을 반환하는 함수입니다.
// setState 함수: 새로운 상태값을 설정하는 함수입니다. 이 함수가 호출되면, value가 업데이트되고, 모든 리스너들이 순차적으로 호출됩니다.
// subscribe 함수: 새로운 리스너를 listeners에 추가하는 함수입니다. 리스너를 구독 해제하는 함수도 반환합니다.