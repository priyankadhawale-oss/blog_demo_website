import React, { useState } from 'react';
import Pagination from './Pagination';
import './BlogList.css';
import { NavLink } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = page => {
    setCurrentPage(page);
  };
  return (
    <div >
      <h2 style={{textAlign:'center', textShadow:'3px 3px 4px rgb(150, 115, 115)'}}>Featured Blogs</h2>
      <div className="blog-grid">
      {currentBlogs.map(blog => (
    <div className="blog" key={blog.id}>
     <NavLink to={{
              pathname: `/blogDetails/${blog.id}`,
              state: { blog } 
            }} className="read-more-link"> <h3>{blog.title}</h3></NavLink>
 
      <p>{blog.excerpt}</p>
      <img src={blog.image} alt={blog.title} style={{height:'200px',width:'300px',margin:'20px' }}/> 
      <p>Publication Date: {blog.publicationDate}</p>
      
         </div>
      ))}
    </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BlogList;
