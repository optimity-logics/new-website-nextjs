# Framer Motion Animations

## Hero Section

### Rotating Ellipses

```jsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
>
  <Image src={ellips1} />
</motion.div>
```

**Effect:** Continuous 360° rotation
**Duration:** 20 seconds per rotation
**Variations:** Different speeds (20s, 25s, 30s, 35s) for each ellipse

### Hero Image Float

```jsx
<div className="animate-float">
  <Image src={heroImg} />
  <div
    className="animate-glow absolute inset-0 rounded-full opacity-30 blur-3xl"
    style={{
      background:
        'radial-gradient(circle, rgba(2,173,225,0.4) 0%, transparent 70%)',
    }}
  ></div>
</div>
```

**Features:**

- Floating animation
- Radial glow effect
- Blur for soft appearance

## Our Expertise Section

### Slide Animation

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  {/* Content */}
</motion.div>
```

**Features:**

- Fade in from below
- Triggers when in viewport
- Only animates once
- 0.2s delay

### List Item Stagger

```jsx
<motion.li
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: idx * 0.1 }}
>
  {/* List content */}
</motion.li>
```

**Features:**

- Slides in from left
- Staggered delay (0.1s per item)
- Sequential appearance

## Technology Cards

### Grid Cards

```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  className="tech-card-glow"
>
  {/* Card content */}
</motion.div>
```

**Features:**

- Fade in from below
- Staggered by index
- Combined with CSS glow effect

### Mobile Scroll Cards

```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: index * 0.05 }}
>
  {/* Card content */}
</motion.div>
```

**Features:**

- Scale up animation
- Faster stagger (0.05s)
- Optimized for mobile

## Industry Tabs

### Tab Buttons

```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="tab-button-enhanced"
>
  {item?.label}
</motion.button>
```

**Features:**

- Scales up on hover (105%)
- Scales down on click (95%)
- Tactile feedback

### Industry Image

```jsx
<motion.div
  key={currentTab?.id}
  initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
  animate={{ opacity: 1, scale: 1, rotate: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  <Image src={currentTab?.image} />
</motion.div>
```

**Features:**

- Fade in with scale
- Slight rotation correction
- Smooth ease-out
- Re-animates on tab change (key prop)

### Feature List

```jsx
<motion.li
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: index * 0.1 }}
  className="group"
>
  {/* List item */}
</motion.li>
```

**Features:**

- Slides in from left
- Staggered animation
- Group hover effects

## AI Services Section

### Mobile Cards

```jsx
<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  className="glass-effect group"
>
  {/* Card content */}
</motion.div>
```

**Features:**

- Horizontal slide in
- Glassmorphism effect
- Group hover states

### Desktop Cards (Left Column)

```jsx
<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.15 }}
  className="glass-effect group"
>
  {/* Card content */}
</motion.div>
```

**Features:**

- Slides from left
- Slower stagger (0.15s)
- Hover translate right

### Desktop Cards (Right Column)

```jsx
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.15 }}
  className="glass-effect group"
>
  {/* Card content */}
</motion.div>
```

**Features:**

- Slides from right
- Mirror effect of left column
- Hover translate left

### Robot Image

```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="animate-float"
>
  <Image src={mobileRobot} />
  <div className="animate-glow absolute inset-0" />
</motion.div>
```

**Features:**

- Scale in animation
- Continuous float
- Glow effect

## Deployed Projects

### Project Cards

```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="card-hover-effect group"
>
  {/* Project content */}
</motion.div>
```

**Features:**

- Scale up animation
- Group hover effects
- Gradient background transition

## Animation Best Practices

1. **viewport={{ once: true }}** - Prevents re-animation on scroll
2. **Staggered delays** - Creates sequential reveal effect
3. **Ease functions** - Natural motion feel
4. **Group hover** - Coordinated element animations
5. **Key prop** - Forces re-animation on content change
