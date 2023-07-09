import { legacy_createStore } from "redux";
import ReducerRoot from "./rootReducer";

const store = legacy_createStore(ReducerRoot);

export {store}