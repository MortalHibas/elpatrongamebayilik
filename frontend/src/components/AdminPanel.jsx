import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Settings, Package, FileText, Link, ArrowLeft, Save, Eye, Percent } from 'lucide-react';
import { pricingData } from '../data/mock';
import useSettings from '../hooks/useSettings';
import usePackageLinks from '../hooks/usePackageLinks';
import useLegalTexts from '../hooks/useLegalTexts';
import LoadingSpinner from './LoadingSpinner';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('settings');
  const [saveMessage, setSaveMessage] = useState('');
  
  // Use custom hooks for backend data
  const { settings, loading: settingsLoading, updateSettings } = useSettings();
  const { packageLinks, loading: packageLinksLoading, updatePackageLinks } = usePackageLinks();
  const { legalTexts, loading: legalTextsLoading, updateLegalTexts } = useLegalTexts();

  // Local state for form data
  const [localSettings, setLocalSettings] = useState({});
  const [localPackageLinks, setLocalPackageLinks] = useState({});
  const [localLegalTexts, setLocalLegalTexts] = useState({});

  // Update local state when backend data loads
  React.useEffect(() => {
    if (settings) {
      setLocalSettings(settings);
    }
  }, [settings]);

  React.useEffect(() => {
    if (packageLinks) {
      setLocalPackageLinks(packageLinks);
    }
  }, [packageLinks]);

  React.useEffect(() => {
    if (legalTexts) {
      setLocalLegalTexts(legalTexts);
    }
  }, [legalTexts]);

  const handleSettingChange = (key, value) => {
    setLocalSettings(prev => ({ ...prev, [key]: value }));
  };

  const handlePackageLinkChange = (packageType, value) => {
    setLocalPackageLinks(prev => ({ ...prev, [packageType]: value }));
  };

  const handleLegalTextChange = (textType, value) => {
    setLocalLegalTexts(prev => ({ ...prev, [textType]: value }));
  };

  const handleSave = async () => {
    try {
      setSaveMessage('Kaydediliyor...');
      
      // Save settings
      if (JSON.stringify(localSettings) !== JSON.stringify(settings)) {
        await updateSettings(localSettings);
      }
      
      // Save package links
      if (JSON.stringify(localPackageLinks) !== JSON.stringify(packageLinks)) {
        await updatePackageLinks(localPackageLinks);
      }
      
      // Save legal texts
      if (JSON.stringify(localLegalTexts) !== JSON.stringify(legalTexts)) {
        await updateLegalTexts(localLegalTexts);
      }
      
      setSaveMessage('Ayarlar başarıyla kaydedildi! ✅');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      console.error('Save failed:', error);
      setSaveMessage('Kaydetme başarısız oldu! ❌');
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  const goBackToSite = () => {
    window.location.href = '/';
  };

  const togglePreview = () => {
    window.open('/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#101828] to-[#0f1220]">
      {/* Header */}
      <div className="border-b border-[#00C6FF]/10 bg-[#1a1f35]/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                onClick={goBackToSite}
                variant="outline"
                size="sm"
                className="border-[#00C6FF]/30 text-[#00C6FF] hover:bg-[#00C6FF]/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Ana Sayfaya Dön
              </Button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00C6FF] to-[#00FF7F] bg-clip-text text-transparent">
                  Admin Panel
                </h1>
                <p className="text-gray-400 text-sm">El Patron Game Yönetim Paneli</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button
                onClick={togglePreview}
                variant="outline"
                size="sm"
                className="border-[#00FF7F]/30 text-[#00FF7F] hover:bg-[#00FF7F]/10"
              >
                <Eye className="w-4 h-4 mr-2" />
                Önizleme
              </Button>
              <Button
                onClick={handleSave}
                size="sm"
                className="bg-gradient-to-r from-[#00C6FF] to-[#00FF7F] hover:from-[#00A8D8] hover:to-[#00E06B] text-white"
                disabled={settingsLoading || packageLinksLoading || legalTextsLoading}
              >
                <Save className="w-4 h-4 mr-2" />
                {saveMessage || 'Kaydet'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {(settingsLoading || packageLinksLoading || legalTextsLoading) ? (
          <LoadingSpinner size="lg" text="Yükleniyor..." />
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Tab Navigation */}
          <TabsList className="bg-[#1a1f35]/50 border border-[#00C6FF]/10">
            <TabsTrigger value="settings" className="data-[state=active]:bg-[#00C6FF]/20 data-[state=active]:text-[#00C6FF]">
              <Settings className="w-4 h-4 mr-2" />
              Genel Ayarlar
            </TabsTrigger>
            <TabsTrigger value="packages" className="data-[state=active]:bg-[#00C6FF]/20 data-[state=active]:text-[#00C6FF]">
              <Package className="w-4 h-4 mr-2" />
              Paket Yönetimi
            </TabsTrigger>
            <TabsTrigger value="discounts" className="data-[state=active]:bg-[#00C6FF]/20 data-[state=active]:text-[#00C6FF]">
              <Percent className="w-4 h-4 mr-2" />
              İndirim Kontrolü
            </TabsTrigger>
            <TabsTrigger value="legal" className="data-[state=active]:bg-[#00C6FF]/20 data-[state=active]:text-[#00C6FF]">
              <FileText className="w-4 h-4 mr-2" />
              Yasal Metinler
            </TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="settings">
            <div className="grid gap-6">
              <Card className="bg-[#1a1f35]/50 border-[#00C6FF]/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Settings className="w-5 h-5 text-[#00C6FF]" />
                    Site Ayarları
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Popular Package Selection */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300">
                      En Popüler Paket
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {pricingData.packages.map((pkg, index) => (
                        <button
                          key={index}
                          onClick={() => handleSettingChange('popularPackageIndex', index)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            localSettings.popularPackageIndex === index
                              ? 'border-[#00C6FF] bg-[#00C6FF]/10 text-[#00C6FF]'
                              : 'border-[#00C6FF]/20 bg-[#1a1f35]/30 text-gray-400 hover:border-[#00C6FF]/40'
                          }`}
                        >
                          <div className="text-sm font-semibold">{pkg.name}</div>
                          <div className="text-xs opacity-75">{pkg.price}</div>
                          {localSettings.popularPackageIndex === index && (
                            <Badge className="mt-2 bg-[#00C6FF] text-white">Aktif</Badge>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Number */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300">
                      WhatsApp Numarası
                    </label>
                    <Input
                      value={localSettings.whatsappNumber || ''}
                      onChange={(e) => handleSettingChange('whatsappNumber', e.target.value)}
                      placeholder="905551234567"
                      className="bg-[#101828] border-[#00C6FF]/20 text-white focus:border-[#00C6FF]"
                    />
                    <p className="text-xs text-gray-400">
                      Ülke kodu ile birlikte, boşluk ve özel karakter olmadan
                    </p>
                  </div>

                  {/* Background Images */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-gray-300">
                        Ana Sayfa Arkaplan Görseli URL
                      </label>
                      <Input
                        value={localSettings.heroBackgroundImage || ''}
                        onChange={(e) => handleSettingChange('heroBackgroundImage', e.target.value)}
                        placeholder="https://example.com/hero-bg.jpg"
                        className="bg-[#101828] border-[#00C6FF]/20 text-white focus:border-[#00C6FF]"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-gray-300">
                        Son CTA Arkaplan Görseli URL
                      </label>
                      <Input
                        value={localSettings.ctaBackgroundImage || ''}
                        onChange={(e) => handleSettingChange('ctaBackgroundImage', e.target.value)}
                        placeholder="https://example.com/cta-bg.jpg"
                        className="bg-[#101828] border-[#00C6FF]/20 text-white focus:border-[#00C6FF]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Package Management */}
          <TabsContent value="packages">
            <div className="space-y-6">
              <Card className="bg-[#1a1f35]/50 border-[#00C6FF]/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Link className="w-5 h-5 text-[#00C6FF]" />
                    Paket Düğme Linkleri
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {Object.entries(localPackageLinks).map(([packageType, link]) => {
                    const packageName = packageType === 'basic' ? 'Basic Paket' 
                                      : packageType === 'orta' ? 'Orta Paket' 
                                      : 'Lüks Paket';
                    
                    return (
                      <div key={packageType} className="space-y-3">
                        <label className="text-sm font-medium text-gray-300">
                          {packageName} Düğme Linki
                        </label>
                        <Input
                          value={link || ''}
                          onChange={(e) => handlePackageLinkChange(packageType, e.target.value)}
                          placeholder="https://example.com/signup"
                          className="bg-[#101828] border-[#00C6FF]/20 text-white focus:border-[#00C6FF]"
                        />
                      </div>
                    );
                  })}
                  
                  <div className="mt-6 p-4 bg-[#00C6FF]/5 border border-[#00C6FF]/20 rounded-xl">
                    <h4 className="text-sm font-semibold text-[#00C6FF] mb-2">💡 İpucu</h4>
                    <p className="text-xs text-gray-400">
                      Paket linklerinizi kayıt sayfanıza, ödeme sisteminize veya özel landing sayfalarınıza yönlendirebilirsiniz.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Discount Controls */}
          <TabsContent value="discounts">
            <div className="space-y-6">
              <Card className="bg-[#1a1f35]/50 border-[#00C6FF]/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Percent className="w-5 h-5 text-[#00C6FF]" />
                    İndirim Yönetimi
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Enable/Disable Discounts */}
                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#00C6FF]/5 to-[#00FF7F]/5 border border-[#00C6FF]/20 rounded-xl">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-white">İndirim Görünürlüğü</h3>
                      <p className="text-sm text-gray-400">Sitedeki tüm indirim bölümlerini göster/gizle</p>
                    </div>
                    <Switch 
                      checked={localSettings.showDiscounts || false}
                      onCheckedChange={(checked) => handleSettingChange('showDiscounts', checked)}
                      className="data-[state=checked]:bg-[#00C6FF]"
                    />
                  </div>

                  {/* Pricing Section Discount Text */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300">
                      Fiyatlandırma Bölümü İndirim Metni
                    </label>
                    <Input
                      value={localSettings.discountText || ''}
                      onChange={(e) => handleSettingChange('discountText', e.target.value)}
                      placeholder="Özel İndirim: İlk Ay %50"
                      className="bg-[#101828] border-[#00C6FF]/20 text-white focus:border-[#00C6FF]"
                      disabled={!localSettings.showDiscounts}
                    />
                  </div>

                  {/* Final CTA Discount Text */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300">
                      Son Çağrı Bölümü İndirim Metni
                    </label>
                    <Input
                      value={localSettings.finalDiscountText || ''}
                      onChange={(e) => handleSettingChange('finalDiscountText', e.target.value)}
                      placeholder="⚡ Sınırlı Süre: İlk 100 Kayıt %50 İndirim"
                      className="bg-[#101828] border-[#00C6FF]/20 text-white focus:border-[#00C6FF]"
                      disabled={!localSettings.showDiscounts}
                    />
                  </div>

                  {/* Preview */}
                  <div className="p-4 bg-gradient-to-r from-[#101828]/50 to-[#1a1f35]/50 border border-[#00C6FF]/10 rounded-xl">
                    <h4 className="text-sm font-semibold text-[#00C6FF] mb-3">🔍 Önizleme</h4>
                    
                    {localSettings.showDiscounts ? (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 px-3 py-1 bg-[#00FF7F]/10 border border-[#00FF7F]/20 rounded-full w-fit">
                          <div className="w-3 h-3 bg-[#00FF7F] rounded-full"></div>
                          <span className="text-[#00FF7F] text-xs font-semibold">{localSettings.discountText}</span>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-r from-[#00C6FF]/5 to-[#00FF7F]/5 border border-[#00C6FF]/20 rounded-xl">
                          <div className="text-sm font-bold text-white">{localSettings.finalDiscountText}</div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-gray-400">İndirimler gizli - müşteriler herhangi bir indirim mesajı görmeyecek</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Legal Texts */}
          <TabsContent value="legal">
            <div className="space-y-6">
              <Card className="bg-[#1a1f35]/50 border-[#00C6FF]/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#00C6FF]" />
                    Yasal Metinler
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Terms of Service */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300">
                      Hizmet Şartları
                    </label>
                    <Textarea
                      value={localLegalTexts.terms || ''}
                      onChange={(e) => handleLegalTextChange('terms', e.target.value)}
                      placeholder="Hizmet şartlarınızı buraya yazın..."
                      className="bg-[#101828] border-[#00C6FF]/20 text-white focus:border-[#00C6FF] min-h-[200px]"
                    />
                  </div>

                  {/* Privacy Policy */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300">
                      Gizlilik Politikası
                    </label>
                    <Textarea
                      value={legalTexts.privacy}
                      onChange={(e) => handleLegalTextChange('privacy', e.target.value)}
                      placeholder="Gizlilik politikanızı buraya yazın..."
                      className="bg-[#101828] border-[#00C6FF]/20 text-white focus:border-[#00C6FF] min-h-[200px]"
                    />
                  </div>

                  <div className="p-4 bg-[#FF4D4D]/5 border border-[#FF4D4D]/20 rounded-xl">
                    <h4 className="text-sm font-semibold text-[#FF4D4D] mb-2">⚠️ Önemli Uyarı</h4>
                    <p className="text-xs text-gray-400">
                      Yasal metinlerinizin güncel yasal mevzuata uygun olduğundan emin olun. Bir hukuk uzmanından destek almanızı öneririz.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;