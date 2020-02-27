import { combineReducers, createStore, applyMiddleware } from "redux";
import userR from "../_reducers/userR";
import logger from "redux-logger";

const reducers = combineReducers({
  userR
});

const store = createStore(reducers, applyMiddleware(logger));

export default store;
