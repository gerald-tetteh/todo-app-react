const InputField = ({ inputText, setInputText, handleCreateTodo }) => {
  return (
    <div className="input mt-md mb-sm">
      <div className="checkbox"></div>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        className="input__field"
        placeholder="Create a new todo..."
        onKeyUp={handleCreateTodo}
      />
    </div>
  );
};

export default InputField;
