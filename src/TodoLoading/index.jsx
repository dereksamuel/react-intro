import "./TodoLoading.css";

function TodoLoading() {
  return (
    <div className="TodoLoading">
      <div className="LoadingContainer">
        <div className="LoadingCheck"></div>
        <div className="LoadingText">Loading TODOs...</div>
        <div className="LoadingDeleteIcon"></div>
      </div>
      <div className="LoadingContainer">
        <div className="LoadingCheck"></div>
        <div className="LoadingText">Loading TODOs...</div>
        <div className="LoadingDeleteIcon"></div>
      </div>
      <div className="LoadingContainer">
        <div className="LoadingCheck"></div>
        <div className="LoadingText">Loading TODOs...</div>
        <div className="LoadingDeleteIcon"></div>
      </div>
    </div>
  );
}

export {
  TodoLoading
};
