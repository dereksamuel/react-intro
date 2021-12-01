import { useState } from "react";

function withStorageListener(ChangeAlert) {
  return function WrappedComponent(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener("storage", (event) => {
      console.log(event);
      if (event.key === "localStorageTodos_v1") {
        console.log("Hubo changes");
        setStorageChange(true);
      }
    });

    return (
      <ChangeAlert
        show={storageChange}
        toggleShow={setStorageChange}
      />
    );
  }
}

export {
  withStorageListener,
};
