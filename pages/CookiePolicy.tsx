
import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold mb-8">Cookie Information</h1>
        <div className="prose prose-orange max-w-none text-gray-600 space-y-6">
          <p className="text-lg">FoodFusion uses cookies and similar technologies to enhance your browsing experience and analyze our traffic.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">What are Cookies?</h2>
          <p>Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences and provide a seamless login experience.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential Cookies:</strong> Necessary for the website to function, such as maintaining your login session.</li>
            <li><strong>Preference Cookies:</strong> Remember settings like your preferred cuisine or dietary filters.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our recipes and resources.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-900">Managing Your Preferences</h2>
          <p>You can choose to accept or decline cookies through our cookie consent banner. You can also adjust your browser settings to block cookies entirely, though some features of FoodFusion may not function correctly as a result.</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
