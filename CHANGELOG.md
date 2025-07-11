# Changelog

All notable changes to this project will be documented in this file.

**Note:** This changelog was formalized after initial development. Earlier entries are inferred from git commit history and may be summarized or grouped for clarity. Still learning best practices—future entries will be more detailed!

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Slightly rounded the bottom corners of the navbar for a softer look

### Added
- Added Databricks credential links to Achievements section
- Styled Databricks and competition award links in blue for consistency

## [1.1.2] - 2025-01-27
### Added
- **Smart theme system** with automatic system preference detection
- Auto-detects and follows user's system theme (light/dark mode)
- Real-time theme updates when system theme changes
- Smart button tooltips showing current theme mode
- Netlify configuration file for proper deployment settings

### Fixed
- **CRITICAL**: Fixed navbar theme switching - navbar now properly adapts to light/dark mode
- Updated all hardcoded colors in navbar to use CSS theme variables
- Fixed navbar text readability in both light and dark themes
- Added smooth transitions for navbar background and border color changes
- Fixed version number display in footer (was showing "v{version}" placeholder)
- Updated resume files to latest versions
- **Netlify deployment issues** with proper Node version and build configuration

### Changed
- Updated general typography (h1, h2, h3, p, ul) to use theme variables instead of hardcoded colors
- Improved overall theme consistency across all text elements
- Added subtle border to navbar for better visual definition in light mode
- Completely rewrote style guide to reflect current implementation with theme system
- Removed duplicate redirects file in favor of netlify.toml configuration

## [1.1.1] - 2025-01-27
### Fixed
- **CRITICAL**: Fixed navbar theme switching - navbar now properly adapts to light/dark mode
- Updated all hardcoded colors in navbar to use CSS theme variables
- Fixed navbar text readability in both light and dark themes
- Added smooth transitions for navbar background and border color changes
- Fixed version number display in footer (was showing "v{version}" placeholder)
- Updated resume files to latest versions

### Changed
- Updated general typography (h1, h2, h3, p, ul) to use theme variables instead of hardcoded colors
- Improved overall theme consistency across all text elements
- Added subtle border to navbar for better visual definition in light mode

## [1.1.0] - 2025-01-27
### Added
- Floating dark/light mode toggle button with theme persistence
- Comprehensive "Achievements" section with scholarships, competitive programming awards, ACM membership, licenses & certifications, and business innovation award
- "View More" toggle functionality for About, Experience, and Achievements sections
- AI-powered bio summarization feature with Hugging Face API integration
- Formal changelog file linked in footer
- Theme-aware styling for all new components

### Changed
- Unified icon sizes to 40px across hero and contact sections for consistency
- Improved card styling with unified max-width, centering, padding, and box shadows
- Centered and aligned all section headers (h2 and h3) with cards for visual consistency
- Limited visible cards in Experience and Achievements sections (showing 2 initially)
- Reordered About section content: teaser text with ellipsis, hidden extended content, grouped action buttons
- Updated project card links to display in blue accent color with proper hover effects
- Updated wording from "data analysis" to "data engineering" throughout site
- Removed "data science" from Contact section intro for clarity
- Styled AI summary card to use site's bright blue accent color with white text

### Fixed
- Toggle button JavaScript to correctly show/hide hidden content without hiding teaser text
- Theme persistence across page reloads
- Consistent icon colors in both dark and light modes
- All "View More" toggles now work correctly across all sections

---

## [1.0.0] - 2024-06-09
### Added
- Initial launch of portfolio website
- About, Projects, Experience, and Contact sections
- AI-powered bio summarization feature
- Versioning in footer (auto-updates from package.json)
- Changelog and style guide files

### Changed
- Unified site styling and icon sizes for consistency
- Footer layout and content for clarity and fun
- Projects section restored to manual cards for reliability

### Fixed
- Footer alignment and version display issues
- Contact and social icon sizing inconsistencies

---

## [Earlier Notable Changes] (2024-09 to 2025-05)

### May 2025
- Updated resume (May 5)

### February 2025
- Projects grammar fix (Feb 7)
- Resume fix (Feb 6)
- Footer edit (Feb 6)
- Fixed paths for Netlify deployment (Feb 6)

### December 2024
- Updated resume (Dec 20)

### November 2024
- Grammar improvements (Nov 25)
- View more button fixes (Nov 25)
- Multiple improvements: toggle for expandable sections, centered social icons, improved GitHub logo visibility, simplified JavaScript (Nov 25)
- Updated resume (Nov 12)
- Updated README.md (Nov 1)
- Refined about section, added contact icons, improved button hover styling, noted needed project section functionality (Nov 1)

### October 2024
- Fixed navbar bugs (Oct 31)
- Added logo (Oct 31)
- Navbar color tweaks (Oct 31)
- Created working skeleton for website, fixed nav and hrefs, improved fonts and project previews (Oct 31)
- Improved nav and directory clarity (Oct 30)
- Simple nav bar (Oct 30)
- Deleted index.html (Oct 30)

### September 2024
- Initial commits and project setup (Sep 19)
- Test and JSON file additions (Sep 19)

---

*For more granular details, see the git commit history. This changelog will be kept up to date for all future releases!* 