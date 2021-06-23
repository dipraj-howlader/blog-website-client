import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FirstPage from './Screens/FirstPage/FirstPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <FirstPage></FirstPage>
        </Route>
        <Route path="/"> 
          <FirstPage></FirstPage>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;