import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function ToDo(props) {
  // prettier-ignore
  const { name, date, isEditing, id, deleteToDo, setIsDone, setIsEditing, submitEditToDo } = props;

  const [editName, setEditName] = useState(name);
  const [editDate, setEditDate] = useState(date);

  if (!isEditing) {
    return (
      <li className="to-do-item">
        <p className="title-text">
          Title: <span className="title"> {name} </span>{" "}
        </p>
        <div className="to-do-info">
          <p className="date-text">
            Date: <span className="date"> {date} </span>
          </p>
          <div className="btn-cont">
            <Button variation="editToDo" handleClick={() => setIsEditing(id)}>
              edit
            </Button>

            <Button variation="deleteToDo" handleClick={() => deleteToDo(id)}>
              delete
            </Button>
          </div>

          <Input
            type="checkbox"
            variation="checkbox"
            handleOnChange={(e) => setIsDone(id, e.target.checked)}
          ></Input>
        </div>
      </li>
    );
  } else {
    return (
      <form
        className="form"
        onSubmit={(e) => submitEditToDo(e, id, editName, editDate)}
      >
        <p className="title-text">
          Title:
          <Input
            variation="to-do-name-edit"
            value={editName}
            handleOnChange={(e) => setEditName(e.target.value)}
          ></Input>
        </p>
        <div className="to-do-info">
          <p className="date-text">
            Date:
            <Input
              variation="to-do-date-edit"
              type="date"
              value={editDate}
              handleOnChange={(e) => setEditDate(e.target.value)}
            ></Input>
          </p>
          <div className="btn-cont">
            <Button type="submit" variation="submitToDo">
              submit
            </Button>

            <Button variation="deleteToDo">delete</Button>
          </div>
          <input className="check" type="checkbox" />
        </div>
      </form>
    );
  }
}

export default ToDo;
