import React from 'react';
import { useParams } from 'react-router-dom';
import Comments from './Comments';
import './BlogDetails.css';

const BlogDetails = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <div className="blog-details">
  <h2>{blog.title}</h2>
  <p><i>{blog.excerpt}</i></p>
  <div className="blog-image-wrapper">
    <img src={blog.image} alt={blog.title} />
    <div className="metadata">
      <p>Author: {blog.author}</p>   
      <p>Publication Date: {blog.publicationDate}</p> 
    </div>
  </div>
  <p>{blog.description}</p>
  <Comments comments={blog.comments} />
</div>

  );
};

export default BlogDetails;
