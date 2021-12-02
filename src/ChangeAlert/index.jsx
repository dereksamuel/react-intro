import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="Alert">
        <div className="ChangeAlertContainer">
          <p>
            It seems that you changed a content on other tab.
          </p>
          <p>
            Do you want to synchronize the changes?
          </p>
          <button
            onClick={() => toggleShow(false)}
            className="ChangeAlert"
          > <i className="fas fa-sync-alt"></i> Yes, I do</button>
        </div>
      </div>
    )
  } else return null;
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export {
  ChangeAlertWithStorageListener
};
