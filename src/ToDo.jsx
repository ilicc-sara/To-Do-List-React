import React from "react";

function ToDo(props) {
  const { name, date } = props;
  return (
    <li className="to-do-item">
      <p class="title-text">
        {" "}
        Title: <span class="title"> ${name} </span>{" "}
      </p>
      <div class="to-do-info">
        <p class="date-text">
          {" "}
          Date: <span class="date"> ${date} </span>
        </p>
        <div class="btn-cont">
          {" "}
          <button class="edit-to-do-btn">edit</button>{" "}
          <button class="delete-to-do-btn">delete</button>{" "}
        </div>
        <input class="check" type="checkbox" />
      </div>
    </li>
  );
}

export default ToDo;
