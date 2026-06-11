# Xico Games — Static Website

A complete, free-to-host static website for Xico Games built with pure HTML, CSS, and JavaScript.
Designed to be hosted on **GitHub Pages** at `https://USERNAME.github.io/`.

---

## 📁 File Structure

```
xico-games/
├── index.html            ← Home page
├── privacy-policy.html   ← Privacy Policy (AdMob + Firebase)
├── contact.html          ← Contact page
├── app-ads.txt           ← Ad network authorization (REQUIRED for AdMob)
├── css/
│   └── style.css         ← All styles
├── js/
│   └── main.js           ← Navigation, form, animations
└── README.md             ← This file
```

---

## 🚀 Step-by-Step: Publish to GitHub Pages

### Step 1 — Create a GitHub account
If you don't have one, sign up at https://github.com

---

### Step 2 — Create the repository

You have **two options** depending on what URL you want:

#### Option A — URL: `https://USERNAME.github.io/` (recommended)
1. Go to https://github.com/new
2. Name the repository **exactly**: `USERNAME.github.io`
   (Replace USERNAME with your actual GitHub username, e.g. `xicogames.github.io`)
3. Set visibility to **Public**
4. Do NOT check "Add a README file"
5. Click **Create repository**

#### Option B — URL: `https://USERNAME.github.io/xico-games/`
1. Go to https://github.com/new
2. Name the repository anything, e.g. `xico-games`
3. Set visibility to **Public**
4. Click **Create repository**

> ⚠️ For Option B, you must also update all internal links in the HTML files to add the subfolder prefix, or use root-relative paths. Option A is simpler.

---

### Step 3 — Upload your files

#### Method A: Drag & Drop (easiest, no Git required)
1. Open your new repository on GitHub
2. Click **"uploading an existing file"** link (shown on the empty repo page)
3. Drag and drop ALL files and folders from the `xico-games/` folder:
   - `index.html`
   - `privacy-policy.html`
   - `contact.html`
   - `app-ads.txt`
   - The entire `css/` folder
   - The entire `js/` folder
4. Scroll down, add a commit message like "Initial website upload"
5. Click **Commit changes**

> Note: GitHub's drag-and-drop uploader supports folders. Drag the `css` and `js` folders directly.

#### Method B: Git command line
```bash
# Clone the empty repository
git clone https://github.com/USERNAME/USERNAME.github.io.git
cd USERNAME.github.io

# Copy all website files into this folder
cp -r /path/to/xico-games/* .

# Stage, commit, and push
git add .
git commit -m "Initial website upload"
git push origin main
```

---

### Step 4 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (the gear icon in the top menu)
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** (or **master** if that's your default)
   - Folder: **/ (root)**
5. Click **Save**
6. Wait 1–3 minutes for the site to build
7. GitHub will show you a green banner with your live URL: `https://USERNAME.github.io/`

---

### Step 5 — Verify your site is live

Visit these URLs to confirm everything works:

| Page            | URL                                           |
|-----------------|-----------------------------------------------|
| Home            | `https://USERNAME.github.io/`                 |
| Privacy Policy  | `https://USERNAME.github.io/privacy-policy.html` |
| Contact         | `https://USERNAME.github.io/contact.html`     |
| app-ads.txt     | `https://USERNAME.github.io/app-ads.txt`      |

---

## 📋 app-ads.txt Location

### Why it matters
`app-ads.txt` tells ad networks (like Google AdMob) that your domain is authorized to serve ads for your apps. Without it, some ad networks may refuse to serve ads or flag your account.

### Where the file must be
The file **must** be in the **root** of your GitHub repository — at the same level as `index.html`. This makes it accessible at:

```
https://USERNAME.github.io/app-ads.txt
```

✅ This is where it is in this project. Do not move it into a subfolder.

### Before going live — edit app-ads.txt
Open `app-ads.txt` and replace `pub-XXXXXXXXXXXXXXXXX` with your actual AdMob Publisher ID:

1. Go to https://apps.admob.com
2. Click **Account** → **Account information**
3. Copy the **Publisher ID** (format: `pub-1234567890123456`)
4. Replace `pub-XXXXXXXXXXXXXXXXX` in `app-ads.txt` with your real Publisher ID

Example final line:
```
google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
```

Then commit and push the updated file.

---

## ✏️ Customization Checklist

Before going live, update the following:

| Item | Location | What to change |
|------|----------|----------------|
| Studio name | All HTML files | Replace "Xico Games" if different |
| Email addresses | All HTML files & contact.html | Replace `contact@xicogames.com`, `support@xicogames.com`, `privacy@xicogames.com` |
| GitHub username | All `<link rel="canonical">` and `og:url` tags | Replace `xicogames` with your username |
| AdMob Publisher ID | `app-ads.txt` | Replace `pub-XXXXXXXXXXXXXXXXX` |
| Game names & descriptions | `index.html` | Update the three game cards |
| Privacy Policy date | `privacy-policy.html` | Update "Last updated" date |
| Google Play / App Store links | All HTML files | Replace placeholder links with your real store pages |
| Stats (downloads, etc.) | `index.html` stats section | Update with real numbers |

---

## 📬 Contact Form

The contact form uses a `mailto:` link as a fallback — clicking Submit opens the user's default email client with the form fields pre-filled. This works without a server.

**For a real backend form**, consider these free options:
- **Formspree** (https://formspree.io) — free tier available, no server needed
- **Web3Forms** (https://web3forms.com) — completely free
- **EmailJS** (https://emailjs.com) — free tier, JavaScript-based

To use Formspree: replace the `<form>` action in `contact.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## 🔍 SEO Notes

- Each page has a unique `<title>`, `<meta name="description">`, and `<link rel="canonical">`
- Open Graph and Twitter Card meta tags are included
- Structured data (JSON-LD) is included on the home page
- The site is fully crawlable (no `noindex` tags on public pages)
- Update canonical URLs to match your real GitHub Pages domain

---

## 📱 App Store & Google Play Requirements

This website satisfies common requirements:

| Requirement | How it's met |
|-------------|-------------|
| Privacy Policy URL | `https://USERNAME.github.io/privacy-policy.html` |
| Privacy Policy covers AdMob | ✅ Full AdMob section included |
| Privacy Policy covers Firebase | ✅ Full Firebase Analytics section included |
| Children's privacy (COPPA) | ✅ Dedicated section in Privacy Policy |
| GDPR/CCPA mention | ✅ User rights sections included |
| app-ads.txt | ✅ Located at domain root |
| Contact information | ✅ Contact page + email addresses |

---

## 🛠️ Making Updates

After the initial upload, to update your site:
1. Edit files locally
2. Go to your GitHub repository
3. Click the file you want to update
4. Click the pencil icon (Edit)
5. Paste the new content
6. Click **Commit changes**

Or use Git:
```bash
git add .
git commit -m "Update privacy policy"
git push
```

Changes go live automatically within 1–2 minutes.

---

*Xico Games website — built with pure HTML, CSS & JS. No frameworks. No build tools.*
