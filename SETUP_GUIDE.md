# 🚀 Cruising Bytes Website - Quick Start Guide

## Quick Start (< 2 minutes)

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to **http://localhost:5173**

### 4. Start Editing
- Edit components in `src/components/`
- Changes will auto-reload
- Check browser console for any errors

## Build for Production
```bash
npm run build
npm run preview  # Test production build locally
```

## 📁 Quick File Reference

| File | Purpose |
|------|---------|
| `src/components/Navbar.tsx` | Navigation menu |
| `src/components/Hero.tsx` | Landing section |
| `src/components/Services.tsx` | Service cards |
| `src/components/About.tsx` | Company info |
| `src/components/Portfolio.tsx` | Projects showcase |
| `src/components/Contact.tsx` | Contact form |
| `tailwind.config.js` | Colors & spacing |
| `src/index.css` | Global styles |

## 🎨 Quick Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { 500: '#your-color' }
}
```

### Change Company Name
Search & replace "Cruising Bytes" in all components

### Add New Section
1. Create `src/components/NewSection.tsx`
2. Add to `src/App.tsx`

### Update Links
- Navigation: `src/components/Navbar.tsx`
- Footer: `src/components/Footer.tsx`

## ✅ Checklist Before Launch

- [ ] Update company name and branding
- [ ] Update contact information
- [ ] Add real project images
- [ ] Update testimonials
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Update social media links
- [ ] Set up email for contact form
- [ ] Run lighthouse audit
- [ ] Deploy to hosting

## 🔗 Useful Links

- **Development**: `http://localhost:5173`
- **Production Build**: `npm run build`
- **Documentation**: See `PROJECT_SETUP.md`
- **Design System**: See `DESIGN_GUIDE.md`

## 💡 Pro Tips

1. **Keyboard Navigation**: Test with Tab key
2. **Mobile Testing**: Use DevTools device emulation (F12)
3. **Performance**: Check Lighthouse in DevTools
4. **Accessibility**: Use axe DevTools browser extension
5. **Colors**: Use https://www.colorhexa.com to explore color variations

## ⚠️ Common Issues

**Dev server won't start?**
```bash
npm install --legacy-peer-deps --force
npm run dev
```

**Styles not updating?**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server

**Build errors?**
```bash
npm run lint
```

## 📞 Next Steps

1. Review `PROJECT_SETUP.md` for detailed documentation
2. Check `DESIGN_GUIDE.md` for design system
3. Customize components with your content
4. Test thoroughly before deployment

---

**You're all set! Happy building! 🎉**
