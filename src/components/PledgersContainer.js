import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PledgerCard from './PledgerCard';
import _ from 'lodash';
import '../App.css';


class PledgersContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pledgers: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/pledgers`)
    .then(res => res.json())
    .then(pledgers => this.setState({ pledgers }))
  }

  renderPledgers = () => {
    return _.map(this.state.pledgers, p =>{
      return (
        <PledgerCard
        firstName={p.first_name}
        lastName={p.last_name}
        imgUrl={p.img_url}
        pledge={p.pledge}
        key={p.id}
        />
      )
    })
  }

  pldegersLength = () => {
    let length = this.state.pledgers.length
    return length
  }

  render(){
    if(this.state.pledgers === []){
      return(
        <div>Loading...</div>
      )
    } else {
      return(
        <div className="pledgersContainer">
          <p className="pledgeText">During the Borgata Open, these players are pledging a % of their cashes to help those
          devastated by Hurricane Harvey</p>
          <div className="counterDiv">
            <h5 className="countText">{this.pldegersLength()} have already pledged to donate. Click
            <Link to="/register"> here </Link>
            to join them.</h5>
          </div>
          {this.renderPledgers()}
        </div>
      );
    }
  };
}



export default PledgersContainer;
