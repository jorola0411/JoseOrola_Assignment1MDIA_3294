// Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
      
        <h1 className="text-white text-2xl font-bold">Jao's Books</h1>

       
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-blue-200">Home</a>
          <a href="#about" className="text-white hover:text-blue-200">About</a>
          <a href="#services" className="text-white hover:text-blue-200">Services</a>
          <a href="#contact" className="text-white hover:text-blue-200">Contact</a>
        </nav>

        
        <button className="text-white md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;