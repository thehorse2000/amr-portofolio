# Design Theme: Brutalist Journal

## Core Philosophy
The "Brutalist Journal" theme is a high-contrast, bold, and unapologetic design system that combines the raw aesthetic of Brutalist architecture with the structured layout of a technical journal or broadsheet newspaper. It prioritizes clarity, hierarchy, and a strong sense of "built" structure.

## Key Principles
1.  **Zero Radius:** No rounded corners. Everything is sharp and rectangular to emphasize structure.
2.  **Thick Borders:** 4px and 8px borders (using `foreground` color) define sections and components, acting as the primary layout tool.
3.  **Hard Shadows:** No soft blurs. Shadows are hard-offset (e.g., `4px 4px 0px 0px`) to create a 3D "layered paper" effect.
4.  **Oversized Typography:** Headers use extreme scales (7xl to 10xl) with tight letter spacing to make a bold statement.
5.  **High Contrast:** A restricted color palette focused on black, white, and a single high-energy accent (Yellow).

## Visual Language

### Color Palette
- **Background:** `#f0f0f0` (Light Mode) / `#0a0a0a` (Dark Mode)
- **Foreground:** `#000000` (Light Mode) / `#fafafa` (Dark Mode)
- **Card Surface:** `#ffffff` (Light Mode) / `#171717` (Dark Mode)
- **Primary Accent:** `#facc15` (Light Yellow) / `#eab308` (Dark Gold)
- **Muted:** Low-saturation greys for secondary text and backgrounds.

### Typography
- **Headings:** `Geist Mono` or `Geist Sans`, Black (900) weight, Uppercase, Tracking-tighter.
- **Body:** `Geist Sans`, Bold or Medium weight.
- **Accents:** Monospaced fonts for technical data points (clocks, stats, labels).

## Component Standards

### Buttons
- **Shape:** `rounded-none`
- **Border:** `border-4`
- **Shadow:** `shadow-brutalist` (4px offset)
- **Interactions:** On hover/active, the shadow disappears and the button translates by the same offset (`translate-x-[2px] translate-y-[2px]`) to simulate a physical press.

### Cards
- **Structure:** `border-4`, `shadow-brutalist-lg` (8px offset).
- **Header:** Separated from content by a `border-b-4`.
- **Content:** Generous padding with uppercase `CardTitle`.

### Badges
- **Style:** Small, `rounded-none`, `border-2`, uppercase, with a small 2px hard shadow.

## Layout System
- **Navbar:** Fixed at the top with a thick `border-b-8`.
- **Sidebar:** Navigation links use bold borders and yellow backgrounds when active.
- **Grid:** Content is organized into rigid blocks, often separated by heavy lines.

## Technical Implementation (Tailwind)
```css
.shadow-brutalist {
  @apply shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)];
}

.border-brutalist {
  @apply border-4 border-foreground;
}
```
