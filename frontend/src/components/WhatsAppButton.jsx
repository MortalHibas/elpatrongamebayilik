import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import useSettings from '../hooks/useSettings';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { settings } = useSettings();

  const handleClick = () => {
    const whatsappNumber = settings?.whatsappNumber || "905551234567";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Merhaba,%20Valorant%20bayilik%20sistemi%20hakkında%20bilgi%20almak%20istiyorum.`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-16 h-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      >
        {/* WhatsApp Icon */}
        <svg 
          className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>

        {/* Pulse Effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
        
        {/* Hover Tooltip */}
        <div className={`absolute right-full mr-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}>
          <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm font-semibold relative">
            Canlı Destek
            {/* Arrow */}
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
          </div>
        </div>
      </button>
      
      {/* Floating notification badge */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF4D4D] text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
        !
      </div>
    </div>
  );
};

export default WhatsAppButton;