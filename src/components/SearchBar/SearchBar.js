import React from "react";
import './searchbar.css';
import insta from '../../assets/insta.png';
import instacam from '../../assets/instacam.png';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img src={instacam} alt="insta"/>
      <img src={insta} alt="insta"/>
      <input
        placeholder="search"
      />
    </div>
  );
};

export default SearchBar;
