# Abbas Gandhi — Sales & Business Development Portfolio

A clean, modern, and high-performance personal portfolio website showcasing sales expertise, B2B travel partnerships, destination management, and career achievements.

---

## 🌐 Live URL & How GitHub Pages Works

### Can you have `https://username.github.io` without the repository name?
**YES, absolutely!**

GitHub Pages offers two types of sites:

| Type | Repository Name Required | Resulting Website URL |
| :--- | :--- | :--- |
| **User Site (Recommended)** | **`<username>.github.io`**<br>(e.g. `abbasgandhi5352.github.io`) | **`https://abbasgandhi5352.github.io`**<br>*(Clean URL, no repo name!)* |
| **Project Site** | Any other name<br>(e.g. `Abbas-Gandhi-Sales-Portfolio`) | `https://abbasgandhi5352.github.io/Abbas-Gandhi-Sales-Portfolio/` |

---

## 🚀 Step-by-Step Guide: Making Your Site Live at `https://abbasgandhi5352.github.io`

### Step 1: Rename Repository to Your User Site (to remove the repo name from the URL)
1. Go to your repository on GitHub: [github.com/abbasgandhi5352/Abbas-Gandhi-Sales-Portfolio](https://github.com/abbasgandhi5352/Abbas-Gandhi-Sales-Portfolio)
2. Click on the **Settings** tab (the gear icon on top right).
3. Under the **General** section, look at the **Repository name** field.
4. Change the name from `Abbas-Gandhi-Sales-Portfolio` to:
   ```text
   abbasgandhi5352.github.io
   ```
5. Click **Rename**.

*(Note: If you already have a repository named `abbasgandhi5352.github.io`, you can simply upload/push this code into that repository instead).*

---

### Step 2: Push the Updated Files to GitHub

Since we refactored the code into separated files (`assets/css/`, `assets/js/`, `assets/images/`, and clean `index.html`), push the latest code to GitHub:

Open your terminal in this project folder and run:
```bash
# 1. Update the remote URL if you renamed the repository:
git remote set-url origin https://github.com/abbasgandhi5352/abbasgandhi5352.github.io.git

# 2. Add all new files (including the assets directory and images):
git add .

# 3. Commit the changes:
git commit -m "Refactor into modular structure and fix profile picture path"

# 4. Push to main:
git push -u origin main
```

*(Alternative: If uploading manually via the GitHub website, make sure to drag and drop both `index.html` and the entire `assets` folder).*

---

### Step 3: Enable GitHub Pages

1. In your GitHub repository, click on **Settings**.
2. In the left sidebar, click on **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Choose `main` (or `master`).
   - **Folder**: Select `/(root)`.
4. Click **Save**.

---

### Step 4: Visit Your Live Site!

1. Wait 1 to 2 minutes for GitHub's automated build action to finish.
2. A banner will appear at the top of the **Pages** settings with your live link:
   ```text
   Your site is live at https://abbasgandhi5352.github.io/
   ```
3. Open the link in your browser or on your mobile device to verify that your portfolio, photo, and interactive navigation are live.

---

## 📁 Project Structure

```text
Abbas-Gandhi-Sales-Portfolio/
├── assets/
│   ├── css/
│   │   └── style.css            # Modular stylesheet (design tokens, layout, responsive design)
│   ├── js/
│   │   └── main.js              # Interactive scripts (mobile navigation, active nav, year, image fallback)
│   └── images/
│       ├── abbas-gandhi.jpg     # High-resolution profile portrait
│       └── resume-page-1.jpg    # Professional resume / CV document image
├── index.html                   # Semantic, accessible, and SEO-optimized HTML5 document
├── README.md                    # Detailed documentation and deployment guide
└── README.txt                   # Quick deployment instructions
```

---

## 💡 Local Preview (Optional)

You can preview locally at any time without any build process:
- **Direct open**: Double-click `index.html` in file explorer.
- **Local server**: Run `python -m http.server 8000` in terminal and visit `http://localhost:8000`.
