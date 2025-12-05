# Component CSS Classes

## Card Effects

### 1. Card Hover Effect

```css
.card-hover-effect {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.card-hover-effect:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
```

**Features:**

- Lifts card up by 8px
- Slightly scales up (1.02x)
- Enhanced shadow on hover
- Smooth cubic-bezier transition

### 2. Glassmorphism Effect

```css
.glass-effect {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

**Usage:** AI service cards
**Features:**

- Semi-transparent background
- Backdrop blur effect
- Subtle border

### 3. Tech Card Glow

```css
.tech-card-glow {
  position: relative;
  transition: all 0.4s ease;
}

.tech-card-glow:hover {
  transform: translateY(-5px);
}

.tech-card-glow:hover::before {
  opacity: 0.7;
}
```

**Usage:** Technology cards
**Features:**

- Gradient glow on hover
- Lifts up on hover
- Blur effect for glow

## Button Effects

### 1. Button Pulse

```css
.btn-pulse {
  position: relative;
  overflow: hidden;
}

.btn-pulse:hover::after {
  width: 300px;
  height: 300px;
}
```

**Features:**

- Expanding circle on hover
- Smooth pulse effect

### 2. Ripple Effect

```css
.ripple-effect:active::after {
  width: 200px;
  height: 200px;
}
```

**Features:**

- Click ripple animation
- Material design inspired

## Image Effects

### 1. Image Hover Zoom

```css
.image-hover-zoom {
  overflow: hidden;
  border-radius: 14px;
  transition: all 0.4s ease;
}

.image-hover-zoom:hover img {
  transform: scale(1.1) rotate(2deg);
}

.image-hover-zoom:hover {
  box-shadow: 0 15px 35px rgba(2, 173, 225, 0.3);
}
```

**Features:**

- Image scales to 110%
- Slight rotation (2 degrees)
- Enhanced shadow
- Smooth transition

## Tab Effects

### 1. Tab Button Enhanced

```css
.tab-button-enhanced::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #f38f02, #02ade1);
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.tab-button-enhanced:hover::before {
  width: 80%;
}
```

**Features:**

- Animated underline on hover
- Gradient color
- Smooth width transition

## Text Effects

### 1. Gradient Text Animated

```css
.gradient-text-animated {
  background: linear-gradient(90deg, #f38f02, #02ade1, #f38f02);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s linear infinite;
}
```

**Features:**

- Moving gradient text
- Continuous animation
- Brand colors

## Scroll Effects

### 1. Scroll Reveal

```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(50px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

**Usage:** Triggered by JavaScript on scroll
**Features:**

- Fade in on scroll
- Slide up animation
