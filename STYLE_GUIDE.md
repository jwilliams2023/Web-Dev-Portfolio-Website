# Portfolio Style Guide

## 1. Font Family
- **Primary:** `Inter, system-ui, Avenir, Helvetica, Arial, sans-serif`
- **Font Weight:**
  - Regular text: 400
  - Headings: 700 (bold)

## 2. Typography
### Headings
- **h1 (Hero):**
  - Font size: 3.5rem
  - Font weight: 700
  - Color: #fff
  - Text-align: center
  - Margin-bottom: 0.5rem
- **h2 (Section Titles):**
  - Font size: 2rem
  - Font weight: 700
  - Color: #fff
  - Border-bottom: 2px solid #384bf7
  - Margin-bottom: 1.5rem
  - Text-align: left (or center for mobile)
- **h3 (Card Titles, Subsections):**
  - Font size: 1.25rem
  - Font weight: 600
  - Color: #384bf7
  - Margin-bottom: 0.5rem

### Paragraphs
- Font size: 1.05rem
- Color: #e0e0e0
- Line height: 1.6
- Margin-bottom: 1rem

## 3. Links
- Default color: #384bf7
- Hover color: #2c36a7
- Visited color: #646cff
- Font weight: 500
- No underline by default, underline on hover

## 4. Buttons
- Background: #384bf7
- Text color: #fff
- Font weight: 600
- Border radius: 6px
- Padding: 0.5rem 1.2rem
- Box-shadow: 0 2px 8px rgba(56, 75, 247, 0.08)
- Hover: background #2c36a7, box-shadow 0 4px 16px rgba(56, 75, 247, 0.15)
- Active: background #23285c

## 5. Cards (Project, Experience, etc.)
- Background: #142927
- Border: 1px solid #333
- Border radius: 10px
- Padding: 1.25rem
- Margin-bottom: 1.5rem
- Box-shadow: none (or subtle shadow for hover)

## 6. Footer
- Background: #142927
- Text color: #aaa
- Font size: 1rem
- Links: #384bf7, hover #2c36a7
- Icons: 28px, vertically aligned
- Spacing: 1.5rem top/bottom padding

## 7. Contact & Social Icons
- Icon size: 28px
- Color: inherit (use filter: invert(1) for dark mode if needed)
- Spacing: 0.5rem between icons
- Vertical alignment: middle

## 8. Section Spacing
- Section padding: 2rem top/bottom
- Max width: 1000px, centered
- Mobile: 1rem padding

## 9. Accent Color
- Primary accent: #384bf7
- Secondary accent: #2c36a7
- Use for: headings, links, buttons, highlights

## 10. Other
- Border radius for all elements: 6-10px for a modern, soft look
- Consistent margin-bottom for all blocks: 1.5rem

---

**How to Apply**
- Update your CSS variables and classes to match these values.
- Remove inline styles and use classes for all styling.
- Use the same classes for all similar elements (e.g., all buttons use `.button`, all cards use `.card`). 