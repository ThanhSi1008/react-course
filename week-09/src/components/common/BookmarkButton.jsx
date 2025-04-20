// src/components/common/BookmarkButton.jsx
/**
 * File: BookmarkButton.jsx
 * 
 * Component nút đánh dấu dùng chung cho toàn ứng dụng.
 * Hiển thị nút để lưu/đánh dấu công thức.
 */

import React from 'react';
import { COLORS } from '../../constants';

/**
 * Component BookmarkButton - Hiển thị nút đánh dấu công thức
 * 
 * @param {Object} props - Props của component
 * @param {string} [props.color] - Màu của nút (tùy chọn)
 * @param {Object} [props.style] - Style bổ sung (tùy chọn)
 * @param {string} [props.className] - Class CSS bổ sung (tùy chọn)
 * @param {Function} [props.onClick] - Hàm xử lý khi click (tùy chọn)
 */
const BookmarkButton = ({ 
  color = COLORS.primary, 
  style = {}, 
  className = '',
  onClick = () => {} 
}) => {
  const buttonStyle = {
    color,
    backgroundColor: 'transparent',
    ...style
  };

  return (
    <button
      className={`btn p-0 border-0 ${className}`}
      aria-label="Đánh dấu công thức"
      style={buttonStyle}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M2 2v13.5l5.5-3.5 5.5 3.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
      </svg>
    </button>
  );
};

export default BookmarkButton;