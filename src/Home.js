import { useEffect, useState } from "react";
import { v4 as uuid4 } from "uuid";

import InputField from "./components/InputField";
import moonIcon from "./images/icon-moon.svg";
import sunIcon from "./images/icon-sun.svg";
import closeIcon from "./images/icon-cross.svg";

const Home = () => {
  const htmlTag = document.querySelector("html");
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [themeIcon, setThemeIcon] = useState(moonIcon);

  const handleChangeTheme = () => {
    if (window.localStorage.getItem("theme") === "light-theme") {
      htmlTag.className = "dark-theme";
      window.localStorage.setItem("theme", "dark-theme");
      setThemeIcon(sunIcon);
    } else {
      htmlTag.className = "light-theme";
      window.localStorage.setItem("theme", "light-theme");
      setThemeIcon(moonIcon);
    }
  };
  const handleCreateTodo = (e) => {
    if (e.which === 13) {
      setTodos([
        ...todos,
        { task: e.target.value, completed: false, key: uuid4() },
      ]);
      setInputText("");
    }
  };
  const handleDeleteTodo = (e) =>
    setTodos(todos.filter((todo) => todo.key !== e.target.id));
  const handleSetCompleted = (e) => {
    const selectedTodoIndex = todos.findIndex(
      (todo) => todo.key === e.target.id
    );
    const selectedTodo = todos.filter((todo) => todo.key === e.target.id)[0];
    selectedTodo.completed = !selectedTodo.completed;
    let newTodos = todos.filter((todo) => todo.key !== e.target.id);
    newTodos.splice(selectedTodoIndex, 0, selectedTodo);
    setTodos(newTodos);
  };

  useEffect(() => {
    if (window.localStorage.getItem("theme") === "light-theme") {
      htmlTag.className = "light-theme";
      setThemeIcon(moonIcon);
    } else {
      htmlTag.className = "dark-theme";
      setThemeIcon(sunIcon);
    }
  }, []);

  return (
    <div className="home">
      <div className="home__box">
        <div className="home__title-bar">
          <h1 className="heading-primary">todo</h1>
          <img
            src={themeIcon}
            alt=""
            className="home__theme-icon"
            onClick={handleChangeTheme}
          />
        </div>

        <InputField
          handleCreateTodo={handleCreateTodo}
          setInputText={setInputText}
          inputText={inputText}
        />

        <div className="list-container">
          <div className="todo__list">
            {todos.map((todo) => {
              return (
                <li className="todo__list-item" key={todo.key}>
                  {!todo.completed && (
                    <div
                      className="todo__checkbox"
                      onClick={handleSetCompleted}
                      id={todo.key}
                    ></div>
                  )}
                  {todo.completed && (
                    <div
                      className="todo__checkbox todo__checkbox--checked"
                      id={todo.key}
                      onClick={handleSetCompleted}
                    ></div>
                  )}
                  <p className="todo__text">{todo.task}</p>
                  <img
                    src={closeIcon}
                    alt="Close button"
                    className="todo__cross"
                    onClick={handleDeleteTodo}
                    id={todo.key}
                  />
                </li>
              );
            })}
          </div>
          <div className="todo__bottom-bar">
            <p className="todo__items-left">
              {todos.length} item{todos.length > 1 ? "s" : ""} left
            </p>
            <div className="todo__action-buttons">
              <button className="todo__button">All</button>
              <button className="todo__button">Active</button>
              <button className="todo__button">Completed</button>
            </div>
            <p className="todo__clear-button">Clear Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
