// src/App.jsx
/**
 * File: App.jsx
 *
 * Component chính của ứng dụng Chefify - một nền tảng công thức nấu ăn.
 * Component này đóng vai trò là container chính, tổ chức và sắp xếp các thành phần con.
 */

import { AppHeader, SiteFooter } from './components/layout';
import { FeaturedRecipe, SeasonalRecipes, VideoRecipes, CuratedRecipes } from './components/recipes';

/**
 * Component App chính
 *
 * Cấu trúc bố cục của trang web bao gồm:
 * - Thanh điều hướng (Header)
 * - Các phần hiển thị công thức theo các chủ đề khác nhau
 * - Chân trang (Footer)
 */
function App() {
  return (
    <div>
      <AppHeader />
      <FeaturedRecipe />
      <SeasonalRecipes />
      <VideoRecipes />
      <CuratedRecipes />
      <SiteFooter />
    </div>
  );
}

export default App;