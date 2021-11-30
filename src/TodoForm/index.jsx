import { useState } from "react";

import "./TodoForm.css";

function TodoForm({ saveTodo, setShowModal }) {
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    saveTodo(newTodoValue);
    setShowModal(false);
  };

  const handleChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="TodoForm">
      <label htmlFor="newText">Write your new TODO</label>
      <textarea
        value={newTodoValue}
        onChange={handleChange}
        placeholder="Any work?"
        id="newText"
        required
      />
      <div>
        <button
          type="submit"
        >Add</button>
      </div>
    </form>
  );
}

export {
  TodoForm
};
