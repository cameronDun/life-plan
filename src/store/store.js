import thunk from "redux-thunk";
import taskReducer from "./reducer";
import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
     plans: taskReducer
})

const store = configureStore({reducer:rootReducer}, applyMiddleware(thunk))

export default store