
import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-serif font-bold mb-6">Our Culinary Philosophy</h1>
          <p className="text-xl text-gray-600 leading-relaxed italic">
            "We believe that the best meals are the ones shared with love, prepared with curiosity, and seasoned with cultural diversity."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <img src="https://picsum.photos/seed/kitchen/800/600" alt="FoodFusion Kitchen" className="rounded-3xl shadow-2xl" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold">Rooted in Passion</h2>
            <p className="text-gray-600 leading-relaxed">
              FoodFusion started as a small gathering of friends who wanted to document their traditional family recipes. Today, it has evolved into a global platform where thousands of enthusiasts exchange techniques, stories, and flavors every single day.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 bg-orange-50 rounded-2xl">
                <h4 className="font-bold text-orange-600 mb-1">Inclusion</h4>
                <p className="text-sm text-gray-500">Everyone is welcome at our table, regardless of skill level.</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-2xl">
                <h4 className="font-bold text-orange-600 mb-1">Authenticity</h4>
                <p className="text-sm text-gray-500">We celebrate genuine culinary heritage and honest ingredients.</p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold">The Team Behind the Taste</h2>
            <p className="text-gray-500 mt-2">Passionate experts dedicated to your culinary growth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-orange-600 rounded-full scale-0 group-hover:scale-105 transition-transform duration-300 -z-10 opacity-10"></div>
                  <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-orange-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
