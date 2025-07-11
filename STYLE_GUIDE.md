# Portfolio Style Guide

## 1. Theme System & CSS Variables

### Color Scheme Variables
```css
/* Dark Theme (Default) */
:root {
  --color-bg: #0c1018;
  --color-text: #e0e0e0;
  --color-card-bg: #142927;
  --color-border: #333;
  --color-accent: #384bf7;
  --color-accent-hover: #2c36a7;
  --color-footer: #142927;
  --color-footer-text: #aaa;
  --color-link-visited: #646cff;
}

/* Light Theme */
.light-theme {
  --color-bg: #fff;
  --color-text: #213547;
  --color-card-bg: #f7f8fa;
  --color-border: #d1d5db;
  --color-accent: #384bf7;
  --color-accent-hover: #2c36a7;
  --color-footer: #f7f8fa;
  --color-footer-text: #384bf7;
  --color-link-visited: #747bff;
}
```

### Theme Toggle
- **Button**: Fixed position, bottom-right corner
- **Icon**: 🌙 (dark mode) / ☀️ (light mode)
- **Size**: 48px × 48px
- **Background**: `var(--color-accent)`
- **Border radius**: 50% (circular)
- **Z-index**: 2000

## 2. Font Family
- **Primary:** `Inter, system-ui, Avenir, Helvetica, Arial, sans-serif`
- **Font Weight:**
  - Regular text: 400
  - Headings: 700 (bold)
  - Subheadings: 600

## 3. Typography

### Headings
- **h1 (Hero & Navbar):**
  - Font size: 3.5rem (hero) / 1.5rem (navbar)
  - Font weight: 700
  - Color: `var(--color-text)`
  - Text-align: center
  - Margin-bottom: 0.5rem

- **h2 (Section Titles):**
  - Font size: 2rem
  - Font weight: 700
  - Color: `var(--color-text)`
  - Border-bottom: 2px solid `var(--color-accent)`
  - Margin-bottom: 1.5rem
  - Text-align: center
  - Max-width: 700px, centered

- **h3 (Card Titles, Subsections):**
  - Font size: 1.25rem
  - Font weight: 600
  - Color: `var(--color-accent)`
  - Margin-bottom: 0.5rem
  - Text-align: center

### Paragraphs
- Font size: 1.05rem
- Color: `var(--color-text)`
- Line height: 1.6
- Margin-bottom: 1rem

### Lists
- Color: `var(--color-text)`
- List-style: disc
- Padding-left: 1.5rem
- Margin-top: 0.5rem

## 4. Navigation Bar
- **Background**: `var(--color-card-bg)`
- **Border**: 1px solid `var(--color-border)` (bottom)
- **Position**: sticky, top: 0
- **Z-index**: 1000
- **Border radius**: 0 0 10px 10px
- **Padding**: 0 5px
- **Transition**: background-color 0.3s ease, border-color 0.3s ease

### Navbar Links
- Color: `var(--color-text)`
- Hover color: `var(--color-accent)`
- Transition: all 0.3s ease
- No underline by default

## 5. Links
- Default color: `var(--color-accent)`
- Hover color: `var(--color-accent-hover)`
- Visited color: `var(--color-link-visited)`
- Font weight: 500
- No underline by default, underline on hover
- Transition: color 0.3s

## 6. Buttons
- Background: `var(--color-accent)`
- Text color: #fff
- Font weight: 600
- Border radius: 6px
- Padding: 0.5rem 1.2rem
- Box-shadow: 0 2px 8px rgba(56, 75, 247, 0.08)
- Hover: background `var(--color-accent-hover)`, box-shadow 0 4px 16px rgba(56, 75, 247, 0.15)
- Active: background #23285c
- Transition: background 0.3s, box-shadow 0.3s

### Toggle Buttons
- Same styling as regular buttons
- Include arrow: ▼ (expanded) / ▲ (collapsed)
- Arrow transition: transform 0.3s ease

## 7. Cards (Project, Experience, Achievement)
- Background: `var(--color-card-bg)`
- Border: 1px solid `var(--color-border)`
- Border radius: 10px
- Padding: 1.25rem
- Margin-bottom: 1.5rem
- Box-shadow: 0 2px 12px rgba(56, 75, 247, 0.08)
- Max-width: 700px, centered
- Transition: all 0.3s ease

### Card Content
- All text uses `var(--color-text)`
- Links use `var(--color-accent)`
- Hover effects on interactive elements

## 8. Footer
- Background: `var(--color-footer)`
- Text color: `var(--color-footer-text)`
- Font size: 1rem
- Links: `var(--color-accent)`, hover `var(--color-accent-hover)`
- Icons: 28px, vertically aligned
- Spacing: 1.5rem top/bottom padding

## 9. Contact & Social Icons
- Icon size: 40px (hero) / 28px (contact)
- Color: inherit
- GitHub icon: filter: invert(1) in dark mode, none in light mode
- Spacing: 0.5rem between icons
- Vertical alignment: middle
- Hover: transform: scale(1.1)

## 10. Section Layout
- Section padding: 1rem
- Max width: 1000px, centered
- Scroll-margin-top: 1rem (for smooth scrolling)
- Mobile: responsive padding

## 11. Responsive Design
- **Mobile (max-width: 600px)**: Reduced padding, stacked layouts
- **Tablet (max-width: 800px)**: Adjusted card widths, centered content
- **Desktop**: Full layout with max-width constraints

## 12. Transitions & Animations
- **Theme switching**: 0.3s ease transitions for colors
- **Hover effects**: 0.3s ease for interactive elements
- **Smooth scrolling**: scroll-behavior: smooth
- **Button interactions**: 0.2-0.3s ease transitions

## 13. Accent Colors
- Primary accent: `var(--color-accent)` (#384bf7)
- Secondary accent: `var(--color-accent-hover)` (#2c36a7)
- Use for: headings, links, buttons, highlights, borders

## 14. Best Practices
- **Always use CSS variables** instead of hardcoded colors
- **Test in both themes** (light and dark mode)
- **Use semantic HTML** with appropriate ARIA labels
- **Maintain consistent spacing** (1rem, 1.5rem, 2rem)
- **Ensure color contrast** meets accessibility standards
- **Use transitions** for smooth user experience

---

**Implementation Notes**
- All colors should use CSS variables for theme compatibility
- Test all components in both light and dark modes
- Maintain consistent spacing and typography hierarchy
- Use the same classes for similar elements across the site 