# Optimity Logics - Next.js Web Application

A comprehensive Next.js 15 web application for Optimity Logics, a software development and consulting company. This modern, responsive website showcases services, portfolio, team information, and provides client engagement tools.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Yarn package manager

### Installation & Development

```bash
# Install dependencies
yarn install

# Start development server with Turbopack
yarn run dev

# Build for production
yarn run build

# Start production server
yarn run start
```

### Environment Variables

Create `.env.local` file with:

```bash
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
SLACK_WEBHOOK_URL=your_slack_webhook_url
```

## 📁 Project Structure

### Pages (`src/app/`)

| Route                     | Component                         | Purpose                                                                         |
| ------------------------- | --------------------------------- | ------------------------------------------------------------------------------- |
| `/`                       | `page.tsx`                        | **Home Page** - Hero section, services showcase, industries, testimonials, FAQs |
| `/about`                  | `about/page.tsx`                  | **About Us** - Company info, team, expertise, values, benefits                  |
| `/our-work`               | `our-work/page.tsx`               | **Portfolio** - Case studies with category filtering                            |
| `/our-work/[workdetails]` | `our-work/[workdetails]/page.tsx` | **Project Details** - Individual project showcase                               |
| `/careers`                | `careers/page.tsx`                | **Careers** - Job listings, benefits, company culture                           |
| `/contact-us`             | `contact-us/page.tsx`             | **Contact** - Contact form, location, details                                   |
| `/schedule-a-call`        | `schedule-a-call/page.tsx`        | **Schedule Call** - Google Calendar integration                                 |
| `/privacy-policy`         | `privacy-policy/page.tsx`         | **Privacy Policy** - Legal privacy information                                  |
| `/sitemap`                | `sitemap/page.tsx`                | **Sitemap** - Site structure                                                    |
| `/[service]`              | `[service]/page.tsx`              | **Dynamic Services** - 50+ service pages                                        |

### API Routes (`src/app/api/`)

| Endpoint               | Method | Purpose                                           |
| ---------------------- | ------ | ------------------------------------------------- |
| `/api/contact`         | POST   | Contact form submission with reCAPTCHA validation |
| `/api/project-inquiry` | POST   | Project inquiry form with Slack integration       |

## 🧩 Components Architecture

### Layout Components (`src/components/layout/`)

- **`Layout.tsx`** - Root layout wrapper with conditional navbar/footer
- **`navbar/NavBar.tsx`** - Sticky navigation with mega menu, scroll detection
- **`navbar/MegaMenu.tsx`** - Dropdown menu for services, solutions, technologies
- **`footer/Footer.tsx`** - Footer with links, social media, testimonials
- **`footer/InquireForm.tsx`** - Footer inquiry form
- **`footer/Review.tsx`** - Client testimonials carousel
- **`footer/SocialMedia.tsx`** - Social media links

### Page Components (`src/components/pages/`)

- **`HomePageV2.tsx`** - Complete home page with hero, expertise, industries
- **`AboutUs.tsx`** - About page with team, process, expertise showcase
- **`OurWork.tsx`** - Portfolio with advanced filtering (category/subcategory)
- **`Career.tsx`** - Careers page with job listings and benefits
- **`ContactUs.tsx`** - Contact page with form and Mapbox integration
- **`AllPageContent.tsx`** - Reusable content component for service pages
- **`Solution.tsx`** - Dynamic solution pages
- **`HireUs.tsx`** - Team augmentation and hiring pages
- **`ProjectDetails.tsx`** - Individual project detail pages

### UI Components (`src/components/ui/`)

- **`Button.tsx`** - Reusable button with multiple variants
- **`Container.tsx`** - Max-width container wrapper
- **`HeroSectionHeading.tsx`** - Hero sections with heading, description, CTA
- **`SectionHeader.tsx`** - Section titles and descriptions
- **`FaqsAccordion.tsx`** - FAQ accordion with animations
- **`ClientTestimonial.tsx`** - Testimonials carousel with Swiper
- **`Contact.tsx`** - Contact section component
- **`Spinner.tsx`** - Loading spinner animations

### Common Components (`src/components/common/`)

- **`AnimatedArrow.tsx`** - Animated arrow icons with hover effects
- **`GoogleCaptcha.tsx`** - Google reCAPTCHA wrapper component
- **`OurWorkCard.tsx`** - Portfolio project cards
- **`ProcessCard.tsx`** - Process step cards with animations
- **`ProjectCard.tsx`** - Project showcase cards

