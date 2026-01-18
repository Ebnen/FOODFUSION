
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-orange max-w-none text-gray-600 space-y-6">
          <p className="text-lg">At FoodFusion, we take your privacy seriously. This policy describes how we collect, use, and protect your information when you use our platform.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account (First Name, Last Name, Email, Password), submit a recipe, or contact us for support.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Data</h2>
          <p>Your data is used to provide the services you request, personalize your experience, and improve our culinary community. We do not sell your personal data to third parties.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">3. Data Security</h2>
          <p>We implement strict security measures, including account lockout features after three failed login attempts, to protect your account from unauthorized access.</p>
          
          <h2 className="text-2xl font-bold text-gray-900">4. Your Rights</h2>
          <p>You have the right to access, update, or delete your personal information at any time through your account settings or by contacting our support team.</p>
          
          <div className="bg-gray-50 p-6 rounded-2xl mt-12">
            <p className="text-sm italic">Last Updated: May 20, 2024. For questions regarding this policy, please email privacy@foodfusion.com.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
