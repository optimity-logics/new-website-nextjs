# Customization Guide

## How to Adjust Animations

### Change Animation Speed

**Float Animation:**
```css
.animate-float {
  animation: float 6s ease-in-out infinite;
  /* Change 6s to your preferred duration */
}
```

**Glow Animation:**
```css
.animate-glow {
  animation: glow 3s ease-in-out infinite;
  /* Change 3s to your preferred duration */
}
```

### Adjust Hover Effects

**Card Lift Height:**
```css
.card-hover-effect:hover {
  transform: translateY(-8px) scale(1.02);
  /* Change -8px to adjust lift height */
  /* Change 1.02 to adjust scale */
}
```

**Button Scale:**
```css
hover:scale-105  /* Change to scale-110 for more dramatic */
active:scale-95  /* Change to scale-90 for more feedback */
```

## Color Customization

### Gradient Colors
```jsx
bg-gradient-to-r from-[#1A6AA3] to-[#02ADE1]
/* Replace with your brand colors */
```

### Glow Colors
```jsx
style={{ background: 'radial-gradient(circle, rgba(2,173,225,0.4) 0%, transparent 70%)' }}
/* Change rgba values for different glow colors */
```

## Timing Adjustments

### Transition Duration
```css
transition-all duration-300  /* Fast */
transition-all duration-500  /* Medium */
transition-all duration-700  /* Slow */
```

### Framer Motion Delays
```jsx
transition={{ duration: 0.6, delay: 0.2 }}
/* Adjust delay for stagger effects */
```

## Disable Specific Effects

### Remove Float Animation
```jsx
// Remove this class
className="animate-float"
```

### Remove Glow Effect
```jsx
// Remove this div
<div className="absolute inset-0 animate-glow" />
```

### Disable Hover Scale
```css
/* Remove or comment out */
hover:scale-105
```
