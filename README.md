# 📚 StudyNook

StudyNook is a modern study room booking platform where users can browse available study rooms, book rooms, and manage their bookings. It provides secure authentication, room management, and a responsive user experience.

## 🚀 Live Demo

- 🌐 Frontend: https://studynook-client-bice.vercel.app/
- ⚙️ Backend: https://studynook-server-v2.vercel.app/

---

## ✨ Features

### 👤 Authentication
- Email & Password Authentication
- Google Sign In
- Protected Routes
- Secure Session Management using Better Auth

### 📖 Study Room Management
- Browse all study rooms
- View room details
- Search rooms
- Add new room (Authorized users)
- Edit room
- Delete room

### 📅 Booking System
- Book study rooms
- View My Bookings
- Cancel booking
- Booking validation

### 🎨 User Experience
- Fully Responsive Design
- Loading States
- Toast Notifications
- Beautiful UI with HeroUI
- Optimized Images
- Modern Layout

---

# 🛠 Tech Stack

## Frontend

- Next.js 16
- React 19
- Tailwind CSS
- HeroUI
- React Icons
- Better Auth Client

## Backend

- Node.js
- Express.js
- MongoDB
- Better Auth
- MongoDB Native Driver

## Deployment

- Vercel (Frontend)
- Vercel / Render (Backend)
- MongoDB Atlas

---

# 📂 Folder Structure

```
studyook/
│
├── app/
├── components/
├── lib/
├── public/
├── hooks/
├── utils/
├── middleware.js
└── ...
```

---

# 🔐 Environment Variables

## Frontend (.env)

```env
NEXT_PUBLIC_API_URL=
BETTER_AUTH_URL=
```

## Backend (.env)

```env
MONGODB_URI=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
CLIENT_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/studynook.git
```

## Frontend

```bash
cd studyook
npm install
npm run dev
```

## Backend

```bash
cd studyook-server
npm install
npm run dev
```

---

# 📦 Packages Used

### Frontend

- next
- react
- tailwindcss
- heroui
- react-icons
- better-auth
- motion

### Backend

- express
- mongodb
- better-auth
- cors
- dotenv

---

# 🔒 Authentication

- Better Auth
- Google OAuth
- Session Authentication
- Protected API Routes

---

# 📱 Responsive

- Mobile
- Tablet
- Laptop
- Desktop

---

# 🌍 Deployment

### Frontend

Hosted on **Vercel**

### Backend

Hosted on **Vercel / Render**

### Database

MongoDB Atlas

---

# 👨‍💻 Author

**Mehedi Hasan Shanto**

- GitHub: https://github.com/YOUR_GITHUB_USERNAME
- Portfolio: https://mhshanto-dev.vercel.app

---

# 📄 License

This project is licensed under the MIT License.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
