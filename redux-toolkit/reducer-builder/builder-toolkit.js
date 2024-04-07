import { configureStore } from '@reduxjs/toolkit'
import ReducerGoal from './reducer_goal.js'
import ReducerTodo from './reducer_todo.js'
import { todoDeletionCheck, thunk } from '../middleware/middleware.js'
import { addTodo, deleteTodo, completeTodo } from "./action-rtk.js";
import { AddGoalActionCreator } from './action-creator.js';
const store = configureStore({
    reducer:{
        todos : ReducerTodo,
        goals : ReducerGoal,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoDeletionCheck,thunk),
})
console.log("initial state :", store.getState())

store.subscribe(() => console.log("current state :", store.getState()));
store.dispatch(AddGoalActionCreator({id:1,text:'thamuz'}))
store.dispatch(addTodo({id:1,text:'gord',complete:false}))
store.dispatch(addTodo({id:2,text:'layla',complete:false}))
store.dispatch(addTodo({id:3,text:'badang',complete:false}))
store.dispatch(completeTodo({id:2}))
store.dispatch(completeTodo({id:3}))
store.dispatch(deleteTodo({id:2}))
store.dispatch(deleteTodo({id:1}))