# Home Page Structure & Common Components

## Page Architecture

### File: `src/app/page.tsx`

```jsx
import HomePageV2 from '@/components/homePage/HomePageV2';
import { generateSEOMetadata } from '@/components/utils/MetaData';

export const metadata = generateSEOMetadata({
  title: SEO?.home?.title,
  description: SEO?.home?.description,
  og_url: 'https://optimitylogics.com',
  og_image:
    'https://optimitylogics.com/images/meta-img/optimity-logics-og-image.jpg',
});

export default function Home() {
  return <HomePageV2 />;
}
```

## Home Page Sections (HomePageV2.tsx)

### 1. Hero Section

```jsx
<div className="bg-heroBg">
  <Container>
    <HeroSectionHeading
      badgeTitle={homePageData?.baddge}
      heading={homePageData?.heroTitle}
      description={homePageData?.heroDescription}
      btnName={homePageData?.heroContactUsBtn}
      link={homePageData?.heroContactUsBtnLink}
    />
    {/* Hero Image with animations */}
  </Container>
</div>
```

### 2. Trusted Clients Section

```jsx
<Container>
  {/* Mobile: Marquee component */}
  <Marquee speed={55} pauseOnHover={true}>
    {logoIcons?.map((item) => (
      <Image src={item} />
    ))}
  </Marquee>

  {/* Desktop: LogoAnimation component */}
  <LogoAnimation logo={logos} />
</Container>
```

### 3. Our Expertise Section

```jsx
<Container>
  <SectionHeader headingText={homePageData?.ourExpertiseTitle} />
  <Swiper>
    {homePageData?.ourExpertise.map((item) => (
      <SwiperSlide>
        {/* Expertise content */}
        <Button btnName={item?.button} />
      </SwiperSlide>
    ))}
  </Swiper>
</Container>
```

### 4. Our Work Section

```jsx
<Container>
  {homePageData?.OurWork.map((item) => (
    <OurWorkCard data={item} />
  ))}
</Container>
```

### 5. AI Services Section (Dark Background)

```jsx
<div className="bg-black">
  <Container>
    <SectionHeader isSectionDark={true} />
    {/* Mobile: Horizontal scroll */}
    {/* Desktop: 3-column grid with robot in center */}
    <Image src={mobileRobot} />
  </Container>
</div>
```

### 6. Technology We Work Section

```jsx
<Container>
  <SectionHeader isSectionDark={true} />
  {/* Desktop: 6-column grid with parallax */}
  {/* Mobile: Horizontal scroll */}
  {homePageData?.technologyWeWork.map((item) => (
    <div className="tech-card-glow">
      <Image src={item?.techImg} />
    </div>
  ))}
</Container>
```

### 7. Our Industries Section

```jsx
<Container>
  <SectionHeader />
  {/* Tab buttons */}
  {homePageData?.ourIndustries.map((item) => (
    <button onClick={() => setActiveTab(item?.id)}>{item?.label}</button>
  ))}

  {/* Tab content */}
  <div>
    <h3>{currentTab?.title}</h3>
    <p>{currentTab?.description}</p>
    <Image src={currentTab?.image} />
    <Button />
  </div>
</Container>
```

### 8. Deployed Projects Section

```jsx
<Container>
  <SectionHeader />
  <Swiper navigation modules={[Autoplay, Navigation]}>
    {projectWeDone.map((item) => (
      <SwiperSlide>
        <h6>{item?.projectName}</h6>
        <Image src={item?.img} />
      </SwiperSlide>
    ))}
  </Swiper>
</Container>
```

### 9. Client Testimonials Section

```jsx
<ClientTestimonial isDark={true} />
```

### 10. FAQs Section

```jsx
<Faqs />
```

### 11. Contact Form Section

```jsx
<Container className="bg-contact">
  <div>
    <h2>{homePageData?.contactUsFormTitle}</h2>
    <p>{homePageData?.contactUsFormDescription}</p>
    <Link href={`tel:${homePageData?.contactNumber}`} />
    <Link href={`mailto:${homePageData?.contactEmail}`} />
    <SocialMedia />
  </div>
  <ProjectInquiry />
</Container>
```

### 12. Footer Section

```jsx
<Container>
  <Image src={logo} />
  <span>{homePageData?.companyLocation}</span>
</Container>
```

## Common/Reusable Components

### 1. Container Component

**File:** `src/components/ui/Container.tsx`

**Purpose:** Provides consistent max-width and padding across all sections

**Props:**

- `className` - Additional CSS classes
- `children` - Content to wrap
- `isBackground` - Applies dark background
- `styleClass` - Inline styles

**Usage:**

```jsx
<Container className="py-10">{/* Your content */}</Container>
```

**Features:**

- Max width: 1680px
- Responsive padding: 16px (mobile) to 120px (3xl)
- Centered with auto margins

---

### 2. HeroSectionHeading Component

**File:** `src/components/ui/HeroSectionHeading.tsx`

**Purpose:** Displays hero section with badge, heading, description, and CTA button

**Props:**

- `heading` - Main heading (supports HTML)
- `description` - Subheading text
- `badgeTitle` - Small badge text
- `btnName` - Button text
- `link` - Button link
- `isDark` - Dark theme variant
- `isBtnBackgroundLight` - Light button style
- Custom style props for each element

**Usage:**

