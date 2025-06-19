import React, { useState } from "react";

function ToDo(props) {
  // prettier-ignore
  const { name, date, isDone, isEditing, id, deleteToDo, setIsDone, setIsEditing } = props;

  return (
    <li className="to-do-item">
      <p className="title-text">
        {" "}
        Title: <span className="title"> {name} </span>{" "}
      </p>
      <div className="to-do-info">
        <p className="date-text">
          {" "}
          Date: <span className="date"> {date} </span>
        </p>
        <div className="btn-cont">
          {" "}
          <button className="edit-to-do-btn" onClick={() => setIsEditing(id)}>
            edit
          </button>{" "}
          <button className="delete-to-do-btn" onClick={() => deleteToDo(id)}>
            delete
          </button>{" "}
        </div>
        <input
          className="check"
          type="checkbox"
          onChange={(e) => setIsDone(id, e.target.checked)}
        />
      </div>
    </li>
  );
}

export default ToDo;
