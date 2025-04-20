// src/constants/styles.js
/**
 * File: styles.js
 * 
 * Định nghĩa các style chung được sử dụng trong nhiều component.
 * Giúp đảm bảo tính nhất quán trong thiết kế và dễ dàng thay đổi.
 */

import COLORS from './colors';

export const CARD_STYLES = {
  recipeCard: {
    image: {
      height: '200px',
      objectFit: 'cover',
    },
    badge: {
      backgroundColor: COLORS.light,
      color: COLORS.danger,
      border: `1px solid ${COLORS.danger}`,
    },
    button: {
      color: COLORS.primary,
      backgroundColor: 'transparent',
    },
  },
  authorImage: {
    small: {
      width: '32px',
      height: '32px',
      objectFit: 'cover',
    },
    medium: {
      width: '40px',
      height: '40px',
      objectFit: 'cover',
    },
  },
  text: {
    small: {
      fontSize: '14px',
    },
    medium: {
      fontSize: '16px',
    },
    large: {
      fontSize: '18px',
    },
  },
  curatedRecipe: {
    card: {
      minHeight: '180px',
    },
    image: {
      width: '130px',
      height: '130px',
      objectFit: 'cover',
    },
  },
};

export default CARD_STYLES;