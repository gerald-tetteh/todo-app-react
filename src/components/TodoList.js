const TodoList = ({
  todoList,
  handleDeleteTodo,
  handleSetCompleted,
  closeIcon,
  onDrag,
  onDrop,
  onDragOver,
}) => {
  return (
    <ul className="todo__list">
      {todoList.map((todo) => {
        return (
          <li
            className="todo__list-item"
            key={todo.key}
            draggable={true}
            onDragStart={onDrag}
            onDragOver={onDragOver}
            onDrop={onDrop}
            id={todo.key}
          >
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
            <p
              className={`todo__text ${todo.completed ? "completed-text" : ""}`}
            >
              {todo.task}
            </p>
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
    </ul>
  );
};

export default TodoList;
