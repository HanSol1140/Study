import TodoListltem from "./TodoListltem";
import "./TodoList.css";

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <section className="TodoList">
            {todos.map(item => (
                <TodoListltem
                    todo={item}
                    key={item.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </section>
    );
};

export default TodoList;