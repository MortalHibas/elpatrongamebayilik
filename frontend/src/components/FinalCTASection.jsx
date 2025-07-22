import React from 'react';
import { Button } from './ui/button';
import { Rocket, Star } from 'lucide-react';
import { finalCtaData } from '../data/mock';
import useSettings from '../hooks/useSettings';

const FinalCTASection = ({ onCTA }) => {
  const { settings } = useSettings();
  
  return (
    <section className="py-24 bg-gradient-to-br from-[#0f1220] via-[#101828] to-[#1a1f35] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FF]/5 via-transparent to-[#00FF7F]/5"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#00C6FF]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#00FF7F]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {finalCtaData.title}
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            {finalCtaData.description}
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-[#00C6FF]/10 to-[#00FF7F]/10 border border-[#00C6FF]/20 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#00C6FF] to-[#00FF7F] bg-clip-text text-transparent mb-2">
                1000+
              </div>
              <p className="text-gray-400">Aktif Bayi</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-[#00FF7F]/10 to-[#FF4D4D]/10 border border-[#00FF7F]/20 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#00FF7F] to-[#FF4D4D] bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <p className="text-gray-400">Teslim Edilen Hesap</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-[#FF4D4D]/10 to-[#00C6FF]/10 border border-[#FF4D4D]/20 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#FF4D4D] to-[#00C6FF] bg-clip-text text-transparent mb-2">
                99.8%
              </div>
              <p className="text-gray-400">Memnuniyet Oranı</p>
            </div>
          </div>
          
          {/* Main CTA */}
          <div className="flex flex-col items-center gap-6">
            <Button
              onClick={onCTA}
              size="lg"
              className="bg-gradient-to-r from-[#00C6FF] to-[#00FF7F] hover:from-[#00A8D8] hover:to-[#00E06B] text-white font-bold px-12 py-6 text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 min-w-[320px] group"
            >
              <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              {finalCtaData.buttonText}
            </Button>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#00FF7F]" />
                <span>7 gün ücretsiz deneme</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00C6FF] rounded-full animate-pulse"></div>
                <span>Anında kurulum</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#FF4D4D] rounded-full animate-pulse"></div>
                <span>İstediğin zaman iptal et</span>
              </div>
            </div>
          </div>
          
          {/* Bottom Message */}
          {settings && settings.showDiscounts && (
            <div className="mt-16 p-8 bg-gradient-to-r from-[#00C6FF]/5 to-[#00FF7F]/5 border border-[#00C6FF]/20 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">
                {settings.finalDiscountText}
              </h3>
              <p className="text-gray-400 text-lg">
                Bu fırsatı kaçırma! Şu anda {Math.floor(Math.random() * 30 + 70)} kişi sistemi inceliyor.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#FF4D4D]/10 border border-[#FF4D4D]/20 rounded-full">
                  <div className="w-3 h-3 bg-[#FF4D4D] rounded-full animate-pulse"></div>
                  <span className="text-[#FF4D4D] font-semibold">Son 24 Saatte 15 Kayıt</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;