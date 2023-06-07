import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from "react-icons/md";
import "./TodoListItem.css";
import cn from "classnames";

const TodoListltem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return (
        <section className='TodoListItem'>
            <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
                {checked ?<MdCheckBox/>: <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </section>
    );
};

export default TodoListltem;