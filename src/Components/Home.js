import React, { useState } from "react";
import NewTodos from "./NewTodos";
import Todos from "./Todos";
const dummyTodos = ["todo1", "todo2", "todo3"];
const Home = () => {
  const [todos, setTodo] = useState(dummyTodos);
  const handleNewtodo = (newTodo) => {
    setTodo([...todos, newTodo]);
  };

  return (
    <div>
      <NewTodos onTodo={handleNewtodo} />
      <Todos todo={todos} />
    </div>
  );
};

export default Home;