### Form Components (`src/components/contact/`)

- **`ContactUsForm.tsx`** - Main contact form with validation
- **`ProjectInquiry.tsx`** - Project inquiry form
- **`MapboxMap.tsx`** - Interactive map with Mapbox GL

### Home Page Components (`src/components/homePage/`)

- **`HomePageV2.tsx`** - Main home page component
- **`Faqs.tsx`** - FAQ section with accordion
- **`LogoAnimation.tsx`** - Animated client logo carousel

### Modals & Drawers (`src/components/model-&-Drawer/`)

- **`Drawer.tsx`** - Custom drawer component
- **`MenuSidebar.tsx`** - Mobile navigation sidebar
- **`ParentModal.tsx`** - Modal wrapper component
- **`MarqueeWrapper.tsx`** - Marquee animation wrapper

## 🎨 Content & Data Structure

### Page Data Registry (`src/components/utils/page-data/`)

**Central Registry**: `page-registry.ts` - Maps all routes to their respective data

#### Service Categories:

- **Application Development** (`services/applicationDevelopment/`)

  - Web App Development
  - Mobile App Development
  - App Modernization
  - Game Development
  - MVP Development
  - SaaS Development
  - Software Development

- **Digital Transformation** (`services/digitalTransformation/`)

  - Software Product Development
  - UI/UX Design
  - Digital Marketing
  - Quality Engineering
  - CTO Services
  - Dedicated Development Teams

- **Data & AI** (`services/dataAndAI/`)
  - Data Science
  - Machine Learning
  - Artificial Intelligence
  - Robotic Process Automation
  - Computer Vision
  - Generative AI

#### Solution Categories:

- **Industry Expertise** (`solution/IndustryExpertise/`)

  - Education Solutions
  - Finance & Banking
  - Healthcare Solutions
  - Logistics & Transportation
  - Real Estate
  - Retail & E-commerce

- **Custom Solutions** (`solution/customSolutions/`)

  - Cloud Computing
  - DevOps Services
  - On-Demand Applications
  - Product Prototyping

- **Business Scales** (`solution/businessScales/`)
  - Startup Solutions
  - Enterprise Solutions

#### Technology Stack (`technology/`)

- **Mobile**: Flutter, Android, React Native, iOS, Swift
- **Frontend**: Angular, React, Vue.js, Svelte, JavaScript, Next.js
- **Backend**: Go, Laravel, Node.js, PHP, Python, Django, FastAPI
- **Trending**: Tailwind CSS, TypeScript
- **CMS**: WordPress, Shopify, Webflow
- **DevOps**: AWS, Docker, Kubernetes

#### Team Hiring (`hireTeam/`)

- **Mobile Developers**: Android, iOS, Flutter, React Native
- **Frontend Developers**: React, Angular, Vue, Next.js, JavaScript
- **Backend Developers**: Node.js, Python, PHP, Laravel, Django
- **Data & AI**: AI Developers, Data Scientists, ML Engineers
- **Specialized**: UI/UX Designers, DevOps Engineers, Software Architects

### Constants & Utilities (`src/components/utils/`)

- **`Constant.ts`** - Global constants (logos, menu data, industries, benefits)
- **`helper/ChunkArray.ts`** - Array chunking utility
- **`helper/formatTechName.ts`** - Technology name formatting
- **`seo/MetaData.ts`** - SEO metadata generation
- **`seo/TitleAndDescription.ts`** - SEO titles and descriptions

## 🎯 Key Features

### 1. **Dynamic Service System**

- **50+ Service Pages** generated from single template
- Centralized data management in `page-registry.ts`
- Type-safe data structures with TypeScript
- SEO-optimized with dynamic metadata

### 2. **Advanced Form Handling**

- **Contact Forms** with Formik + Yup validation
- **Google reCAPTCHA** integration for security
- **Slack Webhook** integration for notifications
- **International Phone** input with country selection
- **File Upload** capabilities

### 3. **Responsive Design System**

- **Mobile-First** approach with Tailwind CSS
- **Custom Breakpoints**: sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl
- **Custom Fonts**: Opt (primary), DM Sans (secondary)
- **Consistent Spacing** and typography scale

### 4. **Advanced Animations**

