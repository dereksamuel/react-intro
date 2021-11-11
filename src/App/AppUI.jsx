import { useContext } from "react";

import { TodoCounter } from "../TodoCounter/index";
import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoLoading } from "../TodoLoading/index";
import { TodoTitle } from "../TodoTitle/index";
import { CreateTodoButton } from "../CreateTodoButton/index";

import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI () {
  const {
    todosFiltered,
    error,
    loading,
    completeTodo,
    deleteTodo,
    showModal,
    setShowModal
  } = useContext(TodoContext);

  return (
    <>
      <TodoTitle>TODO NOTES</TodoTitle>
      <TodoSearch />
      <TodoCounter />
      <TodoList todosFiltered={todosFiltered}>
        {
          error && <p>You have one ERROR, NO tranqui...</p>
        }
        {
          loading && <TodoLoading />
        }
        {
          (!loading && !todosFiltered.length) && <p>Create your first TODO</p>
        }
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
      {
        !!showModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )
      }
      <CreateTodoButton setShowModal={setShowModal} showModal={showModal}>
        <i className="fas fa-plus"></i>
      </CreateTodoButton>
    </>
  );
}

export {
  AppUI
};
