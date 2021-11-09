/* eslint-disable no-undef */
import { useEffect } from "react";
import "./TodoList.css";

function TodoList (props) {
  useEffect(() => {
    let elem = document.querySelector(".TodoList");
    let msnry = new Masonry(elem, {
      // options
      itemSelector: ".TodoItem",
      columnWidth: 400,
      isFitWidth: true,
      gutter: 20,
    });
  }, []);

  return (
    <ul className="TodoList">
      { props.children }
    </ul>
  );
};

export {
  TodoList
};
