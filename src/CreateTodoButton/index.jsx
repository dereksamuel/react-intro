import FooterImage from "../assets/footerImage.svg";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = (message) => {
    alert(message);
  };

  return (
    <div className="ContainerButton">
      <button
        className="CreateTodoButton"
        onClick={() => onClickButton("Here is open the MODAL")}>{props.children}</button>
      <img src={FooterImage} alt="footerImage" className="FooterImage" />
    </div>
  );
}

export {
  CreateTodoButton
};
