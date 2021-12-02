import FooterImage from "../assets/footerImage.svg";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setShowModal(prevState => !prevState);
  };

  return (
    <div className="ContainerButton">
      <button
        disabled={props.loading}
        className={props.showModal ? "CreateTodoButton closeAnim" : "CreateTodoButton closeAnimReverse"}
        onClick={onClickButton}>{props.children}</button>
      <img src={FooterImage} alt="footerImage" className="FooterImage" />
    </div>
  );
}

export {
  CreateTodoButton
};
