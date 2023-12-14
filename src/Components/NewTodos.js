import React, { useState } from "react";

const NewTodos = (props) => {
  const [todoList, setTodo] = useState("");
  const handleEvents = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onTodo(todoList);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">New Todo:</label>
      <input
        type="text"
        name="todo"
        id="todo"
        value={todoList}
        onChange={handleEvents}
      />
      <button>Add todo </button>
    </form>
  );
};

export default NewTodos;
