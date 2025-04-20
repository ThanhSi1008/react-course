// src/components/recipes/CuratedRecipes.jsx
/**
 * File: CuratedRecipes.jsx
 *
 * Component hiển thị các công thức được biên tập viên chọn lọc trên trang chủ Chefify.
 * Hiển thị danh sách các công thức được biên tập viên đánh giá cao dưới dạng các thẻ ngang.
 */

import React from 'react';
import { SectionTitle, BookmarkButton } from '../common';
import { COLORS, CARD_STYLES } from '../../constants';
import { truncateText } from '../../utils';

// Dữ liệu các công thức được biên tập viên chọn lọc
const curatedRecipes = [
  {
    title: 'Stuffed sticky rice ball',
    time: '34 minutes',
    author: 'Jennifer King',
    authorImage: '/src/assets/avatar-icon.png',
    description: 'Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...',
    image: '/src/assets/rice-ball.png',
  },
  {
    title: 'Strawberry smoothie',
    time: '40 minutes',
    author: 'Matthew Martinez',
    authorImage: '/src/assets/avatar-icon.png',
    description: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...',
    image: '/src/assets/strawberry-smoothie.png',
  },
  {
    title: 'Latte Art',
    time: '19 minutes',
    author: 'Sarah Hill',
    authorImage: '/src/assets/avatar-icon.png',
    description: 'Latte art is the skillful craft of creating captivating designs on the surface of a latte...',
    image: '/src/assets/latte-art.png',
  },
  {
    title: 'Butter fried noodles',
    time: '16 minutes',
    author: 'Julia Lopez',
    authorImage: '/src/assets/avatar-icon.png',
    description: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...',
    image: '/src/assets/butter-noodles.png',
  },
];

// Style cho card
const cardStyle = {
  minHeight: '180px',
};

const recipeImageStyle = {
  width: '130px',
  height: '130px',
  objectFit: 'cover',
};

/**
 * Component CuratedRecipeCard - Hiển thị một công thức được biên tập viên chọn lọc
 *
 * @param {Object} props - Props của component
 * @param {Object} props.item - Thông tin công thức
 * @param {string} props.item.title - Tiêu đề công thức
 * @param {string} props.item.time - Thời gian nấu ăn
 * @param {string} props.item.author - Tên tác giả
 * @param {string} props.item.authorImage - Đường dẫn hình ảnh tác giả
 * @param {string} props.item.description - Mô tả công thức
 * @param {string} props.item.image - Đường dẫn hình ảnh công thức
 */
const CuratedRecipeCard = ({ item }) => (
  <div className="d-flex rounded-4 shadow-sm border p-3 align-items-start" style={cardStyle}>
    <img
      src={item.image}
      alt={item.title}
      className="rounded-4 me-3"
      style={recipeImageStyle}
    />
    <div className="flex-grow-1 d-flex flex-column">
      <div className="d-flex justify-content-between">
        <h5 className="fw-bold mb-1">{item.title}</h5>
        <BookmarkButton color={COLORS.secondary} />
      </div>
      <span className="text-muted mb-2" style={CARD_STYLES.text.small}>{item.time}</span>
      <div className="d-flex align-items-center mb-2">
        <img
          src={item.authorImage}
          alt={item.author}
          className="rounded-circle me-2"
          style={CARD_STYLES.authorImage.small}
        />
        <span className="fw-bold" style={CARD_STYLES.text.small}>{item.author}</span>
      </div>
      <p className="text-muted mb-0" style={CARD_STYLES.text.small}>
        {truncateText(item.description, 100)}
      </p>
    </div>
  </div>
);

/**
 * Component CuratedRecipes
 *
 * Hiển thị phần công thức được biên tập viên chọn lọc với:
 * - Tiêu đề và mô tả ngắn
 * - Danh sách các công thức dưới dạng lưới các thẻ ngang
 */
const CuratedRecipes = () => {
  return (
    <section className="container py-5">
      {/* Phần tiêu đề */}
      <SectionTitle 
        title="Editor's pick"
        subtitle="Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!"
        titleStyle={{ color: COLORS.secondary }}
      />

      {/* Phần hiển thị các thẻ công thức */}
      <div className="row g-4">
        {curatedRecipes.map((item, idx) => (
          <div className="col-md-6" key={idx}>
            <CuratedRecipeCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CuratedRecipes;