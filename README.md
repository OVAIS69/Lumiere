# Lumière - Timeless Luxury Jewellery

![Lumière Hero](/public/hero.png)

> *Elegance is Timeless.*

Lumière is a high-end e-commerce platform designed to offer an immersive, luxurious shopping experience for fine jewellery. Built with modern web technologies, it prioritizes aesthetics, smooth interactions, and a premium user journey.

## ✨ Features

- **Immersive Visuals**: Parallax effects, text reveals, and high-resolution editorial imagery.
- **Interactive Collections**: 
  - **3D Card Tilt**: Subtle, premium hover effects on product cards.
  - **Pan-and-Zoom**: Detailed inspection of jewellery pieces on product pages.
- **Responsive Design**: 
  - **Mobile Menu**: Elegant slide-down navigation.
  - **Filter Drawer**: Slide-over filtering experience on mobile devices.
- **Dynamic Routing**:
  - **Category Filtering**: URL-based filtering (`?category=rings`) for shareable links.
  - **Product pages**: SEO-friendly slugs for every item.
- **Maison & Bridal**: Specialized storytelling pages for brand heritage and bridal collections.
- **Deployment Ready**: Zero-config Vercel setup with dynamic favicons and environment handling.

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Variable Fonts (Playfair Display, Lato)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: MongoDB (Mongoose) - *Optional for frontend demo*

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/OVAIS69/Lumiere.git
    cd Lumiere
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:3000` to see the application.

## 🌍 Deployment

This project is optimized for [Vercel](https://vercel.com).

1.  Import this repository into Vercel.
2.  (Optional) Add your `MONGODB_URI` environment variable for backend features.
3.  Deploy!

For a **frontend-only demo**, you can skip the database connection. The app gracefully falls back to mock data.

## 💎 Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
│   ├── layout/       # Navbar, Footer
│   ├── product/      # Cards, Gallery, Info
│   ├── sections/     # Hero, Featured Collections
│   └── ui/           # Buttons, primitive UI elements
├── lib/              # Utilities, DB connection, Mock Data
└── models/           # Mongoose Schemas
```

---
© 2026 Lumière Jewellery. All rights reserved.
