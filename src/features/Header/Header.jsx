import React from 'react';
import './Header.css';
import { FaReddit } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div>
        <FaReddit />
        <p>
          Reddit<span>Minimal</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
