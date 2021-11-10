import { TodoCounter } from "../TodoCounter/index";
import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoTitle } from "../TodoTitle/index";
import { CreateTodoButton } from "../CreateTodoButton/index";

function AppUI ({
  search,
  setSearch,
  totalTodos,
  todosFiltered,
  completedTodos,
  completeTodo,
  deleteTodo
}) {
  return (
    <>
      <TodoTitle>TODO TITLE</TodoTitle>
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      <TodoList todosFiltered={todosFiltered}>
        {
          todosFiltered.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))
        }
      </TodoList>
      <CreateTodoButton>
        <i className="fas fa-plus"></i>
      </CreateTodoButton>
    </>
  );
}

export {
  AppUI
};
