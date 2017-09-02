import React, { Component } from 'react';
import '../App.css';

class PledgerCard extends Component {
    render() {
        return (
            <div className="col s12 m6">
                <h5>{this.props.firstName} {this.props.lastName}</h5>
                <div className="card horizontal">
                    <div className="card-image">
                        <img className="profilePic" src={this.props.imgUrl} alt="/"></img>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>Pledging {this.props.pledge}% of cashes.</p>
                        </div>
                    </div>
                </div>    
            </div>

        );
    }
}

export default PledgerCard;


