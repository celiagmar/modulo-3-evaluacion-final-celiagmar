import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import Emoji from './Emoji';

const CharacterList = (props) => {

   const {dataList,inputValue} = props;
   const error =  !dataList.length ? <h2 className="alert">Opps!! There is no character named <span>{inputValue}</span> in this universe!<Emoji symbol=" 🙅‍♂️ " label="abort-mission"/></h2> : "";

   return (
      <div className="list-container">
         {error}
         <ul className="character-list">

         {dataList
            .sort((a,b) =>{
               if (a.name< b.name) {return -1}
               if (a.name> b.name) {return 1}
               return 0
            })
            .map(charObj => <li className="character-elem" key={charObj.id}>
               <Link className="link" to={`/character/${charObj.id}`}>
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