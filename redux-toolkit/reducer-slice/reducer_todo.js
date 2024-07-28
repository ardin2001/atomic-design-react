import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name:'todos',
  initialState:[],
  reducers:{
    addTodo(state,action){
      console.log("-------------------------------")
      console.log("action :",action)
      console.log("action.payload :",action.payload)
      console.log("-------------------------------")
      state.push(action.payload)
    },
    deleteTodo(state,action){
      return state.filter(data => data.id != action.payload.id)
    },
    completeTodo(state,action){
      return state.filter(data => data.id != action.payload.id)
    },
  }
})

export default todoSlice;