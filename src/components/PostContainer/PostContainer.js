import React from 'react';

const PostContainer = props => {
  return (
    <div>
    {props.post.username}
    <img src={props.post.imageUrl} alt="main image"/>
    </div>
  )
}
 
export default PostContainer;