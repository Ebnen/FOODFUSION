
import React, { useState, useEffect } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, pass: string) => { success: boolean; error?: string };
  lockoutTime?: number;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin, lockoutTime }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let timer: any;
    if (lockoutTime && lockoutTime > Date.now()) {
      const updateTimer = () => {
        const remaining = Math.max(0, Math.ceil((lockoutTime - Date.now()) / 1000));
        setTimeLeft(remaining);
        if (remaining === 0) clearInterval(timer);
      };
      updateTimer();
      timer = setInterval(updateTimer, 1000);
    }
    return () => clearInterval(timer);
  }, [lockoutTime]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (lockoutTime && lockoutTime > Date.now()) {
      setError(`Account locked. Try again in ${timeLeft} seconds.`);
      return;
    }
    const result = onLogin(email, password);
    if (!result.success) {
      setError(result.error || 'Invalid credentials');
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif font-bold">Welcome Back</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-xs rounded-lg border border-red-100">
                {error}
              </div>
            )}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Email</label>
              <input
                required
                type="email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Password</label>
              <input
                required
                type="password"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              disabled={timeLeft > 0}
              type="submit"
              className={`w-full py-3 rounded-xl font-semibold transition-all shadow-md ${
                timeLeft > 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-orange-600 text-white hover:bg-orange-700 shadow-orange-100'
              }`}
            >
              {timeLeft > 0 ? `Locked (${timeLeft}s)` : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
