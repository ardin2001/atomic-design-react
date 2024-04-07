import { createAction, } from '@reduxjs/toolkit'

const addTodo = createAction("ADD_TODO")
const deleteTodo = createAction("DELETE_TODO")
const completeTodo = createAction("COMPLETE_TODO")

export {addTodo,deleteTodo,completeTodo}