```jsx
<HeroSectionHeading
  badgeTitle="New Feature"
  heading="Welcome to <span>Our Platform</span>"
  description="Build amazing things"
  btnName="Get Started"
  link="/contact"
/>
```

**Features:**

- Styled-components for HTML in heading
- Responsive text sizes
- Optional badge, description, and button
- Dark/light theme support

---

### 3. SectionHeader Component

**File:** `src/components/ui/SectionHeader.tsx`

**Purpose:** Consistent section headings throughout the page

**Props:**

- `headingText` - Section heading (supports HTML)
- `descriptionText` - Optional description
- `className` - Container classes
- `isSectionDark` - Dark theme
- `headingStyle` - Heading custom classes
- `descriptionStyle` - Description custom classes

**Usage:**

```jsx
<SectionHeader
  headingText="Our <span>Services</span>"
  descriptionText="What we offer"
  isSectionDark={false}
/>
```

**Features:**

- Fade-in animation
- Hover scale effect
- Dark/light variants
- HTML support in heading

---

### 4. Button Component

**File:** `src/components/ui/Button.tsx`

**Purpose:** Reusable button with multiple variants and states

**Props:**

- `btnName` - Button text
- `redirectionLink` - Link URL
- `isBackgroung` - Primary gradient style
- `isBackgroundLight` - Light style (for dark backgrounds)
- `isButton` - Render as button vs link
- `isLoading` - Loading state
- `isSuccess` - Success state
- `onClick` - Click handler
- `type` - Button type (submit/reset/button)

**Usage:**

```jsx
{
  /* Link button */
}
<Button btnName="Learn More" redirectionLink="/about" isBackgroung={true} />;

{
  /* Form submit button */
}
<Button
  btnName="Submit"
  isButton={true}
  isLoading={isSubmitting}
  type="submit"
/>;
```

**Features:**

- Gradient backgrounds
- Pulse and ripple effects
- Animated arrow icon
- Loading spinner
- Success checkmark
- Scale animations

---

### 5. OurWorkCard Component

**File:** `src/components/common/OurWorkCard.tsx`

**Purpose:** Display service/work cards

**Props:**

- `data` - Object with title, description, background

**Usage:**

```jsx
<OurWorkCard
  data={{
    title: 'Web Development',
    description: 'Build modern websites',
    backGrouund: 'bg-card-1',
  }}
/>
```

**Features:**

- Hover lift effect
- Scale animation
- Group hover states
- Shadow transitions

---

### 6. ClientTestimonial Component

**File:** `src/components/ui/ClientTestimonial.tsx`

**Purpose:** Display client reviews with contact CTA card

**Props:**

- `isDark` - Dark theme variant

**Usage:**

```jsx
<ClientTestimonial isDark={true} />
```

**Features:**

- 3D tilt effect on hover
- Responsive grid layout
- Decorative border lines
- Ripple effect on CTA card
- Reads data from homePageData constant

---

### 7. ProjectInquiry Component

**File:** `src/components/contact/ProjectInquiry.tsx`

**Purpose:** Contact form with validation

**Props:** None (self-contained)

**Usage:**

```jsx
<ProjectInquiry />
```

**Features:**

- Formik form management
- Yup validation
- Google reCAPTCHA
- Loading/success states
- Toast notifications
- API integration
- Responsive design

**Form Fields:**

- First Name
- Last Name
- Email
- Subject
- Description
- Captcha

---

### 8. Faqs Component

**File:** `src/components/homePage/Faqs.tsx`

**Purpose:** FAQ section with accordion

**Props:** None (self-contained)

**Usage:**

```jsx
<Faqs />
```

**Features:**

- Uses FaqsAccordion component
- Includes CTA button
- Responsive layout
- Reads data from homePageData constant

---

### 9. AnimatedArrow Component

**File:** `src/components/common/AnimatedArrow.tsx`

**Purpose:** Animated arrow icon for buttons

**Props:**

- `hover` - Boolean to trigger animation

**Usage:**

```jsx
<AnimatedArrow hover={isHovered} />
```

**Features:**

- SVG-based
- CSS animations
- Smooth transitions
- Used in Button component

---

## Data Source

All content comes from:

```jsx
import { homePageData } from '../utils/Constant';
```

This centralized data file contains:

- All text content
- Image paths
- Links
- Configuration

## Third-Party Components

### Swiper

```jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
```

**Used for:** Carousels (Expertise, Projects)

### Framer Motion

```jsx
import { motion } from 'framer-motion';
```

**Used for:** Animations throughout

### React Fast Marquee

```jsx
import Marquee from 'react-fast-marquee';
```

**Used for:** Logo scrolling

### Formik & Yup

```jsx
import { useFormik } from 'formik';
import * as Yup from 'yup';
```

**Used for:** Form handling and validation

## Component Hierarchy

```
page.tsx
└── HomePageV2
    ├── Container
    │   ├── HeroSectionHeading
    │   │   └── Button
    │   │       └── AnimatedArrow
    │   ├── Marquee / LogoAnimation
    │   ├── SectionHeader
    │   ├── Swiper
    │   │   └── Button
    │   ├── OurWorkCard
    │   ├── ClientTestimonial
    │   │   └── Button
    │   ├── Faqs
    │   │   ├── HeroSectionHeading
    │   │   ├── FaqsAccordion
    │   │   └── Button
    │   └── ProjectInquiry
    │       ├── GoogleCaptcha
    │       └── Button
    └── SocialMedia
```
