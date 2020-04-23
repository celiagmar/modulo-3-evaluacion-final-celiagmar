import React from 'react';

const CharacterCard = (props) => {
   return (
      <div className="character">
         <img src={props.image} alt={props.name}/>
         <div className="character-name">
            <h3>{props.name}</h3>
         </div>
         <div className="character-species">
            {props.species}
         </div>
      </div>
   )
}

export default CharacterCard;