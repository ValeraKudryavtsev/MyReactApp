import { applyMiddleware, createStore, compose } from "redux";
import { chatsReducer } from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(chatsReducer, composeEnhancers(applyMiddleware()));