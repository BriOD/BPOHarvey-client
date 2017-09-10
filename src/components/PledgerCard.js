import React, { Component } from 'react';
import '../App.css';

class PledgerCard extends Component {
  render() {
    return (
        <div className="col s12 m4 l8">
            <h5>{this.props.firstName} {this.props.lastName}</h5>
            <div className="card horizontal">
                <div className="card-image">
                    <img className="profilePic" src={this.props.imgUrl || "http://kwtv.images.worldnow.com/images/14765205_G.jpg"} alt="" ></img>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h6 className="percentText">Pledging:  <span>{this.props.pledge}%</span> </h6>
                    </div>
                </div>
            </div>
        </div>
    );
  }
};

export default PledgerCard;
