# Section Header Enhancements

## SectionHeader Component

### Before

```jsx
<div className={`flex flex-col gap-5 ${className}`}>
  <h2
    className={`font-opt text-[44px] ${isSectionDark ? 'text-white' : 'text-primary'}`}
  >
    {headingText}
  </h2>
  <p className={`${isSectionDark ? 'text-white/40' : 'text-optDesc'}`}>
    {descriptionText}
  </p>
</div>
```

### After

```jsx
<div className={`animate-fadeInUp flex flex-col gap-5 ${className}`}>
  <h2
    className={`transition-all duration-500 hover:scale-105 ${isSectionDark ? 'text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'text-primary'}`}
  >
    {headingText}
  </h2>
  <p
    className={`animate-fadeInUp transition-colors duration-300 ${isSectionDark ? 'text-white/60 hover:text-white/80' : 'text-optDesc hover:text-primary'}`}
  >
    {descriptionText}
  </p>
</div>
```

## New Features

### 1. Fade In Animation

- Entire section fades in
- Slides up from below

### 2. Heading Hover

- Scales to 105% on hover
- Smooth transition

### 3. Dark Mode Glow

- White text gets drop shadow
- Creates depth on dark backgrounds

### 4. Description Hover

- Color intensifies on hover
- Smooth color transition
