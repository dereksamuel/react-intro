import React from "react";

function TodoHeader({ children, loading }) {
  return (
    <header>
      {
        [...children].map((child, index) => (
          React.cloneElement(child, { loading, key: index })
        ))
      }
    </header>
  );
}

export {
  TodoHeader
};
