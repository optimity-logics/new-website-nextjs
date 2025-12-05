# Quick Reference Guide

## CSS Classes Added

| Class                 | Effect                | Usage                      |
| --------------------- | --------------------- | -------------------------- |
| `animate-float`       | Floating motion       | Hero images, illustrations |
| `animate-glow`        | Pulsing glow          | Featured elements          |
| `animate-fadeInUp`    | Fade in + slide up    | Sections, headers          |
| `animate-scaleIn`     | Scale in + fade       | Cards, images              |
| `card-hover-effect`   | Lift + scale on hover | All cards                  |
| `card-float`          | Float on hover        | Work cards                 |
| `glass-effect`        | Glassmorphism         | AI service cards           |
| `tech-card-glow`      | Glow border on hover  | Technology cards           |
| `image-hover-zoom`    | Zoom image on hover   | All images                 |
| `btn-pulse`           | Pulse effect          | All buttons                |
| `ripple-effect`       | Click ripple          | Interactive elements       |
| `tab-button-enhanced` | Animated underline    | Tab buttons                |

## Framer Motion Patterns

### Fade In

```jsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
```

### Slide Up

```jsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
```

### Scale In

```jsx
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
```

### Stagger

```jsx
transition={{ duration: 0.5, delay: index * 0.1 }}
```

## Common Hover States

```css
hover:scale-105        /* Slight scale up */
hover:shadow-xl        /* Enhanced shadow */
hover:text-lightBlue   /* Color change */
hover:-translate-y-2   /* Lift up */
group-hover:scale-110  /* Group effect */
```

## Gradient Backgrounds

```jsx
bg-gradient-to-r from-[#1A6AA3] to-[#02ADE1]
```

## Glow Effect Template

```jsx
<div className="relative">
  <YourContent />
  <div
    className="animate-glow absolute inset-0 rounded-full opacity-30 blur-3xl"
    style={{
      background:
        'radial-gradient(circle, rgba(2,173,225,0.4) 0%, transparent 70%)',
    }}
  />
</div>
```
