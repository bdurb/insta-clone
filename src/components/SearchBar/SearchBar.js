import React from "react";
import './searchbar.css';
import insta from '../../assets/insta.png';
// import instacam from '../../assets/instacam.png';

const SearchBar = () => {
  return (
    <div className="search-bar">
        <img className="images" src={insta} alt="insta"/>
      <div>
      <input type="text" placeholder="search" onKeyDown={props.searchPosts} />
      </div>
      <div className="social-icons">
        <div className="social">
          <i className="fa fa-compass" />
        </div>
        <div className="social">
          <i className="fa fa-heart" />
        </div>
        <div className="social">
          <i className="fa fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
