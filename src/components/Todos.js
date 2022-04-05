import React, { useState } from "react";
import TodoList from "./TodoList";

function Todos(props) {
  const { todos, onCreate, onToggle } = props;
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange} placeholder="입력" />
        <button type="submit">add</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default Todos;
