# Tick Mark Home Appliances – Static Website

A fully static website for **Tick Mark Home Appliances**, Kathmandu, Nepal.  
No server, no database required — just HTML, CSS, and vanilla JavaScript.

## 📁 File Structure

```
tickmark-static/
├── index.html          ← Home page (hero, featured deals, brands)
├── products.html       ← Products listing with category & price filters
├── product.html        ← Product detail page (linked via ?id=)
├── search.html         ← Search results page (linked via ?q=)
├── contact.html        ← Contact info + embedded Google Map
├── css/
│   └── style.css       ← All shared styles
└── js/
    └── data.js         ← Product catalogue + shared navbar/footer/helpers
```

## 🚀 Deploying to GitHub Pages

1. Create a new **public** repository on GitHub (e.g. `tickmark-website`).
2. Upload all files keeping the folder structure above.
3. Go to **Settings → Pages**.
4. Under *Source*, select **Deploy from a branch** → `main` → `/ (root)`.
5. Click **Save**. Your site will be live at:  
   `https://<your-username>.github.io/tickmark-website/`

## ➕ Adding / Editing Products

Open `js/data.js` and edit the `PRODUCTS` array.  
Each product object looks like:

```js
{
  id: 13,                                // unique number
  name: "Samsung 55\" QLED TV",
  brand: "Samsung", model: "Q60C",
  category: "Television",               // used for sidebar filters
  price: 120000,
  sale_price: 99000, on_sale: true,     // set on_sale: false if no deal
  show_on_home: true,                   // show in "Hot Deals" section on home page
  image_url: "https://...",             // any public image URL
  description: "Product description."
}
```

After saving the file, the change is immediately live on all pages — no build step needed.

## 🖼️ Using Your Own Images

Replace `image_url` values with paths to images stored in your repository, e.g.:

```js
image_url: "img/products/lg-tv-43.jpg"
```

Then add the image to an `img/products/` folder in your repo.

## 📞 Updating Contact Info

Edit `js/data.js` → `getFooter()` and `getNavbar()` for links,  
or directly in `contact.html` for phone/email/address.

---

Built with Bootstrap 5 · Bootstrap Icons · Vanilla JS
