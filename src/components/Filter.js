import React from 'react';

const Filter = (props) => {

   const getInputValue = (event) => {
      const newValue = event.target.value;
      props.handleInputValue(newValue)
   }

   return(

      <div className="character-detail">
         <form>
            <label htmlFor="name">Write character's name:</label>
            <input id="name"
                  type="text" 
                  name="name" 
                  value={props.inputValue}
                  onChange={getInputValue}
            />
         </form>
      </div>
   )
}


export default Filter;