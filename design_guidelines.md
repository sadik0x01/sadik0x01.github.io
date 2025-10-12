# Design Guidelines: Bug Bounty Hunter Portfolio & Security Dork Tools

## Design Approach
**Selected Approach**: Hybrid - Custom Cybersecurity Aesthetic with Modern Portfolio Principles

**Justification**: This is a specialized security researcher portfolio requiring a unique hacker/cyberpunk aesthetic while maintaining professional credibility. Drawing inspiration from security-focused platforms (HackerOne, Bugcrowd) combined with modern portfolio design, enhanced with retro-futuristic terminal aesthetics.

**Key Design Principles**:
- Matrix-inspired hacker aesthetic with professional polish
- Green neon accents as primary brand color (cybersecurity tradition)
- Each tool page has distinct thematic identity while maintaining brand consistency
- Terminal/command-line UI patterns for authenticity

## Color Palette

**Dark Mode (Primary)**:
- Background Base: 5 5% 8% (deep charcoal black)
- Background Secondary: 150 10% 12% (dark green-tinted gray)
- Primary Green (Neon): 142 76% 45% (cybersecurity green #00ff41)
- Secondary Purple: 270 65% 55% (electric purple for accents)
- Text Primary: 0 0% 95% (off-white)
- Text Secondary: 142 30% 70% (muted green)
- Success/Active: 142 76% 55% (bright neon green)
- Border: 142 40% 25% (dark green borders)

**Light Mode (Secondary)**:
- Background: 0 0% 98%
- Primary: 142 60% 35% (darker green)
- Text: 0 0% 15%

**Tool Page Accent Colors**:
- Google Dorks: 217 89% 61% (vapor blue)
- GitHub Dorks: 270 65% 55% (purple glow)
- Shodan Dorks: 0 84% 55% (red alert)
- Bug Bounty: 45 93% 47% (gold/yellow reward)
- Recon: 142 76% 45% (matrix green)

## Typography

**Font Families**:
- Primary (Body/UI): 'Inter', 'Segoe UI', system-ui, sans-serif
- Display/Headings: 'Orbitron', 'Rajdhani', sans-serif (futuristic)
- Code/Technical: 'Fira Code', 'JetBrains Mono', monospace
- Accent: 'Merienda One' (for signatures/personal branding)

**Type Scale**:
- Hero Display: text-7xl font-black (Orbitron)
- Section Headings: text-4xl font-bold
- Card Titles: text-xl font-semibold
- Body: text-base
- Technical/Dorks: text-sm font-mono

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 16, 24, 32 for consistency
- Component padding: p-8
- Section spacing: py-24 (desktop), py-16 (mobile)
- Grid gaps: gap-8
- Card padding: p-6

**Container Strategy**:
- Max-width sections: max-w-7xl mx-auto
- Full-width hero with contained content: w-full with inner max-w-6xl
- Tool pages: max-w-screen-xl for more working space

## Component Library

### Navigation
- Fixed header with blur background (backdrop-blur-md bg-black/80)
- Logo: "SADIK0X01" in Orbitron with green glow effect
- Nav links with underline animation on hover
- Dark/Light mode toggle with smooth icon transition
- Mobile: Hamburger menu with slide-in drawer

### Hero Section (Homepage)
- Full viewport height (min-h-screen) with particle.js background
- Centered profile photo (circular, 200px) with subtle pulse animation and green ring glow
- Name in large Orbitron font with text-shadow glow effect
- Role tagline with typewriter animation effect
- Social icons row (8 platforms) with hover scale and green glow
- CTA button: "View Security Tools" with green gradient border

### About Section
- Two-column layout (desktop): Left text, Right animated SVG/icon
- Security-themed iconography (shield, lock, bug icons)
- Text with green highlighted keywords
- Stats counter animation on scroll

### Skills Section
- Grid layout (2 columns desktop, 1 mobile)
- Custom progress bars with green fill and glow effect
- Animated on scroll (fill from 0 to percentage)
- Each bar has icon, skill name, and percentage label

### Achievements Timeline
- Vertical timeline with green connecting line
- Company logos in circles with green border
- "Bug Reported" badges with pulse animation
- Hover reveals more details (if added later)

### Certifications
- Card grid with "Coming Soon" placeholder cards
- Lock icon with green glow
- Dashed border suggesting future content

### Security Tools Grid (Homepage Preview)
- 5 large cards in responsive grid
- Each card has unique gradient overlay matching tool theme
- Icon/logo for each tool
- Hover: Lift effect and enhanced glow
- Click: Navigate to dedicated tool page

### Dork Tool Pages Design

**Common Elements**:
- Domain input field: Terminal-style with green cursor animation
- Search button grid: Responsive columns (3-4 desktop, 1-2 mobile)
- Each button opens new tab while keeping current page open
- Button style: Outlined with tool-specific accent color, monospace text

**Google Dorks Page**:
- Vapor-wave aesthetic with blue/cyan gradients
- Grid pattern overlay background
- Buttons with cyan glow on hover

**GitHub Dorks Page**:
- Purple particle background
- GitHub octocat subtle watermark
- Purple glow effects on buttons

**Shodan Dorks Page**:
- Red alert theme with scanning line animation
- Retro CRT monitor effect
- Red monochrome buttons

**Bug Bounty Dorks Page**:
- Gold/reward theme with subtle coin/trophy icons
- Steampunk-inspired borders
- Gold shimmer on button hover

**Recon Methodology Page**:
- Matrix rain effect background
- Card-based tool categories
- Green terminal aesthetic throughout

### Writeups Section
- Large CTA button: "Visit My Medium Blog" with external link icon
- Styled as terminal command: `> open medium.com/@sadik0x01`
- Green arrow icon with bounce animation

### Contact Section
- "Don't Be Shy — Say Hi! 👋" heading
- Two-column: Form left, Contact info right
- Form fields: Terminal-style inputs with green focus state
- Submit button: Green with ripple effect
- Social media grid: All 8 platforms with icons and links

### Footer
- Simple centered text: "© 2025 Sadik0x01. Let's make the web safer together."
- robots.txt easter egg link
- Green separator line above

## Animations

**Sparingly Used**:
- Particle.js background (subtle, low opacity)
- Profile photo pulse (slow, 3s interval)
- Button hover glow/scale (quick, 200ms)
- Scroll-triggered fade-ins for sections
- Progress bar fills
- Typewriter effect for hero tagline
- Matrix rain on Recon page only

## Images

**Profile Photo**: 
- Hooded figure with laptop image (provided)
- Position: Center of hero section
- Treatment: Circular crop, 200px diameter, subtle green ring border with glow
- Animation: Gentle pulse every 3 seconds

**Background Patterns**:
- Particle.js animated background on homepage
- Grid pattern overlays on tool pages (subtle, low opacity)
- No large hero images - focus on animated backgrounds and terminal aesthetics

## Responsive Behavior

- Navigation collapses to hamburger <768px
- Skills grid: 2 cols desktop → 1 col mobile
- Tools grid: 3 cols → 2 cols → 1 col
- Dork buttons: 4 cols → 2 cols → 1 col
- Typography scales down 20% on mobile
- Particle effects reduced on mobile for performance

## Dark/Light Mode Toggle

- Smooth transition (300ms) between modes
- Toggle button: Moon/Sun icon in header
- Persistent via localStorage
- Light mode: Inverted colors, reduced glows, softer shadows
- Default: Dark mode