import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {

   const getInputValue = (event) => {
      const newValue = event.currentTarget.value;
      props.handleInputValue(newValue)
   }

   const preventDefault = (event) => event.preventDefault();

   return (

      <div className="filter-container">
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

Filter.propTypes = {
   inputValue: PropTypes.string
}

export default Filter;