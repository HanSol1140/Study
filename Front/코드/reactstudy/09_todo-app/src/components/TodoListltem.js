import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from "react-icons/md";
import "./TodoListItem.css";
import cn from "classnames";

const TodoListltem = ({ todo }) => {
    const { text, checked } = todo;

    return (
        <section className='TodoListItem'>
            <div className={cn("checkbox", { checked })}>
                {checked ?<MdCheckBox/>: <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline/>
            </div>
        </section>
    );
};

export default TodoListltem;