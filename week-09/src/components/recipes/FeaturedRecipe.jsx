// src/components/recipes/FeaturedRecipe.jsx
/**
 * File: FeaturedRecipe.jsx
 *
 * Component hiển thị công thức nổi bật trên trang chủ Chefify.
 * Hiển thị một công thức được chọn làm nổi bật với hình ảnh nền, thông tin và nút xem chi tiết.
 */

import React from 'react';
import { COLORS, CARD_STYLES } from '../../constants';

// Đường dẫn hình ảnh
const bgImage = '/src/assets/recipe-for-the-day-background-image.png';
const authorImage = '/src/assets/avatar-icon.png';

// Các style cho các phần của component
const styles = {
  container: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: '5%',
  },
  card: {
    maxWidth: '400px',
    border: `2px dotted ${COLORS.primary}`,
    borderRadius: '1rem',
    position: 'relative',
  },
  badge: {
    backgroundColor: COLORS.badge,
    borderRadius: '0 0.5rem 0.5rem 0',
    transform: 'translate(-50%, -50%)',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: '999px',
  },
};

/**
 * Component FeaturedRecipe
 *
 * Hiển thị công thức nổi bật với:
 * - Hình ảnh nền đẹp
 * - Thẻ thông tin công thức
 * - Nhãn "Recipe of the day"
 * - Thông tin tác giả
 * - Nút xem chi tiết
 */
const FeaturedRecipe = () => {
  return (
    <div
      className="position-relative text-white"
      style={styles.container}
    >
      {/* Thẻ công thức */}
      <div
        className="bg-white text-dark p-4 rounded shadow"
        style={styles.card}
      >
        {/* Nhãn "Recipe of the day" */}
        <div
          className="position-absolute top-0 start-50 translate-middle text-white px-3 py-1"
          style={styles.badge}
        >
          Recipe of the day
        </div>

        {/* Tiêu đề công thức */}
        <h5 className="text-center fw-bold text-danger mt-4" style={{ color: COLORS.primary }}>
          Salad Caprese
        </h5>

        {/* Mô tả công thức */}
        <p className="text-center text-muted">
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and
          balsamic vinegar create a refreshing dish for lunch or appetizer.
        </p>

        {/* Thông tin tác giả */}
        <div className="d-flex flex-column align-items-center mb-3">
          <img
            src={authorImage}
            alt="Author"
            className="rounded-circle mb-1"
            style={CARD_STYLES.authorImage.medium}
          />
          <small className="text-dark">Salad Caprese</small>
        </div>

        {/* Nút xem chi tiết */}
        <div className="text-center">
          <button
            className="btn text-white px-4"
            style={styles.button}
            aria-label="View recipe details"
          >
            View now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipe;