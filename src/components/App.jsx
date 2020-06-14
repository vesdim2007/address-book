import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DynamicImport from "../routes/DynamicImport";
import Home from "./Home";
import Global from "../styles/Global";
import configureStore from "../store/configureStore";

/**
 * The configured store is passed as prop to the React- Redux Provider
 * @constant : store has access to the initial state of usersReducer and the dispatch actions method
 */
const store = configureStore();

// initializing the App wwrapped with the Redux Provider, applied Global styles and Router
const App = () => {
  return (
    <Provider store={store}>
      <Global />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={DynamicImport} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
