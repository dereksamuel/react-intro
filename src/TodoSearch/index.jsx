import "./TodoSearch.css";

function TodoSearch({ search, setSearch, loading }) {
  const onSearchValueChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Another Text?"
      className="TodoSearch"
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
};

export {
  TodoSearch
};
