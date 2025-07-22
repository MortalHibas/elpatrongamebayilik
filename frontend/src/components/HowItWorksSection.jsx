import React from 'react';
import { Package, Wallet, Rocket } from 'lucide-react';
import { howItWorksData } from '../data/mock';

const iconMap = {
  Package: Package,
  Wallet: Wallet,
  Rocket: Rocket
};

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0f1220] to-[#101828]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {howItWorksData.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Başlamak bu kadar kolay. Hemen bugün satış yapmaya başlayın!
            </p>
          </div>
          
          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {howItWorksData.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              
              return (
                <div key={index} className="relative group">
                  {/* Connection Line */}
                  {index < howItWorksData.steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-[#00C6FF] to-[#00FF7F] opacity-30 z-0">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#00FF7F] rounded-full animate-pulse"></div>
                    </div>
                  )}
                  
                  <div className="relative z-10 text-center">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#00C6FF] to-[#00FF7F] rounded-full text-white font-bold text-2xl mb-6 transition-transform duration-300 group-hover:scale-110">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00C6FF]/10 to-[#00FF7F]/10 border border-[#00C6FF]/20 rounded-2xl transition-all duration-300 group-hover:from-[#00C6FF]/20 group-hover:to-[#00FF7F]/20 group-hover:border-[#00C6FF]/40">
                        <IconComponent className="w-10 h-10 text-[#00C6FF] group-hover:text-[#00FF7F] transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00C6FF] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Bottom Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-[#00C6FF]/5 to-[#00FF7F]/5 border border-[#00C6FF]/10 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#00C6FF] to-[#00FF7F] bg-clip-text text-transparent mb-2">
                5 DK
              </div>
              <p className="text-gray-400">Kurulum Süresi</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-[#00FF7F]/5 to-[#FF4D4D]/5 border border-[#00FF7F]/10 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#00FF7F] to-[#FF4D4D] bg-clip-text text-transparent mb-2">
                7/24
              </div>
              <p className="text-gray-400">Aktif Sistem</p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-[#FF4D4D]/5 to-[#00C6FF]/5 border border-[#FF4D4D]/10 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#FF4D4D] to-[#00C6FF] bg-clip-text text-transparent mb-2">
                ∞
              </div>
              <p className="text-gray-400">Kazanç Potansiyeli</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;