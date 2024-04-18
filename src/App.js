import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Pages/Home';
import Category from './Pages/Category';
import BlogDetails from './Component/BlogDetails';
import Login from './Pages/Login';
import blogData from './data/blog.json';
import { createTheme, ThemeProvider } from '@mui/material';
const categories = ['Technology', 'Travel', 'Food', 'Lifestyle'];
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#4caf50', 
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', 
    fontSize: 14, 
  },
  shape: {
    borderRadius: 8, 
  },
  spacing: 4, 

});

function App() {
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);

return (
<ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
