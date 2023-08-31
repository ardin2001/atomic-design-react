import { applyMiddleware, legacy_createStore } from "redux";
import ReducerRoot from "./rootReducer";
import { thunk,todoDeletionCheck } from "./middleware/middleware";

const store = legacy_createStore(ReducerRoot,applyMiddleware(thunk,todoDeletionCheck));

export {store}