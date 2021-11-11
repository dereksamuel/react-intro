import { useContext } from "react";
import { TodoContext } from "../TodoContext/index";

import "./TodoSearch.css";

function TodoSearch() {
  const { search, setSearch } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Another Text?"
      className="TodoSearch"
      onChange={onSearchValueChange}
    />
  );
};

export {
  TodoSearch
};
