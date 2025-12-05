# Button Component Enhancements

## Updated Button Styles

### Before

```jsx
const DefaultStyle = `flex w-max items-center justify-center gap-1 rounded-[50px] border px-[14px] py-[8px] font-opt text-sm font-normal leading-4 transition-all duration-250 ease-in hover:shadow-lg`;
```

### After

```jsx
const DefaultStyle = `btn-pulse ripple-effect flex w-max items-center justify-center gap-1 rounded-[50px] border px-[14px] py-[8px] font-opt text-sm font-normal leading-4 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 active:scale-95`;
```

## New Features

### 1. Gradient Backgrounds

**Light Background:**

```css
border-transparent bg-white text-optDesc
hover:border-white hover:bg-transparent hover:text-white
hover:shadow-white/30
```

**Primary Background:**

```css
border-transparent
bg-gradient-to-r from-[#1A6AA3] to-[#02ADE1]
text-white
hover:from-[#02ADE1] hover:to-[#1A6AA3]
hover:shadow-[#1A6AA3]/40
```

**Secondary (Outline):**

```css
border-optDesc bg-transparent text-optDesc
hover:border-transparent
hover:bg-gradient-to-r hover:from-[#1A6AA3] hover:to-[#02ADE1]
hover:text-white
hover:shadow-[#1A6AA3]/30
```

### 2. Scale Effects

- **Hover:** `scale-105` (5% larger)
- **Active:** `scale-95` (5% smaller)
- Creates tactile feedback

### 3. Enhanced Shadows

- **Default:** `shadow-lg`
- **Hover:** `shadow-xl` with color tint
- **Color-matched:** Shadows match button color

### 4. Pulse Effect

```css
.btn-pulse::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition:
    width 0.6s,
    height 0.6s;
}

.btn-pulse:hover::after {
  width: 300px;
  height: 300px;
}
```

**Effect:** Expanding white circle on hover

### 5. Ripple Effect

```css
.ripple-effect:active::after {
  width: 200px;
  height: 200px;
}
```

**Effect:** Click ripple animation

## Button States

### Loading State

```jsx
{
  isLoading ? 'Submitting…' : btnName;
}
```

**Features:**

- Shows spinner icon
- Text changes to "Submitting…"
- Forced gradient background
- Disabled interaction

### Success State

```jsx
{
  isSuccess ? 'Submitted' : btnName;
}
```

**Features:**

- Shows checkmark icon
- Text changes to "Submitted"
- Green color indication

### Default State

```jsx
<AnimatedArrow hover={hover} />
```

**Features:**

- Animated arrow icon
- Responds to hover state

## Usage Examples

### Primary Button

```jsx
<Button btnName="Get Started" redirectionLink="/contact" isBackgroung={true} />
```

**Result:** Gradient background, white text

### Secondary Button

```jsx
<Button btnName="Learn More" redirectionLink="/about" isBackgroung={false} />
```

**Result:** Outline style, fills on hover

### Light Button (Dark Background)

```jsx
<Button
  btnName="Contact Us"
  redirectionLink="/contact"
  isBackgroundLight={true}
/>
```

**Result:** White background, dark text

### Form Submit Button

```jsx
<Button
  btnName="Submit"
  isButton={true}
  isLoading={isSubmitting}
  isSuccess={isSuccess}
  onClick={handleSubmit}
/>
```

**Result:** Shows loading/success states

## Transition Timings

- **Duration:** 300ms (increased from 250ms)
- **Easing:** ease-in-out (smoother than ease-in)
- **Hover delay:** Instant
- **Active feedback:** Immediate

## Accessibility

- Focus states maintained
- Keyboard navigation supported
- Disabled state prevents interaction
- ARIA-compliant (inherits from Link/button)

## Performance

- CSS-only animations (GPU accelerated)
- No JavaScript for hover effects
- Smooth 60fps transitions
- Optimized for mobile devices
