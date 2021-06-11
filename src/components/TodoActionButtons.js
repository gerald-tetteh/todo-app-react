const TodoActionButtons = ({ state, dispatch }) => {
  return (
    <div className="todo__action-buttons">
      <button
        className={`todo__button ${state.all && "active"}`}
        onClick={() => dispatch({ type: "all" })}
      >
        All
      </button>
      <button
        className={`todo__button ${state.active && "active"}`}
        onClick={() => dispatch({ type: "active" })}
      >
        Active
      </button>
      <button
        className={`todo__button ${state.completed && "active"}`}
        onClick={() => dispatch({ type: "completed" })}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoActionButtons;
