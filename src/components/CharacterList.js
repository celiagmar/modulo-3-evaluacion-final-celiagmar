import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {

   const {dataList,inputValue} = props;
   const error404 =  !dataList.length ? <h2 className="alert">There is any character called {inputValue} in this universe </h2> : "";

   return (
      <div className="pp">
         {error404}
         <ul className="character-list">
            {dataList
            .map(charObj => <li className="character-elem" key={charObj.id}>
               <Link to={`/character/${charObj.id}`}>
                  <CharacterCard
                     key={charObj.id}
                     image={charObj.image}
                     name={charObj.name}
                     species={charObj.species}
                  />
               </Link>
               </li>
            )}
         </ul>
      </div>
   )
}


export default CharacterList;