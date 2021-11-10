import "./TodoSearch.css";

function TodoSearch({ search, setSearch }) {
  const onSearchValueChange = (event) => {
    setSearch(event.target.value);
  };

  // return [
  //   <input
  //     type="text"
  //     placeholder="Another Text?"
  //     className="TodoSearch"
  //     onChange={onSearchValueChange}
  //   />,
  //   <p>{search}</p>
  // ];
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
