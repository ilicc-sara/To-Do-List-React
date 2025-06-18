import React from "react";

function ToDo(props) {
  const { name, date } = props;
  return (
    <li className="to-do-item">
      <p className="title-text">
        {" "}
        Title: <span className="title"> ${name} </span>{" "}
      </p>
      <div className="to-do-info">
        <p className="date-text">
          {" "}
          Date: <span className="date"> ${date} </span>
        </p>
        <div className="btn-cont">
          {" "}
          <button className="edit-to-do-btn">edit</button>{" "}
          <button className="delete-to-do-btn">delete</button>{" "}
        </div>
        <input className="check" type="checkbox" />
      </div>
    </li>
  );
}

export default ToDo;
