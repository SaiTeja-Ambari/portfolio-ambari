import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">My Portfolio</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/experience" className="text-white hover:text-gray-300">Experience</Link></li>
          <li><Link to="/projects" className="text-white hover:text-gray-300">Projects</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
          <li><Link to="/skills" className="text-white hover:text-gray-300">Skills</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;