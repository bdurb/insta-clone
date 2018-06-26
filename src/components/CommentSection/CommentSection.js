import React from 'react';

const CommentSection = props => {
  return (
    <div>
      {props.comment.username}
      {props.comment.text}
    </div>
  )
}
 
export default CommentSection;