import "./TodoItem.css";

function TodoItem (props) {
  return (
    <li className="TodoItem">
      <div className="TodoItem__check">
        <i className="fas fa-check"></i>
        <p>{ props.text }</p>
      </div>
      <i className="fas fa-trash Trash"></i>
    </li>
  );
};

export {
  TodoItem
};