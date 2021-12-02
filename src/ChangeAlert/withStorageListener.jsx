import { useState } from "react";

function withStorageListener(ChangeAlert) {
  return function WrappedComponent(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener("storage", (event) => {
      if (event.key === "localStorageTodos_v1") {
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      setStorageChange(false);
      props.sincronizeTabs();
    };

    return (
      <ChangeAlert
        show={storageChange}
        toggleShow={toggleShow}
      />
    );
  }
}

export {
  withStorageListener,
};
