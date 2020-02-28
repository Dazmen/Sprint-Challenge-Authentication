import React from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import './App.css';

import Register from './components/reg';
import Login from './components/login';
import Jokes from './components/jokes';

function App() {


  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute path='/jokes' component={Jokes} />
      </Switch>
    </div>
  );
}

export default App;
