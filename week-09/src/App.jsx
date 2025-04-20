// src/App.jsx
import { AppHeader, SiteFooter } from './components/layout';
import { FeaturedRecipe } from './components/recipes';

function App() {
  return (
    <div>
      <AppHeader />
      <FeaturedRecipe />
      <SiteFooter />
    </div>
  );
}

export default App;