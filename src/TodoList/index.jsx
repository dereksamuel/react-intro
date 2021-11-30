/* eslint-disable no-undef */
import { useEffect } from "react";
import "./TodoList.css";

function TodoList (props) {
  const renderFunc = (props.render && !props.children) ? props.render : props.children;

  useEffect(() => {
    let elem = document.querySelector(".TodoList");
    // eslint-disable-next-line no-unused-vars
    let msnry = new Masonry(elem, {
      // options
      itemSelector: ".TodoItem",
      columnWidth: 400,
      isFitWidth: true,
      gutter: 20,
    });
  }, [props.todosFiltered]);

  return (
    <section className="TodoListContainer">
      { props.error && props.onError() }
      { props.loading && props.onLoading() }

      { (!props.loading && !props.todosFiltered?.length && !props.totalTodos) && props.onEmptyTodos() }
      {(!!props.totalTodos && !props.todosFiltered.length) && props.onEmptySearchTodos(props.searchText)}

      <ul className="TodoList">
        { props.todosFiltered.map(renderFunc) }
      </ul>
    </section>
  );
};

export {
  TodoList
};
