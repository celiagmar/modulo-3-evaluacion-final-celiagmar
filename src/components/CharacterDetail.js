import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from './Emoji';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {

   if (props.selectedCharacter === undefined) {
      return(
         <div className="not-found">
            <p>There is nothing here. Go back home, please:</p>
         </div>
      )
  } else {
      
      return (
      <React.Fragment>
      <div className="button-container">
         <Link to="/">
            <button>Back</button>
         </Link>
      </div>
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
      </div>
      </React.Fragment>
      )
   }
};

CharacterDetail.propTypes = {
   image: PropTypes.string,
   name: PropTypes.string,
   species: PropTypes.string,
   status: PropTypes.string,
   origin: PropTypes.string,
   episode: PropTypes.array,
}

export default CharacterDetail;