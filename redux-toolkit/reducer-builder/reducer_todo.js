import { createReducer } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, completeTodo } from "./action-rtk.js";

const ReducerTodo = createReducer([],builder =>{
  builder
  .addCase(addTodo,(state,action) =>{
    state.push(action.payload)
  })
  .addCase(deleteTodo,(state,action) =>{
    return state.filter(e => e.id != action.payload.id)
  })
  .addCase(completeTodo,(state,action) =>{
    return state.map(data => {
      if(data.id == action.payload.id){
        return {...data,complete:!data.complete}
      }else{
        return data
      }
    })
  })
});

export default ReducerTodo;
