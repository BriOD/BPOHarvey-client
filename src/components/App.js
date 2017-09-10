import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

import PledgersContainer from './PledgersContainer'
import RegisterForm from './RegisterForm'
import Header from './Header'
import NavBar from './NavBar'


import '../App.css';

class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Header />
          <NavBar />
          <Switch>
            <Route exact path="/" component={PledgersContainer} />
            <Route exact path="/register" component={RegisterForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
