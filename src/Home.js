import { useEffect, useReducer, useState } from "react";
import { v4 as uuid4 } from "uuid";

import InputField from "./components/InputField";
import moonIcon from "./images/icon-moon.svg";
import sunIcon from "./images/icon-sun.svg";
import closeIcon from "./images/icon-cross.svg";
import TodoList from "./components/TodoList";
import TodoActionButtons from "./components/TodoActionButtons";

const Home = () => {
  const htmlTag = document.querySelector("html");
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [themeIcon, setThemeIcon] = useState(moonIcon);

  let dragging;
  let draggingOver;

  useEffect(() => {
    if (window.localStorage.getItem("theme") === "light-theme") {
      htmlTag.className = "light-theme";
      setThemeIcon(moonIcon);
    } else {
      htmlTag.className = "dark-theme";
      setThemeIcon(sunIcon);
    }
  }, []);

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
        { task: e.target.value.trim(), completed: false, key: uuid4() },
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
  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };
  const handleTodoList = (options) => {
    if (options.all) {
      return [...todos];
    } else if (options.active) {
      return todos.filter((todo) => todo.completed !== true);
    } else {
      return todos.filter((todo) => todo.completed);
    }
  };
  const handleDragging = (e) => (dragging = e.target.id);
  const handleDraggingOver = (e) => {
    e.preventDefault();
    if (e.target.className === "todo__text") {
      draggingOver = e.target.parentElement.id;
    } else {
      draggingOver = e.target.id;
    }
  };
  const handleDrop = (e) => {
    const draggedTodo = todos.filter((todo) => todo.key === dragging)[0];
    const draggedOverTodo = todos.filter(
      (todo) => todo.key === draggingOver
    )[0];
    const draggedTodoIndex = todos.findIndex((todo) => todo.key === dragging);
    const draggedOverTodoIndex = todos.findIndex(
      (todo) => todo.key === draggingOver
    );
    const todoList = [...todos];
    todoList.splice(draggedOverTodoIndex, 1, draggedTodo);
    todoList.splice(draggedTodoIndex, 1, draggedOverTodo);
    setTodos(todoList);
  };
  const reducer = (_, action) => {
    switch (action.type) {
      case "all":
        return { all: true, active: false, completed: false };
      case "active":
        return { all: false, active: true, completed: false };
      case "completed":
        return { all: false, active: false, completed: true };
      default:
        return { all: true, active: false, completed: false };
    }
  };
  const init = { all: true, active: false, completed: false };

  const [state, dispatch] = useReducer(reducer, init);
  const todoList = handleTodoList(state).reverse();

  return (
    <div className="home">
      <div className="home__box">
        <div className="home__title-bar">
          <h1 className="heading-primary">todo</h1>
          <img
            src={themeIcon}
            alt="Theme switch icon"
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
          <TodoList
            closeIcon={closeIcon}
            handleDeleteTodo={handleDeleteTodo}
            handleSetCompleted={handleSetCompleted}
            todoList={todoList}
            onDrag={handleDragging}
            onDragOver={handleDraggingOver}
            onDrop={handleDrop}
          />
          <div className="todo__bottom-bar">
            <p className="todo__items-left">
              {todoList.length} item{todoList.length > 1 ? "s" : ""} left
            </p>
            <TodoActionButtons state={state} dispatch={dispatch} />
            <p className="todo__clear-button" onClick={handleClearCompleted}>
              Clear Completed
            </p>
          </div>
        </div>
        <div className="todo__bottom-bar todo__bottom-bar--single mt-sm">
          <TodoActionButtons state={state} dispatch={dispatch} />
        </div>
        <p className="small-text text-align-center mt-md">
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  );
};

export default Home;
