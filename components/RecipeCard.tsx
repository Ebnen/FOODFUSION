
import React from 'react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {recipe.dietary.map(d => (
            <span key={d} className="bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2 py-0.5 rounded-full uppercase text-gray-700 shadow-sm">
              {d}
            </span>
          ))}
        </div>
        <div className="absolute bottom-3 right-3">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase shadow-sm ${
            recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
            recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {recipe.difficulty}
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-orange-600 text-[10px] font-bold uppercase tracking-wider mb-1">{recipe.cuisine} • {recipe.category}</p>
        <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{recipe.title}</h4>
        <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">{recipe.description}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-[10px] font-bold mr-2">
              {recipe.author.charAt(0)}
            </div>
            <span className="text-xs text-gray-600 italic">by {recipe.author}</span>
          </div>
          <button className="text-orange-600 hover:text-orange-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
