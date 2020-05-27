import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Product from "./components/pages/Product";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/products/:id">
            <Product />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
