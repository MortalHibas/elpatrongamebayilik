import React from 'react';
import { Button } from './ui/button';
import { Check, Star } from 'lucide-react';
import { pricingData } from '../data/mock';
import useSettings from '../hooks/useSettings';

const PricingSection = ({ onPackageSelect }) => {
  const { settings } = useSettings();
  
  return (
    <section className="py-24 bg-gradient-to-b from-[#0f1220] to-[#101828]">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {pricingData.title}
            </h2>
            <p className="text-xl text-gray-400 mb-4">
              {pricingData.subtitle}
            </p>
            {adminData.settings.showDiscounts && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00FF7F]/10 border border-[#00FF7F]/20 rounded-full">
                <Star className="w-4 h-4 text-[#00FF7F]" />
                <span className="text-[#00FF7F] font-semibold">{adminData.settings.discountText}</span>
              </div>
            )}
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {pricingData.packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative group ${
                  pkg.popular 
                    ? 'transform scale-105 z-10' 
                    : 'hover:transform hover:scale-105'
                } transition-all duration-500`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="px-6 py-2 bg-gradient-to-r from-[#FF4D4D] to-[#00C6FF] text-white font-bold rounded-full text-sm">
                      EN POPÜLER
                    </div>
                  </div>
                )}
                
                <div className={`relative p-8 rounded-3xl backdrop-blur-sm transition-all duration-500 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-[#00C6FF]/10 to-[#00FF7F]/10 border-2 border-[#00C6FF]/50 shadow-2xl shadow-[#00C6FF]/20'
                    : 'bg-gradient-to-br from-[#1a1f35]/50 to-[#101828]/50 border border-[#00C6FF]/10 hover:border-[#00C6FF]/30'
                }`}>
                  {/* Package Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {pkg.name}
                    </h3>
                    <div className="mb-4">
                      <span className={`text-4xl font-bold ${
                        pkg.popular 
                          ? 'bg-gradient-to-r from-[#00C6FF] to-[#00FF7F] bg-clip-text text-transparent'
                          : 'text-white'
                      }`}>
                        {pkg.price}
                      </span>
                    </div>
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          pkg.popular
                            ? 'bg-gradient-to-r from-[#00C6FF] to-[#00FF7F]'
                            : 'bg-[#00C6FF]/20 border border-[#00C6FF]/30'
                        }`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Button
                    onClick={() => onPackageSelect(pkg.name)}
                    className={`w-full py-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-[#00C6FF] to-[#00FF7F] hover:from-[#00A8D8] hover:to-[#00E06B] text-white shadow-lg hover:shadow-xl hover:shadow-[#00C6FF]/25'
                        : 'bg-gradient-to-r from-[#1a1f35] to-[#101828] border border-[#00C6FF]/30 text-[#00C6FF] hover:bg-gradient-to-r hover:from-[#00C6FF]/10 hover:to-[#00FF7F]/10 hover:border-[#00C6FF]/50'
                    }`}
                  >
                    {pkg.buttonText}
                  </Button>
                  
                  {/* Package Benefits */}
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-400">
                      7 gün ücretsiz deneme dahil
                    </p>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none ${
                    pkg.popular
                      ? 'from-[#00C6FF]/10 to-[#00FF7F]/10'
                      : 'from-[#00C6FF]/5 to-[#00FF7F]/5'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Info */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-4 p-6 bg-gradient-to-r from-[#00C6FF]/5 to-[#00FF7F]/5 border border-[#00C6FF]/20 rounded-2xl">
              <h4 className="text-xl font-bold text-white">
                💡 Paket Seçiminde Kararsız Mısınız?
              </h4>
              <p className="text-gray-400 max-w-2xl">
                Ücretsiz demo ile tüm paketleri test edebilir, size en uygun olanı bulabilirsiniz. 
                İstediğiniz zaman paket değişikliği yapabilirsiniz.
              </p>
              <div className="flex items-center gap-2 text-[#00FF7F]">
                <div className="w-3 h-3 bg-[#00FF7F] rounded-full animate-pulse"></div>
                <span className="font-semibold">Canlı Destek: 7/24 Aktif</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;