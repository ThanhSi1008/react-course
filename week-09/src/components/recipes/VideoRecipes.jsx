// src/components/recipes/VideoRecipes.jsx
/**
 * File: VideoRecipes.jsx
 *
 * Component hiển thị các công thức có video hướng dẫn trên trang chủ Chefify.
 * Hiển thị danh sách các công thức có kèm video hướng dẫn dưới dạng các thẻ (card).
 */

import React from 'react';
import { SectionTitle, BookmarkButton } from '../common';
import { COLORS, CARD_STYLES } from '../../constants';

// Dữ liệu các công thức có video
const videoRecipes = [
  {
    title: 'Salad with cabbage and shrimp',
    image: '/src/assets/cabbage-shrimp-salad.png',
    time: '32 minutes',
  },
  {
    title: 'Salad of cove beans, shrimp and potatoes',
    image: '/src/assets/bean-shrimp-potato-salad.png',
    time: '20 minutes',
  },
  {
    title: 'Sunny-side up fried egg',
    image: '/src/assets/fried-egg.png',
    time: '15 minutes',
  },
  {
    title: 'Lotus delight salad',
    image: '/src/assets/lotus-salad.png',
    time: '20 minutes',
  },
];

/**
 * Component VideoRecipeCard - Hiển thị một công thức có video dưới dạng thẻ
 *
 * @param {Object} recipe - Thông tin công thức
 * @param {string} recipe.title - Tiêu đề công thức
 * @param {string} recipe.image - Đường dẫn hình ảnh
 * @param {string} recipe.time - Thời gian nấu ăn
 */
const VideoRecipeCard = ({ recipe }) => (
  <div className="card border-light shadow-sm h-100 rounded-4 overflow-hidden">
    <img
      src={recipe.image}
      alt={recipe.title}
      className="card-img-top"
      style={CARD_STYLES.recipeCard.image}
    />
    <div className="card-body position-relative d-flex flex-column justify-content-between">
      <h6 className="fw-bold">{recipe.title}</h6>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="text-pink fw-medium" style={{ color: COLORS.secondary, fontSize: '14px' }}>
          {recipe.time}
        </span>
        <BookmarkButton color={COLORS.secondary} />
      </div>
    </div>
  </div>
);

/**
 * Component VideoRecipes
 *
 * Hiển thị phần công thức có video với:
 * - Tiêu đề và mô tả ngắn
 * - Danh sách các công thức dưới dạng lưới các thẻ
 */
const VideoRecipes = () => {
  return (
    <section className="container py-5">
      {/* Phần tiêu đề */}
      <SectionTitle 
        title="Recipes With Videos"
        subtitle="Cooking Up Culinary Creations with Step-by-Step Videos"
        titleStyle={{ color: COLORS.secondary }}
      />

      {/* Phần hiển thị các thẻ công thức */}
      <div className="row g-4">
        {videoRecipes.map((recipe, index) => (
          <div className="col-12 col-sm-6 col-lg-3" key={index}>
            <VideoRecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoRecipes;