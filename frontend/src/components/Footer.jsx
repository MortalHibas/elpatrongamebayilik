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
                  href={footerData.contact.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-[#5865F2]/20 to-[#5865F2]/10 border border-[#5865F2]/30 rounded-xl flex items-center justify-center text-[#5865F2] hover:bg-[#5865F2] hover:text-white transition-all duration-300 group"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"/>
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