import "./CSS/TodoItems.css";
import tick from "./Assets/tick.png";
import not_tick from "./Assets/not_tick.png";
import cross from "./Assets/cross.png";

const TodoItems = ({no, display, text}) => {
    return (
        <div className="todo-items">
            <div className="todo-items-container">
                <img src={not_tick} alt="" />
                <img src={tick} alt="" />
                <div className="todo-items-text">{text}</div>
            </div>
            <img className="todo-items-cross-icon" src={cross} alt="" />
        </div>
    );
};

export default TodoItems;
