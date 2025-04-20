// src/components/common/SectionTitle.jsx
/**
 * File: SectionTitle.jsx
 * 
 * Component tiêu đề phần dùng chung cho toàn ứng dụng.
 * Hiển thị tiêu đề và mô tả cho các phần trên trang.
 */

import React from 'react';

/**
 * Component SectionTitle - Hiển thị tiêu đề và mô tả của một phần
 * 
 * @param {Object} props - Props của component
 * @param {string} props.title - Tiêu đề phần
 * @param {string} [props.subtitle] - Mô tả phần (tùy chọn)
 * @param {Object} [props.titleStyle] - Style cho tiêu đề (tùy chọn)
 * @param {string} [props.className] - Class CSS bổ sung (tùy chọn)
 */
const SectionTitle = ({ 
  title, 
  subtitle, 
  titleStyle = {}, 
  className = '' 
}) => {
  return (
    <div className={`text-center mb-5 ${className}`}>
      <h2 className="fw-bold" style={titleStyle}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;