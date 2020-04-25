import React from 'react';

const Filter = (props) => {

   const getInputValue = (event) => {
      const newValue = event.currentTarget.value;
      props.handleInputValue(newValue)
   }

   const preventDefault = (event) => event.preventDefault();

   return (

      <div className="character-detail">
         <form onSubmit={preventDefault}>
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