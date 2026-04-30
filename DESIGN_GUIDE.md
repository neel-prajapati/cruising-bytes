# Cruising Bytes - Design System & Style Guide

## Color Palette

### Primary Colors
- **Dark Background**: `#0a0e27` - Main background color
- **Dark 800**: `#0f1430`
- **Dark 700**: `#1a2050`
- **Dark 600**: `#252f5f`

### Accent Colors
- **Primary Purple 700**: `#5a189a` - Primary brand color
- **Primary Purple 600**: `#7b2cbf`
- **Primary Purple 500**: `#9d4edd`
- **Primary Purple 400**: `#b794f6`
- **Accent Purple**: `#c77dff`
- **Accent Cyan**: `#00d9ff`
- **Accent Pink**: `#ff006e`

## Typography

### Font Stack
- **Headings**: `Poppins` - Bold, Modern
- **Body**: `Inter` - Clean, Readable
- **Code**: `Fira Code` - Monospace

### Font Sizes
- **Display (H1)**: 48-72px (responsive)
- **Heading 2 (H2)**: 36-48px
- **Heading 3 (H3)**: 24-32px
- **Body Text**: 16-18px
- **Small Text**: 12-14px

## Component Styles

### Glassmorphism
- Backdrop blur: `8px` (md), `12px` (lg)
- Background: `rgba(255, 255, 255, 0.05)` to `rgba(255, 255, 255, 0.1)`
- Border: `1px solid rgba(255, 255, 255, 0.1)` to `rgba(255, 255, 255, 0.2)`
- Border radius: `16px` to `24px`

### Button States
- **Default**: Gradient background with subtle shadow
- **Hover**: Enhanced shadow, slight scale increase (1.05)
- **Active**: Scale down (0.95)
- **Focus**: Purple glow outline

### Spacing Scale
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px
- `3xl`: 64px

## Animations

### Transition Timing
- **Fast**: 150ms (micro-interactions)
- **Standard**: 300ms (normal transitions)
- **Slow**: 500ms-1000ms (page transitions)

### Easing Functions
- **Entrance**: `cubic-bezier(0.4, 0, 0.2, 1)` - easeOut
- **Exit**: `cubic-bezier(0.4, 0, 1, 1)` - easeInOut

### Key Animations
- **Glow**: 2s ease-in-out infinite
- **Float**: 3s ease-in-out infinite
- **Slide In**: 0.6s ease-out
- **Fade In**: 0.6s ease-out

## Shadow System

### Glow Effects
- **Purple Glow**: `shadow-lg shadow-purple-500/50`
- **Large Glow**: `shadow-2xl shadow-purple-500/50`
- **Cyan Glow**: `shadow-lg shadow-cyan-400/30`

### Elevations
- **Level 1**: `0 10px 15px -3px rgba(0, 0, 0, 0.1)`
- **Level 2**: `0 20px 25px -5px rgba(0, 0, 0, 0.2)`
- **Level 3**: `0 25px 50px -12px rgba(0, 0, 0, 0.25)`

## Responsive Design

### Breakpoints
- **Mobile**: 0px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

### Mobile-First Approach
- All styles default to mobile
- Use `@media (min-width: ...)` for larger screens
- Padding: 16px on mobile, 24px on tablet, 32px on desktop

## Accessibility

### Color Contrast
- Text should maintain 4.5:1 contrast ratio with backgrounds
- Interactive elements should have 3:1 minimum contrast

### Focus States
- All interactive elements have visible focus states
- Use outline with 2px offset for keyboard navigation

### Motion
- Respect `prefers-reduced-motion` for animations
- Provide pause controls for auto-playing content

## Usage Guidelines

### When to Use Glassmorphism
- Navigation bars
- Information cards
- Modal overlays
- Section backgrounds

### When to Use Gradients
- Hero sections
- CTA buttons
- Text emphasis
- Backgrounds for visual interest

### When to Use Animations
- Page entrance/exit
- Hover states
- Loading states
- Success/error feedback

## Performance Considerations

- Use `will-change` sparingly for animated elements
- Prefer `transform` and `opacity` for animations
- Use lazy loading for images
- Optimize SVG graphics
- Enable hardware acceleration with `translate3d`

## Dark Mode

The entire website is designed for dark mode. Light mode is not supported to maintain the premium, modern aesthetic.

## Brand Voice

- Modern and professional
- Confident but approachable
- Forward-thinking and innovative
- Results-oriented

---

*Last updated: 2026-04-30*
