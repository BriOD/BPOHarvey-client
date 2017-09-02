import React, { Component } from 'react';
import PledgersContainer from './PledgersContainer'
import RegisterForm from './RegisterForm'

import '../App.css';

class App extends Component {


  render() {
    console.log(this.state)
    return (
      <div>
        <PledgersContainer />
        <RegisterForm />
      </div>
    );
  }
}

export default App;
