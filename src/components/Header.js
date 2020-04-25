import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
   return(
      <header className="header">
         <Link to="/">
            <div className="logo-container">
               <img className="logo" src={logo} alt="Rick and Morty logo"/>
            </div>
         </Link>
      </header>
   )
}

export default Header;