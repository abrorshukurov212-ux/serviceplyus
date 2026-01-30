# ServicePlyus - Product Requirements Document

## Original Problem Statement
Create a responsive, SEO-optimized service website for a gas boiler repair master.

**Website Details:**
- Name: ServicePlyus
- Domain: serviceplyus.uz
- Service Area: Tashkent city only
- Working Hours: 24/7
- Language: Uzbek (O'zbek tili)
- Color Scheme: Blue and white (trust, professional)

## User Personas
1. **Homeowners** - Need urgent boiler repairs, looking for reliable service
2. **Property Managers** - Need regular maintenance for multiple units
3. **New Boiler Owners** - Need installation and setup services

## Architecture & Technology Stack
- **Frontend**: React with React Router, Shadcn UI components, Tailwind CSS
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Deployment**: Supervisor-managed services

## What's Been Implemented (December 30, 2025)

### ✅ Phase 1: Frontend with Mock Data (Completed - Dec 30, 2025)

#### Pages Created:
1. **Home Page** (`/`)
   - Hero section with CTAs
   - Advantages section (4 key benefits)
   - Popular boiler brands grid (14 brands)
   - Trust & CTA section with statistics
   - **✅ Fully bilingual (UZ/RU)**

2. **About Page** (`/about`)
   - Company description
   - Features list (6 points)
   - Why choose us section (3 reasons)
   - Process workflow (4 steps)
   - **✅ Fully bilingual (UZ/RU)**

3. **Services Page** (`/services`)
   - 5 service cards with images
   - What's included section
   - Pricing information
   - CTA sections
   - **✅ Fully bilingual (UZ/RU)**

4. **Contact Page** (`/contact`)
   - Contact form (Name + Phone only)
   - Contact information cards
   - Social media links
   - Quick call section
   - **✅ Fully bilingual (UZ/RU)**

5. **14 Individual Boiler Brand Pages** (`/katyollar/:slug`)
   - Dynamic routing for all brands:
     * Airfel, Akfa, Atlantic, Baxi, Baymak, Ferroli, Rulls
     * Kiturami, Unit, Viessmann, Everel, Thermona, Navien, Orbek
   - Each page includes:
     * Brand-specific hero section
     * Description (Russian translations provided)
     * Common problems (4 per brand in both languages)
     * Services offered
     * Image gallery (6 images)
   - **✅ Fully bilingual (UZ/RU) with Russian descriptions**

#### Components:
- **Navbar**: Sticky navigation with dropdown for boiler brands + **Language Switcher (UZ | RU)**
- **Footer**: Contact info, quick links, social media
- **Mobile Responsive**: Hamburger menu for mobile devices with language switcher

### ✅ Phase 2: Russian Language Support (Completed - Dec 30, 2025)

#### Language Infrastructure:
- **Translation System**: Complete UZ/RU translations in `/app/frontend/src/data/translations.js`
- **Language Context**: React Context API with localStorage persistence
- **Language Switcher**: Globe icon in navbar showing current language (UZ | RU)
- **Persistence**: Selected language saved and maintained across page navigation
- **SEO-Ready**: Document lang attribute updates automatically

#### Translation Coverage:
- ✅ All navigation menus
- ✅ All page titles and headings
- ✅ All body content and descriptions  
- ✅ All buttons and CTAs
- ✅ All form labels and placeholders
- ✅ All footer content
- ✅ 14 boiler brand pages with Russian descriptions
- ✅ All common problems lists in Russian

#### Features:
- Professional stock images integrated
- Uzbek & Russian language content
- Blue & white color scheme
- SEO-friendly structure (H1 tags, meta descriptions ready)
- Phone click-to-call functionality (tel: links)
- Placeholder social media links
- Toast notifications (Sonner)
- Language switcher with Globe icon
- localStorage language persistence

#### Mock Data:
- All data stored in `/app/frontend/src/data/mock.js`
- Contact form submissions simulated
- 14 boiler brands with detailed information

## Core Requirements (Static)

### Functional Requirements:
1. Mobile-first responsive design
2. SEO optimization (meta tags, H1, alt text)
3. Fast loading performance
4. 24/7 contact availability display
5. Clear call-to-action buttons
6. Professional image integration

### Non-Functional Requirements:
1. Page load time < 3 seconds
2. Mobile compatibility (all screen sizes)
3. Browser compatibility (Chrome, Firefox, Safari)
4. Accessible design (WCAG guidelines)

## Prioritized Backlog

### P0 Features (Next Phase):
1. **Backend API Development**
   - Contact form submission endpoint
   - Telegram bot integration for form data
   - MongoDB models for submissions
   - Backend validation

2. **Telegram Bot Setup**
   - User needs to provide Bot Token
   - User needs to provide Chat ID
   - Form submissions sent to Telegram
   - Instructions provided for bot creation

### P1 Features (Future):
1. **SEO Enhancement**
   - Meta tags for all pages
   - Open Graph tags
   - Sitemap.xml generation
   - robots.txt configuration

2. **Analytics Integration**
   - Google Analytics
   - Conversion tracking
   - Call tracking

3. **Performance Optimization**
   - Image optimization
   - Code splitting
   - Lazy loading

### P2 Features (Optional):
1. **Additional Functionality**
   - Russian language support
   - Live chat integration
   - Customer testimonials section
   - Before/after repair gallery
   - Blog section for SEO
   - Service area map

2. **Admin Panel**
   - View form submissions
   - Manage content
   - Update pricing

## Next Tasks

### Immediate Next Steps:
1. **Backend Implementation**
   - Create contact form API endpoint (`POST /api/contact`)
   - Set up MongoDB model for form submissions
   - Implement Telegram bot integration (user to provide credentials)
   - Add error handling and validation

2. **Frontend-Backend Integration**
   - Connect contact form to API
   - Remove mock data
   - Add proper error handling
   - Show success/error messages

3. **Testing**
   - Test all pages on mobile devices
   - Test contact form submission
   - Test Telegram bot integration
   - Cross-browser testing

4. **SEO Setup**
   - Add meta tags to all pages
   - Create sitemap
   - Set up robots.txt
   - Optimize images with proper alt text

5. **Deployment Preparation**
   - Environment variables setup
   - Production build testing
   - Domain configuration instructions

## Technical Notes

### API Contracts (To Be Implemented):

#### Contact Form Submission:
```
POST /api/contact
Body: {
  "name": "string",
  "phone": "string"
}
Response: {
  "success": boolean,
  "message": "string"
}
```

### Telegram Bot Integration:
- Bot Token: To be provided by user
- Chat ID: To be provided by user
- Message format: "🆕 Yangi ariza\n\nIsm: {name}\nTelefon: {phone}\n\nSana: {timestamp}"

### Environment Variables Needed:
```
# Backend
TELEGRAM_BOT_TOKEN=<user_to_provide>
TELEGRAM_CHAT_ID=<user_to_provide>
MONGO_URL=<already_configured>
DB_NAME=serviceplyus

# Frontend
REACT_APP_BACKEND_URL=<already_configured>
```

## Files Structure

### Frontend:
- `/app/frontend/src/App.js` - Main app with routing
- `/app/frontend/src/components/Navbar.jsx` - Sticky navigation
- `/app/frontend/src/components/Footer.jsx` - Footer component
- `/app/frontend/src/pages/Home.jsx` - Homepage
- `/app/frontend/src/pages/About.jsx` - About page
- `/app/frontend/src/pages/Services.jsx` - Services page
- `/app/frontend/src/pages/Contact.jsx` - Contact page
- `/app/frontend/src/pages/BoilerBrandPage.jsx` - Dynamic boiler pages
- `/app/frontend/src/data/mock.js` - Mock data (to be replaced with API)

### Backend:
- `/app/backend/server.py` - Main FastAPI application

## Success Metrics

### Primary KPIs:
1. **Call Conversions**: Phone calls generated from website
2. **Form Submissions**: Contact form completions
3. **Page Load Speed**: < 3 seconds
4. **Mobile Traffic**: > 60% mobile users
5. **Bounce Rate**: < 50%

### SEO Metrics:
1. Google ranking for "katyol ta'mirlash Toshkent"
2. Organic traffic growth
3. Local search visibility

---

**Last Updated**: December 30, 2025
**Status**: Phase 1 Complete (Frontend with Mock Data)
**Next Phase**: Backend Development & Integration
