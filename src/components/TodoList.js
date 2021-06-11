const TodoList = ({
  todoList,
  handleDeleteTodo,
  handleSetCompleted,
  closeIcon,
}) => {
  return (
    <div className="todo__list">
      {todoList.map((todo) => {
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
  );
};

export default TodoList;
