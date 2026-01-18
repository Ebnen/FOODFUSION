
import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../types';

const CommunityCookbook: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      id: 'c1',
      title: 'Grandma\'s Secret Apple Pie',
      author: 'Aunt Martha',
      category: 'Dessert',
      cuisine: 'American',
      difficulty: 'Medium',
      dietary: ['Vegetarian'],
      image: 'https://picsum.photos/seed/pie/800/600',
      description: 'A heirloom recipe passed down through three generations.'
    }
  ]);

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-600 rounded-3xl p-12 text-white mb-16 relative overflow-hidden">
          <div className="relative z-10 lg:w-2/3">
            <h1 className="text-5xl font-serif font-bold mb-6">Our Shared Table</h1>
            <p className="text-orange-100 text-lg mb-8 leading-relaxed">
              Every home has a story. Every story has a flavor. The Community Cookbook is a place for members to immortalize their kitchen legacy and discover others' heritage.
            </p>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-orange-50 transition-colors">
              Submit Your Recipe
            </button>
          </div>
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 flex items-center justify-center">
            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" /></svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
          
          <div className="border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-12 text-center group cursor-pointer hover:border-orange-300 transition-colors">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-50">
              <svg className="w-8 h-8 text-gray-400 group-hover:text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Contribute a Recipe</h3>
            <p className="text-gray-500 text-sm">Join the community and share your culinary masterpiece with the world.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCookbook;
