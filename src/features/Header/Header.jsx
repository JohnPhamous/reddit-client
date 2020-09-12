import React, { useState } from 'react';
import './Header.css';
import { FaReddit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';

const Header = () => {
  const [searchTermLocal, setSearchTermLocal] = useState('');
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
  };

  return (
    <header>
      <div className="logo">
        <FaReddit />
        <p>
          Reddit<span>Minimal</span>
        </p>
      </div>
      <form className="search" onSubmit={onSearchTermSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchTermLocal}
          onChange={onSearchTermChange}
        />
      </form>
    </header>
  );
};

export default Header;
