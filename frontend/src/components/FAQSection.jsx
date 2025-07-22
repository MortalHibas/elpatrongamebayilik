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
                  href={footerData.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Destek
                </a>
                
                <a 
                  href={footerData.contact.telegram}
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