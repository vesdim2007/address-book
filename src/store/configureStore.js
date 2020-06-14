import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import usersReducer from "../reducers/users";

/**
 * Configuration of the app store to use the usersReducer and applymiddleware for async actions
 * @function :  configureStore
 * @return {Function} the function returns access to the store's state and actions dispatch method
 */

export default () => {
  const store = createStore(usersReducer, compose(applyMiddleware(thunk)));
  return store;
};
