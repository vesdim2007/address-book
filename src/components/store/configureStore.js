import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import usersReducer from "../reducers/users";

export default () => {
  const store = createStore(usersReducer, compose(applyMiddleware(thunk)));
  return store;
};
