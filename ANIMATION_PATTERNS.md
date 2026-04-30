# 🎬 Cruising Bytes - Animation Patterns & Specifications

## Animation System Overview

This document details all animation patterns used throughout the premium website, enabling consistency and helping developers extend animations in new sections.

---

## Global Animation Timing

### Standard Durations
```
Micro-interactions:  150ms   (micro hovers, small transitions)
Standard transitions: 300ms  (button hovers, color changes)
Smooth animations:    600ms  (entrance animations)
Extended animations:  800ms  (complex multi-step)
Slow animations:     1000ms  (dramatic entrances)
Page transitions:    1500ms  (between major sections)
Background loops:   3-16s    (continuous animations)
```

### Easing Functions
```
ease-out:          cubic-bezier(0.4, 0, 0.2, 1)      # Entrance
ease-in-out:       cubic-bezier(0.4, 0, 0.2, 1)      # Smooth
spring:            type: 'spring', stiffness: 200   # Bouncy
linear:            cubic-bezier(0, 0, 1, 1)          # Constant
custom-premium:    [0.23, 0.86, 0.39, 0.96]          # Premium feel
```

---

## Entrance Animations

### Pattern 1: Fade & Slide Up
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: [0.23, 0.86, 0.39, 0.96] }}
>
  Content
</motion.div>
```
**Used in**: Hero section, Section headers
**Duration**: 0.6-0.9s
**Stagger Delay**: 0.15s between children

### Pattern 2: Fade & Slide Right
```tsx
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```
**Used in**: About section content
**Duration**: 0.8-0.9s
**Trigger**: On scroll into view

### Pattern 3: Fade & Slide Left
```tsx
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```
**Used in**: About section right side
**Duration**: 0.9s with staggered delays

### Pattern 4: Staggered Children
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9 },
  },
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.div key={item} variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```
**Used in**: Services grid, Portfolio cards
**Stagger**: 0.1-0.15s between items
**Initial Delay**: 0.3-0.4s

---

## Hover Animations

### Pattern 1: Scale & Glow
```tsx
<motion.div
  whileHover={{ 
    scale: 1.05, 
    boxShadow: '0 25px 50px -12px rgba(157, 78, 221, 0.5)' 
  }}
  transition={{ duration: 0.3 }}
>
  Card
</motion.div>
```
**Scale Range**: 1.02 - 1.15 depending on element
**Shadow**: Purple glow with 0.3-0.5 opacity
**Duration**: 0.3s for snappy feel

### Pattern 2: Lift & Shadow
```tsx
<motion.div
  whileHover={{ y: -12, boxShadow: '0 20px 40px -12px rgba(157, 78, 221, 0.4)' }}
  transition={{ duration: 0.3 }}
>
  Card
</motion.div>
```
**Lift Amount**: 8px - 20px (higher = more dramatic)
**Used in**: Service cards, About cards, Portfolio items
**Duration**: 0.3s

### Pattern 3: Gradient Text
```tsx
<motion.h3
  className="group-hover:text-gradient"
  transition={{ duration: 0.3 }}
>
  Title
</motion.h3>
```
**CSS Class**: `.text-gradient` with gradient colors
**Transition**: 0.3s smooth color change
**Used in**: Card titles, section headings

### Pattern 4: Border Animation
```tsx
<motion.div
  className="group hover:border-primary-400/40"
  transition={{ duration: 0.3 }}
>
  Card
</motion.div>
```
**Border**: Changes from white/10 to primary-400/40
**Duration**: 0.3s
**Used in**: All premium cards

### Pattern 5: Accent Bar Reveal
```tsx
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
```
**Position**: Top of card
**Height**: 4px gradient bar
**Transition**: 0.3s opacity
**Used in**: Service cards, About cards, Portfolio cards

---

## Icon Animations

### Pattern 1: Hover Rotate
```tsx
<motion.div
  whileHover={{ rotate: 360 }}
  transition={{ duration: 0.6 }}
>
  <Icon />
</motion.div>
```
**Rotation**: Full 360° rotation
**Duration**: 0.6s
**Used in**: Navigation, badges, service icons

### Pattern 2: Hover Scale & Rotate
```tsx
<motion.div
  whileHover={{ scale: 1.15, rotate: 10 }}
  transition={{ type: 'spring', stiffness: 200 }}
>
  <Icon />
</motion.div>
```
**Scale**: 1.1 - 1.2x
**Rotate**: 10-15°
**Spring Physics**: Bouncy feel
**Used in**: Feature icons, portfolio tags

### Pattern 3: Continuous Rotation
```tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
>
  <Icon />
</motion.div>
```
**Duration**: 3s per rotation
**Repeat**: Infinite
**Used in**: Badge icons, loading states

---

## Background Element Animations

### Pattern 1: Floating X & Y
```tsx
<motion.div
  animate={{ y: [0, 50, 0], x: [0, 30, 0], rotate: [0, 45, 0] }}
  transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
/>
```
**Y Range**: 30-60px
**X Range**: 20-40px
**Rotate**: 0-45° optional
**Duration**: 8-16s (varies)
**Used in**: Background gradient orbs

### Pattern 2: Pulsing Opacity
```tsx
<motion.div
  animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
  transition={{ duration: 4, repeat: Infinity }}
/>
```
**Opacity**: 0.5 → 0.8 → 0.5
**Scale**: 1 → 1.05 → 1
**Duration**: 4s
**Used in**: Glow overlays on cards

