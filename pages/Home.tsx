
import React from 'react';
import Carousel from '../components/Carousel';
import RecipeCard from '../components/RecipeCard';
import { FEATURED_RECIPES, UPCOMING_EVENTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative bg-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Flavor <span className="text-orange-600 italic">Redefined.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              FoodFusion is more than just recipes; it's a global movement celebrating home-grown culinary creativity. Join our community of food enthusiasts today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-orange-200 hover:bg-orange-700 transition-all">
                Explore Recipes
              </button>
              <button className="bg-white text-orange-600 border-2 border-orange-100 px-8 py-4 rounded-full font-bold hover:bg-orange-50 transition-all">
                Our Story
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
            <img 
              src="https://picsum.photos/seed/culinary/800/800" 
              alt="Chef cooking" 
              className="relative z-10 w-full max-w-lg mx-auto rounded-3xl shadow-2xl rotate-3"
            />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-100/50 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
      </section>

      {/* Events Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <Carousel events={UPCOMING_EVENTS} />
      </section>

      {/* Featured News Feed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">Taste of the Week</h2>
            <p className="text-gray-500">Discover trending culinary masterpieces from our chefs.</p>
          </div>
          <button className="text-orange-600 font-bold hover:text-orange-700 flex items-center group">
            View All <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_RECIPES.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-gray-900 mt-24 py-24 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Join a Global Kitchen</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              From the bustling streets of Bangkok to the vineyards of Tuscany, connect with fellow food lovers and share your kitchen secrets.
            </p>
            <div className="flex space-x-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-500">15k+</p>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Recipes</p>
              </div>
              <div className="text-center border-l border-gray-800 pl-8">
                <p className="text-3xl font-bold text-orange-500">50k+</p>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Foodies</p>
              </div>
              <div className="text-center border-l border-gray-800 pl-8">
                <p className="text-3xl font-bold text-orange-500">120</p>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Countries</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/cook1/400/400" className="rounded-xl mt-8" alt="Community cooking" />
            <img src="https://picsum.photos/seed/cook2/400/400" className="rounded-xl" alt="Community cooking" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
