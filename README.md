# Minima CSS Framework

> **A super-light Tailwind CSS alternative (~10.6KB gzipped, 96.5% smaller)**

[![GitHub stars](https://img.shields.io/github/stars/MML9Code/minima?style=social)](https://github.com/MML9Code/minima/stargazers)
[![GitHub license](https://img.shields.io/github/license/MML9Code/minima)](https://github.com/MML9Code/minima/blob/main/LICENSE)
[![npm version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/MML9Code/minima)
[![Size](https://img.shields.io/badge/size-~10.6KB%20gzipped-green)](https://github.com/MML9Code/minima)

Minima is a **utility-first CSS framework** that gives you the power of Tailwind-like classes without the heavy bundle size or build tooling.

## Features

* **🚀 Lightweight** - Only ~10.6KB gzipped vs Tailwind's ~300KB+ (96.5% smaller!)
* **🔧 No Build Step** - Just add the CSS file - no npm, no config, no purging required
* **📱 Mobile-First** - Responsive utilities (sm:, md:, lg:, xl:) just like Tailwind
* **🎨 Customizable** - CSS variables make it easy to override colors and spacing
* **✨ Familiar Syntax** - Same class naming conventions as Tailwind CSS
* **🌙 Dark Mode** - Built-in dark mode support
* **🧩 Pre-built Components** - Cards, alerts, badges, buttons, forms, and more

## Size Comparison

| Framework | Size (gzipped) | Comparison |
| --- | --- | --- |
| **Minima** | **~10.6KB** | 96.5% smaller |
| Tailwind CDN | ~300KB+ | 28x larger |
| Bootstrap | ~20KB | 2x larger |

## Installation

### Direct Download

Download the CSS file directly:

[Download minima.css](https://raw.githubusercontent.com/MML9Code/minima/main/minima.css) | [Download minima.min.css](https://raw.githubusercontent.com/MML9Code/minima/main/minima.min.css)

### CDN (via jsDelivr)

Use the CDN for quick prototyping:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/MML9Code/minima@latest/minima.min.css">
```

### npm

```bash
npm install minima
```

Then import in your project:

```javascript
import 'minima/minima.css';
```

Or include in your HTML:

```html
<link rel="stylesheet" href="./node_modules/minima/minima.css">
```

## Usage Examples

### Grid System

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div class="bg-primary text-white p-4 rounded">1</div>
  <div class="bg-secondary text-white p-4 rounded">2</div>
  <div class="bg-success text-white p-4 rounded">3</div>
  <div class="bg-info text-white p-4 rounded">4</div>
</div>
```

### Flexbox Layout

```html
<div class="flex flex-col md:flex-row justify-between gap-4">
  <div class="bg-white p-4 rounded shadow">Item 1</div>
  <div class="bg-white p-4 rounded shadow">Item 2</div>
  <div class="bg-white p-4 rounded shadow">Item 3</div>
</div>
```

### Card Component

```html
<div class="card max-w-md">
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p class="text-gray-600 mb-4">Card content goes here</p>
    <button class="btn btn-primary w-full">Action</button>
  </div>
</div>
```

## 🎨 Customization

Override the default colors using CSS variables:

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #6b7280;
  --color-success: #10b981;
  --color-danger: #ef4444;
  --color-warning: #f59e0b;
  --color-info: #06b6d4;
  /* ... etc */
}
```

## 🌙 Dark Mode Support

Minima supports dark mode in two ways:

### Automatic (prefers-color-scheme)

```html
<html>
  <!-- Dark mode will be automatically applied based on user preference -->
</html>
```

### Manual (.dark class)

```html
<html class="dark">
  <!-- Dark mode will be applied -->
</html>
```

## 📦 What's Included

### Layout
- Display (block, inline, flex, grid, etc.)
- Flexbox (direction, wrap, justify, align, gap)
- Grid (columns, rows, gaps, flow)
- Positioning (static, fixed, absolute, relative, sticky)
- Overflow (hidden, visible, scroll, auto)
- Z-index

### Spacing
- Margin (m-, mx-, my-, mt- mb- mr- ml-)
- Padding (p-, px- py- pt- pb- pr- pl-)
- Gap (gap-, gap-x- gap-y-)

### Sizing
- Width (w-0 to w-24, w-1/2, w-1/3, w-2/3, w-full, w-screen)
- Height (h-0 to h-24, h-1/2, h-full, h-screen)
- Min/Max width and height
- Max-width (max-w-xs to max-w-7xl, max-w-full, max-w-screen-*)

### Typography
- Text size (text-xs to text-5xl)
- Font weight (font-normal to font-extrabold)
- Line height (leading-none to leading-loose)
- Text alignment (text-left, text-center, text-right, text-justify)
- Text transform (uppercase, lowercase, capitalize)
- Text decoration (underline, line-through)
- Font style (italic)
- Letter spacing (tracking-tight, tracking-wide, tracking-wider)
- Colors (text-primary, text-secondary, text-success, text-danger, text-warning, text-info, text-white, text-black, text-gray-50 to text-gray-900)

### Colors & Backgrounds
- Background colors (bg-primary, bg-secondary, bg-success, bg-danger, bg-warning, bg-info, bg-white, bg-black, bg-gray-50 to bg-gray-900)
- Background position, size, repeat, attachment
- Border colors (border-primary, border-secondary, etc.)

### Borders
- Border width (border-0, border, border-2, border-4, border-8)
- Border radius (rounded-none, rounded-sm, rounded, rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded-full)
- Individual border sides (border-t-, border-r-, border-b-, border-l-)
- Individual rounded corners (rounded-t-, rounded-b-, rounded-l-, rounded-r-)

### Effects
- Shadows (shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl, shadow-2xl, shadow-inner, shadow-none)
- Opacity (opacity-0 to opacity-100 in increments of 5)

### Transitions & Animation
- Transition properties (transition-none, transition-all, transition-colors, transition-opacity, transition-shadow, transition-transform)
- Transition duration (duration-75 to duration-1000)
- Transition timing function (ease-linear, ease-in, ease-out, ease-in-out)
- Transform (rotate-0, rotate-45, rotate-90, rotate-180, rotate-270, scale-0 to scale-110, translate-x/y-0, translate-x/y-1/2, translate-x/y-full)

### Responsive Breakpoints
- Small screens (640px and up): `sm:`
- Medium screens (768px and up): `md:`
- Large screens (1024px and up): `lg:`
- Extra large screens (1280px and up): `xl:`

### Pre-built Components
- **Buttons**: btn, btn-primary, btn-secondary, btn-success, btn-danger, btn-outline, btn-sm, btn-lg, btn-block, btn-rounded
- **Inputs**: input, input-sm, input-lg, input-rounded
- **Labels**: label
- **Select**: select
- **Textarea**: textarea
- **Checkbox & Radio**: checkbox, radio
- **Form Group**: form-group
- **Cards**: card, card-body, card-header, card-footer, card-title
- **Alerts**: alert, alert-primary, alert-success, alert-danger, alert-warning, alert-info
- **Badges**: badge, badge-primary, badge-secondary, badge-success, badge-danger, badge-warning, badge-info
- **Navbar**: navbar, navbar-container, navbar-brand, navbar-nav, navbar-link
- **Container**: container (responsive max-width container)

### Utility Classes
- Cursor (cursor-pointer, cursor-default, cursor-not-allowed, cursor-wait)
- Pointer events (pointer-events-none, pointer-events-auto)
- Resize (resize-none, resize, resize-x, resize-y)
- User select (select-none, select-text, select-all, select-auto)
- Whitespace (whitespace-normal, whitespace-nowrap, whitespace-pre, whitespace-pre-line, whitespace-pre-wrap)
- Word break (break-normal, break-words, break-all)
- Truncate
- Vertical alignment (align-baseline, align-top, align-middle, align-bottom, align-text-top, align-text-bottom)
- Appearance (appearance-none)
- List style (list-none, list-disc, list-decimal)
- Table layout (table-auto, table-fixed)
- Caption side (caption-top, caption-bottom)
- Empty cells (empty-cells-show, empty-cells-hide)
- Outline (outline-none)
- Visibility (visible, invisible)

## 📖 Documentation

For complete documentation, examples, and component reference, please visit:

- **[Demo Page](https://mml9code.github.io/minima/)** - Live demo with all components
- **[Usage Examples](#usage-examples)** - Quick start examples
- **[Customization](#-customization)** - How to customize colors and styles

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Show Your Support

If you find Minima helpful, please give it a star on GitHub!

[**Star on GitHub ⭐**](https://github.com/MML9Code/minima/stargazers)

## 🙏 Acknowledgments

- Inspired by [Tailwind CSS](https://tailwindcss.com)
- Built with utility-first principles
- Made with ❤️ by [MML9Code](https://github.com/MML9Code)

## 📜 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.
