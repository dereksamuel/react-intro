import { useState } from "react";

import { AppUI } from "./AppUI";

function App() {
  const localStorageTodos = localStorage.getItem("localStorageTodos_v1");
  let parserTodos;

  if (!localStorageTodos) {
    localStorage.setItem("localStorageTodos_v1", JSON.stringify([]));
    parserTodos = [];
  } else {
    parserTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState(parserTodos);
  const [search, setSearch] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let todosFiltered = [];

  if (!search.length >= 1) {
    todosFiltered = todos;
  } else {
    todosFiltered = todos.filter((todo) => {
      const todoLower = todo.text.toLowerCase();
      const searchLower = search.toLowerCase();

      return todoLower.includes(searchLower);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)

    setTodos(newTodos);
  };

  return (
    <AppUI
      search={search}
      setSearch={setSearch}
      totalTodos={totalTodos}
      todosFiltered={todosFiltered}
      completedTodos={completedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
