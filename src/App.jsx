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

    if (!activeProject) {
      alert("You need to click on some project in order to activate it.");
    } else {
      setProjects((prev) =>
        prev.map((project) => {
          if (project.isActive) {
            return {
              ...project,
              toDos: [
                ...project.toDos,
                {
                  name: toDoName,
                  date: toDoDate,
                  isDone: false,
                  isEditing: false,
                  id: crypto.randomUUID(),
                },
              ],
            };
          } else return project;
        })
      );

      setToDoName("");
      setToDoDate("");
    }
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

    const activateProject = projects.map((project) => {
      if (project.id === id) {
        return { ...project, isActive: true };
      } else {
        return { ...project, isActive: false };
      }
    });
    setProjects(activateProject);
  }

  const activeProject = projects.find((project) => project.isActive === true);

  function deleteProject(e, id) {
    e.stopPropagation();

    const filteredProjects = projects.filter((project) => project.id !== id);
    setProjects(filteredProjects);
  }

  function deleteToDo(id) {
    setProjects((prev) =>
      prev.map((project) => {
        if (project.isActive) {
          return {
            ...project,
            toDos: [...project.toDos.filter((toDo) => toDo.id !== id)],
          };
        } else project;
      })
    );
  }

  function setIsDone(id, value) {
    const setIsDoneProjects = projects.map((project) => {
      if (project.isActive) {
        return {
          ...project,
          toDos: [
            ...project.toDos.map((toDo) => {
              if (toDo.id === id) {
                return { ...toDo, isDone: value };
              } else return toDo;
            }),
          ],
        };
      } else return project;
    });

    setProjects(setIsDoneProjects);
  }

  function setIsEditing(id) {
    const setEditingProjects = projects.map((project) => {
      if (project.isActive) {
        return {
          ...project,
          toDos: [
            ...project.toDos.map((toDo) => {
              if (toDo.id === id) {
                return { ...toDo, isEditing: true };
              } else return { ...toDo, isEditing: false };
            }),
          ],
        };
      } else return project;
    });
    setProjects(setEditingProjects);
  }

  function submitEditToDo(e, id, name, date) {
    e.preventDefault();

    const setSubmitedProjects = projects.map((project) => {
      if (project.isActive) {
        return {
          ...project,
          toDos: [
            ...project.toDos.map((toDo) => {
              if (toDo.id === id) {
                return { ...toDo, name: name, date: date, isEditing: false };
              } else return { ...toDo, isEditing: false };
            }),
          ],
        };
      } else return project;
    });
    setProjects(setSubmitedProjects);
  }

  function toggleProjectForm() {
    document.querySelector(".add-project-form").classList.toggle("hidden");
  }

  function toggleToDoForm() {
    document.querySelector(".add-to-do-form").classList.toggle("hidden");
  }

  return (
    <>
      <h1 className="heading">TO-DO LIST</h1>
      <div className="container">
        <div className="project-container">
          <button
            className="add-project-btn"
            onClick={() => toggleProjectForm()}
          >
            + ADD PROJECT
          </button>
          <p className="text">Projects 🡫</p>

          <form
            className="add-project-form hidden"
            onSubmit={handleSubmitProject}
          >
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
                {...project}
                setActiveProject={setActiveProject}
                deleteProject={deleteProject}
              />
            ))}
          </ul>
        </div>

        <div className="to-do-container">
          <button className="add-to-do-btn" onClick={() => toggleToDoForm()}>
            + ADD TO DO
          </button>
          <p className="text">To-Do 🡫</p>

          <form className="add-to-do-form hidden" onSubmit={handleSubmitToDo}>
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

          {activeProject && (
            <ul className="to-do-list">
              {activeProject.toDos.map((toDo, index) => (
                <ToDo
                  key={index}
                  {...toDo}
                  deleteToDo={deleteToDo}
                  setIsDone={setIsDone}
                  setIsEditing={setIsEditing}
                  submitEditToDo={submitEditToDo}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
