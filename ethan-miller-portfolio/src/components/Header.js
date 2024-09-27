import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header bg-gray-800 text-gray-200 text-bone">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          <Link to="/" className="text-bone hover:text-red-500">
            Ethan Miller's Portfolio
          </Link>
        </h1>
        <nav className="nav">
          <Link to="/" className="text-gray-200 hover:text-red-500 mx-4">
            Home
          </Link>
          <a href="mailto:emiller3425@gmail.com" className="text-bone hover:text-red-500 mx-4">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
