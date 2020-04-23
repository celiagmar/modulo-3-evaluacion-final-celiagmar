import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {

   const {dataList,inputValue} = props;
   const error404 =  dataList.length === 0 ? <h3 className="alert">¡Loco! El personaje que buscas no éxiste en este universo. ¡Vuelve a probar!</h3> : ''

   return (
      <div className="pp">
         {error404}
         <ul className="character-list">
            {dataList
            .filter(charObj => inputValue === '' || charObj.name.toLowerCase().includes(inputValue))
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