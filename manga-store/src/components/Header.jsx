import React from "react";

const Header = () => {
  return (
    <header className="dark:bg-purple-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
      
      <a><img src="src/assets/logo.png" alt="Jao's Books" className="w-20"/></a>

       
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-blue-200">Home</a>
          <a href="#about" className="text-white hover:text-blue-200">About</a>
          <a href="#product" className="text-white hover:text-blue-200">Products</a>
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