import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Pages/Home';
import Category from './Pages/Category';
import BlogDetails from './Component/BlogDetails';
import Login from './Pages/Login';
import blogData from './data/blog.json';

const categories = ['Technology', 'Travel', 'Food', 'Lifestyle'];

function App() {
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);

  return (

      <div className="App">
        <Header categories={categories} blogs={blogData} setFilteredBlogs={setFilteredBlogs} />
        <Routes>
          <Route path="/" element={<Home blogs={filteredBlogs} />} />
          <Route path="/login" element={<Login />} />
          {categories.map(category => (
            <Route key={category} path={`/category/${category}`} element={<Category category={category} blogs={filteredBlogs.filter(blog => blog.category === category)} />} />
          ))}
          <Route path="/blogDetails/:id" element={<BlogDetails blogs={filteredBlogs} />} />
        </Routes>
      </div>
  );
}

export default App;
