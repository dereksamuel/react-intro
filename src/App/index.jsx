import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";
import { TodoHeader } from "../TodoHeader/index";
import { TodoLoading } from "../TodoLoading/index";
import { CreateTodoButton } from "../CreateTodoButton/index";

import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoTitle } from "../TodoTitle/index";

// HOOKS
import { useTodos } from "./useTodos";
import { ChangeAlertWithStorageListener } from "../ChangeAlert";

function App() {
  const {
    todosFiltered,
    error,
    loading,
    completeTodo,
    deleteTodo,
    showModal,
    setShowModal,
    totalTodos,
    completedTodos,
    search,
    setSearch,
    saveTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoTitle>TODO NOTES</TodoTitle>
        <TodoSearch
          search={search}
          setSearch={setSearch}
        />
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
      </TodoHeader>
      <TodoList
        totalTodos={totalTodos}
        todosFiltered={todosFiltered}
        error={error}
        loading={loading}
        searchText={search}

        onError={() => <p>😬 You have one ERROR, NO tranqui...</p>}
        onLoading ={() => <TodoLoading />}
        onEmptyTodos={() => <p>😕 We don't have TODOs for you</p>}
        onEmptySearchTodos={(todoSearch) => <p>🤔 We don't have TODOs for your search: "{todoSearch}"</p>}
      >
        {
          (todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )
        }
      </TodoList>
      {
        !!showModal && (
          <Modal>
            <TodoForm saveTodo={saveTodo} setShowModal={setShowModal} />
          </Modal>
        )
      }
      <CreateTodoButton setShowModal={setShowModal} showModal={showModal} loading={loading}>
        <i className="fas fa-plus"></i>
      </CreateTodoButton>
      <ChangeAlertWithStorageListener
        sincronizeTabs={sincronizeTodos}
      />
    </>
  );
}

export default App;
