// src/components/layout/SiteFooter.jsx
/**
 * File: SiteFooter.jsx
 *
 * Component chân trang (Footer) của ứng dụng Chefify.
 * Hiển thị thông tin về trang web, form đăng ký email, các liên kết hữu ích và thông tin bản quyền.
 */

import React from 'react';
import { COLORS } from '../../constants';

// Dữ liệu các mục liên kết trong footer
const footerLinks = {
  learnMore: [
    { title: 'Our Cooks', href: '#' },
    { title: 'See Our Features', href: '#' },
    { title: 'FAQ', href: '#' },
  ],
  shop: [
    { title: 'Gift Subscription', href: '#' },
    { title: 'Send Us Feedback', href: '#' },
  ],
  recipes: [
    { title: 'What to Cook This Week', href: '#' },
    { title: 'Pasta', href: '#' },
    { title: 'Dinner', href: '#' },
    { title: 'Healthy', href: '#' },
    { title: 'Vegetarian', href: '#' },
    { title: 'Vegan', href: '#' },
    { title: 'Christmas', href: '#' },
  ],
};

/**
 * Component SiteFooter
 *
 * Hiển thị chân trang với các phần:
 * - Giới thiệu về trang web và form đăng ký email
 * - Các liên kết hữu ích được phân loại theo mục
 * - Thông tin bản quyền và các điều khoản dịch vụ
 */
const SiteFooter = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 px-4">
      <div className="container">
        <div className="row">

          {/* Phần giới thiệu và đăng ký email */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">About Us</h5>
            <p>
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
                aria-label="Email subscription"
              />
              <button
                className="btn text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                Send
              </button>
            </div>
          </div>

          {/* Phần Tìm hiểu thêm */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Learn More</h6>
            <ul className="list-unstyled">
              {footerLinks.learnMore.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white text-decoration-none">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Phần Cửa hàng */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Shop</h6>
            <ul className="list-unstyled">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white text-decoration-none">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Phần Công thức */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Recipes</h6>
            <ul className="list-unstyled">
              {footerLinks.recipes.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white text-decoration-none">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-light" />

        {/* Phần cuối chân trang */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="d-flex align-items-center mb-2 mb-md-0">
            <img
              src="/src/assets/chelify-icon.png"
              alt="Chefify Logo"
              className="me-2"
              width="30"
              height="30"
            />
            <span className="ms-3 small">2023 Chefify Company</span>
          </div>
          <div>
            <a href="#" className="text-white text-decoration-none me-3">Terms of Service</a>
            <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;