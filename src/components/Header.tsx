/* Add a slogan to header */
import React from 'react';
import '../styles/Header.css';
const Header = () => {
  return (
    <header>
      <h1 className="main-title slogan-alignment">GATEKEEP, <span style={{color: "black"}}>HARDCORE!</span></h1>
    </header>
  );
};

export default Header;
