import { useContext } from "react";
import { TodoContext } from "../TodoContext/index";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <h3 className="TodoCounter">You has completed {completedTodos} of {totalTodos} TODOs</h3>
  );
}

export {
  TodoCounter
};
