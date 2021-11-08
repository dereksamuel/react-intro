import FooterImage from "./assets/footerImage.svg";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  return (
    <div className="ContainerButton">
      <button className="CreateTodoButton">{props.children}</button>
      <img src={FooterImage} alt="footerImage" className="FooterImage" />
    </div>
  );
}

export {
  CreateTodoButton
};
