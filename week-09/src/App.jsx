// src/App.jsx
import { AppHeader, SiteFooter } from './components/layout';
import { FeaturedRecipe, SeasonalRecipes, VideoRecipes, CuratedRecipes } from './components/recipes';

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