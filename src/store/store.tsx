import { createStore, combineReducers } from "redux";
import {rootReducer} from "./reducers/root";
import { composeWithDevTools } from "redux-devtools-extension";

export const reducer = combineReducers({
  rootReducer: rootReducer,
});

export type RootState = ReturnType<typeof reducer>;
export const store = createStore(reducer, composeWithDevTools());
