// src/App.jsx
import { AppHeader, SiteFooter } from './components/layout';
import { FeaturedRecipe, SeasonalRecipes } from './components/recipes';

function App() {
  return (
    <div>
      <AppHeader />
      <FeaturedRecipe />
      <SeasonalRecipes />
      <SiteFooter />
    </div>
  );
}

export default App;