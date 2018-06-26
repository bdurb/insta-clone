import React, { Component } from 'react';
import PostContainer from '../src/components/PostContainer/PostContainer'
import SearchBar from '../src/components/SearchBar/SearchBar';
import './App.css';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData})
  };

  searchPostHandler = e => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: posts});
  }
  
  
  render() {
    return (
      <div className="App">
      <SearchBar
        searchTerm={this.state.searchTerm}
        searchPosts={this.searchPostHandler}
      />
      <PostContainer
        posts={
          this.state.filteredPosts.length > 0
            ? this.state.filteredPosts
            : this.state.posts
        }
      />
      </div>
    );
  }
}

export default App;
