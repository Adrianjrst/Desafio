import React from "react";
import Todo from "./Todo";

const Todolist = ({ todos, checkTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          checkTodo={checkTodo}
          id={todo.id}
          completed={todo.completed}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default Todolist;
