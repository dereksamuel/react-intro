import "./TodoItem.css";

function TodoItem (props) {
  return (
    <li className="TodoItem">
      <div
        className={props.completed ? "TodoItem__check--completed" : "TodoItem__check"}
        onClick={props.onComplete}>
        <i className="fas fa-check"></i>
        <p>{ props.text }</p>
      </div>
      <i className="fas fa-trash Trash" onClick={props.onDelete}></i>
    </li>
  );
};

export {
  TodoItem
};