import { configureStore } from '@reduxjs/toolkit'
import ReducerGoal from './reducer_goal.js'
import todoSlice from './reducer_todo.js'
import { todoDeletionCheck, thunk } from './middleware.js'
import {deleteTodoActionCreator,AddGoalActionCreator,completeTodoActionCreator,AddTodoActionCreator} from './action-creator.js'
const store = configureStore({
    reducer:{
        todos : todoSlice.reducer,
        goals : ReducerGoal,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoDeletionCheck, thunk),
})
console.log("initial state :", store.getState())

store.subscribe(() => console.log("current state :", store.getState()));
store.dispatch(AddGoalActionCreator({id:1,text:'thamuz'}))
store.dispatch(todoSlice.actions.addTodo({id:1,text:'gord',complete:false}))
store.dispatch(todoSlice.actions.addTodo({id:2,text:'layla',complete:false}))
store.dispatch(todoSlice.actions.addTodo({id:3,text:'badang',complete:true}))
// store.dispatch(completeTodoActionCreator({id:2,status:true}))
store.dispatch(todoSlice.actions.deleteTodo({id:2}))
store.dispatch(todoSlice.actions.deleteTodo({id:3}))