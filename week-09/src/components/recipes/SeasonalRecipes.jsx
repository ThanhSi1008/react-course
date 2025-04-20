// src/components/recipes/SeasonalRecipes.jsx
/**
 * File: SeasonalRecipes.jsx
 *
 * Component hiển thị các công thức theo mùa trên trang chủ Chefify.
 * Hiển thị danh sách các công thức phù hợp với mùa hiện tại dưới dạng các thẻ (card).
 */

import React from 'react';
import { RecipeCard, SectionTitle } from '../common';
import { COLORS } from '../../constants';

// Dữ liệu các công thức theo mùa (hiện tại là mùa hè)
const seasonalRecipes = [
  {
    title: 'Italian-style tomato salad',
    image: '/src/assets/tomato-salad.png',
    time: '14 minutes',
  },
  {
    title: 'Spaghetti with vegetables and shrimp',
    image: '/src/assets/spaghetti-shrimp.png',
    time: '15 minutes',
  },
  {
    title: 'Lotus delight salad',
    image: '/src/assets/lotus-salad.png',
    time: '20 minutes',
  },
  {
    title: 'Snack cakes',
    image: '/src/assets/snack-cakes.png',
    time: '21 minutes',
  },
];

/**
 * Component SeasonalRecipes
 *
 * Hiển thị phần công thức theo mùa với:
 * - Tiêu đề và mô tả ngắn
 * - Danh sách các công thức dưới dạng lưới các thẻ
 */
const SeasonalRecipes = () => {
  return (
    <section className="container py-5">
      {/* Phần tiêu đề */}
      <SectionTitle 
        title="This Summer Recipes"
        subtitle="We have all your Independence Day sweets covered."
        titleStyle={{ color: COLORS.danger }}
      />

      {/* Phần hiển thị các thẻ công thức */}
      <div className="row g-4">
        {seasonalRecipes.map((recipe, idx) => (
          <div className="col-12 col-sm-6 col-lg-3" key={idx}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeasonalRecipes;