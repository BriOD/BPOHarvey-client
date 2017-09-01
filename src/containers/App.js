import React, { Component } from 'react';
import PledgersContainer from './PledgersContainer'
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pledgers: []
    }
  }

  componentDidMount() {
    fetch(`https://boiling-mesa-29772.herokuapp.com/api/pledgers`)
      .then(res => res.json())
      .then(pledgers => this.setState({ pledgers }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <PledgersContainer pledgers={this.state.pledgers}/>
      </div>
    );
  }
}

export default App;
