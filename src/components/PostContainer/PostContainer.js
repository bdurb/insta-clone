import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return (
    <div className="PostContainer">
    <img src={props.post.thumbnailUrl} alt="thumbnail" />
    {props.post.username}
    <img src={props.post.imageUrl} alt="main"/>
    {props.post.timestamp}
    {props.post.comments.map(comment => (
      <CommentSection key={Math.random()} comment={comment} />
    ))}
    </div>
  )
}
 
export default PostContainer;