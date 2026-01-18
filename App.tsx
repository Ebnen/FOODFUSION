
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JoinUsModal from './components/JoinUsModal';
import LoginModal from './components/LoginModal';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import About from './pages/About';
import RecipeCollection from './pages/RecipeCollection';
import CommunityCookbook from './pages/CommunityCookbook';
import CulinaryResources from './pages/CulinaryResources';
import EducationalResources from './pages/EducationalResources';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import { User, AuthState } from './types';

const App: React.FC = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  // Auth state simulation
  const [authState, setAuthState] = useState<AuthState>(() => {
    const saved = localStorage.getItem('auth_state');
    return saved ? JSON.parse(saved) : { user: null, failedAttempts: {}, lockoutUntil: {} };
  });

  useEffect(() => {
    localStorage.setItem('auth_state', JSON.stringify(authState));
  }, [authState]);

  // Task 4: Timed "Sign up Now" trigger
  useEffect(() => {
    if (!authState.user) {
      const hasSeenPopup = sessionStorage.getItem('has_seen_signup_popup');
      if (!hasSeenPopup) {
        const timer = setTimeout(() => {
          setIsJoinModalOpen(true);
          sessionStorage.setItem('has_seen_signup_popup', 'true');
        }, 5000); // Trigger after 5 seconds
        return () => clearTimeout(timer);
      }
    }
  }, [authState.user]);

  const handleRegister = (data: any) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = { ...data, id: Date.now().toString() };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    setAuthState({ ...authState, user: newUser });
    alert(`Welcome, ${newUser.firstName}! You are now registered.`);
  };

  const handleLogin = (email: string, pass: string) => {
    const now = Date.now();
    const currentLockout = authState.lockoutUntil[email] || 0;

    if (currentLockout > now) {
      return { success: false, error: 'Account locked.' };
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email);

    if (user && user.password === pass) {
      setAuthState({
        ...authState,
        user: user,
        failedAttempts: { ...authState.failedAttempts, [email]: 0 },
        lockoutUntil: { ...authState.lockoutUntil, [email]: 0 }
      });
      return { success: true };
    } else {
      const attempts = (authState.failedAttempts[email] || 0) + 1;
      const newLockout = attempts >= 3 ? now + 3 * 60 * 1000 : 0;
      
      setAuthState({
        ...authState,
        failedAttempts: { ...authState.failedAttempts, [email]: attempts },
        lockoutUntil: { ...authState.lockoutUntil, [email]: newLockout }
      });

      return { 
        success: false, 
        error: attempts >= 3 
          ? 'Too many attempts. Account locked for 3 minutes.' 
          : `Invalid credentials. Attempt ${attempts} of 3.` 
      };
    }
  };

  const handleLogout = () => {
    setAuthState({ ...authState, user: null });
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar 
          user={authState.user} 
          onLogout={handleLogout}
          onLoginClick={() => setIsLoginModalOpen(true)}
          onJoinClick={() => setIsJoinModalOpen(true)} 
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<RecipeCollection />} />
            <Route path="/community" element={<CommunityCookbook />} />
            <Route path="/resources" element={<CulinaryResources />} />
            <Route path="/energy" element={<EducationalResources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Routes>
        </main>

        <Footer />

        <JoinUsModal 
          isOpen={isJoinModalOpen} 
          onClose={() => setIsJoinModalOpen(false)} 
          onRegister={handleRegister} 
        />
        
        <LoginModal 
          isOpen={isLoginModalOpen} 
          onClose={() => setIsLoginModalOpen(false)} 
          onLogin={handleLogin}
          lockoutTime={authState.user ? undefined : authState.lockoutUntil[Object.keys(authState.lockoutUntil)[0]]} 
        />

        <CookieConsent />
      </div>
    </HashRouter>
  );
};

export default App;
