import React, { Component } from 'react';
import PostContainer from '../src/components/PostContainer/PostContainer'
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
      {this.state.dummyData.map(post => (
        <PostContainer key={post.username} post={post} />
      ))}
      </div>
    );
  }
}

export default App;
