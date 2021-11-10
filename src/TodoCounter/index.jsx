import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h3 className="TodoCounter">You has completed {completedTodos} of {totalTodos} TODOs</h3>
  );
}

export {
  TodoCounter
};
