import React from 'react';
import "./card.css"

const Card = ({monster}) => {
    
    const url = "https://robohash.org/7?set=set2"
        
    return (
    <div className="card-container">
     <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>   
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
    </div>
    )
}


export default Card