---

## Button Animations

### Pattern 1: CTA Button
```tsx
<motion.a
  whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(157, 78, 221, 0.5)' }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: 'spring', stiffness: 200 }}
>
  Get Started
</motion.a>
```
**Hover Scale**: 1.05
**Tap Scale**: 0.98
**Shadow**: Enhanced purple glow
**Type**: Spring for bouncy feel

### Pattern 2: Arrow Animation
```tsx
<motion.div
  animate={{ x: [0, 4, 0] }}
  transition={{ duration: 1.5, repeat: Infinity }}
>
  →
</motion.div>
```
**Movement**: 4px right and back
**Duration**: 1.5s
**Used in**: CTA buttons, links

### Pattern 3: Submit Button Success
```tsx
{submitted ? (
  <span>Message Sent! ✓</span>
) : (
  <span>Send Message</span>
)}
```
**Feedback**: Text change with motion
**Duration**: Immediate feedback
**Visual**: Color/text change

---

## Scroll-Triggered Animations

### Pattern 1: Viewport Entrance
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```
**Trigger**: When element enters viewport
**Once**: Animation plays only once
**Duration**: 0.6s
**Used in**: All section content

### Pattern 2: Staggered Scroll Reveal
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: idx * 0.15 }}
  viewport={{ once: true }}
>
  Item {idx}
</motion.div>
```
**Delay**: 0.1-0.15s per item
**Used in**: Grid items, list items

---

## Complex Animation Patterns

### Pattern 1: Hero Feature Cards
```tsx
<motion.div className="flex items-start gap-4 group">
  <motion.div
    className="w-14 h-14 rounded-xl bg-gradient-primary"
    whileHover={{ rotate: 360 }}
    transition={{ duration: 0.6 }}
  >
    <Icon />
  </motion.div>
  <motion.div whileHover={{ x: 8 }}>
    <h4>Title</h4>
    <p>Description</p>
  </motion.div>
</motion.div>
```
**Sequence**: Icon rotates while text slides on hover
**Group Effect**: Both elements animate together
**Duration**: 0.6s for icon, 0.3s for text

### Pattern 2: Card Stack on Hover
```tsx
<motion.div className="glass rounded-2xl p-8">
  {/* Animated glow background */}
  <motion.div
    className="absolute -inset-4 bg-gradient opacity-50"
    animate={{ opacity: [0.5, 0.8, 0.5] }}
    transition={{ duration: 4, repeat: Infinity }}
  />
  
  {/* Content overlay that lifts */}
  <motion.div whileHover={{ y: -15 }}>
    Content
  </motion.div>
</motion.div>
```
**Layers**: Glow + card + content
**Sync**: Background pulses while card lifts
**Duration**: 4s background, 0.3s hover

---

## Performance Optimization

### Animation Best Practices Used
✅ **GPU Acceleration**: Uses `transform` and `opacity`
✅ **Will-change**: Minimal use for key animations
✅ **Reduced Motion**: Should respect `prefers-reduced-motion`
✅ **Frame Rate**: Optimized for 60fps
✅ **Duration**: Varied to avoid lockstep animations

### To Add Reduced Motion Support
```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const duration = prefersReducedMotion ? 0 : 0.6;
```

---

## Color Transitions

### Gradient Text
```css
.text-gradient {
  background: linear-gradient(to right, #b794f6, #c77dff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Shadow Colors
```
Purple glow:     rgba(157, 78, 221, 0.3-0.5)
Cyan glow:       rgba(0, 217, 255, 0.2-0.4)
Pink glow:       rgba(255, 0, 110, 0.2-0.3)
```

---

## Timing Cheat Sheet

### Quick Reference
```
Logo animation:        0.6s entrance
Nav items:            0.6s with 0.08s stagger
Hero headline:        0.9s + 0.5s delay for gradient
Services heading:     0.8s
Service cards:        0.6s with 0.1s stagger
About content:        0.9s entrance
Stats:               0.6s with animation delays
Portfolio cards:      0.6s with 0.1s stagger
CTA buttons:         0.3s hover
Icon hovers:         0.6s rotation or 0.3s scale
Background orbs:     8-16s infinite loops
Scroll reveals:      0.6-0.7s on viewport enter
```

---

## Accessibility Considerations

### Motion Settings
- Respect `prefers-reduced-motion` preference
- Provide non-animated fallback states
- Ensure animations don't distract from content
- Keep animation duration reasonable (0.3-1s ideal)

### Color Contrast
- Animation colors maintain 4.5:1 contrast
- Hover states remain visible
- Focus states clearly indicated

---

## Developer Guide: Adding New Animations

### For New Component
```tsx
// 1. Define variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// 2. Apply to elements
<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### For Scroll Animations
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Reveals on scroll
</motion.div>
```

---

## Summary Table

| Animation Type | Duration | Easing | Used Where |
|---|---|---|---|
| Entrance | 0.6-0.9s | ease-out | Page load, sections |
| Hover | 0.3s | spring/ease-out | Buttons, cards |
| Icon rotation | 0.6s | linear | Icons, badges |
| Background loop | 8-16s | ease-in-out | Orbs, effects |
| Scroll reveal | 0.6s | ease-out | Section content |
| Stagger delay | 0.1-0.15s | N/A | Grid items |

---

**Version**: 2.0  
**Last Updated**: April 30, 2026

Use this guide to maintain consistency when updating animations or adding new sections!
