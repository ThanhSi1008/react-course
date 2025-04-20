/**
 * File: formatters.js
 * 
 * Các hàm tiện ích để định dạng dữ liệu trong ứng dụng.
 */

/**
 * Định dạng thời gian nấu ăn
 * 
 * @param {number} minutes - Số phút
 * @returns {string} Chuỗi thời gian đã định dạng
 */
export const formatCookingTime = (minutes) => {
    if (minutes < 60) {
      return `${minutes} minutes`;
    }
    
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    if (remainingMinutes === 0) {
      return `${hours} hour${hours > 1 ? 's' : ''}`;
    }
    
    return `${hours} hour${hours > 1 ? 's' : ''} ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}`;
  };
  
  /**
   * Rút gọn văn bản nếu quá dài
   * 
   * @param {string} text - Văn bản cần rút gọn
   * @param {number} maxLength - Độ dài tối đa
   * @returns {string} Văn bản đã rút gọn
   */
  export const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) {
      return text;
    }
    
    return text.substring(0, maxLength) + '...';
  };