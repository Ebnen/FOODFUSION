
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-2xl bg-gray-900/95 backdrop-blur-md text-white p-6 rounded-2xl shadow-2xl z-[200] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 animate-in slide-in-from-bottom-8 duration-500">
      <div className="flex-1 text-center sm:text-left">
        <h4 className="font-bold mb-1">Privacy & Cookies</h4>
        <p className="text-gray-400 text-xs leading-relaxed">
          We use cookies to enhance your experience. By clicking "Accept", you agree to our <Link to="/cookies" className="underline text-orange-400">Cookie Policy</Link> and <Link to="/privacy" className="underline text-orange-400">Privacy Policy</Link>.
        </p>
      </div>
      <div className="flex items-center space-x-3 shrink-0">
        <button onClick={handleAccept} className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-colors">
          Accept All
        </button>
        <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-white px-4 py-2 text-sm font-medium">
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
