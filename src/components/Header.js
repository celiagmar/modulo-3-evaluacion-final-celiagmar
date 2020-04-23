import React from 'react';
import logo from '../images/logo.png';


const Header = () => {
   return(
      <header className="header">
         {/* <Link to="/"> */}
            <img src={logo} alt="Rick and Morty logo"/>
         {/* </Link> */}
      </header>
   )
}

export default Header;