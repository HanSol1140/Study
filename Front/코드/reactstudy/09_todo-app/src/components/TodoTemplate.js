import React from 'react';
import "./TodoTemplate.css";

const TodoTemplate = ({ children }) => {
    return (
        <section className='TodoTemplate'>
            <div className='app-title'>일정 관리</div>
            <div className='content'>{children}</div>
        </section>
    );
};

export default TodoTemplate;