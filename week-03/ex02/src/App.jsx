import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Cheffiy</h1>
        <input type="text" className="search-bar" placeholder="Search recipes..." />
        <nav className="nav-links">
          <a href="#">What to cook</a>
          <a href="#">Recipes</a>
          <a href="#">Ingredients</a>
          <a href="#">Occasions</a>
          <a href="#">About Us</a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Filters */}
        <div className="filters">
          <h2>Filters</h2>
          <h3>Type</h3>
          <label><input type="checkbox" /> Grilled</label>
          <label><input type="checkbox" /> Roasted</label>
          <label><input type="checkbox" /> Baked</label>

          <h3>Time</h3>
          <input type="range" min="10" max="60" />

          <h3>Rating</h3>
          <span>⭐⭐⭐⭐☆</span>

          <button className="apply-btn">Apply</button>
        </div>

        {/* No Results */}
        <div className="no-results">
          <h2>Sorry, no results found</h2>
          <p>We have all your Independence Day sweets covered.</p>
          <div className="suggestions">
            <span>Sweet Cake</span>
            <span>Black Cake</span>
            <span>Pozole Verde</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>About Us</h3>
            <p>Welcome to our website, a wonderful place to learn how to cook like a pro.</p>
            <input type="email" placeholder="Enter your email" />
            <button>Send</button>
          </div>
          <div>
            <h3>Learn More</h3>
            <ul>
              <li>Our Cooks</li>
              <li>See Our Features</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h3>Shop</h3>
            <ul>
              <li>Gift Subscription</li>
              <li>Send Us Feedback</li>
            </ul>
          </div>
          <div>
            <h3>Recipes</h3>
            <ul>
              <li>What to Cook This Week</li>
              <li>Pasta</li>
              <li>Dinner</li>
              <li>Healthy</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p>© 2023 Cheffiy Company | Terms of Service | Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
