import React from 'react';
import Post from './Post';
import './Posts.css';

const PostContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map(post => <Post key={post.imageUrl} post={post} />)}
    </div>
  )
}
 
export default PostContainer;