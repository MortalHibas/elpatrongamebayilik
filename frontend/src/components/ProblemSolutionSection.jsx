import React from 'react';
import { X, Check } from 'lucide-react';
import { problemSolutionData } from '../data/mock';

const ProblemSolutionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#101828] to-[#0f1220]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            {problemSolutionData.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Problems Side */}
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-red-400 mb-8">
                  Eski Yöntemler
                </h3>
              </div>
              
              <div className="space-y-6">
                {problemSolutionData.problems.map((problem, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 bg-red-500/5 border border-red-500/20 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-red-500/10"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-1">
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Solutions Side */}
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00C6FF] to-[#00FF7F] bg-clip-text text-transparent mb-8">
                  El Patron Game Çözümü
                </h3>
              </div>
              
              <div className="space-y-6">
                {problemSolutionData.solutions.map((solution, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#00C6FF]/5 to-[#00FF7F]/5 border border-[#00C6FF]/20 rounded-xl backdrop-blur-sm transition-all duration-300 hover:from-[#00C6FF]/10 hover:to-[#00FF7F]/10"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#00C6FF] to-[#00FF7F] rounded-full flex items-center justify-center mt-1">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-xl text-gray-400 mb-8">
              Farkı hemen keşfedin ve rekabette öne geçin!
            </p>
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-[#00C6FF]/10 to-[#00FF7F]/10 border border-[#00C6FF]/20 rounded-full">
              <div className="w-3 h-3 bg-[#00FF7F] rounded-full animate-pulse"></div>
              <span className="text-[#00C6FF] font-semibold">Sistem Şu Anda Aktif</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;