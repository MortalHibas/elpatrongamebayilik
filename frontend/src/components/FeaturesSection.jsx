import React from 'react';
import { Bot, Database, Search, Settings } from 'lucide-react';
import { featuresData } from '../data/mock';

const iconMap = {
  Bot: Bot,
  Database: Database,
  Search: Search,
  Settings: Settings
};

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#101828] to-[#0f1220]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {featuresData.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Profesyonel bayilik deneyimi için ihtiyacınız olan her şey
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {featuresData.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              
              return (
                <div 
                  key={index}
                  className="group p-8 bg-gradient-to-br from-[#1a1f35]/50 to-[#101828]/50 border border-[#00C6FF]/10 rounded-3xl backdrop-blur-sm transition-all duration-500 hover:border-[#00C6FF]/30 hover:shadow-2xl hover:shadow-[#00C6FF]/10 hover:transform hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00C6FF]/20 to-[#00FF7F]/20 border border-[#00C6FF]/30 rounded-2xl transition-all duration-300 group-hover:from-[#00C6FF]/30 group-hover:to-[#00FF7F]/30 group-hover:border-[#00C6FF]/50 group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-[#00C6FF] group-hover:text-[#00FF7F] transition-colors duration-300" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00C6FF] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Hover Effect Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FF]/5 to-[#00FF7F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              );
            })}
          </div>
          
          {/* Bottom Call-to-Action */}
          <div className="text-center mt-20">
            <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-[#00C6FF]/5 to-[#00FF7F]/5 border border-[#00C6FF]/20 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white">
                Bu Araçları Hemen Kullanmaya Başlayın
              </h3>
              <p className="text-gray-400 text-lg max-w-lg">
                7 günlük ücretsiz deneme ile tüm özellikleri keşfedin
              </p>
              <div className="flex items-center gap-3 text-[#00FF7F]">
                <div className="w-3 h-3 bg-[#00FF7F] rounded-full animate-pulse"></div>
                <span className="font-semibold">Kurulum: 5 dakika</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;