// src/features/counter/Counter.tsx
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';
import { RootState } from '../../app/store';

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <button aria-label="Increment value" onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <button aria-label="Decrement value" onClick={() => dispatch(incrementByAmount(5))}>
                5++
            </button>
            <br />
            <span>{count}</span>
        </div>
    );
}

export default Counter;