import React, { useState } from 'react';
import IonIcon from '@reacticons/ionicons';
import styles from "./Card.module.css";
const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="dark:bg-purple-500 p-3">

      <div className="flex justify-between items-center">
      
      <a><img src="src/assets/logo.png" alt="Jao's Books" className="w-20"/></a>

        <button className="text-white md:hidden"  onClick={() => setIsOpen(!isOpen)}>
          <IonIcon name="menu" style={{ fontSize: 24, color: 'white' }}></IonIcon>
        </button>
       
        <div className="text-white hidden md:flex space-x-4">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

      </div>

        {isOpen && (
        <div className="text-white dark:bg-purple-500 flex flex-col md:hidden items-center justify-center space-y-2">
          <a href="#home" className="hover:text-gray-300" onClick={toggleMenu}>Home</a>
          <a href="#about" className="hover:text-gray-300" onClick={toggleMenu}>About</a>
          <a href="#contact" className="hover:text-gray-300" onClick={toggleMenu}>Contact</a>
        </div>
         )}

    </nav>
  );
};

export default Header;