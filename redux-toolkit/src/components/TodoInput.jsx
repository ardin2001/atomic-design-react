import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const onTextChangeHandler = ({ target }) => setText(target.value);

  return (
    <div>
      <input className="outline" type="text" value={text} onChange={onTextChangeHandler} />
      <button onClick={() => addTodo(text)}>Add Todo</button>
    </div>
  );
}

export default TodoInput;