- **Framer Motion** for complex animations
- **Scroll-triggered** animations with Intersection Observer
- **Parallax Effects** on hero sections
- **Marquee Animations** for logo carousels
- **Swiper Carousels** for testimonials and projects

### 5. **Smart Navigation**

- **Mega Menu** with categorized services
- **Mobile Hamburger** menu with smooth drawer
- **Scroll Direction** detection for navbar visibility
- **Conditional Rendering** (hidden on specific routes)

### 6. **SEO Optimization**

- **Dynamic Metadata** generation per page
- **Open Graph** tags for social sharing
- **Structured Data** markup
- **XML Sitemap** generation
- **Blog Redirects** to external domain

### 7. **Performance Features**

- **Next.js 15** with Turbopack for fast development
- **Image Optimization** with Next.js Image component
- **Lazy Loading** for images and components
- **Code Splitting** and dynamic imports
- **Loading Skeletons** for better UX

## 🛠 Technology Stack

### Core Framework

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Utility-first CSS framework

### Styling & Animation

- **Styled Components** - CSS-in-JS for complex styling
- **Framer Motion** - Advanced animations and gestures
- **Swiper** - Touch-enabled carousels and sliders
- **React Fast Marquee** - Smooth marquee animations

### UI Components

- **NextUI** - Modern React UI library (accordion, tabs)
- **React Modal** - Accessible modal dialogs
- **React Modern Drawer** - Smooth drawer component
- **React Star Ratings** - Interactive rating component

### Forms & Validation

- **Formik** - Form state management
- **Yup** - Schema validation
- **React Google reCAPTCHA** - Bot protection
- **React International Phone** - International phone input
- **React Country State City** - Location selection

### Maps & Location

- **Mapbox GL** - Interactive maps
- **Custom Markers** and styling

### Notifications & Feedback

- **React Toastify** - Toast notifications
- **React Loading Skeleton** - Loading states
- **Custom Spinners** - Loading indicators

### Development Tools

- **ESLint** - Code linting with strict rules
- **Prettier** - Code formatting
- **Husky** - Git hooks for quality control
- **Lint-staged** - Pre-commit linting

## 📱 Content Structure & Pages

### Home Page Content

```typescript
// Hero Section
- Animated heading with badge
- Compelling description
- CTA button with link
- Tech stack animation

// Expertise Section
- Service categories with icons
- Hover animations
- Links to service pages

// Industries Section
- Industry cards with images
- Industry-specific solutions
- Case study links

// Projects Showcase
- Featured project cards
- Category filtering
- Project detail links

// Testimonials
- Client testimonials carousel
- Star ratings
- Client logos

// FAQ Section
- Accordion-style FAQs
- Smooth animations
- Comprehensive Q&A
```

### Service Page Template

```typescript
// AllPageContent.tsx structure:
- Hero section with tech image
- Development services overview
- "Why Choose Us" tabbed section
- Development process timeline
- Technology stack showcase
- Related case studies
- FAQ section specific to service
- Contact CTA section
```

### Portfolio Structure

```typescript
// OurWork.tsx features:
- Category filtering (Web, Mobile, AI/ML, etc.)
- Subcategory filtering
- Project cards with images
- Case study descriptions
- External links to live projects
- Responsive grid layout
```

## 🔧 Development Scripts

```bash
# Development
yarn run dev              # Start dev server with Turbopack
yarn run build           # Build for production
yarn run start           # Start production server

# Code Quality
yarn run lint            # Run ESLint
yarn run lint:fix        # Fix ESLint issues
yarn run lint:strict     # Strict TypeScript linting
yarn run format          # Format with Prettier
yarn run check-format    # Check Prettier formatting

# Git Hooks
yarn run prepare         # Setup Husky git hooks
```

## 📊 SEO & Analytics

### Meta Tags Structure

```typescript
// Dynamic metadata per page
export const metadata: Metadata = {
  title: 'Service Name | Optimity Logics',
  description: 'Service description for SEO',
  openGraph: {
    title: 'Service Name',
    description: 'OG description',
    url: 'https://optimitylogics.com/service',
    images: ['/images/og-image.jpg'],
  },
};
```

### Structured Data

- Service schema markup
- Organization schema
- Breadcrumb navigation
- FAQ schema for FAQ sections

## 🔒 Security Features

- **reCAPTCHA v2** for form protection
- **Environment variable** protection
- **Input validation** with Yup schemas
- **XSS protection** with React's built-in sanitization
- **HTTPS enforcement** in production

---
