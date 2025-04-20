// src/App.jsx
import { AppHeader, SiteFooter } from './components/layout';
import { FeaturedRecipe, SeasonalRecipes, VideoRecipes } from './components/recipes';

function App() {
  return (
    <div>
      <AppHeader />
      <FeaturedRecipe />
      <SeasonalRecipes />
      <VideoRecipes />
      <SiteFooter />
    </div>
  );
}

export default App;