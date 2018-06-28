import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData })
  }

  searchPostHandler = e => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
      return null;
    });
    this.setState({ filteredPosts: posts});
  };

  render() {
    return (
      <div className="App">
      <SearchBar
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

export default PostsPage;