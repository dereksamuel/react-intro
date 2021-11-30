import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h3 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>You have completed {completedTodos} of {totalTodos} TODOs</h3>
  );
}

export {
  TodoCounter
};
