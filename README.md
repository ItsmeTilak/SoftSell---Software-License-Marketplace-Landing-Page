# SoftSell - Software License Marketplace Landing Page

![SoftSell Logo](./public/logo.svg)

A fully responsive, single-page landing website built for SoftSell - a SaaS platform that helps users sell their unused software licenses.
[URL for Landing Page](https://soft-sell-software-license-marketplace-landing-page.vercel.app/)

## 📋 Features

- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **Modern UI**: Clean, professional interface with attention to detail
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Smooth Animations**: Section fade-ins, hover effects, and micro-interactions
- **Form Validation**: Client-side validation for contact form
- **Interactive Chat Widget**: Floating chat interface with toggle functionality

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Project Structure

```
/softsell-landing
├── public/                 # Static files
│   ├── logo.svg
│   └── testimonials/
│       ├── user1.jpg
│       └── user2.jpg
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/         # Reusable UI elements
│   │   ├── Button.tsx
│   │   ├── SectionTitle.tsx
│   │   └── ChatWidget.tsx
│   ├── sections/           # Full-width landing sections
│   │   ├── HeroSection.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   ├── types/
│   │   └── testimonial.ts
│   └── utils/              # Helper functions
│       └── validateEmail.ts
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
├── .eslintrc.json
├── package.json
└── next.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/softsell-landing.git
   cd softsell-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🚢 Deployment

This project is optimized for deployment on Vercel. For the best experience:

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and apply the correct build settings

Alternatively, you can deploy directly from the command line:

```bash
# Install Vercel CLI if you haven't already
npm install -g vercel

# Login to your Vercel account
vercel login

# Deploy
vercel
```
