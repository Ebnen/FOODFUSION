
import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { FEATURED_RECIPES } from '../constants';

const RecipeCollection: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Italian', 'Thai', 'Japanese', 'Vegetarian', 'Vegan'];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4">Curated Collection</h1>
          <p className="text-gray-500">Browse hundreds of professional and community-contributed recipes.</p>
        </header>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat ? 'bg-orange-600 text-white shadow-lg shadow-orange-100' : 'bg-white border border-gray-200 text-gray-600 hover:border-orange-500 hover:text-orange-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Multiply featured recipes to simulate a larger collection */}
          {[...FEATURED_RECIPES, ...FEATURED_RECIPES, ...FEATURED_RECIPES].map((recipe, idx) => (
            <RecipeCard key={idx} recipe={{ ...recipe, id: `${recipe.id}-${idx}` }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCollection;
