
import React from 'react';
import { EDUCATIONAL_RESOURCES } from '../constants';

const EducationalResources: React.FC = () => {
  return (
    <div className="py-20 bg-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-full blur-2xl opacity-60"></div>
              <img 
                src="https://raw.githubusercontent.com/Stackblitz-Assets/images/main/chef-portrait.png" 
                alt="Educational Lead" 
                className="relative z-10 rounded-3xl shadow-2xl border-8 border-white"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-6">Sustainable <br/><span className="text-emerald-600">Energy in Food.</span></h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At FoodFusion, we care about the planet. Explore our library of resources on how renewable energy impacts the food chain—from solar-powered farms to wind-driven milling and sustainable kitchen innovations.
            </p>
            <div className="flex space-x-4">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
                View Full Library
              </button>
            </div>
          </div>
        </div>

        <section className="mb-24">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Renewable Energy Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EDUCATIONAL_RESOURCES.map((res) => (
              <div key={res.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
                <div className="relative mb-6 overflow-hidden rounded-xl h-48">
                  <img src={res.thumbnail} alt={res.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase text-emerald-600 shadow-sm">
                    {res.type}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{res.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{res.description}</p>
                <button className="w-full py-3 bg-gray-50 text-gray-700 font-bold rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  Access Resource
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-white rounded-[2.5rem] p-12 shadow-xl border border-emerald-50 text-center max-w-4xl mx-auto">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Coming Soon</span>
          <h2 className="text-4xl font-serif font-bold mb-6">Green Cooking Interactive Workshop</h2>
          <p className="text-gray-600 mb-8">We are developing a 4-week interactive course on zero-emission cooking techniques. Sign up to be the first to know when we launch.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none w-full sm:w-64"
            />
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalResources;
