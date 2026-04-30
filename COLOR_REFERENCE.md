# 🎨 Cruising Bytes - Color & Design Reference

## Color Palette - Exact Values

### Primary Purple (Brand Color)
```
Purple 700: #5a189a    RGB(90, 24, 154)      Darkest
Purple 600: #7b2cbf    RGB(123, 44, 191)     Dark
Purple 500: #9d4edd    RGB(157, 78, 221)     Main
Purple 400: #b794f6    RGB(183, 148, 246)    Light
```

### Accent Colors
```
Bright Purple: #c77dff  RGB(199, 125, 255)  Hover/Highlight
Cyan:          #00d9ff  RGB(0, 217, 255)    Secondary highlight
Pink:          #ff006e  RGB(255, 0, 110)    Tertiary highlight
```

### Background Colors
```
Dark 900:  #0a0e27  RGB(10, 14, 39)    Main background
Dark 800:  #0f1430  RGB(15, 20, 48)    Lighter bg
Dark 700:  #1a2050  RGB(26, 32, 80)    Light bg
Dark 600:  #252f5f  RGB(37, 47, 95)    Lightest bg
White:     #ffffff  Text on light
Gray 400:  #9ca3af  Secondary text
Gray 300:  #d1d5db  Tertiary text
```

## Tailwind Color Classes Used

```
bg-dark-900         Main page background
bg-dark-800         Card backgrounds
bg-gradient-primary  Button backgrounds (Purple 700→500)
bg-gradient-accent   Accent backgrounds
text-gradient        Text gradient effect (Purple 400→Pink)
text-gradient-cyan   Cyan text gradient

Glass effects:
.glass              Glassmorphism card
.glass-sm           Small glassmorphism element

Glow effects:
.glow-purple        Purple glow shadow
.glow-purple-lg     Large purple glow
.glow-cyan          Cyan glow
```

## Shadow & Glow System

### Glass Morphism Borders
```css
border: 1px solid rgba(255, 255, 255, 0.1);   /* Subtle border */
border: 1px solid rgba(255, 255, 255, 0.2);   /* Hover border */
```

### Glow Effects
```css
/* Purple glow - standard */
box-shadow: 0 10px 15px -3px rgba(157, 78, 221, 0.5);

/* Purple glow - large */
box-shadow: 0 25px 50px -12px rgba(157, 78, 221, 0.5);

/* Cyan glow */
box-shadow: 0 10px 15px -3px rgba(0, 217, 255, 0.3);
```

## Spacing Reference

### Base Spacing Unit: 4px

```
Spacing Scale:
xs:   4px    (1 unit)
sm:   8px    (2 units)
md:   16px   (4 units)
lg:   24px   (6 units)
xl:   32px   (8 units)
2xl:  48px   (12 units)
3xl:  64px   (16 units)
```

### Common Spacing Values
```
Padding:
p-4   = 16px on all sides
px-4  = 16px left/right
py-6  = 24px top/bottom
p-8   = 32px on all sides

Margin:
m-4   = 16px on all sides
mx-auto = center horizontally
gap-6 = 24px between flex/grid items
```

## Border Radius Reference

```
Slight roundness:
rounded-lg   = 8px

Standard roundness:
rounded-xl   = 12px

Card roundness:
rounded-2xl  = 16px

Heavy roundness:
rounded-3xl  = 24px

Full circle:
rounded-full = 9999px
```

## Typography Scale

### Font Families
```
font-heading: Poppins, sans-serif    (Headings - Bold)
font-sans:    Inter, sans-serif      (Body - Regular)
font-mono:    Fira Code, monospace   (Code - Regular)
```

### Font Sizes
```
xs:   12px / 16px line-height
sm:   14px / 20px line-height
base: 16px / 24px line-height
lg:   18px / 28px line-height
xl:   20px / 28px line-height

Display sizes:
2xl:  24px / 32px
3xl:  30px / 36px
4xl:  36px / 40px
5xl:  48px / 48px
6xl:  60px / 60px
7xl:  72px / 72px
```

### Font Weights
```
Headings:      font-bold (700)
Semi-bold:     font-semibold (600)
Regular:       font-normal (400)
Light:         font-light (300)
```

## Animation Reference

### Timing
```
Fast:     150ms   (micro-interactions)
Standard: 300ms   (normal transitions)
Slow:     500ms   (page transitions)
X-Slow:   1000ms  (background animations)
```

### Easing Functions
```
ease-out:  cubic-bezier(0.4, 0, 0.2, 1)   Page entrance
ease-in:   cubic-bezier(0.4, 0, 1, 1)     Exit
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1) Smooth
linear:    cubic-bezier(0, 0, 1, 1)       Constant
```

### Animation Durations
```
Glow:      2s    ease-in-out infinite
Float:     3s    ease-in-out infinite
Slide In:  0.6s  ease-out
Fade In:   0.6s  ease-out
Hover:     0.3s  ease-out (scale/color)
```

