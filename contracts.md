# API Contracts - El Patron Game Valorant Bayilik Sistemi

## Mocked Data Currently Used

### Frontend Mock Data (mock.js)
- `heroData` - Ana sayfa başlık ve alt başlık metinleri
- `problemSolutionData` - Problem-çözüm karşılaştırma verileri
- `howItWorksData` - 3 adımda nasıl çalışır verileri
- `featuresData` - Özellikler showcase verileri
- `pricingData` - Paket fiyatlandırma bilgileri
- `faqData` - Sık sorulan sorular
- `finalCtaData` - Son çağrı bölümü verileri
- `footerData` - Footer bilgileri
- `adminData` - Admin panel ayarları

## Backend API Endpoints to Implement

### 1. Site Settings API
```
GET /api/settings
POST /api/settings

Response Schema:
{
  "popularPackageIndex": number,
  "whatsappNumber": string,
  "heroBackgroundImage": string,
  "ctaBackgroundImage": string,
  "showDiscounts": boolean,
  "discountText": string,
  "finalDiscountText": string
}
```

### 2. Package Management API
```
GET /api/packages
PUT /api/packages/:packageType

Response Schema:
{
  "basic": {"buttonLink": string},
  "orta": {"buttonLink": string},
  "luks": {"buttonLink": string}
}
```

### 3. Legal Texts API
```
GET /api/legal
PUT /api/legal

Response Schema:
{
  "terms": string,
  "privacy": string
}
```

### 4. Content Management API
```
GET /api/content
PUT /api/content/:section

Sections: hero, problemSolution, howItWorks, features, pricing, faq, finalCta, footer
```

## Database Models Required

### Settings Model
```javascript
{
  _id: ObjectId,
  popularPackageIndex: Number,
  whatsappNumber: String,
  heroBackgroundImage: String,
  ctaBackgroundImage: String,
  showDiscounts: Boolean,
  discountText: String,
  finalDiscountText: String,
  createdAt: Date,
  updatedAt: Date
}
```

### PackageLinks Model
```javascript
{
  _id: ObjectId,
  basic: String,
  orta: String,
  luks: String,
  createdAt: Date,
  updatedAt: Date
}
```

### LegalTexts Model
```javascript
{
  _id: ObjectId,
  terms: String,
  privacy: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Content Model (for dynamic content)
```javascript
{
  _id: ObjectId,
  section: String, // hero, features, pricing, etc.
  content: Object, // JSON content specific to section
  createdAt: Date,
  updatedAt: Date
}
```

## Frontend Integration Changes

### 1. Replace Mock Data
- Remove direct imports from `mock.js`
- Create API service functions for data fetching
- Implement loading states and error handling

### 2. Admin Panel Integration
- Connect all form submissions to POST/PUT endpoints
- Add success/error notifications
- Implement real-time preview updates

### 3. Landing Page Integration
- Fetch data on component mount
- Implement loading spinners
- Add error fallbacks to mock data

## Error Handling
- All API responses should include proper HTTP status codes
- Frontend should gracefully fallback to mock data on API failures
- Admin panel should show clear error messages

## Authentication (Future)
- Admin panel will need authentication middleware
- JWT token-based authentication for admin endpoints
- Protected routes for admin panel access

## Performance Considerations
- Implement caching for frequently accessed content
- Use React Query or SWR for data fetching and caching
- Consider CDN for image assets

## Next Steps
1. Implement MongoDB models and connection
2. Create CRUD endpoints for each data type
3. Replace frontend mock data with API calls
4. Add proper error handling and loading states
5. Test all admin panel functionality