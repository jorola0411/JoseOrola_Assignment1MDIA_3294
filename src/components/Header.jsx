import React, { useState } from 'react';
import IonIcon from '@reacticons/ionicons';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="dark:bg-purple-500 p-3">
      <div className="container mx-auto flex justify-between items-center">
      
      <a><img src="src/assets/logo.png" alt="Jao's Books" className="w-20"/></a>

       
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-blue-200">Home</a>
          <a href="#about" className="text-white hover:text-blue-200">About</a>
          <a href="#product" className="text-white hover:text-blue-200">Products</a>
        </nav>

        
        <button className="text-white md:hidden"  onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <IonIcon name="menu" style={{ fontSize: 24, color: 'white' }}></IonIcon>
        </button>

        
      </div>
    </header>
  );
};

export default Header;