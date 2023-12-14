import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  console.log(props.todo);
  return (
    <div>
      {props.todo.map((todos, index) => {
        return <Todo key={index} todos={todos} />;
      })}
    </div>
  );
};

export default Todos;
