import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return <p>Cambios</p>;
  } else {
    return <p>Hi</p>;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export {
  ChangeAlertWithStorageListener
};
