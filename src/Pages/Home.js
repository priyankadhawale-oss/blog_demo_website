// Home.js
import React from 'react';
import BlogList from '../Component/BlogList';

const Home = ({ blogs }) => {

  return<BlogList blogs={blogs}/>;
};

export default Home;
