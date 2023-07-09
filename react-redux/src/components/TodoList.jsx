import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { AddTodoActionCreator,deleteTodoActionCreator,completeTodoActionCreator } from "../states/todos/action";

function TodoList() {
  const todos = useSelector((states) => states.todos);
  const dispatch = useDispatch();

  function onAddTodo(text) {
    const id = `todo-${+new Date()}`;
    dispatch(AddTodoActionCreator({ id, text }));
  }

  function onToggleTodo(id,status) {
    dispatch(completeTodoActionCreator({id,status}))
  }

  function onDeleteTodo(id) {
    dispatch(deleteTodoActionCreator({id}))
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
