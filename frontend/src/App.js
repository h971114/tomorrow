import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrolltoTop from "./components/common/ScrollToTop";

import Header from "./components/FH/Header";

import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <ScrolltoTop />
      <div>
        <Header />
        <Switch>
          {/* <Route path="/" exact={true} component={Home} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
