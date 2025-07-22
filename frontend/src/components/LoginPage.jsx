import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Lock, Eye, EyeOff, Shield } from 'lucide-react';
import { authAPI } from '../services/api';

const LoginPage = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await authAPI.login(password);
      localStorage.setItem('admin_token', response.access_token);
      onLogin(response.access_token);
    } catch (err) {
      console.error('Login failed:', err);
      setError('Şifre hatalı! Varsayılan şifre: kebeli123');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#101828] to-[#0f1220] flex items-center justify-center p-6">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FF]/5 via-transparent to-[#00FF7F]/5"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#00C6FF]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#00FF7F]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <Card className="bg-[#1a1f35]/80 border-[#00C6FF]/20 backdrop-blur-sm shadow-2xl">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-[#00C6FF]/20 to-[#00FF7F]/20 rounded-full">
                <Shield className="w-10 h-10 text-[#00C6FF]" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-[#00C6FF] to-[#00FF7F] bg-clip-text text-transparent">
              Admin Panel Girişi
            </CardTitle>
            <p className="text-gray-400 mt-2">El Patron Game Yönetim Paneli</p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Admin Şifresi
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Şifrenizi girin"
                    className="bg-[#101828] border-[#00C6FF]/20 text-white focus:border-[#00C6FF] pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#00C6FF] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {/* Default Password Info */}
              <div className="p-4 bg-[#00C6FF]/5 border border-[#00C6FF]/20 rounded-xl">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#00C6FF] mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#00C6FF] mb-1">
                      Varsayılan Giriş Bilgileri
                    </h4>
                    <p className="text-xs text-gray-400 mb-2">
                      İlk kurulum için varsayılan şifre:
                    </p>
                    <code className="text-sm bg-[#101828] px-2 py-1 rounded text-[#00FF7F] font-mono">
                      kebeli123
                    </code>
                    <p className="text-xs text-gray-500 mt-2">
                      Güvenlik için bu şifreyi değiştirmenizi öneririz
                    </p>
                  </div>
                </div>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading || !password}
                className="w-full bg-gradient-to-r from-[#00C6FF] to-[#00FF7F] hover:from-[#00A8D8] hover:to-[#00E06B] text-white font-semibold py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Giriş Yapılıyor...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 mr-2" />
                    Admin Panele Giriş
                  </>
                )}
              </Button>
            </form>

            {/* Footer Info */}
            <div className="mt-8 pt-6 border-t border-[#00C6FF]/10">
              <p className="text-center text-xs text-gray-500">
                © 2025 El Patron Game - Güvenli Admin Paneli
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;