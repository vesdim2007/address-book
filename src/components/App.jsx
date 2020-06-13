import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DynamicImport from "./routes/DynamicImport";
import Home from "./Home";
import Global from "./styles/Global";
import configureStore from "./store/configureStore";

const store = configureStore();

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
