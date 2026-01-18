
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-serif font-bold mb-8">Let's Talk <br/><span className="text-orange-600 italic">Flavor.</span></h1>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Have a recipe request? Feedback on our site? Or just want to say hi? We'd love to hear from you.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold">Email Us</h4>
                  <p className="text-gray-500">hello@foodfusion.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold">Visit the Hub</h4>
                  <p className="text-gray-500">123 Culinary Lane, Kitchen City, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 tracking-wider mb-2">Name</label>
                  <input type="text" className="w-full px-5 py-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 tracking-wider mb-2">Email</label>
                  <input type="email" className="w-full px-5 py-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 outline-none" placeholder="jane@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 tracking-wider mb-2">Subject</label>
                <select className="w-full px-5 py-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 outline-none">
                  <option>Recipe Request</option>
                  <option>General Inquiry</option>
                  <option>Bug Report</option>
                  <option>Business Collaboration</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 tracking-wider mb-2">Message</label>
                <textarea rows={5} className="w-full px-5 py-3 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 outline-none resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-100 hover:bg-orange-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
