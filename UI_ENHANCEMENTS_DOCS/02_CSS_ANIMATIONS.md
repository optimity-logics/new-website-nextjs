# CSS Animations & Keyframes

## New Animation Keyframes Added

### 1. Float Animation

```css
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}
```

**Usage:** Applied to hero images and robot illustrations
**Duration:** 6 seconds
**Effect:** Smooth up and down floating motion

### 2. Glow Animation

```css
@keyframes glow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(2, 173, 225, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(2, 173, 225, 0.6);
  }
}
```

**Usage:** Applied to hero elements and featured images
**Duration:** 3 seconds
**Effect:** Pulsing glow effect

### 3. Shimmer Animation

```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
```

**Usage:** Text effects and loading states
**Effect:** Sliding shine effect

### 4. Fade In Up

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Usage:** Section headers and content blocks
**Duration:** 0.8 seconds
**Effect:** Fade in while sliding up

### 5. Scale In

```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

**Usage:** Cards and images
**Duration:** 0.6 seconds
**Effect:** Zoom in with fade

### 6. Border Gradient

```css
@keyframes borderGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```

**Usage:** Animated borders
**Duration:** 3 seconds
**Effect:** Moving gradient border

### 7. Float Card

```css
@keyframes floatCard {
  0%,
  100% {
    transform: translateY(0px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
}
```

**Usage:** Work cards on hover
**Duration:** 2 seconds
**Effect:** Floating with shadow change

## Utility Classes

- `.animate-float` - Applies floating animation
- `.animate-glow` - Applies glow effect
- `.animate-fadeInUp` - Applies fade in up animation
- `.animate-scaleIn` - Applies scale in animation
- `.text-shimmer` - Applies shimmer text effect
- `.card-float` - Applies card floating on hover
