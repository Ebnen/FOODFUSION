
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-orange-500 text-3xl font-serif font-bold italic">FoodFusion</span>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Empowering home cooks to explore, create, and share the joy of global culinary arts since 2024.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Philosophy</Link></li>
              <li><Link to="/recipes" className="hover:text-white transition-colors">Recipe Archive</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">Community Cookbook</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Culinary Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Information</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Join the Conversation</h4>
            <div className="flex space-x-5 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.308 3.608-1.308zm0-2.163c-3.259 0-3.667.014-4.947.072-1.385.063-2.332.28-3.16.604-.855.333-1.58.777-2.302 1.5-1.12 1.12-1.12 1.12-1.5 2.302-.324.828-.541 1.775-.604 3.16-.058 1.28-.072 1.688-.072 4.947s.014 3.668.072 4.948c.063 1.385.28 2.332.604 3.16.333.855.777 1.58 1.5 2.302.722.722 1.447 1.167 2.302 1.5.828.324 1.775.541 3.16.604 1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072c1.385-.063 2.332-.28 3.16-.604.855-.333 1.58-.777 2.302-1.5.722-.722 1.167-1.447 1.5-2.302.324-.828.541-1.775.604-3.16.058-1.28.072-1.688.072-4.947s-.014-3.668-.072-4.948c-.063-1.385-.28-2.332-.604-3.16-.333-.855-.777-1.58-1.5-2.302-.722-.722-1.447-1.167-2.302-1.5-.828-.324-1.775-.541-3.16-.604-1.28-.058-1.688-.072-4.947-.072z" /></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wider">Stay Updated</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-gray-700 text-white px-3 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm"
                />
                <button className="bg-orange-600 px-4 py-2 rounded-r-md hover:bg-orange-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; 2024 FoodFusion Platform. All rights reserved.</p>
          <div className="mt-4 md:mt-0 text-gray-500 text-sm">
            Handcrafted with ❤️ for food lovers everywhere.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
