# 🐉 Dragon News

A full-stack news portal delivering category-based news browsing with secure, multi-provider authentication. Built with Next.js and BetterAuth.

🌐 **Live Site:** https://dragon-news-omega-lemon.vercel.app

## 🎯 Project Purpose

Dragon News is a category-driven news reading platform where users can browse articles by category, and sign in via email/password or social login to unlock full article details and company career listings — encouraging account creation while keeping category browsing open to everyone.

## 📸 Screenshots

### Homepage
[![Homepage](https://github.com/farhansm01/Dragon-News/raw/main/public/homepage.png)](/farhansm01/Dragon-News/blob/main/public/homepage.png)

## ✨ Key Features

### 🔐 Authentication
- Email & password registration and login
- Social login via Google and GitHub OAuth
- Secure session management with BetterAuth
- Client-side form validation with React Hook Form
- Middleware-protected routes — redirects unauthenticated users to login

### 📰 News Browsing
- Category-based navigation with sidebar
- Dynamic routing per category
- Breaking news ticker
- Custom loading states for smooth category transitions

### 📄 News Details (Protected)
- Full article view with title, image, and details
- Publish date, star rating, and total view count
- Quick navigation back to category

### 📡 News Data
- News content sourced live from the Programming Hero News API
- Dynamic category and article fetching at request time

### ℹ️ Company Pages
- About page — mission, core values, and team profiles
- Careers page (Protected) — open job listings with role, department, location, and perks

## 🗂️ Pages

**Public:** Home, Category, About, Login, Register
**Private:** News Details, Careers

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Better Auth](https://www.better-auth.com/) (email/password + Google & GitHub OAuth)
- [MongoDB](https://www.mongodb.com/) (via BetterAuth adapter)
- [React Hook Form](https://react-hook-form.com/)

## Dependencies

| Package          | Purpose                          |
| ---------------- | --------------------------------- |
| next              | React framework (App Router)      |
| react             | UI library                        |
| tailwindcss       | Utility-first CSS                 |
| better-auth       | Authentication (email + OAuth)    |
| mongodb           | Database driver for auth storage  |
| react-hook-form   | Form handling & validation        |
| react-icons       | Icon library                      |

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- Google OAuth credentials (Client ID & Secret)
- GitHub OAuth credentials (Client ID & Secret)

### Clone & Install

```bash
git clone https://github.com/farhansm01/Dragon-News
cd Dragon-News
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```
DB_URI=your_mongodb_uri
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

### Run Locally

```bash
npm run dev
```

## 🔒 Security

- Environment variables for all sensitive keys and OAuth secrets
- Middleware-based route protection using session validation
- Protected routes redirect unauthenticated users to `/login`

## Deployment

Deployed on [Vercel](https://vercel.com).

## 👨‍💻 Developer

**Farhan Sadique Mohee**
- AIUB — Computer Science & Engineering
- Full Stack Developer (MERN Stack)
