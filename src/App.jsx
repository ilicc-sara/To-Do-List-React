import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1 class="heading">TO-DO LIST</h1>
      <div class="container">
        <div class="project-container">
          <button class="add-project-btn">+ ADD PROJECT</button>
          <p class="text">Projects 🡫</p>

          <form class="add-project-form">
            {/* hidden */}
            <input
              class="input-project-name"
              type="text"
              placeholder="Project Name"
              required
            />

            <div class="project-btns">
              {" "}
              <button class="confirm-project-btn">ADD</button>{" "}
              <button type="button" class="cancel-project-btn">
                CANCEL
              </button>{" "}
            </div>
          </form>

          <ul class="projects-list"></ul>
        </div>

        <div class="to-do-container">
          <button class="add-to-do-btn">+ ADD TO DO</button>
          <p class="text">To-Do 🡫</p>

          <form class="add-to-do-form">
            {/* hidden */}
            <div class="to-do-inputs">
              <label>To-Do:</label>

              <input
                class="input-to-do-name"
                type="text"
                placeholder="To-Do Name"
                required
              />
              <label>Due:</label>

              <input class="input-to-do-date" type="date" required />
            </div>

            <div class="to-do-btns">
              {" "}
              <button class="confirm-to-do-btn">ADD</button>{" "}
              <button type="button" class="cancel-to-do-btn">
                CANCEL
              </button>{" "}
            </div>
          </form>

          <ul class="to-do-list"></ul>
        </div>
      </div>
    </>
  );
}

export default App;
