import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../data/logo.jpg';
import './Header.css';

const Header = ({ categories, blogs, setFilteredBlogs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Using useNavigate hook

  const handleLogoClick = () => {
    setSearchTerm(''); 
    setFilteredBlogs(blogs); 
    navigate('/'); 
  };

  const handleCategoryClick = (category) => {
    setSearchTerm(''); // Reset search text
    const filtered = blogs.filter(blog => blog.category === category);
    setFilteredBlogs(filtered);
    navigate(`/category/${category}`); // Navigating to the selected category
  };

  const handleSearch = () => {
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <NavLink to={`/category/${category}`} className={`category-link ${category.toLowerCase()}`} onClick={() => handleCategoryClick(category)}>
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
};

export default Header;
