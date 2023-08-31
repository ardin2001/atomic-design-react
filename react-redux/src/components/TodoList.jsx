import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { asyncReceiveTodos,asyncAddTodo,asyncToggleTodo,asyncDeleteTodo } from "../states/todos/action";

function TodoList() {
  const todos = useSelector((states) => states.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveTodos());
  }, [dispatch]);

  function onAddTodo(text) {
    dispatch(asyncAddTodo(text));
  }

  function onToggleTodo(id) {
    dispatch(asyncToggleTodo(id))
  }

  function onDeleteTodo(id) {
    dispatch(asyncDeleteTodo(id))
  }

  return (
    <div>
      <h3>My Todos</h3>
      <TodoInput addTodo={onAddTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              {...todo}
              toggleTodo={onToggleTodo}
              deleteTodo={onDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
