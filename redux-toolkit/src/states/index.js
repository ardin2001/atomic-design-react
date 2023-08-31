import { applyMiddleware, legacy_createStore } from "redux";
import ReducerRoot from "./rootReducer";
import ReducerTodo from "./todos/reducer";
import ReducerGoal from "./goals/reducer";
import { thunk,todoDeletionCheck } from "./middleware/middleware";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore(
    {
        reducer:{
            todos : ReducerTodo,
            goals : ReducerGoal
        },
        middleware : [thunk,todoDeletionCheck]
    }
);

export {store}