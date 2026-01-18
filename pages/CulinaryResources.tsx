
import React from 'react';

const CulinaryResources: React.FC = () => {
  const resources = [
    { title: 'Essential Knife Skills', type: 'Video Masterclass', duration: '15 mins', img: 'https://picsum.photos/seed/knife/400/250' },
    { title: 'The Saucier\'s Guide', type: 'PDF Recipe Card Set', duration: '24 Pages', img: 'https://picsum.photos/seed/sauce/400/250' },
    { title: 'Fermentation 101', type: 'Instructional Guide', duration: 'Interactive', img: 'https://picsum.photos/seed/kombucha/400/250' },
    { title: 'Mastering the Roux', type: 'Technique Video', duration: '8 mins', img: 'https://picsum.photos/seed/roux/400/250' }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-serif font-bold mb-4">Master Your Kitchen</h1>
          <p className="text-gray-500">Professional resources to elevate your cooking techniques from amateur to artisan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((res, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="relative h-48">
                <img src={res.img} alt={res.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-bold text-sm shadow-xl flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Download
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-orange-600 text-[10px] font-bold uppercase tracking-widest">{res.type}</span>
                <h3 className="font-bold text-gray-900 mt-1 mb-2">{res.title}</h3>
                <div className="flex items-center text-xs text-gray-400">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {res.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between border border-gray-100">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-serif font-bold mb-4">Request a Tutorial</h2>
            <p className="text-gray-600">Is there a specific technique you're struggling with? Let us know, and we'll create a dedicated video guide for you.</p>
          </div>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-colors">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default CulinaryResources;
