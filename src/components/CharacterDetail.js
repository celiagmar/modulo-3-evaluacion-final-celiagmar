import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {

   return (
      <div className="detail-container">
         <img src={props.selectedCharacter.image} alt={props.selectedCharacter.name}></img>
         <h2>{props.selectedCharacter.name}</h2>
         <p>Species: {props.selectedCharacter.species}</p>
         <p>Origin: {props.selectedCharacter.origin.name}</p>
         <p>Episodes: {props.selectedCharacter.episode.length}</p>
         <p>Status: {props.selectedCharacter.status}</p>
            <div>
               <Link to="/">
                  <button>Back</button>
               </Link>
            </div>
      </div>
   )
}

export default CharacterDetail;