import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, TextField, Button } from '@mui/material';
import './Comments.css';

const Comments = ({ comments }) => {
  //const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [comment, setComments] = useState([]);
  const handleAddComment = () => {
    if (!newComment || newComment.length < 10) {
        alert('Please add comment with more than 10 characters.');
        return;
    }
    const newCommentObj = {
        username: "Anonymous", 
        comment: newComment
      };
    setComments([...comments, newCommentObj]);
    setNewComment('');
  };

  return (
    <div className="comments-container">
      <Typography variant="h5" className="comments-heading">Comments</Typography>      
      <div className="add-comment">
        <TextField
          label="Add a comment"
          variant="outlined"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleAddComment}>Add Comment</Button>
        
      </div>
      <div>
      <List className="comments-list">
        {comment.map((comment, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText
              primary={<strong>{comment.username}</strong>}
              secondary={comment.comment}
            />
          </ListItem>
        ))}
      </List>
      </div>
    </div>
  );
};

export default Comments;
