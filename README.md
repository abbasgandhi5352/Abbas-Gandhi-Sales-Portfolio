# Abbas Gandhi — Sales & Business Development Portfolio

A clean, modern, and high-performance personal portfolio website showcasing sales expertise, B2B travel partnerships, destination management, and career history.

---

## 📁 Project Structure

The project has been separated into modular, maintainable files following industry best practices:

```text
Abbas-Gandhi-Sales-Portfolio/
├── assets/
│   ├── css/
│   │   └── style.css            # Modular stylesheet (design tokens, layout, responsive styles)
│   ├── js/
│   │   └── main.js              # Interactive scripts (mobile navigation, active nav, year, image fallback)
│   └── images/
│       ├── abbas-gandhi.jpg     # High-resolution profile portrait
│       └── resume-page-1.jpg    # Professional resume / CV document image
├── index.html                   # Semantic, accessible, and SEO-optimized HTML5 document
├── README.md                    # Project documentation & deployment guide
└── README.txt                   # Quick-start deployment notes
```

---

## 🚀 Key Features & Best Practices

1. **Separation of Concerns**:
   - **HTML (`index.html`)**: Semantic HTML5 markup, structured with clear sections (`hero`, `about`, `expertise`, `experience`, `destinations`, `education`, `leadership`, `contact`). Includes Open Graph and Twitter Card social meta tags.
   - **CSS (`assets/css/style.css`)**: Organized using CSS custom properties (`:root` variables) for quick theming, modern layout (CSS Grid & Flexbox), fluid typography (`clamp()`), and responsive breakpoints.
   - **JavaScript (`assets/js/main.js`)**: Clean ES6+ code handling accessible mobile menu toggle (`aria-expanded`, Escape key support), scroll detection, dynamic copyright year, and automatic image fallbacks.

2. **Image Handling & Fallback**:
   - The user portrait is neatly framed in `assets/images/abbas-gandhi.jpg` with responsive aspect ratio and CSS `object-fit: cover`.
   - Built-in error handling (`onerror` in HTML and fallback listener in JS) ensures the image loads seamlessly across various hosting environments and subpath deployments.
   - Includes a direct link in the hero section to view/download Abbas Gandhi's resume (`assets/images/resume-page-1.jpg`).

3. **Performance & Accessibility**:
   - Google Fonts preconnected for reduced latency.
   - Responsive design tested on mobile, tablet, and desktop screens.
   - WCAG-compliant color contrast, keyboard focus indicators (`:focus-visible`), and `prefers-reduced-motion` support.

---

## 💻 How to Run Locally

No build tools, bundlers, or Node.js required! You can open the site directly:

1. **Direct file open**:
   - Double-click [index.html](file:///d:/Abbas-Gandhi-Sales-Portfolio/index.html) in your file explorer to open it in any web browser.

2. **Using a local web server (Recommended)**:
   - Python:
     ```bash
     python -m http.server 8000
     ```
     Then navigate to `http://localhost:8000`.
   - VS Code: Right-click `index.html` and select **Open with Live Server**.

---

## 🌐 Deploying to GitHub Pages

1. Push or upload all repository files including the `assets/` folder to GitHub.
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Branch**, select `main` (or `master`) and folder `/(root)`.
4. Click **Save**. Your site will be published at `https://<your-username>.github.io/<repo-name>/`.
