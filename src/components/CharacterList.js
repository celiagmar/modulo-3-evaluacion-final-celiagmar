import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {

   const {dataList} = props;

   return (
      <ul className="character-list">
         {dataList
         .map(charObj =>
            <CharacterCard
               key={charObj.id}
               image={charObj.image}
               name={charObj.name}
               specie={charObj.species}
            />
         )}
      </ul>
   )
}


export default CharacterList;