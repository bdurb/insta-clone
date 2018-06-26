import React, { Component } from 'react';
import PostContainer from '../src/components/PostContainer/PostContainer'
import SearchBar from '../src/components/SearchBar/SearchBar';
import './App.css';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }
  
  
  render() {
    return (
      <div>
      <SearchBar />
      <div className="main-container">
      {this.state.dummyData.map(post => (
        <PostContainer key={post.username} post={post} />
      ))}
      </div>
      </div>
    );
  }
}

export default App;
