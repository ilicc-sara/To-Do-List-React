import { useState } from "react";
import "./App.css";
import Project from "./Project";
import ToDo from "./ToDo";
import Button from "./Button";
import Input from "./Input";

function App() {
  const [projects, setProjects] = useState([]);

  const [projectName, setProjectName] = useState("");

  const [toDoName, setToDoName] = useState("");
  const [toDoDate, setToDoDate] = useState("");

  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showToDoForm, setShowToDoForm] = useState(false);

  function handleSubmitProject(e) {
    e.preventDefault();

    setProjects((prev) => [
      ...prev,
      {
        name: projectName,
        isActive: false,
        toDos: [],
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
        } else return project;
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

  function cancelProject() {
    setProjectName("");
  }

  function cancelToDo() {
    setToDoName("");
    setToDoDate("");
  }

  return (
    <>
      <h1 className="heading">TO-DO LIST</h1>
      <div className="container">
        <div className="project-container">
          <Button
            variation="addProject"
            handleClick={() => setShowProjectForm(!showProjectForm)}
          >
            + ADD PROJECT
          </Button>
          <p className="text">Projects 🡫</p>

          {showProjectForm && (
            <form className="add-project-form" onSubmit={handleSubmitProject}>
              <Input
                variation="project-name"
                value={projectName}
                handleOnChange={(e) => setProjectName(e.target.value)}
              >
                Project Name
              </Input>

              <div className="project-btns">
                <Button type="submit" variation="confirmProject">
                  ADD
                </Button>

                <Button variation="cancelProject" handleClick={cancelProject}>
                  CANCEL
                </Button>
              </div>
            </form>
          )}

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
          <Button
            variation="addToDo"
            handleClick={() => setShowToDoForm(!showToDoForm)}
          >
            + ADD TO DO
          </Button>
          <p className="text">To-Do 🡫</p>

          {showToDoForm && (
            <form className="add-to-do-form" onSubmit={handleSubmitToDo}>
              <div className="to-do-inputs">
                <label>To-Do:</label>
                <Input
                  variation="to-do-name"
                  value={toDoName}
                  handleOnChange={(e) => setToDoName(e.target.value)}
                >
                  To-Do Name
                </Input>
                <label>Due:</label>

                <Input
                  variation="to-do-date"
                  type="date"
                  value={toDoDate}
                  handleOnChange={(e) => setToDoDate(e.target.value)}
                >
                  To-Do Name
                </Input>
              </div>

              <div className="to-do-btns">
                <Button type="submit" variation="confirmToDo">
                  ADD
                </Button>

                <Button variation="cancelToDo" handleClick={cancelToDo}>
                  CANCEL
                </Button>
              </div>
            </form>
          )}

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
