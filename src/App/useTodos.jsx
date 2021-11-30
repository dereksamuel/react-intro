import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

// const TodoContext = React.createContext();

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage("localStorageTodos_v1");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

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

  const saveTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      complted: false,
      text
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);
  };

  return {
    error,
    loading,
    search,
    setSearch,
    totalTodos,
    todosFiltered,
    completedTodos,
    completeTodo,
    deleteTodo,
    showModal,
    setShowModal,
    saveTodo
  };
}

export { useTodos };
