import React from "react";

function TodoItem(props) {
  const { todo, onToggle } = props;
  return (
    <li
      style={{
        textDecoration: todo.done ? "line-through" : "none",
      }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
}

export default TodoItem;
