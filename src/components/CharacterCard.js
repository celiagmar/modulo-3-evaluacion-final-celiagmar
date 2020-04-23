import React from 'react';

const CharacterCard = (props) => {
   return (
      <li className="character" key={props.id}>
         <img src={props.image} alt={props.name}/>
         <div className="character-name">
            <h3>{props.name}</h3>
         </div>
         <div className="character-specie">
            {props.specie}
         </div>
      </li>
   )
}



export default CharacterCard;