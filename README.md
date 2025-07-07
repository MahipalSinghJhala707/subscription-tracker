
# 📦 Subscription Tracker Backend

A scalable Node.js + Express.js backend API for managing user subscriptions. Built with MongoDB, Mongoose, JWT authentication, and Nodemailer integration for email notifications. Designed with modular folder structure, middleware, and configuration layers for clean and maintainable code.

---

## 🚀 Features

- ✅ User Authentication (JWT)
- 📬 Subscription management (CRUD)
- 📧 Email notifications using Nodemailer
- 🛡️ Middleware-based error handling and route protection
- ⚙️ Environment-based config handling
- 🌐 Modular routing and controller structure

---

## 📁 Folder Structure

```
├── config/               # Env configs, mailer, Arcjet, Upstash configs
├── controller/           # Business logic handlers
├── database/             # MongoDB connection setup
├── middlewares/          # Auth, Arcjet, and error middlewares
├── models/               # Mongoose models
├── routes/               # Route declarations
├── utils/                # Email templates, helpers
├── .env.*                # Environment configs
├── app.js                # App entry point
```

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT
- **Email Service**: Nodemailer
- **Security**: Arcjet Middleware (rate-limiting / WAF)
- **Deployment Ready**: Environment-based setup

---

## 🔐 Environment Variables

Create `.env.development.local` and `.env.production.local`:

```env
PORT=5500
DB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_HOST=smtp.example.com
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

---

## 📦 Installation

```bash
git clone https://github.com/MahipalSinghJhala/subscription-tracker-backend.git
cd subscription-tracker-backend
npm install
npm run dev
```

---

## 🧪 API Endpoints

| Method | Endpoint                   | Description               |
|--------|----------------------------|---------------------------|
| POST   | `/api/v1/auth/signup`      | Register a new user       |
| POST   | `/api/v1/auth/signin`      | Login and get JWT         |
| GET    | `/api/v1/subscriptions`    | Get all subscriptions     |
| POST   | `/api/v1/subscriptions`    | Create a subscription     |
| PUT    | `/api/v1/subscriptions/:id`| Update subscription        |
| DELETE | `/api/v1/subscriptions/:id`| Delete subscription        |

---

## 📧 Email Templates

Located at: `utils/email-templates.js`

Emails are sent on successful subscription creation or user actions.

---

## 🧰 Scripts

```bash
npm run dev       # Run in development with nodemon
npm start         # Run production build
```

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

MIT License
