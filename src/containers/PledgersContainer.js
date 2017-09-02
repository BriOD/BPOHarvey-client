import React, { Component } from 'react';
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
        fetch(`https://boiling-mesa-29772.herokuapp.com/api/pledgers`)
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

    render(){
        if(this.state.pledgers === []){
            return(
                <div>Loading...</div>
            )
        } else {
            return(
                <div className="pledgersContainer">
                    {this.renderPledgers()}
                </div> 
            );
        }
    };
}



export default PledgersContainer;