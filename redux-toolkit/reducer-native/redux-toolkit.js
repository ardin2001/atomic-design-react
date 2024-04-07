import { configureStore } from '@reduxjs/toolkit'
import ReducerGoal from './reducer_goal.js'
import ReducerTodo from './reducer_todo.js'
import { todoDeletionCheck, thunk } from '../middleware/middleware.js'
import {deleteTodoActionCreator,AddGoalActionCreator,completeTodoActionCreator,AddTodoActionCreator} from './action-creator.js'
const store = configureStore({
    reducer:{
        todos : ReducerTodo,
        goals : ReducerGoal,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoDeletionCheck, thunk),
})
console.log("initial state :", store.getState())

store.subscribe(() => console.log("current state :", store.getState()));
store.dispatch(AddGoalActionCreator({id:1,text:'thamuz'}))
store.dispatch(AddTodoActionCreator({id:1,text:'gord'}))
store.dispatch(AddTodoActionCreator({id:2,text:'layla'}))
store.dispatch(AddTodoActionCreator({id:3,text:'badang'}))
store.dispatch(completeTodoActionCreator({id:2,status:true}))
store.dispatch(deleteTodoActionCreator({id:2}))