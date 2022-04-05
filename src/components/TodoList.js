import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todos, onToggle } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}

export default TodoList;
