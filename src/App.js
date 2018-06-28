import React, { Component } from 'react';
import PostsPage from '../src/components/PostContainer/PostsPage';
import Authenticate from '../src/components/Authentication/Authenticate';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
