import React from 'react';
import { Link } from 'react-router-dom';

import linkedinLogo from '../images/linkedIn.png';
import githubLogo from '../images/github.png';

function Header() {
  return (
    <header className="bg-gray-800 text-gray-200">
      {/* 
        - On mobile, flex-col with space-y-4 for stacking
        - On md+: switch to a row, justify-between for pushing 
          first group (title+icons) to the left, nav to the right
      */}
      <div className="
        container mx-auto px-4 py-6 
        flex flex-col items-center 
        space-y-4
        md:flex-row md:justify-between 
        md:items-center md:space-y-0
      ">
        {/* 
          This container holds both the Title and the Icons, 
          ensuring they stay next to each other on md+ screens. 
        */}
        <div className="flex items-center space-x-4">
          {/* Title */}
          <h1 className="text-3xl font-bold">
            <Link to="/" className="text-bone hover:text-red-500">
              Ethan Miller
            </Link>
          </h1>

          {/* Icons */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/Emiller3425"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="GitHub" className="w-10 h-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/ethanmiller-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="LinkedIn" className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <Link to="/" className="text-bone hover:text-red-500">
            Home
          </Link>
          <a
    href="/files/Ethan_Miller.pdf"
    download
    className="text-bone hover:text-red-500"
  >
    Resume
  </a>
          <a
            href="mailto:emiller3425@gmail.com"
            className="text-bone hover:text-red-500"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
