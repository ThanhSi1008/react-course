import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="../assets/chefify.png" alt="Chefify Logo" className="logo-icon" />
        <span className="logo-text">Chefify</span>
      </div>
      
      <div className="search-box">
        <input type="text" placeholder="What would you like to cook?" />
      </div>

      <nav className="nav">
        <a href="#">What to cook</a>
        <a href="#">Recipes</a>
        <a href="#">Ingredients</a>
        <a href="#">Occasions</a>
        <a href="#">About Us</a>
      </nav>

      <div className="user-actions">
        <button className="recipe-box">Your Recipe Box</button>
        <img src="/user-avatar.jpg" alt="User Avatar" className="avatar" />
      </div>
    </header>
  );
};

export default Header;
