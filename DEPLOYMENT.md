# El Patron Game - Valorant Bayilik Sistemi
## Kendi Sunucunuza Kurulum Rehberi

### 📋 Sistem Gereksinimleri

#### Minimum Sistem Gereksinimleri:
- **İşletim Sistemi**: Ubuntu 20.04+ / CentOS 8+ / Debian 10+
- **RAM**: 2GB (4GB önerilen)
- **Disk**: 10GB boş alan
- **CPU**: 2 Core (4 Core önerilen)

#### Gerekli Yazılımlar:
- Node.js 18+
- Python 3.8+
- MongoDB 5.0+
- Nginx (opsiyonel, production için önerilen)
- Git

---

### 🚀 Adım 1: Sistem Hazırlığı

#### Ubuntu/Debian için:
```bash
# Sistem güncellemesi
sudo apt update && sudo apt upgrade -y

# Gerekli paketleri yükle
sudo apt install -y curl wget git nginx mongodb

# Node.js 18 kurulumu
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Python ve pip
sudo apt install -y python3 python3-pip python3-venv

# Yarn kurulumu
npm install -g yarn

# PM2 kurulumu (process manager)
npm install -g pm2
```

#### CentOS/RHEL için:
```bash
# Sistem güncellemesi
sudo yum update -y

# EPEL repository
sudo yum install -y epel-release

# Gerekli paketler
sudo yum install -y curl wget git nginx mongodb-server

# Node.js 18
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Python 3.8+
sudo yum install -y python3 python3-pip

# Yarn ve PM2
npm install -g yarn pm2
```

---

### 🗄️ Adım 2: MongoDB Kurulumu ve Yapılandırması

```bash
# MongoDB servisini başlat
sudo systemctl start mongod
sudo systemctl enable mongod

# MongoDB'ye bağlan ve veritabanı oluştur
mongo
```

MongoDB shell'de:
```javascript
// Admin kullanıcısı oluştur (opsiyonel ama önerilen)
use admin
db.createUser({
  user: "elpatron_admin",
  pwd: "güçlü_şifre_buraya",
  roles: ["userAdminAnyDatabase", "readWriteAnyDatabase"]
})

// Uygulama veritabanı oluştur
use elpatron_db
db.createUser({
  user: "elpatron_user",
  pwd: "uygulama_şifresi",
  roles: ["readWrite"]
})

exit
```

---

### 📁 Adım 3: Proje Dosyalarını İndirme

```bash
# Proje dizini oluştur
sudo mkdir -p /var/www/elpatron-game
sudo chown $USER:$USER /var/www/elpatron-game
cd /var/www/elpatron-game

# Proje dosyalarını buraya kopyalayın
# GitHub'dan klonlama (eğer repository varsa):
# git clone https://github.com/kullanici/elpatron-game.git .

# Veya ZIP dosyasından:
# unzip elpatron-game.zip
# mv elpatron-game/* .
```

---

### 🔧 Adım 4: Backend Kurulumu

```bash
cd /var/www/elpatron-game/backend

# Python sanal ortam oluştur
python3 -m venv venv
source venv/bin/activate

# Python paketlerini yükle
pip install -r requirements.txt

# .env dosyası oluştur
cat > .env << EOF
MONGO_URL=mongodb://elpatron_user:uygulama_şifresi@localhost:27017/elpatron_db
DB_NAME=elpatron_db
SECRET_KEY=elpatron-game-super-secret-key-2025-değiştirin
DEBUG=False
EOF

# Veritabanı bağlantısını test et
python -c "
from motor.motor_asyncio import AsyncIOMotorClient
import asyncio
async def test():
    client = AsyncIOMotorClient('mongodb://elpatron_user:uygulama_şifresi@localhost:27017/elpatron_db')
    db = client.elpatron_db
    result = await db.command('ping')
    print('MongoDB bağlantısı başarılı:', result)
    client.close()
asyncio.run(test())
"
```

---

### 🌐 Adım 5: Frontend Kurulumu

```bash
cd /var/www/elpatron-game/frontend

# Node.js paketlerini yükle
yarn install

# Production için .env dosyası oluştur
cat > .env << EOF
REACT_APP_BACKEND_URL=http://sunucu_ip_adresi
# Veya domain ile:
# REACT_APP_BACKEND_URL=https://yourdomain.com
EOF

# Production build
yarn build

# Build dosyalarını nginx için hazırla
sudo mkdir -p /var/www/html/elpatron
sudo cp -r build/* /var/www/html/elpatron/
sudo chown -R www-data:www-data /var/www/html/elpatron
```

---

### 🔄 Adım 6: PM2 ile Servis Yönetimi

