import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto px-4 text-center ">
        <p>&copy; {new Date().getFullYear()} Ethan Miller. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