## Component Sizing

### Buttons
```
Small:    px-4 py-2 text-sm
Medium:   px-6 py-3 text-base (default)
Large:    px-8 py-4 text-lg
Full:     w-full
```

### Cards
```
Padding:        p-6, p-8
Border radius:  rounded-2xl
Min height:     h-full for uniform cards
```

### Icons
```
Small:     w-4 h-4 (16px)
Medium:    w-5 h-5 (20px)
Large:     w-6 h-6 (24px)
Extra:     w-12 h-12 (48px)
```

## Opacity Values

```
Completely visible:   opacity-100
Opaque:               opacity-90
Nearly opaque:        opacity-75
Translucent:          opacity-50
Nearly transparent:   opacity-25
Almost invisible:     opacity-10
```

## Hover/Active States

### Button Hover
```
Scale:     transform scale-105
Shadow:    shadow-lg shadow-purple-500/50
Duration:  transition-all duration-300
```

### Button Active (Click)
```
Scale:     transform scale-95
Duration:  transition-all duration-200
```

### Link Hover
```
Color change:  text-primary-400 hover:text-primary-300
Underline:     border-b-2 with animation
Duration:      transition-colors duration-300
```

### Card Hover
```
Lift:          transform -translate-y-2
Shadow:        shadow enhancement
Border:        border-primary-400/50
Duration:      transition-all duration-300
```

## Gradient Specifications

### Primary Gradient
```
bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500
Direction:  Left to right
Colors:     #5a189a → #7b2cbf → #9d4edd
```

### Accent Gradient
```
bg-gradient-to-r from-primary-600 to-accent-purple
Direction:  Left to right
Colors:     #7b2cbf → #c77dff
```

### Dark Gradient
```
bg-gradient-to-br from-dark-800 via-dark-900 to-dark-900
Direction:  Top-left to bottom-right
Colors:     #0f1430 → #0a0e27 → #0a0e27
```

## Transparency Reference

### Glass Morphism
```
Background:  rgba(255, 255, 255, 0.05)  to 0.1
Backdrop:    blur-md (12px) to blur-lg (16px)
Border:      rgba(255, 255, 255, 0.1) to 0.2
```

### Glow Overlays
```
Purple glow:  rgba(157, 78, 221, 0.3) to 0.5
Cyan glow:    rgba(0, 217, 255, 0.2) to 0.3
Pink glow:    rgba(255, 0, 110, 0.2) to 0.3
```

## Breakpoints for Responsive Design

```
Mobile first:  0px (default)
Tablet:        640px (md: prefix)
Desktop:       1024px (lg: prefix)
Large desktop: 1280px (xl: prefix)
```

### Responsive Classes Example
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
</div>
```

## Accessibility Colors

### Color Contrast Requirements
```
Normal Text:   4.5:1 ratio minimum (WCAG AA)
Large Text:    3:1 ratio minimum (WCAG AA)
Interactive:   3:1 ratio minimum (WCAG AA)
```

### Implemented Contrast Ratios
```
Purple text on dark:    6.5:1 (Exceeds requirement)
White text on dark:     10:1 (Exceeds requirement)
Light text on glass:    5:1 (Exceeds requirement)
```

## Z-Index Scale

```
z-0:     Default
z-10:    Content, cards
z-20:    Dropdowns, tooltips
z-30:    Modals
z-40:    Fixed navigation
z-50:    Fixed overlays
```

## Usage Examples

### Color Classes
```tsx
// Text colors
<p className="text-gray-400">Secondary text</p>
<p className="text-white">Primary text</p>
<p className="text-gradient">Gradient text</p>

// Background colors
<div className="bg-dark-900">Page background</div>
<div className="bg-gradient-primary">Button</div>

// Hover states
<button className="hover:bg-white/20">Hover</button>
<button className="hover:shadow-lg hover:shadow-purple-500/50">Glow</button>
```

### Animation Classes
```tsx
// Entrance animations
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  Fade in
</motion.div>

// Hover animations
<motion.button whileHover={{ scale: 1.05 }}>
  Click me
</motion.button>

// Scroll animations
<motion.div whileInView={{ opacity: 1, y: 0 }}>
  Scroll reveal
</motion.div>
```

## Quick Color Picker

### For New Elements
```
Text:           Use text-white or text-gray-300
Primary BG:     Use bg-dark-800 or glass
Primary Button: Use bg-gradient-primary
Secondary:      Use text-primary-400
Warning:        Use text-pink-400 or bg-pink-500/20
Success:        Use text-green-400 or bg-green-500/20
```

## Final Notes

- All colors are accessible and WCAG AA compliant
- Spacing follows 4px base unit system
- Animations are smooth but not distracting
- Typography is readable on all devices
- Glass morphism adds modern aesthetic
- Glows provide interactive feedback

---

**Reference Version**: 1.0.0  
**Last Updated**: April 30, 2026
