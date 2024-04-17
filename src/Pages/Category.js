// Category.js
import React from 'react';
import BlogList from '../Component/BlogList';

const Category = ({ blogs }) => {
  return <BlogList blogs={blogs} />;
};

export default Category;
