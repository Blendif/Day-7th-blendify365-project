import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/affiliate">Affiliate Program</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
    