```bash
# Backend için PM2 konfigürasyonu
cd /var/www/elpatron-game/backend

cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'elpatron-backend',
    script: 'venv/bin/python',
    args: '-m uvicorn server:app --host 0.0.0.0 --port 8001',
    cwd: '/var/www/elpatron-game/backend',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production'
    },
    log_file: '/var/log/elpatron-backend.log',
    out_file: '/var/log/elpatron-backend.out.log',
    error_file: '/var/log/elpatron-backend.err.log'
  }]
}
EOF

# PM2 ile backend'i başlat
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

---

### 🌍 Adım 7: Nginx Konfigürasyonu

```bash
# Nginx konfigürasyon dosyası oluştur
sudo tee /etc/nginx/sites-available/elpatron << EOF
server {
    listen 80;
    server_name sunucu_ip_adresi;  # Buraya IP adresinizi veya domain'inizi yazın
    
    # Frontend (React build)
    location / {
        root /var/www/html/elpatron;
        index index.html index.htm;
        try_files \$uri \$uri/ /index.html;
    }
    
    # Backend API
    location /api {
        proxy_pass http://127.0.0.1:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
    
    # Static files caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        root /var/www/html/elpatron;
        expires 1M;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Site'ı aktif et
sudo ln -s /etc/nginx/sites-available/elpatron /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Nginx'i test et ve yeniden başlat
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx
```

---

### 🔐 Adım 8: SSL Sertifikası (Opsiyonel ama Önerilen)

```bash
# Let's Encrypt kurulumu
sudo apt install certbot python3-certbot-nginx

# SSL sertifikası al (domain'inizi yazın)
sudo certbot --nginx -d yourdomain.com

# Otomatik yenileme
sudo crontab -e
# Bu satırı ekleyin:
0 12 * * * /usr/bin/certbot renew --quiet
```

---

### 🛡️ Adım 9: Güvenlik Ayarları

```bash
# Firewall ayarları
sudo ufw allow 22/tcp      # SSH
sudo ufw allow 80/tcp      # HTTP
sudo ufw allow 443/tcp     # HTTPS
sudo ufw enable

# MongoDB güvenliği
sudo tee -a /etc/mongod.conf << EOF
security:
  authorization: enabled
net:
  bindIp: 127.0.0.1  # Sadece localhost'tan erişim
EOF

sudo systemctl restart mongod
```

---

### 📊 Adım 10: İzleme ve Bakım

```bash
# Log dosyalarını izleme
pm2 logs elpatron-backend

# Sistem durumu kontrolü
pm2 status
sudo systemctl status nginx
sudo systemctl status mongod

# Günlük yedekleme scripti oluştur
sudo tee /etc/cron.daily/elpatron-backup << 'EOF'
#!/bin/bash
BACKUP_DIR="/backup/elpatron/$(date +%Y-%m-%d)"
mkdir -p "$BACKUP_DIR"

# MongoDB yedekleme
mongodump --host localhost --db elpatron_db --username elpatron_user --password uygulama_şifresi --out "$BACKUP_DIR/mongodb"

# Uygulama dosyaları yedekleme
tar -czf "$BACKUP_DIR/app-files.tar.gz" -C /var/www/elpatron-game .

# Eski yedekleri temizle (30 günden eski)
find /backup/elpatron -type d -mtime +30 -exec rm -rf {} +
EOF

sudo chmod +x /etc/cron.daily/elpatron-backup
```

---

### 🔑 Admin Panel Giriş Bilgileri

**Varsayılan Admin Şifresi**: `kebeli123`

**Admin Panel Adresi**: `http://sunucu_ip_adresi/admin`

⚠️ **ÖNEMLİ GÜVENLİK UYARISI**: 
- İlk giriş yaptıktan sonra admin şifresini değiştirin
- MongoDB şifrelerini güçlü yapın
- SSL sertifikası kullanın
- Firewall ayarlarını kontrol edin

---

### 🚨 Sorun Giderme

#### Backend çalışmıyor:
```bash
# Logları kontrol et
pm2 logs elpatron-backend

# Manuel başlat ve test et
cd /var/www/elpatron-game/backend
source venv/bin/activate
python -m uvicorn server:app --host 0.0.0.0 --port 8001
```

#### Frontend yüklenmiyor:
```bash
# Nginx logları
sudo tail -f /var/log/nginx/error.log

# Build tekrar yap
cd /var/www/elpatron-game/frontend
yarn build
sudo cp -r build/* /var/www/html/elpatron/
```

#### MongoDB bağlantı sorunu:
```bash
# MongoDB durumu
sudo systemctl status mongod

# Bağlantı testi
mongo mongodb://elpatron_user:uygulama_şifresi@localhost:27017/elpatron_db
```

---

### 📞 Destek

Kurulum sırasında sorun yaşarsanız:

1. **Log dosyalarını kontrol edin**
2. **Port durumunu kontrol edin**: `sudo netstat -tlnp | grep :8001`
3. **Disk alanı**: `df -h`
4. **RAM kullanımı**: `free -m`

---

### 🎉 Kurulum Tamamlandı!

Siteniz artık çalışır durumda! 

- **Ana Sayfa**: http://sunucu_ip_adresi
- **Admin Panel**: http://sunucu_ip_adresi/admin
- **Şifre**: kebeli123

**Başarılar! 🚀**