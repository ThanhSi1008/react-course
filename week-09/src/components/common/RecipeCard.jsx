// src/components/common/RecipeCard.jsx
/**
 * File: RecipeCard.jsx
 * 
 * Component thẻ công thức dùng chung cho toàn ứng dụng.
 * Hiển thị thông tin cơ bản của một công thức nấu ăn.
 */

import React from 'react';
import { COLORS, CARD_STYLES } from '../../constants';
import { truncateText } from '../../utils';

/**
 * Component RecipeCard - Hiển thị một công thức dưới dạng thẻ
 * 
 * @param {Object} props - Props của component
 * @param {Object} props.recipe - Thông tin công thức
 * @param {string} props.recipe.title - Tiêu đề công thức
 * @param {string} props.recipe.image - Đường dẫn hình ảnh
 * @param {string} props.recipe.time - Thời gian nấu ăn
 * @param {string} [props.recipe.description] - Mô tả công thức (tùy chọn)
 * @param {string} [props.className] - Class CSS bổ sung (tùy chọn)
 */
const RecipeCard = ({ recipe, className = '' }) => {
  return (
    <div className={`card h-100 border-light shadow-sm ${className}`}>
      <img
        src={recipe.image}
        className="card-img-top"
        style={CARD_STYLES.recipeCard.image}
        alt={recipe.title}
      />
      <div className="card-body position-relative">
        <h5 className="card-title fw-semibold">{recipe.title}</h5>
        
        {recipe.description && (
          <p className="card-text text-muted" style={CARD_STYLES.text.small}>
            {truncateText(recipe.description, 80)}
          </p>
        )}
        
        <span className="badge bg-light text-danger border border-danger px-2 py-1">
          {recipe.time}
        </span>
        
        <button
          type="button"
          className="btn btn-outline-danger position-absolute top-0 end-0 m-2 p-1 rounded-circle"
          aria-label="Lưu công thức"
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
      </div>
    </div>
  );
};

export default RecipeCard;