import TodoListltem from "./TodoListltem";
import "./TodoList.css";

const TodoList = ({ todos }) => {
    return (
        <section className="TodoList">
            {todos.map(item => (
                <TodoListltem todo={item} key={item.id}/>
            ))}
        </section>
    );
};

export default TodoList;