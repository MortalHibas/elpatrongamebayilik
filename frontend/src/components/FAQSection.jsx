import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../data/mock';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#101828] to-[#0f1220]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {faqData.title}
            </h2>
            <p className="text-xl text-gray-400">
              En sık sorulan soruları yanıtladık
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqData.questions.map((faq, index) => (
              <div 
                key={index}
                className={`border rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-gradient-to-r from-[#00C6FF]/10 to-[#00FF7F]/10 border-[#00C6FF]/30 shadow-lg'
                    : 'bg-gradient-to-r from-[#1a1f35]/30 to-[#101828]/30 border-[#00C6FF]/10 hover:border-[#00C6FF]/20'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between group focus:outline-none"
                >
                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                    openIndex === index 
                      ? 'text-[#00C6FF]'
                      : 'text-white group-hover:text-[#00C6FF]'
                  }`}>
                    {faq.question}
                  </h3>
                  
                  <div className={`flex-shrink-0 ml-4 transition-all duration-300 ${
                    openIndex === index 
                      ? 'text-[#00FF7F] rotate-180'
                      : 'text-gray-400 group-hover:text-[#00C6FF]'
                  }`}>
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </button>
                
                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6 border-t border-[#00C6FF]/10 pt-4">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Section */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-[#00C6FF]/5 to-[#00FF7F]/5 border border-[#00C6FF]/20 rounded-3xl">
              <h3 className="text-2xl font-bold text-white">
                Başka Sorunuz mu Var?
              </h3>
              <p className="text-gray-400 text-lg max-w-lg">
                7/24 canlı destek ekibimiz tüm sorularınızı yanıtlamak için burada
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://discord.gg/elpatrongame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"/>
                  </svg>
                  Discord Destek
                </a>
                
                <a 
                  href="https://t.me/elpatrongame"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#0088CC] hover:bg-[#0077B3] text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="m9.417 15.181-.397-.131-.964-2.06-4.32-1.43C3.318 11.398 3.309 11.115 3.724 10.908L21.036 3.43c.426-.167.818-.069.932.338l-2.395 11.501c-.166.439-.406.534-.813.31l-3.676-2.71-1.774 1.706c-.194.195-.36.357-.738.357z"/>
                  </svg>
                  Telegram Destek
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;