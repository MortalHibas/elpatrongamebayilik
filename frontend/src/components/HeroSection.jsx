import React from 'react';
import { Button } from './ui/button';
import { heroData } from '../data/mock';

const HeroSection = ({ onCtaPrimary, onCtaSecondary }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#101828] via-[#1a1f35] to-[#0f0f17]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 bg-gradient-pattern"></div>
      
      {/* Animated Gradient Orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#00C6FF]/20 to-[#00FF7F]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[#FF4D4D]/15 to-[#00C6FF]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Valorant Hesap Tedariğinde
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#00C6FF] to-[#00FF7F] bg-clip-text text-transparent">
              Rakipsiz Güç
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            {heroData.subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={onCtaPrimary}
              size="lg"
              className="bg-gradient-to-r from-[#00C6FF] to-[#00FF7F] hover:from-[#00A8D8] hover:to-[#00E06B] text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 min-w-[280px]"
            >
              {heroData.ctaPrimary}
            </Button>
            
            <Button 
              onClick={onCtaSecondary}
              variant="outline"
              size="lg"
              className="border-2 border-[#00C6FF] text-[#00C6FF] hover:bg-[#00C6FF] hover:text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 min-w-[200px]"
            >
              {heroData.ctaSecondary}
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#00FF7F] rounded-full animate-pulse"></div>
              <span>7/24 Aktif Sistem</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#00C6FF] rounded-full animate-pulse"></div>
              <span>Anında Teslimat</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#FF4D4D] rounded-full animate-pulse"></div>
              <span>Güvenli Altyapı</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#101828] to-transparent"></div>
    </section>
  );
};

export default HeroSection;