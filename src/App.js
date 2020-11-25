import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import EmployeeDetails from './components/EmployeeDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Overview/:name' component={EmployeeDetails} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
