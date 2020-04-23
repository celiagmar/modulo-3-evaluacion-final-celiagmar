import React from 'react';

const Filter = (props) => {

   const getInputValue = (event) => {
      event.preventDefault();
      const newValue = event.currentTarget.value;
      props.handleInputValue(newValue)
      
   }

   return(

      <div className="character-detail">
         <form>
            <label htmlFor="name">Browse your character:</label>
            <input id="name"
                  type="text" 
                  name="name"
                  placeholder="Ej.Morty"
                  value={props.inputValue}
                  onChange={getInputValue}
            />
         </form>
      </div>
   )
}


export default Filter;