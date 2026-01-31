# ServicePlyus - Multi-Page Website PRD

## Original Problem Statement
Transform ServicePlyus single-page website into a comprehensive multi-page website to compete with local competitors. The goal is to create a market-leading boiler repair service website in Tashkent, Uzbekistan.

## User Personas
1. **Homeowners** - Need reliable boiler repair services in Tashkent
2. **Business owners** - Need urgent 24/7 boiler repair for commercial properties
3. **Uzbek and Russian speaking users** - Full bilingual support required

## Core Requirements
### Completed ✅
- Multi-page website structure with navbar dropdowns
- 8 service pages with detailed information
- 14 boiler brand pages
- Pricing page with service price table
- Blog page structure
- Full bilingual support (Uzbek/Russian)
- Telegram lead form integration
- Mobile responsive design
- Language switcher functionality

## What's Been Implemented

### December 2024 - Multi-Page Upgrade
- **Navbar Overhaul**: Added dropdown menus for Services (8 items) and Boilers (14 brands)
- **Service Pages** (`/xizmatlar/:slug`):
  - diagnostika - Katyol diagnostikasi
  - tozalash - Katyol tozalash va texnik xizmat
  - uch-klapan - Uch yo'nalishli klapan ta'mirlash
  - turbina - Turbina ta'mirlash
  - issiqlik-almashgich - Issiqlik almashinuvchi almashtirish
  - bosim-sensori - Bosim sensori almashtirish
  - manostat - Manostat almashtirish
  - shoshilinch - Shoshilinch ta'mirlash 24/7
- **Pricing Page** (`/narxlar`): All services with prices in table format
- **Blog Page** (`/blog`): Article listings with categories
- **Translations**: Full UZ/RU support for all new pages in `translations.js`

### Previous Implementation
- Homepage with hero section, trust signals, pricing cards, testimonials
- Enhanced lead form with Telegram integration
- Boiler brand pages (`/katyollar/:slug`) for all 14 brands
- About, Services, Contact pages

## Tech Stack
- **Frontend**: React, React Router, TailwindCSS, Shadcn/UI
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Integrations**: Telegram Bot API

## File Structure
```
/app
├── backend/
│   ├── server.py          # FastAPI with /api/lead endpoint
│   └── .env               # BOT_TOKEN, CHAT_ID
└── frontend/src/
    ├── components/
    │   ├── Navbar.jsx     # Dropdown menus
    │   ├── EnhancedLeadForm.jsx
    │   └── ui/            # Shadcn components
    ├── pages/
    │   ├── ServicePage.jsx   # Dynamic service pages
    │   ├── PricingPage.jsx   # Price table
    │   └── BlogPage.jsx      # Blog listings
    ├── data/
    │   ├── translations.js   # All UZ/RU text
    │   └── mock.js          # Services, brands data
    └── contexts/
        └── LanguageContext.jsx
```

## API Endpoints
- `GET /api/` - Health check
- `POST /api/lead` - Submit lead form (sends to Telegram)
- `GET /api/status` - Status checks

## Routes
- `/` - Homepage
- `/about` - About page
- `/services` - Services overview
- `/xizmatlar/:slug` - Individual service pages
- `/narxlar` - Pricing page
- `/blog` - Blog page
- `/katyollar/:slug` - Boiler brand pages
- `/contact` - Contact page

## Test Results
- Backend: 16/16 tests passed (100%)
- Frontend: All UI tests passed (100%)
- Language switching: Working
- Lead form + Telegram: Working

## Prioritized Backlog

### P0 - Critical (None)
All critical features implemented

### P1 - High Priority
- SEO meta tags for each page (unique titles/descriptions)
- Individual blog article pages with full content
- More testimonials (expand to 7-10)

### P2 - Medium Priority
- Service area map integration
- FAQ section on service pages
- Before/after gallery for repairs
- WhatsApp integration option

### P3 - Low Priority
- Online booking calendar
- Price calculator tool
- Customer login portal
- Reviews from Google/Yandex integration
