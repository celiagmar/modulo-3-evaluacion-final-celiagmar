import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from './Emoji';

const CharacterDetail = (props) => {

   return (
      <div className="detail-container">
         <img src={props.selectedCharacter.image} alt={props.selectedCharacter.name}></img>
         <h2>{props.selectedCharacter.name}</h2>
         <p>Species:  
            {props.selectedCharacter.species === "Alien" ? <Emoji symbol=" 👽 " label="alien"/> : <Emoji symbol=" 👫 " label="human"/>}
         </p>
         <p>Origin: {props.selectedCharacter.origin.name}</p>
         <p>Episodes: {props.selectedCharacter.episode.length}</p>
         <p>Status: 
            {props.selectedCharacter.status === "Alive" ? <Emoji symbol=" 💓 " label="alive"/> : <Emoji symbol=" ⚰️ " label="dead"/>}
         </p>
            <div>
               <Link to="/">
                  <button>Back</button>
               </Link>
            </div>
      </div>
   )
}

export default CharacterDetail;