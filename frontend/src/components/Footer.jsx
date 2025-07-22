import React from 'react';
import { footerData } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0a0d14] to-[#101828] border-t border-[#00C6FF]/10">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00C6FF] to-[#00FF7F] bg-clip-text text-transparent mb-4">
                  {footerData.companyName}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {footerData.description}
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href={footerData.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-[#25D366]/20 to-[#25D366]/10 border border-[#25D366]/30 rounded-xl flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 group"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                
                <a 
                  href={footerData.contact.telegram}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-gradient-to-r from-[#0088CC]/20 to-[#0088CC]/10 border border-[#0088CC]/30 rounded-xl flex items-center justify-center text-[#0088CC] hover:bg-[#0088CC] hover:text-white transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="m9.417 15.181-.397-.131-.964-2.06-4.32-1.43C3.318 11.398 3.309 11.115 3.724 10.908L21.036 3.43c.426-.167.818-.069.932.338l-2.395 11.501c-.166.439-.406.534-.813.31l-3.676-2.71-1.774 1.706c-.194.195-.36.357-.738.357z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Hızlı Linkler</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-[#00C6FF] transition-colors duration-300">
                    Bayilik Paketleri
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-[#00C6FF] transition-colors duration-300">
                    Özellikler
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-[#00C6FF] transition-colors duration-300">
                    Sıkça Sorulan Sorular
                  </a>
                </li>
                <li>
                  <a href="/admin" className="text-gray-400 hover:text-[#00C6FF] transition-colors duration-300">
                    Admin Panel
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">İletişim</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#00FF7F] rounded-full animate-pulse"></div>
                  <span className="text-gray-400">7/24 Canlı Destek</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#00C6FF] rounded-full animate-pulse"></div>
                  <span className="text-gray-400">Ortalama Yanıt: 2 dk</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#FF4D4D] rounded-full animate-pulse"></div>
                  <span className="text-gray-400">Türkçe Destek</span>
                </div>
              </div>
              
              {/* Trust Badge */}
              <div className="p-4 bg-gradient-to-r from-[#00C6FF]/10 to-[#00FF7F]/10 border border-[#00C6FF]/20 rounded-xl">
                <div className="text-sm font-semibold text-[#00C6FF] mb-1">
                  ✅ Güvenilir Bayi Sistemi
                </div>
                <div className="text-xs text-gray-400">
                  2+ yıldır binlerce bayiye hizmet veriyoruz
                </div>
              </div>
            </div>
          </div>
          
          {/* Legal Links & Copyright */}
          <div className="border-t border-[#00C6FF]/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-6">
                <a 
                  href="/terms" 
                  className="text-gray-400 hover:text-[#00C6FF] transition-colors duration-300 text-sm"
                >
                  {footerData.legal.terms}
                </a>
                <a 
                  href="/privacy" 
                  className="text-gray-400 hover:text-[#00C6FF] transition-colors duration-300 text-sm"
                >
                  {footerData.legal.privacy}
                </a>
              </div>
              
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} {footerData.companyName}. Tüm hakları saklıdır.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;