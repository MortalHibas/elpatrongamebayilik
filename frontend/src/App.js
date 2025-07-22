import React, { useState, useEffect } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// Components
import HeroSection from "./components/HeroSection";
import ProblemSolutionSection from "./components/ProblemSolutionSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AdminPanel from "./components/AdminPanel";
import LoginPage from "./components/LoginPage";
import { AuthProvider, useAuth } from "./hooks/useAuth";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const LandingPage = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  // Handle CTA actions - in real implementation these would navigate or open forms
  const handlePrimaryCTA = () => {
    console.log('Primary CTA clicked - Free trial');
    // Mock action - could scroll to pricing or open signup form
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSecondaryCTA = () => {
    console.log('Secondary CTA clicked - View packages');
    // Mock action - scroll to pricing section
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePackageSelect = (packageType) => {
    console.log(`Package selected: ${packageType}`);
    // Mock action - in real implementation would open signup/payment form
    alert(`${packageType} paketi seçildi! Kayıt formu açılıyor...`);
  };

  const handleFinalCTA = () => {
    console.log('Final CTA clicked');
    // Mock action - could open signup form
    handlePrimaryCTA();
  };

  return (
    <div className="min-h-screen bg-[#101828] text-white">
      {/* Landing Page Sections */}
      <HeroSection 
        onCtaPrimary={handlePrimaryCTA}
        onCtaSecondary={handleSecondaryCTA}
      />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <div id="pricing">
        <PricingSection onPackageSelect={handlePackageSelect} />
      </div>
      <FAQSection />
      <FinalCTASection onCTA={handleFinalCTA} />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

// Protected Admin Route Component
const AdminRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#101828] to-[#0f1220] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#00C6FF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Yetkilendirme kontrol ediliyor...</p>
        </div>
      </div>
    );
  }

  return isAuthenticated ? <AdminPanel /> : <LoginPage onLogin={() => window.location.reload()} />;
};

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin" element={<AdminRoute />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;