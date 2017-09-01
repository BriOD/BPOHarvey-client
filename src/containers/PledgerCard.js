import React from 'react';

const PledgerCard = ({first_name, last_name}) => {
    return(
        <div>
            <h1>{first_name}</h1>
            <h1>{last_name}</h1>
        </div>
    );
}

export default PledgerCard;