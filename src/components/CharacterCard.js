import React from 'react';
import Emoji from './Emoji';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
   return (
      <div className="character">
         <div className="img-container">
            <img src={props.image} alt={props.name}/>
         </div>
         <h3>{props.name}</h3>
         <p>{props.species=== "Alien" ? <Emoji symbol=" 👽 " label="alien"/> : <Emoji symbol=" 👫 " label="human"/>}</p>
      </div>
   )
};

CharacterCard.propTypes = {
   name: PropTypes.string,
   image: PropTypes.string,
   species: PropTypes.string,
}

export default CharacterCard;