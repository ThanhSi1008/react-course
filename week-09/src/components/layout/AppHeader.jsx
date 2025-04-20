// src/components/layout/AppHeader.jsx
/**
 * File: AppHeader.jsx
 *
 * Component thanh điều hướng (Navbar) của ứng dụng Chefify.
 * Hiển thị logo, thanh tìm kiếm, các liên kết điều hướng và các nút đăng nhập/đăng ký.
 */

import React from 'react';
import { COLORS } from '../../constants';

// Mảng các mục điều hướng
const navigationItems = [
  { title: 'What to cook', href: '#' },
  { title: 'Recipes', href: '#' },
  { title: 'Ingredients', href: '#' },
  { title: 'Occasions', href: '#' },
  { title: 'About Us', href: '#' },
];

/**
 * Component AppHeader
 *
 * Hiển thị thanh điều hướng với các chức năng:
 * - Logo của ứng dụng
 * - Thanh tìm kiếm công thức
 * - Các liên kết điều hướng
 * - Các nút đăng nhập và đăng ký
 */
const AppHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-2 px-4">
      <div className="container">
        {/* Logo của Chefify */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="/src/assets/chelify-icon.png"
            alt="Chefify Logo"
            className="d-inline-block align-text-top me-2"
            width="30"
            height="30"
          />
          <span className="fw-bold">Chefify</span>
        </a>

        {/* Thanh tìm kiếm công thức */}
        <form className="d-flex flex-grow-1 mx-4" role="search">
          <div className="input-group w-100">
            <span className="input-group-text bg-light border-0">
              <img
                src="/src/assets/search-icon.png"
                className="d-inline-block align-text-top"
                alt="Search icon"
                width="20"
                height="20"
              />
            </span>
            <input
              className="form-control bg-light border-0"
              type="search"
              placeholder="What would you like to cook?"
              aria-label="Search"
            />
          </div>
        </form>

        {/* Danh sách các liên kết điều hướng */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {navigationItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link text-secondary" href={item.href}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Các nút đăng nhập và đăng ký */}
        <div className="d-flex">
          <a
            href="#"
            className="btn text-danger me-2"
            style={{ backgroundColor: '#ffeaf1' }}
          >
            Login
          </a>
          <a
            href="#"
            className="btn btn-danger text-white"
          >
            Subscribe
          </a>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;