import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import { TodoTitle } from "./TodoTitle";
import { CreateTodoButton } from "./CreateTodoButton";

const todoList = [
  {
    text: "Splice cebolla",
    complete: false,
  },
  {
    text: "Make a new app",
    complete: false,
  },
  {
    text: "Say that Daniel is a FART",
    complete: false,
  }
];

function App(props) {
  return (
    <>
      <TodoTitle>TODOS</TodoTitle>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          todoList.map(todo => (
            <TodoItem key={todo.text} text={todo.text} />
          ))
        }
      </TodoList>
      <CreateTodoButton>+</CreateTodoButton>
    </>
  );
}

export default App;
