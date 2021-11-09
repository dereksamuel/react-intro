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
  },
  {
    text: "Say that Daniel is a FART Say that Daniel is a FART",
    complete: false,
  },
  {
    text: "S",
    complete: false,
  },
  {
    text: "Derek es guapo",
    complete: false,
  },
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
  },
  {
    text: "Say that Daniel is a FART Say that Daniel is a FART",
    complete: false,
  },
  {
    text: "S",
    complete: false,
  },
  {
    text: "Derek es guapo",
    complete: false,
  },
];

function App(props) {
  return (
    <>
      <TodoTitle>TODO TITLE</TodoTitle>
      <TodoSearch />
      <TodoCounter />
      <TodoList>
        {
          todoList.map(todo => (
            <TodoItem key={todo.text} text={todo.text} />
          ))
        }
      </TodoList>
      <CreateTodoButton>
        <i className="fas fa-plus"></i>
      </CreateTodoButton>
    </>
  );
}

export default App;
