import HeaderImage from "../assets/headerImage.svg";
import "./TodoTitle.css";

function TodoTitle (props) {
  return (
    <div className="Container">
      <img src={HeaderImage} alt="headerImage" className="TodoHeader" />
      <h2 className="TodoTitle">
        { props.children }
      </h2>
    </div>
  );
};

export {
  TodoTitle
};