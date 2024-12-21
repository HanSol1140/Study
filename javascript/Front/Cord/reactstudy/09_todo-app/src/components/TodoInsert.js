import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.css';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
        console.log(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e =>{
            onInsert(value);
            setValue('');
            // onSubmit이벤트는 새로고침을 강제합니다.
            e.preventDefault();
        },
        [onInsert, value],
    );
    
    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input
                placeholder='할 일을 입력하세요'
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;