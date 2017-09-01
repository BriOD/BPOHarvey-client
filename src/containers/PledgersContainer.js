import React from 'react';
import PledgerCard from './PledgerCard';

const PledgersContainer = (props) => (
    <div>
        <h1>Pledgers</h1>
        {props.pledgers.map(p =>
            <h2>{p.first_name} {p.last_name}</h2> 
        )}

    </div>
)



export default PledgersContainer;