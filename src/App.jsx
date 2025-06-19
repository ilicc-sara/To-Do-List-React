import { useState } from "react";
import "./App.css";
import Project from "./Project";
import ToDo from "./ToDo";

function App() {
  const [projects, setProjects] = useState([]);

  const [projectName, setProjectName] = useState("");

  const [toDoName, setToDoName] = useState("");
  const [toDoDate, setToDoDate] = useState("");

  function handleSubmitProject(e) {
    e.preventDefault();

    setProjects((prev) => [
      ...prev,
      {
        name: projectName,
        isActive: false,
        toDos: [
          // {
          //   name: "",
          //   date: "",
          //   isDone: false,
          //   isEditing: false,
          //   id: crypto.randomUUID(),
          // },
        ],
        id: crypto.randomUUID(),
      },
    ]);
    setProjectName("");
  }
  console.log(projects);

  function handleSubmitToDo(e) {
    e.preventDefault();
    console.log(toDoName);
    console.log(toDoDate);

    setToDoName("");
    setToDoDate("");
  }

  function setActiveProject(id) {
    // setProjects((prev) => {
    //   prev.map((project) => {
    //     if (project.id === id) {
    //       return { ...project, isActive: true };
    //     } else {
    //       return { ...project, isActive: false };
    //     }
    //   });
    // });
    // console.log(projects);

    const activateProject = projects.map((project) => {
      if (project.id === id) {
        return { ...project, isActive: true };
      } else {
        return { ...project, isActive: false };
      }
    });
    // console.log(activateProject);
    setProjects(activateProject);
  }

  return (
    <>
      <h1 className="heading">TO-DO LIST</h1>
      <div className="container">
        <div className="project-container">
          <button className="add-project-btn">+ ADD PROJECT</button>
          <p className="text">Projects 🡫</p>

          <form className="add-project-form" onSubmit={handleSubmitProject}>
            {/* hidden */}
            <input
              className="input-project-name"
              type="text"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />

            <div className="project-btns">
              {" "}
              <button className="confirm-project-btn">ADD</button>{" "}
              <button type="button" className="cancel-project-btn">
                CANCEL
              </button>{" "}
            </div>
          </form>

          <ul className="projects-list">
            {projects.map((project, index) => (
              <Project
                key={index}
                projectName={project.name}
                id={project.id}
                isActive={project.isActive}
                setActiveProject={setActiveProject}
              />
            ))}
          </ul>
        </div>

        <div className="to-do-container">
          <button className="add-to-do-btn">+ ADD TO DO</button>
          <p className="text">To-Do 🡫</p>

          <form className="add-to-do-form" onSubmit={handleSubmitToDo}>
            {/* hidden */}
            <div className="to-do-inputs">
              <label>To-Do:</label>

              <input
                className="input-to-do-name"
                type="text"
                placeholder="To-Do Name"
                value={toDoName}
                onChange={(e) => setToDoName(e.target.value)}
                required
              />
              <label>Due:</label>

              <input
                className="input-to-do-date"
                type="date"
                value={toDoDate}
                onChange={(e) => setToDoDate(e.target.value)}
                required
              />
            </div>

            <div className="to-do-btns">
              {" "}
              <button className="confirm-to-do-btn">ADD</button>{" "}
              <button type="button" className="cancel-to-do-btn">
                CANCEL
              </button>{" "}
            </div>
          </form>

          <ul className="to-do-list"></ul>
        </div>
      </div>
    </>
  );
}

export default App;
