import { combineReducers } from "redux";
import { coursReducer } from "./coursReducer";
import { userReducer } from "./userReducer";
import {noteReducer } from "./noteReducer";
export const rootReducer = combineReducers({coursReducer, userReducer,noteReducer});
